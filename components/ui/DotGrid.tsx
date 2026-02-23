"use client";

import React, { useEffect, useRef } from 'react';

interface DotGridProps {
    opacity?: number;
    className?: string;
}

export const DotGrid: React.FC<DotGridProps> = ({ opacity = 0.05, className = "" }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let width = 0;
        let height = 0;
        let animationFrameId: number;

        const setSize = () => {
            if (!canvas.parentElement) return;
            width = canvas.parentElement.clientWidth;
            height = canvas.parentElement.clientHeight;
            canvas.width = width;
            canvas.height = height;
        };

        setSize();

        const resizeObserver = new ResizeObserver(() => {
            setSize();
        });
        if (canvas.parentElement) {
            resizeObserver.observe(canvas.parentElement);
        }

        const mouse = { x: -1000, y: -1000 };
        const handleMouseMove = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            mouse.x = e.clientX - rect.left;
            mouse.y = e.clientY - rect.top;
        };

        // Bind to window to capture mouse movements across the whole viewport overlaying the section
        window.addEventListener('mousemove', handleMouseMove);

        const spacing = 25;
        const baseRadius = 1;
        const maxRadius = 3;
        const effectRadius = 150;

        const draw = () => {
            ctx.clearRect(0, 0, width, height);

            const dotColor = `rgba(255, 255, 255, ${opacity})`;
            const activeColor = `rgba(255, 255, 255, ${Math.min(opacity * 3, 1)})`;

            ctx.fillStyle = dotColor;

            for (let x = spacing / 2; x < width; x += spacing) {
                for (let y = spacing / 2; y < height; y += spacing) {
                    const dx = x - mouse.x;
                    const dy = y - mouse.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    let radius = baseRadius;

                    if (distance < effectRadius) {
                        const scale = 1 - distance / effectRadius;
                        radius = baseRadius + (maxRadius - baseRadius) * scale;
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
            resizeObserver.disconnect();
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, [opacity]);

    return (
        <canvas
            ref={canvasRef}
            className={`absolute inset-0 z-0 pointer-events-none ${className}`}
        />
    );
};
