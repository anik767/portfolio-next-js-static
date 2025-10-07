import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTopButton from './components/BackToTopButton';

export default function Home() {
  return (
    <div className="min-h-screen">
      <main>
        <Hero />
        <About />
        <Services />
        <Experience />
        <Education />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <BackToTopButton />
    </div>
  );
}