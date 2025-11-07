import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Events from './components/Events';
import Footer from './components/Footer';
import { About, Schedule, Registration, Gallery, TeamSponsors, Contact } from './components/Sections';
import { useEffect, useState } from 'react';

function Countdown() {
  const festDate = new Date('2025-03-07T09:30:00+05:30').getTime();
  const [timeLeft, setTimeLeft] = useState(festDate - Date.now());

  useEffect(() => {
    const t = setInterval(() => setTimeLeft(festDate - Date.now()), 1000);
    return () => clearInterval(t);
  }, []);

  const clamp = (n) => (n > 0 ? n : 0);
  const days = clamp(Math.floor(timeLeft / (1000 * 60 * 60 * 24)));
  const hours = clamp(Math.floor((timeLeft / (1000 * 60 * 60)) % 24));
  const minutes = clamp(Math.floor((timeLeft / (1000 * 60)) % 60));
  const seconds = clamp(Math.floor((timeLeft / 1000) % 60));

  return (
    <div className="relative -mt-16 z-20 mx-auto max-w-5xl rounded-2xl border border-white/10 bg-white/5 px-6 py-5 text-white backdrop-blur">
      <div className="grid grid-cols-4 text-center">
        <div><div className="text-3xl font-extrabold">{days}</div><div className="text-xs uppercase tracking-widest text-white/70">Days</div></div>
        <div><div className="text-3xl font-extrabold">{hours}</div><div className="text-xs uppercase tracking-widest text-white/70">Hours</div></div>
        <div><div className="text-3xl font-extrabold">{minutes}</div><div className="text-xs uppercase tracking-widest text-white/70">Mins</div></div>
        <div><div className="text-3xl font-extrabold">{seconds}</div><div className="text-xs uppercase tracking-widest text-white/70">Secs</div></div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <Hero />
      <Countdown />
      <About />
      <Events />
      <Schedule />
      <Registration />
      <Gallery />
      <TeamSponsors />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
