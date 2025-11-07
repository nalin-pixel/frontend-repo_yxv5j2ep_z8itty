import Spline from '@splinetool/react-spline';
import { ArrowRight, CalendarDays, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative h-[90vh] w-full text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/7m4PRZ7kg6K1jPfF/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80 pointer-events-none" />
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-start justify-center px-6">
        <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold tracking-wide">
          <span className="text-teal-300">Economics × Innovation × Culture</span>
        </p>
        <h1 className="text-4xl font-extrabold leading-tight sm:text-6xl">
          ECONVERGE 2025
        </h1>
        <p className="mt-3 text-lg sm:text-xl text-white/90 max-w-2xl">
          Where Ideas, Innovation, and Economics Collide.
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-white/90">
          <span className="inline-flex items-center gap-2"><CalendarDays className="h-4 w-4 text-yellow-300" /> March 7–8, 2025</span>
          <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4 text-teal-300" /> St. Joseph’s University, Bengaluru</span>
        </div>
        <div className="mt-8 flex items-center gap-3">
          <a href="#register" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-teal-300 to-yellow-300 px-5 py-3 font-semibold text-black shadow hover:brightness-110">
            Register Now <ArrowRight className="h-4 w-4" />
          </a>
          <a href="#events" className="rounded-full border border-white/20 px-5 py-3 font-medium hover:bg-white/10">Explore Events</a>
        </div>
      </div>
    </section>
  );
}
