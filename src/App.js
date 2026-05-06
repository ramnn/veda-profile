import React, { useEffect } from "react";
import logo from "./assets/logo_new.png";

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
      {/* <section className="min-h-screen flex flex-col items-center justify-center px-6 py-16 relative text-center bg-[#0B1C2C] text-white">
        {" "}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#C8A96A]" />{" "}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C8A96A]" />{" "}
        <p className="text-[13px] tracking-[4px] font-medium text-[#C8A96A] mb-6 uppercase">
          {" "}
          Premium Interior Design · Ahmedabad{" "}
        </p>{" "}
        <img
          src={logo}
          alt="Shreev Livings Logo"
          className="w-52 md:w-72 mb-6 fade-up object-contain"
        />{" "}
        <div className="flex items-center gap-4 my-4">
          {" "}
          <div className="h-px w-20 bg-[#C8A96A]/50" />{" "}
          <div className="w-2 h-2 bg-[#C8A96A] rotate-45" />{" "}
          <div className="h-px w-20 bg-[#C8A96A]/50" />{" "}
        </div>{" "}
        <h1 className="text-4xl md:text-5xl font-light tracking-[5px] uppercase leading-tight">
          {" "}
          Designing Spaces <br />{" "}
          <span className="text-[#C8A96A] italic">
            {" "}
            That Define Luxury{" "}
          </span>{" "}
        </h1>{" "}
        <p className="text-gray-300 mt-6 max-w-xl leading-relaxed">
          {" "}
          We craft elegant, timeless interiors with premium finishes, smart
          functionality, and refined aesthetics.{" "}
        </p>{" "}
        <div className="flex flex-col sm:flex-row gap-4 my-6">
          {" "}
          <a
            href="tel:+918200653052"
            className="px-6 py-3 bg-[#C8A96A] text-[#0B1C2C] text-sm tracking-wide uppercase hover:bg-[#b89555] transition"
          >
            {" "}
            Call Now{" "}
          </a>{" "}
          <a
            href="https://wa.me/918200653052"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-[#C8A96A] text-[#C8A96A] text-sm tracking-wide uppercase hover:bg-[#C8A96A] hover:text-[#0B1C2C] transition"
          >
            {" "}
            WhatsApp Us{" "}
          </a>{" "}
        </div>{" "}
        <p className="text-xs tracking-[2px] text-gray-400 uppercase">
          {" "}
          Turnkey Interior Solutions{" "}
        </p>{" "}
      </section> */}
      <section className="min-h-screen bg-[#0B1C2C] text-white flex items-center px-6 md:px-16 relative overflow-hidden">
        {/* subtle gradient glow */}
        <div className="absolute right-0 top-0 w-[400px] h-[400px] bg-[#C8A96A]/10 blur-[120px]" />

        <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT CONTENT */}
          <div>
            {/* Tag */}
            <p className="text-[12px] tracking-[5px] text-[#C8A96A] mb-6 uppercase">
              Luxury Interior Studio
            </p>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl font-light leading-tight mb-6">
              We Don’t Just Design
              <br />
              <span className="text-[#C8A96A] italic">
                We Create Statements
              </span>
            </h1>

            {/* Description */}
            <p className="text-gray-300 max-w-lg mb-8 leading-relaxed">
              Shreev Livings transforms ordinary spaces into refined, high-end
              environments with a perfect balance of aesthetics, comfort, and
              functionality.
            </p>

            {/* CTA */}
            <div className="flex gap-4">
              <a
                href="tel:+918200653052"
                className="px-7 py-3 bg-[#C8A96A] text-[#0B1C2C] text-sm tracking-wide uppercase hover:bg-[#b89555] transition"
              >
                Start Project
              </a>

              <a
                href="https://wa.me/918200653052"
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3 border border-[#C8A96A] text-[#C8A96A] text-sm tracking-wide uppercase hover:bg-[#C8A96A] hover:text-[#0B1C2C] transition"
              >
                Get Quote
              </a>
            </div>
          </div>

          {/* RIGHT SIDE (LOGO + VISUAL BLOCK) */}
          <div className="relative flex justify-center md:justify-end">
            {/* frame box */}
            <div className="border border-[#C8A96A]/30 p-8 md:p-12">
              <img
                src={logo}
                alt="Shreev Livings"
                className="w-48 md:w-64 object-contain"
              />
            </div>

            {/* bottom line */}
            <div className="absolute -bottom-6 left-0 w-full h-[1px] bg-[#C8A96A]/30" />
          </div>
        </div>

        {/* BOTTOM STRIP */}
        <div className="absolute bottom-0 left-0 right-0 border-t border-[#C8A96A]/20 py-4 px-6 md:px-16 flex justify-between text-xs tracking-[2px] text-gray-400">
          <span>Ahmedabad · Gandhinagar</span>
          <span>Turnkey · Custom Interiors · Execution</span>
        </div>
      </section>

      {/* ABOUT */}
      {/* <section className="max-w-7xl mx-auto px-6 py-24">
        <p className="reveal-text text-xs tracking-[4px] text-teal-600 mb-3 uppercase">
          {splitText("01 — Who We Are")}
        </p>

        <h2 className="fade-up delay-1 text-4xl md:text-5xl font-light mb-6 leading-tight">
          Spaces Crafted with <br />
          <span className="italic text-teal-600">Purpose & Precision</span>
        </h2>

        <div className="fade-up delay-2 w-12 h-1 bg-teal-600 mb-8" />

        <p className="fade-up delay-3 text-gray-700 mb-4 leading-relaxed">
          Shreev Livings is a professional interior design firm specializing in
          turnkey projects with focus on quality, functionality, and aesthetics.
        </p>

        <p className="fade-up delay-4 text-gray-700 mb-4 leading-relaxed">
          From concept to completion, we ensure a smooth, transparent, and
          hassle-free experience — so you can enjoy your dream space coming to
          life.
        </p>
      </section> */}
      <section className="bg-[#f8f6f3] py-24 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          {/* LEFT SIDE - CONTENT */}
          <div>
            {/* Tag */}
            <p className="text-[12px] tracking-[5px] text-[#C8A96A] mb-4 uppercase">
              About Us
            </p>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-light leading-tight mb-6">
              Designing Beyond Trends
              <br />
              <span className="text-[#C8A96A] italic">
                Creating Timeless Spaces
              </span>
            </h2>

            {/* Line */}
            <div className="w-16 h-[2px] bg-[#C8A96A] mb-8" />

            {/* Description */}
            <p className="text-gray-700 mb-5 leading-relaxed">
              At Shreev Livings, we believe interiors should reflect more than
              just design — they should represent lifestyle, personality, and
              purpose.
            </p>

            <p className="text-gray-700 mb-5 leading-relaxed">
              Our approach blends modern aesthetics with functional planning,
              delivering spaces that are both visually refined and deeply
              practical.
            </p>

            <p className="text-gray-700 leading-relaxed">
              From concept development to turnkey execution, we ensure every
              detail is handled with precision, transparency, and a commitment
              to excellence.
            </p>
          </div>

          {/* RIGHT SIDE - FEATURE BLOCKS */}
          <div className="grid grid-cols-2 gap-6">
            {[
              { title: "10+", label: "Projects Delivered" },
              { title: "5+", label: "Years Experience" },
              { title: "100%", label: "Client Satisfaction" },
              { title: "End-to-End", label: "Turnkey Solutions" },
            ].map((item, i) => (
              <div
                key={i}
                className="border border-[#C8A96A]/30 p-6 hover:shadow-md transition"
              >
                <h3 className="text-2xl font-light text-[#C8A96A] mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      {/* <section className="max-w-7xl mx-auto px-6 py-20">
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
      </section> */}
      <section className="bg-[#0B1C2C] text-white py-24 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
          {/* LEFT SIDE */}
          <div>
            <p className="text-[12px] tracking-[5px] text-[#C8A96A] mb-4 uppercase">
              Our Services
            </p>

            <h2 className="text-4xl md:text-5xl font-light leading-tight mb-6">
              Complete Interior
              <br />
              <span className="text-[#C8A96A] italic">
                Solutions Under One Roof
              </span>
            </h2>

            <div className="w-16 h-[2px] bg-[#C8A96A] mb-8" />

            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              From concept to execution, we offer a seamless experience tailored
              to your vision. Every service is designed to deliver precision,
              elegance, and long-lasting value.
            </p>

            {/* CTA */}
            <a
              href="https://wa.me/918200653052"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-7 py-3 border border-[#C8A96A] text-[#C8A96A] text-sm tracking-wide uppercase hover:bg-[#C8A96A] hover:text-[#0B1C2C] transition"
            >
              Discuss Your Project
            </a>
          </div>

          {/* RIGHT SIDE - SERVICES */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                title: "Residential Interiors",
                desc: "Elegant and functional home designs tailored to your lifestyle.",
              },
              {
                title: "Commercial Spaces",
                desc: "Smart and impactful designs for offices and retail environments.",
              },
              {
                title: "3D Visualization",
                desc: "Realistic previews to help you visualize before execution.",
              },
              {
                title: "Custom Furniture",
                desc: "Crafted pieces that perfectly fit your space and design.",
              },
              {
                title: "Turnkey Projects",
                desc: "End-to-end solutions from planning to final handover.",
              },
              {
                title: "Project Management",
                desc: "Smooth execution with timelines, quality, and cost control.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group border border-[#C8A96A]/20 p-6 hover:bg-[#10273d] hover:border-[#C8A96A] transition duration-300"
              >
                {/* Number */}
                <p className="text-[#C8A96A] text-sm mb-2">0{i + 1}</p>

                {/* Title */}
                <h3 className="text-lg font-medium mb-2">{item.title}</h3>

                {/* Desc */}
                <p className="text-sm text-gray-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERTISE */}
      {/* <section className="max-w-7xl mx-auto px-6 py-20">
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
      </section> */}
      <section className="bg-[#f8f6f3] py-24 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          {/* LEFT SIDE */}
          <div>
            <p className="text-[12px] tracking-[5px] text-[#C8A96A] mb-4 uppercase">
              Our Expertise
            </p>

            <h2 className="text-4xl md:text-5xl font-light leading-tight mb-6">
              Where Design Meets
              <br />
              <span className="text-[#C8A96A] italic">
                Precision & Experience
              </span>
            </h2>

            <div className="w-16 h-[2px] bg-[#C8A96A] mb-8" />

            <p className="text-gray-700 max-w-md leading-relaxed">
              Our expertise lies in crafting spaces that balance elegance,
              practicality, and modern design thinking — ensuring every project
              stands out with a refined identity.
            </p>
          </div>

          {/* RIGHT SIDE - STACKED CARDS */}
          <div className="space-y-6">
            {[
              {
                title: "Modern Interiors",
                desc: "Clean, minimal, and contemporary designs that feel timeless.",
              },
              {
                title: "Luxury Living Spaces",
                desc: "High-end interiors crafted with premium materials and finishes.",
              },
              {
                title: "Smart Storage Solutions",
                desc: "Optimized layouts that maximize space without compromising design.",
              },
              {
                title: "Custom Furniture Design",
                desc: "Tailor-made furniture pieces designed to fit perfectly.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group border border-[#C8A96A]/20 p-6 flex gap-6 items-start hover:shadow-md hover:border-[#C8A96A] transition"
              >
                {/* Number */}
                <div className="text-[#C8A96A] text-xl font-light">
                  0{i + 1}
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-lg font-medium mb-1">{item.title}</h3>

                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>

                  {/* Tag */}
                  <span className="inline-block mt-2 text-xs uppercase tracking-[2px] text-[#C8A96A] bg-[#C8A96A]/10 px-3 py-1">
                    Expertise
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="bg-[#0B1C2C] text-white py-24 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          {/* TOP */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
            <div>
              <p className="text-[12px] tracking-[5px] text-[#C8A96A] mb-4 uppercase">
                Our Projects
              </p>

              <h2 className="text-4xl md:text-5xl font-light leading-tight">
                Crafted Spaces
                <br />
                <span className="text-[#C8A96A] italic">That Speak Luxury</span>
              </h2>
            </div>

            <a
              href="#"
              className="mt-6 md:mt-0 text-sm tracking-wide uppercase text-[#C8A96A] border-b border-[#C8A96A] hover:text-white hover:border-white transition"
            >
              View All Projects →
            </a>
          </div>

          {/* GRID */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((item) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-xl"
              >
                {/* IMAGE */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[300px] object-cover group-hover:scale-110 transition duration-700"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-90" />

                {/* CONTENT */}
                <div className="absolute bottom-0 p-6">
                  <p className="text-xs tracking-[3px] text-[#C8A96A] mb-2">
                    {item.category}
                  </p>

                  <h3 className="text-xl font-medium mb-1">{item.title}</h3>

                  <p className="text-sm text-gray-300 mb-4">{item.location}</p>

                  {/* BUTTON */}
                  <button className="opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition duration-300 text-sm px-4 py-2 border border-white hover:bg-white hover:text-black">
                    View Project →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="bg-[#0B1C2C] text-white py-24 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          {/* LEFT SIDE */}
          <div>
            <p className="text-[12px] tracking-[5px] text-[#C8A96A] mb-4 uppercase">
              Why Choose Us
            </p>

            <h2 className="text-4xl md:text-5xl font-light leading-tight mb-6">
              Designed with Trust
              <br />
              <span className="text-[#C8A96A] italic">
                Delivered with Excellence
              </span>
            </h2>

            <div className="w-16 h-[2px] bg-[#C8A96A] mb-8" />

            <p className="text-gray-300 max-w-md leading-relaxed">
              We go beyond design — delivering a complete experience that
              ensures quality, transparency, and precision at every stage of
              your interior journey.
            </p>
          </div>

          {/* RIGHT SIDE */}
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                title: "Transparent Pricing",
                desc: "Clear and honest costing with no hidden surprises.",
              },
              {
                title: "Experienced Team",
                desc: "Skilled professionals with strong design expertise.",
              },
              {
                title: "On-Time Delivery",
                desc: "Strict timelines to ensure timely project completion.",
              },
              {
                title: "Custom Design Approach",
                desc: "Every space tailored to your needs and lifestyle.",
              },
              {
                title: "End-to-End Solutions",
                desc: "From design to execution — everything under one roof.",
              },
              {
                title: "Value for Investment",
                desc: "High-quality output that justifies every rupee spent.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group border border-[#C8A96A]/20 p-6 hover:bg-[#10273d] hover:border-[#C8A96A] transition duration-300"
              >
                {/* Icon */}
                <div className="w-8 h-8 flex items-center justify-center border border-[#C8A96A] text-[#C8A96A] mb-4">
                  ✦
                </div>

                {/* Title */}
                <h3 className="text-lg font-medium mb-2">{item.title}</h3>

                {/* Desc */}
                <p className="text-sm text-gray-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="bg-[#0B1C2C] text-white pt-24 pb-10 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          {/* TOP CTA */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-4 leading-tight">
              Let’s Design Something
              <br />
              <span className="text-[#C8A96A] italic">Truly Exceptional</span>
            </h2>

            <p className="text-gray-400 max-w-xl mx-auto mb-8">
              Connect with us to start your interior journey — from concept to
              completion, we handle everything with precision.
            </p>

            <div className="flex justify-center gap-4 flex-wrap">
              <a
                href="tel:+918200653052"
                className="px-7 py-3 bg-[#C8A96A] text-[#0B1C2C] text-sm uppercase tracking-wide hover:bg-[#b89555] transition"
              >
                Call Now
              </a>

              <a
                href="https://wa.me/918200653052"
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3 border border-[#C8A96A] text-[#C8A96A] text-sm uppercase tracking-wide hover:bg-[#C8A96A] hover:text-[#0B1C2C] transition"
              >
                WhatsApp Us
              </a>
            </div>
          </div>

          {/* CONTACT GRID */}
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {[
              {
                title: "Location",
                value: "Ahmedabad, Gujarat",
                link: "https://maps.google.com/?q=Ahmedabad,Gujarat",
              },
              {
                title: "Phone",
                value: "+91 82006 53052",
                link: "tel:+918200653052",
              },
              {
                title: "Email",
                value: "shreevlivings@gmail.com",
                link: "mailto:shreevlivings@gmail.com",
              },
              {
                title: "Website",
                value: "shreev.com",
                link: "#",
              },
            ].map((item, i) => (
              <a
                key={i}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group border border-[#C8A96A]/20 p-6 hover:border-[#C8A96A] hover:bg-[#10273d] transition"
              >
                <p className="text-xs tracking-[3px] text-[#C8A96A] mb-3 uppercase">
                  {item.title}
                </p>

                <p className="text-lg group-hover:text-[#C8A96A] transition">
                  {item.value}
                </p>
              </a>
            ))}
          </div>

          {/* BRAND LINE */}
          <div className="border-t border-[#C8A96A]/20 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Shreev Livings. All rights reserved.
            </p>

            <p className="text-xs tracking-[3px] text-[#C8A96A] uppercase">
              Interior Design · Turnkey · Execution
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
