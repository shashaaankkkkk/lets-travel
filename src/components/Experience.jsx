import React from 'react';

function ExperienceSection() {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Left Content */}
        <div className="flex-1">
          <p className="text-[#4f9b87] text-xl font-semibold mb-2">Way Choose Us?</p>
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Choose Dream Dictation For Explore World
          </h2>
          <p className="text-gray-700 mb-8 text-lg leading-relaxed">
            From the peaceful monasteries of Ladakh to the spiritual heights of Kedarnath,
            Let’s Travel helps you explore the finest mountain escapes with comfort and safety.
          </p>

          <button className="bg-[#97d9c8] text-white font-medium text-lg px-6 py-3 rounded-lg shadow-md hover:bg-[#4f9b87] transition">
            About Us
          </button>

          {/* Stats */}
          <div className="mt-12 flex flex-wrap gap-10">
            <div>
              <h3 className="text-3xl font-bold">14</h3>
              <p className="text-gray-500">Years Experience</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold">320+</h3>
              <p className="text-gray-500">Distention Collaboration</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold">67+</h3>
              <p className="text-gray-500">Satisfied Customer</p>
            </div>
          </div>
        </div>

        {/* Right Image Block */}
        <div className="relative w-full max-w-md">
          <div className="absolute -top-6 left-6 w-full h-full bg-[#ebebeb] rounded-3xl z-0" />
          <img
            src="/tajmahal.jpg"
            alt="Taj Mahal"
            className="relative z-10 w-full h-[500px] object-cover rounded-3xl"
          />

          {/* Reaction Box */}
          <div className="absolute -bottom-8 right-0 bg-white shadow-lg rounded-xl px-6 py-4 flex flex-col z-20">
            <span className="text-sm font-medium text-gray-800 mb-2">How Your Experience?</span>
            <div className="text-2xl flex gap-2">
              <span>😡</span>
              <span>😟</span>
              <span>😊</span>
              <span>😘</span>
              <span>😍</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;
