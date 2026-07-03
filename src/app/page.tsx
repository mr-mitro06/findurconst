import { Hero } from "@/components/home/Hero";
import { Navbar } from "@/components/layout/Navbar";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background overflow-hidden selection:bg-white/20 flex flex-col">
      <Navbar />
      <Hero />
    </main>
  );
}
