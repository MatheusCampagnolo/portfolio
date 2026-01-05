import React, { useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

export const DotGrid: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const { theme } = useTheme();

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let width = window.innerWidth;
        let height = window.innerHeight;
        let animationFrameId: number;

        const setSize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        };
        setSize();
        window.addEventListener('resize', setSize);

        // Mouse state
        const mouse = { x: -1000, y: -1000 };
        const handleMouseMove = (e: MouseEvent) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        };
        window.addEventListener('mousemove', handleMouseMove);

        // Grid config
        const spacing = 25;
        const baseRadius = 1; // "pontos minúsculos"
        const maxRadius = 3;
        const effectRadius = 150;

        const draw = () => {
            ctx.clearRect(0, 0, width, height);

            // Color based on theme
            const dotColor = theme === 'dark' ? 'rgba(255, 255, 255, 0.15)' : 'rgba(0, 0, 0, 0.15)';
            const activeColor = theme === 'dark' ? 'rgba(255, 255, 255, 0.4)' : 'rgba(0, 0, 0, 0.4)';

            ctx.fillStyle = dotColor;

            for (let x = spacing / 2; x < width; x += spacing) {
                for (let y = spacing / 2; y < height; y += spacing) {
                    // Distance to mouse
                    const dx = x - mouse.x;
                    const dy = y - mouse.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    let radius = baseRadius;

                    // Interaction
                    if (distance < effectRadius) {
                        const scale = 1 - distance / effectRadius;
                        radius = baseRadius + (maxRadius - baseRadius) * scale;
                        // Lerp color/alpha somewhat
                        ctx.fillStyle = activeColor;
                    } else {
                        ctx.fillStyle = dotColor;
                    }

                    ctx.beginPath();
                    ctx.arc(x, y, radius, 0, Math.PI * 2);
                    ctx.fill();
                }
            }
            animationFrameId = requestAnimationFrame(draw);
        };

        draw();

        return () => {
            window.removeEventListener('resize', setSize);
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, [theme]);

    // Mobile interaction matches desktop if touch inputs map to mouse events, otherwise static.

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 z-0 pointer-events-none"
        />
    );
};
