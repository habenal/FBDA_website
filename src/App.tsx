import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import CoreValues from './components/CoreValues';
import StrategicObjectives from './components/StrategicObjectives';
import PillarsOfImpact from './components/PillarsOfImpact';
import Team from './components/Team';
import Statement from './components/Statement';
import Contact from './components/Contact';
import Reveal from './components/Reveal';

export default function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <Reveal><About /></Reveal>
      <Reveal><CoreValues /></Reveal>
      <Reveal><StrategicObjectives /></Reveal>
      <Reveal><PillarsOfImpact /></Reveal>
      <Reveal><Team /></Reveal>
      <Reveal><Statement /></Reveal>
      <Reveal><Contact /></Reveal>
    </div>
  );
}
