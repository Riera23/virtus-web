import './styles/main.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Methodology from './components/Methodology';
import Publications from './components/Publications';
import Contact from './components/Contact';
import Team from './pages/Team';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Methodology />
        <Publications />
        <Team />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
