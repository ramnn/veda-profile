import React from "react";
import logo from "./assets/vedaLogo.png";

const projects = [
  {
    title: "Modern 3BHK Apartment",
    location: "Ahmedabad",
    image: "/projects/p1.jpg",
  },
  {
    title: "Luxury Villa Interior",
    location: "Gandhinagar",
    image: "/projects/p2.jpg",
  },
  {
    title: "Corporate Office Design",
    location: "SG Highway",
    image: "/projects/p3.jpg",
  },
  {
    title: "Living Setup",
    location: "Satellite",
    image: "/projects/p4.jpg",
  },
  {
    title: "Dinning Hall",
    location: "CG Road",
    image: "/projects/p5.jpg",
  },
  {
    title: "Minimal Bedroom",
    location: "Bopal",
    image: "/projects/p6.jpg",
  },
];

export default function App() {
  return (
    <div className="font-sans text-gray-900 bg-gray-50">
      {/* COVER */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 py-16 relative">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-700 via-teal-500 to-teal-700" />
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-700 via-teal-500 to-teal-700" />

        <p className="text-xs tracking-[4px] text-teal-600 mb-8 uppercase">
          Veda Interio Profile · 2026
        </p>

        <img
          src={logo}
          alt="Veda Interio Logo"
          className="w-44 md:w-60 mb-6 object-contain"
        />

        <h1 className="text-5xl md:text-7xl font-light tracking-[6px] uppercase text-center">
          <span className="text-gray-800">Veda Interio</span>
        </h1>

        <p className="italic text-gray-500 tracking-[3px] mt-3 mb-10 text-center">
          COMPLETE HOME INTERIOR & TURNKEY PROJECTS
        </p>

        <div className="flex items-center gap-4 mb-10">
          <div className="h-px w-20 bg-teal-500/50" />
          <div className="w-2 h-2 bg-teal-600 rotate-45" />
          <div className="h-px w-20 bg-teal-500/50" />
        </div>

        <p className="text-xs tracking-[2px] text-gray-500 uppercase text-center">
          From Concept to Completion — Turnkey solutions
        </p>
      </section>

      {/* ABOUT */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <p className="text-xs tracking-[4px] text-teal-600 mb-3 uppercase">
          01 — Who We Are
        </p>

        <h2 className="text-4xl md:text-5xl font-light mb-6">
          Spaces Crafted with <br />
          <span className="italic text-teal-600">Purpose & Precision</span>
        </h2>

        <div className="w-12 h-1 bg-teal-600 mb-8" />

        <p className="text-gray-700 mb-4">
          Veda Interio is a professional interior design firm specializing in
          turnkey projects with focus on quality and aesthetics.
        </p>
        <p className="text-gray-700 mb-4">
          From concept to completion, we ensure smooth execution and a
          hassle-free experience.
        </p>
      </section>

      {/* SERVICES */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <p className="text-xs tracking-[4px] text-teal-600 mb-3 uppercase">
          02 — What We Do
        </p>

        <h2 className="text-4xl font-light mb-6">
          Our <span className="italic text-teal-600">Services</span>
        </h2>

        <div className="w-12 h-1 bg-teal-600 mb-10" />

        <div className="grid md:grid-cols-3 gap-px bg-gray-200 border">
          {[
            "Residential Interiors",
            "Commercial Spaces",
            "3D Design",
            "Custom Furniture",
            "Turnkey Execution",
            "Project Management",
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white p-6 hover:border-l-4 hover:border-teal-600 transition"
            >
              <h3 className="text-lg font-semibold mb-2">{item}</h3>
              <p className="text-sm text-gray-500">
                High-quality execution tailored to your needs.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* EXPERTISE */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <p className="text-xs tracking-[4px] text-teal-600 mb-3 uppercase">
          03 — Our Expertise
        </p>

        <h2 className="text-4xl font-light mb-6">
          Areas We <span className="italic text-teal-600">Excel In</span>
        </h2>

        <div className="w-12 h-1 bg-teal-600 mb-10" />

        {[
          "Modern Interiors",
          "Luxury Living",
          "Storage Solutions",
          "Custom Furniture",
        ].map((item, i) => (
          <div key={i} className="flex justify-between border-b py-4">
            <span className="text-teal-600">0{i + 1}</span>
            <span className="flex-1 ml-6">{item}</span>
            <span className="text-xs uppercase text-teal-600 bg-teal-100 px-3 py-1">
              Design
            </span>
          </div>
        ))}
      </section>

      {/* PROJECTS */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <p className="text-xs tracking-[4px] text-teal-600 mb-3 uppercase">
          05 — Our Work
        </p>

        <h2 className="text-4xl font-light mb-6">
          Completed <span className="italic text-teal-600">Projects</span>
        </h2>

        <div className="w-12 h-1 bg-teal-600 mb-10" />

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white border hover:shadow-xl transition overflow-hidden"
            >
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="h-48 w-full object-cover group-hover:scale-105 transition duration-300"
              />

              {/* Content */}
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-1">{project.title}</h3>
                <p className="text-sm text-gray-500">{project.location}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY US */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <p className="text-xs tracking-[4px] text-teal-600 mb-3 uppercase">
          04 — Why Us
        </p>

        <h2 className="text-4xl font-light mb-6">
          Why Clients <span className="italic text-teal-600">Choose Us</span>
        </h2>

        <div className="w-12 h-1 bg-teal-600 mb-10" />

        <div className="grid md:grid-cols-3 gap-6">
          {[
            "Transparent Pricing",
            "Skilled Team",
            "On-Time Delivery",
            "Custom Designs",
            "All-in-One Solution",
            "Budget Friendly",
          ].map((item, i) => (
            <div key={i} className="flex gap-3">
              <div className="w-6 h-6 border border-teal-600 bg-teal-100 flex items-center justify-center text-teal-600">
                ✦
              </div>
              <p className="text-sm">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="bg-gray-900 text-white px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl font-light mb-2">
            <span className="text-teal-400">VEDA INTERIO</span>
          </h2>

          <p className="text-xs tracking-[3px] text-teal-500 mb-10 uppercase">
            Let's Build Something Beautiful Together
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-xs text-teal-500 uppercase mb-1">Location</p>
              <a
                href="https://maps.google.com/?q=Ahmedabad,Gujarat"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg hover:text-teal-300 transition"
              >
                Ahmedabad, Gujarat
              </a>
            </div>

            <div>
              <p className="text-xs text-teal-500 uppercase mb-1">Phone</p>
              <a
                href="tel:+919274716603"
                className="text-lg hover:text-teal-300 transition"
              >
                +91 9274716603
              </a>
            </div>

            <div>
              <p className="text-xs text-teal-500 uppercase mb-1">Email</p>
              <a
                href="mailto:contact@vedainterio.com"
                className="text-lg hover:text-teal-300 transition"
              >
                contact@vedainterio.com
              </a>
            </div>

            <div>
              <p className="text-xs text-teal-500 uppercase mb-1">Website</p>
              <a
                href="https://vedainteriors.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg hover:text-teal-300 transition"
              >
                vedainteriors.in
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
