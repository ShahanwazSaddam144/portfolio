import Navbar from './components/Navbar';
import Home_ from './components/Home';
import Stack from './components/Stack';
import About from './About/About';
import Projects from './components/Projects';
import Services from './components/Services';
import FAQ from './components/FAQ';
import Hackathon from './components/Hackathon';
import GithubSection from './components/GithubSection';
import Contact from './Contact/Contact';

export default function Home() {
  return (
    <>
    <Navbar />
    <Home_ />
    <GithubSection />
    <Stack />
    <About />
    <Projects />
    <Hackathon />
    <Services />
    <FAQ />
    <Contact />
    </>
  );
}
