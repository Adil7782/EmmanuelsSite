import React from "react";

export default function CallToAction() {
  return (
    <section 
      id="call-to-action"
      className="relative bg-cover bg-center text-white py-16"
      style={{
        backgroundImage:
          "url('https://builder.bootstrapmade.com/static/img/template/Plato/cta-bg.jpg')", // Background image
      }
    } data-aos="fade-up"
    // data-aos-delay="100"
    data-aos-duration="1500"
    >
      {/* Overlay for dark background */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="container mx-auto relative z-10 px-4">
        <div
          className="max-w-3xl mx-auto text-center"
          data-aos="zoom-in"
          data-aos-delay="100"
          data-aos-duration="1500"
        >
          <h3 className="text-4xl font-bold mb-4">Call To Action</h3>
          <p className="text-lg mb-6">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
          <a
            href="#"
            className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold shadow-lg transition"
          >
            Call To Action
          </a>
        </div>
      </div>
    </section>
  );
}
