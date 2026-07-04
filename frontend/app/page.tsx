import Navbar from "@/components/common/Navbar";
import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8F7F4]">
      <Navbar />
      <Hero />
      <Features />
    </main>
  );
}