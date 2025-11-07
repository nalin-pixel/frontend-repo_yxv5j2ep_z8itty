import { ExternalLink, ArrowRightCircle } from 'lucide-react';

const events = [
  { name: 'Split or Steal', desc: 'A trust and strategy challenge inspired by game theory.', link: '#register' },
  { name: 'The Great Indian Auction', desc: 'Bid, bluff, and build your empire.', link: '#register' },
  { name: 'Policy Paradox', desc: 'Craft and defend policy under pressure.', link: '#register' },
  { name: 'EconQuest', desc: 'The ultimate quiz for the sharpest minds.', link: '#register' },
  { name: 'Bizonomics', desc: 'Solve real-world business dilemmas.', link: '#register' },
  { name: 'EconoPitch', desc: 'Pitch ideas for economic impact.', link: '#register' },
  { name: 'Memeconomics', desc: 'Economics through memes.', link: '#register' },
  { name: 'City Builders Auction', desc: 'Construct your dream economy.', link: '#register' },
  { name: 'The Invisible Hand', desc: 'Street play with an economic twist.', link: '#register' },
  { name: 'EconArt', desc: 'Poster design on sustainability & innovation.', link: '#register' },
];

export default function Events() {
  return (
    <section id="events" className="relative bg-gradient-to-b from-slate-950 to-stone-900 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-extrabold sm:text-4xl">Events Showcase</h2>
            <p className="mt-2 text-white/70 max-w-2xl">
              From simulations to strategy, every event is built to test wit, skill, and creativity.
            </p>
          </div>
          <a href="#register" className="hidden sm:inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-teal-300 to-yellow-300 px-4 py-2 font-semibold text-black shadow hover:brightness-110">
            Register <ExternalLink className="h-4 w-4" />
          </a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((e) => (
            <div key={e.name} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:bg-white/10">
              <div className="absolute right-[-40%] top-[-40%] h-56 w-56 rounded-full bg-gradient-to-tr from-teal-400/30 to-yellow-400/30 blur-3xl" />
              <h3 className="relative z-10 text-xl font-bold text-teal-200">{e.name}</h3>
              <p className="relative z-10 mt-2 text-white/80">{e.desc}</p>
              <div className="relative z-10 mt-4 flex items-center gap-3">
                <a href={e.link} className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm font-semibold hover:bg-white/10">
                  Learn More
                </a>
                <a href={e.link} className="inline-flex items-center gap-2 text-teal-300 hover:text-yellow-300">
                  Register <ArrowRightCircle className="h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
