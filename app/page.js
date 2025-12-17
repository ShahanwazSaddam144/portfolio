import Navbar from './components/Navbar';
import Home_ from './components/Home';
import Stack from './components/Stack';
import About from './components/About';
import Projects from './components/Projects';
import Offer from './components/offer';
import Services from './components/Services';

export default function Home() {
  return (
    <>
    <Navbar />
    <Home_ />
    <Stack />
    <About />
    <Projects />
    <Services />
    <Offer />
    </>
  );
}
