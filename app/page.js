import Navbar from './components/Navbar';
import Home_ from './components/Home';
import Stack from './components/Stack';
import Projects from './components/Projects';
import Offer from './components/offer';
import Services from './components/Services';

export default function Home() {
  return (
    <>
    <Navbar />
    <Home_ />
    <Stack />
    <Projects />
    <Services />
    <Offer />
    </>
  );
}
