"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const socialLinks = [
  { name: "GitHub", href: "https://github.com/MatheusCampagnolo", icon: Github },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/messiasmatheus/", icon: Linkedin },
  { name: "Email", href: "mailto:campagno.matheus@gmail.com", icon: Mail },
];

interface FooterProps {
  hideContact?: boolean;
}

export function Footer({ hideContact = false }: FooterProps) {
  return (
    <footer id="contact" className={`relative border-t border-white/10 bg-black text-center ${hideContact ? 'py-8' : 'py-24'}`}>
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />

      <div className="container relative z-10 mx-auto px-4">
        {!hideContact && (
          <>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl mb-6">
                Vamos trabalhar juntos?
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-slate-400">
                Estou sempre aberto a novos desafios e colaborações. Se você tem um projeto em mente ou quer apenas bater um papo sobre tecnologia, entre em contato.
              </p>
            </motion.div>

            <div className="flex justify-center gap-6 mb-12">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="flex h-14 w-14 items-center justify-center rounded-full bg-white/5 border border-white/10 text-white hover:bg-white hover:text-black transition-all duration-300"
                >
                  <link.icon className="h-6 w-6" />
                  <span className="sr-only">{link.name}</span>
                </motion.a>
              ))}
            </div>
          </>
        )}

        <div className="text-sm text-slate-500">
          &copy; {new Date().getFullYear()} Matheus Messias. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
