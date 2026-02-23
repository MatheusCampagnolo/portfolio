# Matheus Messias - Full Stack Portfolio

Este é o repositório do meu portfólio pessoal e profissional acadêmico, construído com foco máximo em performance, experiência de usuário (UX/UI) avançada e escalabilidade. O projeto reflete minha expertise em Engenharia de Software e Design Front-End Premium.

## 🚀 Tecnologias e Arquitetura

O projeto foi desenvolvido sob a arquitetura de roteamento multi-page (App Router) moderna, garantindo fluidez semelhante a uma SPA, mas com SEO otimizado.

- **Framework Core:** [Next.js 16 (App Router)](https://nextjs.org/) + React 19
- **Linguagem:** TypeScript (Strict Mode)
- **Estilização:** Tailwind CSS v4 + Tailwind Merge + clsx
- **Animações (Micro-interações):** Framer Motion
- **Ícones:** Lucide React & React Icons
- **Tipografia:** Inter (via `next/font`)

## 🎨 Funcionalidades de Destaque

- **Design Premium ("Glassmorphism"):** Uso inteligente de transparências, bordas translúcidas e fades, garantindo forte harmonia de contraste no modo escuro.
- **Transições Inter-Rotas Dinâmicas:** Animação sofisticada da "Pílula Mágica" no `<Navbar />` controlada pelo estado de rota ativa (Framer Motion `layoutId`).
- **Performance Optimizada:** Listagem condicional (expansão) do grid de projetos, Lazy Loading, SSR mínimo onde exigido e Otimização Nativa de Imagens (`next/image`).
- **Responsive-First:** Todas as quebras de layout (Grid, flexboxes de Timeline, menus laterais ocultos) planejadas detalhadamente desde resoluções de Desktop em 4K até Mobile.

## 💻 Como Rodar Localmente

O projeto exige o Node.js v18 ou mais recente instalado. É recomendada a versão LTS atual.

1. Instale as dependências essenciais:
   ```bash
   npm install
   ```

2. Inicie o Servidor de Desenvolvimento:
   ```bash
   npm run dev
   ```

3. Acesse em seu navegador via `http://localhost:3000`.

## 📦 Build para Produção
Este projeto está perfeitamente lintado e pronto para implantação moderna na [Vercel](https://vercel.com) ou provedores similares via CLI direta.

1. Build Otimizado Estático:
   ```bash
   npm run build
   ```
2. Caso opte por servir o build final localmente:
   ```bash
   npm start
   ```

---
*Desenhado e estruturado por [Matheus Messias](https://github.com/MatheusCampagnolo)*.
