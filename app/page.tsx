import About from "@/components/About";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main>
      <Hero />
      <About/>
      {/* Other sections will go here */}
      <div className="h-[3000px]"></div>
    </main>
  );
}
