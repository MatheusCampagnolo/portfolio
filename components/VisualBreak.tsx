'use client';

import { cn } from '@/lib/utils';

export function VisualBreak() {
	return (
		<section className="hidden md:block relative w-full bg-black py-32">
			{/* Radial glow */}
			<div
				aria-hidden="true"
				className={cn(
					'pointer-events-none absolute inset-0 flex items-center justify-center',
				)}
			>
				<div
					className={cn(
						'h-[120vmin] w-[120vmin] rounded-full',
						'bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.15),transparent_60%)]',
						'blur-[30px]',
					)}
				/>
			</div>

			{/* Quote text */}
			<div className="relative z-10 flex items-center justify-center">
				<h2 className="text-center text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-500">
					<span className="block">&ldquo;Primeiro, resolva o problema.</span>
					<span className="block">Depois, escreva o código.&rdquo;</span>
					<br />
					<span className="mt-4 block">– John Johnson</span>
				</h2>
			</div>

			{/* Bottom fade — blends glow into the black section below */}
			<div
				aria-hidden="true"
				className="pointer-events-none absolute bottom-0 left-0 w-full h-40 bg-gradient-to-b from-transparent to-black"
			/>
		</section>
	);
}
