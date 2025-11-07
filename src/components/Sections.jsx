import { Users, CalendarDays, Clock, School, Image, Phone, Mail, FileText, QrCode } from 'lucide-react';
import { useEffect, useState } from 'react';

function About() {
  return (
    <section className="bg-white py-16" id="about">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl font-extrabold text-slate-900">About the Fest</h2>
        <p className="mt-4 max-w-3xl text-lg text-slate-600">
          ECONVERGE 2025 brings together students from across institutions to debate, design, and discover the forces shaping our economy. From simulations to strategy, each event is crafted to test wit, skill, and creativity.
        </p>
      </div>
    </section>
  );
}

function Schedule() {
  return (
    <section className="bg-gradient-to-b from-teal-50 to-yellow-50 py-16" id="schedule">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8 flex items-center gap-3">
          <CalendarDays className="h-6 w-6 text-teal-600" />
          <h2 className="text-3xl font-extrabold text-slate-900">Schedule</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-bold text-teal-700">Day 1</h3>
            <ul className="mt-4 space-y-2 text-slate-700">
              <li>09:30 – Inauguration & Welcome</li>
              <li>10:30 – EconQuest • Memeconomics</li>
              <li>13:30 – Policy Paradox • EconArt</li>
              <li>16:00 – Split or Steal</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-bold text-teal-700">Day 2</h3>
            <ul className="mt-4 space-y-2 text-slate-700">
              <li>09:30 – The Great Indian Auction</li>
              <li>12:00 – City Builders Auction</li>
              <li>14:30 – Bizonomics • EconoPitch</li>
              <li>17:00 – The Invisible Hand • Valedictory</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Registration() {
  return (
    <section id="register" className="bg-slate-950 py-16 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
          <Users className="h-6 w-6 text-teal-300" />
          <h2 className="text-3xl font-extrabold">Registration</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <a href="#" className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10">
            <h3 className="text-xl font-bold">Register Your College Delegation</h3>
            <p className="mt-2 text-white/80">One-stop form for faculty coordinators and team leads.</p>
            <p className="mt-3 inline-block rounded-full bg-gradient-to-r from-teal-300 to-yellow-300 px-4 py-2 font-semibold text-black group-hover:brightness-110">Open Form</p>
          </a>
          <a href="#" className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10">
            <h3 className="text-xl font-bold">Individual Event Sign-Up</h3>
            <p className="mt-2 text-white/80">Register for your favorite events. Limited slots.</p>
            <p className="mt-3 inline-block rounded-full bg-gradient-to-r from-teal-300 to-yellow-300 px-4 py-2 font-semibold text-black group-hover:brightness-110">Choose Events</p>
          </a>
        </div>
        <p className="mt-6 text-sm text-white/70">We support Google Forms / Airtable links – shareable soon.</p>
      </div>
    </section>
  );
}

function Gallery() {
  const images = [
    'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1515169067865-5387ec356754?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1502786129293-79981df4e689?q=80&w=1200&auto=format&fit=crop',
  ];
  return (
    <section id="gallery" className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8 flex items-center gap-3">
          <Image className="h-6 w-6 text-teal-600" />
          <h2 className="text-3xl font-extrabold text-slate-900">Gallery</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {images.map((src, i) => (
            <img key={i} src={src} alt="Economics Forum highlights" className="h-52 w-full rounded-xl object-cover" />
          ))}
        </div>
      </div>
    </section>
  );
}

function TeamSponsors() {
  return (
    <section className="bg-gradient-to-b from-white to-teal-50 py-16" id="team">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h3 className="text-2xl font-bold text-slate-900">Meet the Team</h3>
            <ul className="mt-4 space-y-2 text-slate-700">
              <li>Faculty Coordinator • Student Head</li>
              <li>Media Team • Organizing Committee</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-slate-900">Sponsors & Partners</h3>
            <div className="mt-4 grid grid-cols-3 gap-4">
              <div className="h-16 rounded-xl border border-slate-200 bg-white" />
              <div className="h-16 rounded-xl border border-slate-200 bg-white" />
              <div className="h-16 rounded-xl border border-slate-200 bg-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="bg-slate-950 py-16 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl font-extrabold">Contact</h2>
        <div className="mt-6 grid gap-8 sm:grid-cols-2">
          <div>
            <p className="text-white/80">Email: econforum@sju.edu.in</p>
            <p className="text-white/80">Instagram: @econforum.sju</p>
            <a href="#" className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 hover:bg-white/10">
              <FileText className="h-4 w-4" /> Download Brochure
            </a>
          </div>
          <div className="flex items-center justify-center">
            <div className="h-40 w-40 rounded-xl border border-white/20 bg-white/5 grid place-content-center">
              <span className="text-white/50 text-xs">QR Code</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export { About, Schedule, Registration, Gallery, TeamSponsors, Contact };
