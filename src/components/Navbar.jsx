import { useState, useEffect } from 'react';
import { Menu, X, Rocket, Calendar, MapPin } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Events', href: '#events' },
    { label: 'Register', href: '#register' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${scrolled ? 'backdrop-blur-md bg-black/40 shadow-lg' : 'bg-transparent'}`}>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <Rocket className="h-6 w-6 text-teal-400" />
            <span className="font-bold tracking-tight text-white">ECONVERGE 2025</span>
          </a>
          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm font-medium text-white/90 hover:text-teal-300 transition-colors">
                {item.label}
              </a>
            ))}
            <a href="#register" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-teal-400 to-yellow-400 px-4 py-2 text-sm font-semibold text-black shadow hover:brightness-110">
              <Calendar className="h-4 w-4" /> Register
            </a>
          </div>
          <button onClick={() => setOpen(!open)} className="md:hidden text-white p-2">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>
      {open && (
        <div className="md:hidden bg-black/80 backdrop-blur-lg border-t border-white/10">
          <div className="mx-auto max-w-7xl px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="block text-white/90 hover:text-teal-300">
                {item.label}
              </a>
            ))}
            <a href="#register" onClick={() => setOpen(false)} className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-teal-400 to-yellow-400 px-4 py-2 text-sm font-semibold text-black shadow">
              <MapPin className="h-4 w-4" /> Register
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
