'use client';

import React from 'react';
import type { ComponentProps, ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Github, Linkedin, Mail, Code2, Terminal } from 'lucide-react';

interface FooterLink {
	title: string;
	href: string;
	icon?: React.ComponentType<{ className?: string }>;
}

interface FooterSection {
	label: string;
	links: FooterLink[];
}

const footerLinks: FooterSection[] = [
	{
		label: 'Navegação',
		links: [
			{ title: 'Home', href: '/' },
			{ title: 'Projetos', href: '/projetos' },
			{ title: 'Sobre Mim', href: '/sobre' },
			{ title: 'Contato', href: '/contato' },
		],
	},
	{
		label: 'Tecnologias',
		links: [
			{ title: 'React & Next.js', href: '/projetos' },
			{ title: 'Node.js & Express', href: '/projetos' },
			{ title: 'Java & Spring Boot', href: '/projetos' },
			{ title: 'Python & IA', href: '/projetos' },
		],
	},
	{
		label: 'Social',
		links: [
			{ title: 'GitHub', href: 'https://github.com/MatheusCampagnolo', icon: Github },
			{ title: 'LinkedIn', href: 'https://www.linkedin.com/in/messiasmatheus/', icon: Linkedin },
			{ title: 'Email', href: 'mailto:campagno.matheus@gmail.com', icon: Mail },
		],
	},
];

interface FooterProps {
  hideContact?: boolean;
}

export function Footer({ hideContact = false }: FooterProps) {
	return (
		<footer className="relative w-full flex flex-col items-center justify-center border-t border-white/10 bg-black px-6 py-12 lg:py-16 overflow-hidden">
			<div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px] pointer-events-none" />
			<div className="bg-indigo-500/20 absolute top-0 right-1/2 left-1/2 h-px w-1/3 -translate-x-1/2 -translate-y-1/2 rounded-full blur-xl" />

			<div className="container max-w-6xl mx-auto relative z-10">
				{!hideContact && (
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="mb-16 text-center"
					>
						<h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl mb-6">
							Vamos trabalhar juntos?
						</h2>
						<p className="mx-auto max-w-2xl text-lg text-slate-400">
							Estou sempre aberto a novos desafios e colaborações. Se você tem um projeto em mente ou quer apenas bater um papo sobre tecnologia, entre em contato.
						</p>
					</motion.div>
				)}

				<div className="grid w-full gap-8 xl:grid-cols-3 xl:gap-8 pt-8 border-t border-white/5">
					<AnimatedContainer className="space-y-4">
						<div className="flex items-center gap-2 text-white">
							<Terminal className="size-8 text-indigo-400" />
							<span className="text-xl font-bold tracking-tight">Matheus Messias</span>
						</div>
						<p className="text-slate-400 mt-8 text-sm md:mt-0 max-w-xs">
							Engenheiro de Software Full Stack transformando lógica bruta em experiências digitais fluidas e impactantes.
						</p>
						<p className="text-slate-500 text-xs mt-4">
							© {new Date().getFullYear()} Matheus Messias. Todos os direitos reservados.
						</p>
					</AnimatedContainer>

					<div className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-3 xl:col-span-2 xl:mt-0">
						{footerLinks.map((section, index) => (
							<AnimatedContainer key={section.label} delay={0.1 + index * 0.1}>
								<div className="mb-10 md:mb-0">
									<h3 className="text-sm font-semibold text-white">{section.label}</h3>
									<ul className="text-slate-400 mt-4 space-y-3 text-sm">
										{section.links.map((link) => (
											<li key={link.title}>
												<a
													href={link.href}
													target={link.href.startsWith('http') ? '_blank' : '_self'}
													rel={link.href.startsWith('http') ? 'noopener noreferrer' : ''}
													className="hover:text-indigo-400 inline-flex items-center transition-all duration-300 group"
												>
													{link.icon && <link.icon className="me-2 size-4 group-hover:scale-110 transition-transform" />}
													{link.title}
												</a>
											</li>
										))}
									</ul>
								</div>
							</AnimatedContainer>
						))}
					</div>
				</div>
			</div>
		</footer>
	);
}

type ViewAnimationProps = {
	delay?: number;
	className?: ComponentProps<typeof motion.div>['className'];
	children: ReactNode;
};

function AnimatedContainer({ className, delay = 0.1, children }: ViewAnimationProps) {
	const shouldReduceMotion = useReducedMotion();

	if (shouldReduceMotion) {
		return <div className={className}>{children}</div>;
	}

	return (
		<motion.div
			initial={{ filter: 'blur(4px)', translateY: -8, opacity: 0 }}
			whileInView={{ filter: 'blur(0px)', translateY: 0, opacity: 1 }}
			viewport={{ once: true }}
			transition={{ delay, duration: 0.8 }}
			className={className}
		>
			{children}
		</motion.div>
	);
}
