import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Stack } from "@/components/Stack";
import { Process } from "@/components/Process";
import { Projects } from "@/components/Projects";
import { Footer } from "@/components/Footer";

import { Analytics } from '@vercel/analytics/next';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black">
      <Navbar />
      <Hero />
      <Stack />
      <Process />
      <Projects />
      <Footer />
      <Analytics />
    </main>
  );
}
