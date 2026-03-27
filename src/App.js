import React, { useEffect } from "react";
import logo from "./assets/vedaLogo.png";

const projects = [
  {
    id: 1,
    image: "/projects/p1.jpg",
    category: "STYLE",
    title: "Japandi Serenity",
    location: "Ahmedabad",
  },
  {
    id: 2,
    image: "/projects/p2.jpg",
    category: "STYLE",
    title: "Warm Minimal Haven",
    location: "Gandhinagar",
  },
  {
    id: 3,
    image: "/projects/p3.jpg",
    category: "STYLE",
    title: "Modern Zen Workspace",
    location: "SG Highway",
  },
  {
    id: 4,
    image: "/projects/p4.jpg",
    category: "STYLE",
    title: "Nordic Calm Living",
    location: "Satellite",
  },
  {
    id: 5,
    image: "/projects/p5.jpg",
    category: "STYLE",
    title: "Neutral Luxe Dining",
    location: "CG Road",
  },
  {
    id: 6,
    image: "/projects/p6.jpg",
    category: "STYLE",
    title: "Minimal Zen Bedroom",
    location: "Bopal",
  },
];

export default function App() {
  // Letter split (text reveal)
  const splitText = (text) => {
    return text.split("").map((char, i) => (
      <span key={i} style={{ animationDelay: `${i * 0.04}s` }}>
        {char === " " ? "\u00A0" : char}
      </span>
    ));
  };

  useEffect(() => {
    const elements = document.querySelectorAll(".fade-up");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 },
    );

    elements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <div className="font-sans text-gray-900 bg-gray-50">
      {/* COVER */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 py-16 relative text-center">
        {/* Top & Bottom Accent */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-700 via-teal-500 to-teal-700" />
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-700 via-teal-500 to-teal-700" />

        {/* Small Tag */}
        <p className="text-xs tracking-[4px] font-semibold text-teal-600 mb-6 uppercase">
          Full Interior Design · Ahmedabad
        </p>

        {/* Logo */}
        <img
          src={logo}
          alt="Veda Interio Logo"
          className="w-44 md:w-60 mb-6 fade-up delay-3 object-contain"
        />

        {/* Divider */}
        <div className="flex items-center gap-4 my-4">
          <div className="h-px w-20 bg-teal-500/50" />
          <div className="w-2 h-2 bg-teal-600 rotate-45" />
          <div className="h-px w-20 bg-teal-500/50" />
        </div>

        {/* Main Heading */}
        <h1 className="fade-up delay-1 text-4xl md:text-5xl font-light tracking-[5px] uppercase text-gray-800 leading-tight">
          Designing Spaces <br />
          <span className="text-teal-600 italic">That Feel Like Home</span>
        </h1>

        {/* Subheading */}
        <p className="text-gray-500 mt-6 max-w-xl leading-relaxed">
          We create modern, functional, and luxurious interiors tailored to your
          lifestyle — from concept design to complete turnkey execution.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 my-5">
          <a
            href="tel:+919274716603"
            className="px-6 py-3 bg-teal-600 text-white text-sm tracking-wide uppercase hover:bg-teal-700 transition"
          >
            Call Now
          </a>

          <a
            href="https://wa.me/919274716603"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-teal-600 text-teal-600 text-sm tracking-wide uppercase hover:bg-teal-600 hover:text-white transition"
          >
            WhatsApp Us
          </a>
        </div>

        {/* Bottom Tagline */}
        <p className="fade-up delay-4 text-xs tracking-[2px] text-gray-400 font-semibold uppercase mt-5">
          From Concept to Completion — Turnkey Solutions
        </p>

        {/* Divider */}
        <div className="flex items-center gap-4 my-5">
          <div className="h-px w-20 bg-teal-500/50" />
          <div className="w-2 h-2 bg-teal-600 rotate-45" />
          <div className="h-px w-20 bg-teal-500/50" />
        </div>
      </section>

      {/* ABOUT */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <p className="reveal-text text-xs tracking-[4px] text-teal-600 mb-3 uppercase">
          {splitText("01 — Who We Are")}
        </p>

        <h2 className="fade-up delay-1 text-4xl md:text-5xl font-light mb-6 leading-tight">
          Spaces Crafted with <br />
          <span className="italic text-teal-600">Purpose & Precision</span>
        </h2>

        <div className="fade-up delay-2 w-12 h-1 bg-teal-600 mb-8" />

        <p className="fade-up delay-3 text-gray-700 mb-4 leading-relaxed">
          Veda Interio is a professional interior design firm specializing in
          turnkey projects with focus on quality, functionality, and aesthetics.
        </p>

        <p className="fade-up delay-4 text-gray-700 mb-4 leading-relaxed">
          From concept to completion, we ensure a smooth, transparent, and
          hassle-free experience — so you can enjoy your dream space coming to
          life.
        </p>
      </section>

      {/* SERVICES */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <p className="reveal-text text-xs tracking-[4px] text-teal-600 mb-3 uppercase">
          {splitText("02 — What We Do")}
        </p>

        <h2 className="fade-up delay-1 text-4xl font-light mb-6">
          Our <span className="italic text-teal-600">Services</span>
        </h2>

        <div className="fade-up delay-2 w-12 h-1 bg-teal-600 mb-10" />

        <div className="grid md:grid-cols-3 gap-px bg-gray-200 border">
          {[
            "Residential Interiors",
            "Commercial Spaces",
            "3D Design",
            "Custom Furniture",
            "Turnkey Execution",
            "Project Management",
          ]?.map((item, i) => (
            <div
              key={i}
              className="fade-up bg-white p-6 hover:border-l-4 hover:border-teal-600 hover:shadow-md transition"
              style={{ transitionDelay: `${i * 0.1}s` }}
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
      <section className="max-w-7xl mx-auto px-6 py-20">
        <p className="reveal-text text-xs tracking-[4px] text-teal-600 mb-3 uppercase">
          {splitText("03 — Our Expertise")}
        </p>

        <h2 className="fade-up delay-1 text-4xl font-light mb-6">
          Areas We <span className="italic text-teal-600">Excel In</span>
        </h2>

        <div className="fade-up delay-2 w-12 h-1 bg-teal-600 mb-10" />

        {[
          "Modern Interiors",
          "Luxury Living",
          "Storage Solutions",
          "Custom Furniture",
        ]?.map((item, i) => (
          <div
            key={i}
            className="fade-up flex justify-between border-b py-4"
            style={{ transitionDelay: `${i * 0.1}s` }}
          >
            <span className="text-teal-600">0{i + 1}</span>
            <span className="flex-1 ml-6">{item}</span>
            <span className="text-xs uppercase text-teal-600 bg-teal-100 px-3 py-1">
              Design
            </span>
          </div>
        ))}
      </section>

      {/* PROJECTS */}
      <section className="max-w-7xl mx-auto px-6 py-20 bg-[#f8f6f3] py-16 px-6 md:px-12">
        {/* Tag */}
        <p className="text-[12px] tracking-[3px] text-[#b0a89f] mb-3">
          OUR WORK
        </p>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-medium text-[#2c2c2c] mb-10">
          Featured <span className="text-[#8c7b6b]">Styles</span>
        </h2>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects?.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-xl transition duration-500"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[260px] object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>

              {/* Content */}
              <div className="absolute bottom-0 p-5 text-white">
                <p className="text-[11px] tracking-[2px] text-[#d6cfc7] mb-1">
                  {item.category}
                </p>

                <h3 className="text-lg font-medium leading-snug">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-200 mb-3">{item.location}</p>

                {/* Button */}
                <button className="bg-white/90 text-[#2c2c2c] text-sm px-4 py-1.5 rounded-full opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition duration-300">
                  View Style →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY US */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <p className="reveal-text text-xs tracking-[4px] text-teal-600 mb-3 uppercase">
          {splitText("04 — Why Us")}
        </p>

        <h2 className="fade-up delay-1 text-4xl font-light mb-6">
          Why Clients <span className="italic text-teal-600">Choose Us</span>
        </h2>

        <div className="fade-up delay-2 w-12 h-1 bg-teal-600 mb-10" />

        <div className="grid md:grid-cols-3 gap-6">
          {[
            "Transparent Pricing",
            "Skilled Team",
            "On-Time Delivery",
            "Custom Designs",
            "All-in-One Solution",
            "Budget Friendly",
          ]?.map((item, i) => (
            <div
              key={i}
              className="fade-up flex gap-3"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
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
        <div className="fade-up delay-1 max-w-7xl mx-auto">
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
