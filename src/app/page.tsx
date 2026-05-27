import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Impact } from "@/components/sections/Impact";
import { Videos } from "@/components/sections/Videos";
import { BlogPreview } from "@/components/sections/BlogPreview";
import { BookSession } from "@/components/sections/BookSession";
import { Collaborate } from "@/components/sections/Collaborate";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Impact />
        <Videos />
        <BlogPreview />
        <BookSession />
        <Collaborate />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
