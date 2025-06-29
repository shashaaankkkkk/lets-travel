import React from 'react';
import { Card, CardContent } from './ui/card';
import {MapPinned , PersonStanding , HeartHandshake }  from 'lucide-react'

const benefits = [
  {
    icon: <MapPinned color='#4f9b87' />,
    title: 'Safe & Responsible Travel',
    description: 'We partner only with trusted hotels, homestays, and drivers.',
  },
  {
    icon: <PersonStanding color='#4f9b87' />,
    title: 'Personalized Itineraries',
    description: 'Your trip, your way — fully personalized to your travel goals.',
  },
  {
    icon: <HeartHandshake absoluteStrokeWidth  color="#4f9b87"/>,
    title: 'Local Himalayan Guides',
    description: 'Explore with experts who know every trail, turn, and tale of the mountains.',
  },
];

function Why_us() {
  return (
    <section className="bg-white py-20 px-10">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16">
        {/* Left Side Image */}
        <div className="relative w-full max-w-[500px]">
          <div className="absolute top-0 left-4 w-full h-full bg-[#ebebebbf] rounded-[40px] z-0" />
          <img
            src="/deradhun.jpg"
            alt="Tour"
            className="relative z-10 w-full h-[700px] object-cover rounded-[40px]"
          />
          <Card className="absolute bottom-[-30px] left-[50%] translate-x-[-50%] bg-[#00000026] backdrop-blur-sm w-[300px] h-[100px] rounded-[20px]">
            <CardContent className="flex items-center h-full px-6">
              <div className="w-[50px] h-[50px] bg-white rounded-full flex items-center justify-center mr-4">
                <img
                  src="/user-guide-1.png"
                  alt="Tour Guide"
                  className="w-6 h-6 object-contain"
                />
              </div>
              <div className="text-white">
                <div className="font-semibold text-lg">Professional</div>
                <div className="text-sm">Tour Guide</div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Side Text + Benefits */}
        <div className="flex-1">
          <p className="text-[#97d9c8] text-xl font-medium mb-2">Way Choose Us?</p>
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-12">
            Plan Your Trip With Us
          </h2>

          <div className="flex flex-col gap-8">
            {benefits.map((b, i) => (
              <div key={i} className="flex items-start gap-6">
                <div className="bg-white shadow-md rounded-2xl w-16 h-16 flex items-center justify-center">
                  {b.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-black">{b.title}</h3>
                  <p className="text-gray-600 text-sm mt-1">{b.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Why_us;
