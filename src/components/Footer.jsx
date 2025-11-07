export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h4 className="text-lg font-semibold">ECONVERGE 2025</h4>
            <p className="mt-2 text-sm text-white/70">Organized by The Economics Forum, St. Joseph’s University, Bengaluru.</p>
          </div>
          <div>
            <h5 className="font-semibold">Quick Links</h5>
            <ul className="mt-3 space-y-2 text-sm text-white/80">
              <li><a href="#events" className="hover:text-teal-300">Events</a></li>
              <li><a href="#register" className="hover:text-teal-300">Register</a></li>
              <li><a href="#gallery" className="hover:text-teal-300">Gallery</a></li>
              <li><a href="#contact" className="hover:text-teal-300">Contact</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold">Social</h5>
            <ul className="mt-3 space-y-2 text-sm text-white/80">
              <li><a href="https://instagram.com/econforum.sju" target="_blank" rel="noreferrer" className="hover:text-teal-300">Instagram @econforum.sju</a></li>
              <li><a href="#" className="hover:text-teal-300">View Brochure</a></li>
              <li><a href="#" className="hover:text-teal-300">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold">Contact</h5>
            <p className="mt-3 text-sm text-white/80">Email: econforum@sju.edu.in</p>
            <p className="text-sm text-white/80">Bengaluru, India</p>
          </div>
        </div>
        <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-white/50">
          © {new Date().getFullYear()} The Economics Forum, SJU. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
