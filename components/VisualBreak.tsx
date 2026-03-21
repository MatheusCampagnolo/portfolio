'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import Lenis from '@studio-freight/lenis'
import { ZoomParallax } from "@/components/ui/zoom-parallax";

export function VisualBreak() {

	React.useEffect(() => {
		const lenis = new Lenis()

		function raf(time: number) {
			lenis.raf(time)
			requestAnimationFrame(raf)
		}

		requestAnimationFrame(raf)
	}, [])

	const images = [
		{
			src: '/projects/kaelum.png',
			alt: 'Kaelum Framework',
		},
		{
			src: '/projects/photo_model.png',
			alt: 'Projeto Fotografia',
		},
		{
			src: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80',
			alt: 'Código',
		},
		{
			src: '/projects/techsentinel.png',
			alt: 'Projeto Tech Sentinel',
		},
		{
			src: '/projects/odonto-model.png',
			alt: 'Projeto OdontoLumi',
		},
		{
			src: '/projects/pizza_model.png',
			alt: 'Projeto Pizzaria',
		},
		{
			src: '/projects/sushi.png',
			alt: 'Projeto Sushi',
		},
	];

	return (
		<section className="hidden md:block min-h-screen w-full bg-black">
			<div className="relative flex h-[50vh] items-center justify-center">
				<div
					aria-hidden="true"
					className={cn(
						'pointer-events-none absolute -top-1/2 left-1/2 h-[120vmin] w-[120vmin] -translate-x-1/2 rounded-full',
						'bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.15),transparent_50%)]',
						'blur-[30px]',
					)}
				/>
				<h2 className="text-center text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-500">
					Inovação
				</h2>
			</div>
			<ZoomParallax images={images} />
			<div className="h-[20vh]" />
		</section>
	);
}
