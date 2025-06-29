import React, { useState } from 'react';

const testimonials = [
  {
    name: 'Shashank Shekhar',
    role: 'eow meow',
    quote:
      'Traveling to Manali and Rishikesh with Let’s Travel was a life-changing experience. They handled everything from transport to guides flawlessly.',
    image: 'https://cdn.jsdelivr.net/gh/alohe/avatars/png/vibrent_6.png',
  },
  {
    name: 'Riya Mehta',
    role: 'Founder, WanderX',
    quote:
      'They crafted our entire group tour experience with care. Everything felt professional, smooth, and truly unforgettable.',
    image: 'https://cdn.jsdelivr.net/gh/alohe/avatars/png/vibrent_1.png',
  },
];

function TestimonialSection() {
  const [current, setCurrent] = useState(0);
  const { name, role, quote, image } = testimonials[current];

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="bg-white py-28 px-6 md:px-12 font-[Poppins] relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto">
        {/* Headings */}
        <div className="mb-16 text-center">
          <p className="text-[#4f9b87] text-[20px] font-medium mb-2">What Our Client Say’s?</p>
          <h2 className="text-5xl font-bold text-black">Client Testimonial</h2>
        </div>

        {/* Main Content */}
        <div className="flex flex-col md:flex-row items-start gap-14 relative z-10">
          {/* Left Image */}
          <div className="relative w-[350px] min-w-[300px] h-[460px] mx-auto md:mx-0">
            <div className="absolute w-full h-full bg-[#dadada] rounded-3xl -bottom-4 -left-4 z-0" />
            <img
              src={image}
              alt={name}
              className="relative w-full h-full object-cover rounded-3xl z-10 shadow-xl"
            />
          </div>

          {/* Right Testimonial Card */}
          <div className="bg-white rounded-2xl shadow-xl px-10 py-8 md:py-10 md:px-12 border-l-[8px] border-[#4f9b87] flex-1 max-w-[700px]">
            <h3 className="text-[30px] font-semibold text-black mb-2">{name}</h3>
            <p className="text-[#4f9b87] text-[17px] font-medium mb-6">{role}</p>
            <p className="text-[18px] text-gray-700 leading-[1.9]">{quote}</p>

            {/* Arrows */}
            <div className="flex gap-5 mt-10">
              <button
                onClick={prev}
                className="w-12 h-12 rounded-full bg-[#4f9b87] text-white text-xl shadow hover:bg-[#4f9b87] transition"
              >
                ←
              </button>
              <button
                onClick={next}
                className="w-12 h-12 rounded-full border-2 border-[#4f9b87] text-[#4f9b87] text-xl hover:bg-[#4f9b87] hover:text-white transition"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Airplane decoration */}
      <img
        src="/Group 88.png"
        alt="airplane"
        className="absolute top-10 right-20 w-[120px] opacity-80 pointer-events-none z-0"
      />
    </section>
  );
}

export default TestimonialSection;
