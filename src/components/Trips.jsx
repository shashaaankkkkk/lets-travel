

const destinationCards = [
  {
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
    rating: '4.0',
    reviews: '(23)',
    emoji: '😊',
    name: 'Lakshadweep',
    subline: 'Walk through pine-covered roads, shop at Mall Road, and visit historic churches. Great for families, couples, and solo escapes.',
    days: "4 Day's",
    people: '10+',
    country: 'India',
  },
  {
    image: 'https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=400&h=300&fit=crop',
    rating: '4.5',
    reviews: '(32)',
    emoji: '🐘',
    name: 'Kaziranga',
    subline: 'From paragliding in Solang Valley to hot water springs in Vashisht, Manali combines natural beauty with thrill.',
    days: "6 Day's",
    people: '13+',
    country: 'India',
  },
  {
    image: 'https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=400&h=300&fit=crop',
    rating: '4.7',
    reviews: '(42)',
    emoji: '🏛️',
    name: 'Sun temple',
    subline: 'One of the Char Dham pilgrimage sites, this sacred journey through mountain terrain is a spiritual experience of a lifetime.',
    days: "4 Day's",
    people: '10+',
    country: 'India',
  },
  {
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
    rating: '4.2',
    reviews: '(18)',
    emoji: '🏔️',
    name: 'Kashmir Valley',
    subline: 'Ride through the world&qoutes highest motorable road, witness Pangong Lake, explore monasteries, and live the Himalayan dream.',
    days: "5 Day's",
    people: '8+',
    country: 'India',
  },
  {
    image: 'https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=400&h=300&fit=crop',
    rating: '4.8',
    reviews: '(67)',
    emoji: '🏖️',
    name: 'Goa Beaches',
    subline: 'Perfect for meditation retreats, yoga tours, or white water rafting adventures along the Ganges.',
    days: "3 Day's",
    people: '12+',
    country: 'India',
  },
  {
    image: 'https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=400&h=300&fit=crop',
    rating: '4.6',
    reviews: '(89)',
    emoji: '🏰',
    name: 'Rajasthan Palaces',
    subline: 'Perfect for meditation retreats, yoga tours, or white water rafting adventures along the Ganges.',
    days: "7 Day's",
    people: '15+',
    country: 'India',
  },
];

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Clock, Users, MapPin, Star } from 'lucide-react';



function TravelDestinations() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [cardsPerSlide, setCardsPerSlide] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setCardsPerSlide(1);         // Mobile
      else if (window.innerWidth < 1024) setCardsPerSlide(2);   // Tablet
      else setCardsPerSlide(3);                                 // Desktop
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalSlides = Math.ceil(destinationCards.length / cardsPerSlide);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % totalSlides);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);

  return (
    <div className="w-full bg-white py-10 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-[#4f9b87] text-xl sm:text-2xl font-medium mb-1">Famous Destination!</h2>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            <span className="text-black">Our Popular </span>
            <span className="text-[#4f9b87]">Destination's</span>
          </h1>
        </div>

        {/* Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 bg-[#4f9b87] text-white rounded-full flex items-center justify-center shadow-md hover:bg-orange-500"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 bg-[#4f9b87] text-white rounded-full flex items-center justify-center shadow-md hover:bg-orange-500"
        >
          <ChevronRight />
        </button>

        {/* Slide container */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              width: `${totalSlides * 100}%`,
              transform: `translateX(-${currentSlide * (100 / totalSlides)}%)`,
            }}
          >
            {Array.from({ length: totalSlides }).map((_, slideIndex) => (
              <div
                key={slideIndex}
                className="flex flex-wrap justify-center gap-6 px-2 sm:px-6"
                style={{ width: `${100 / totalSlides}%` }}
              >
                {destinationCards
                  .slice(slideIndex * cardsPerSlide, (slideIndex + 1) * cardsPerSlide)
                  .map((card, cardIndex) => (
                   <div
  key={cardIndex}
  className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 w-full sm:w-[48%] md:w-[30%] flex flex-col justify-between"
>
  <div className="relative">
    <img
      className="w-full h-52 object-cover"
      src={card.image}
      alt={card.name}
    />
    <div className="absolute -bottom-5 left-5 bg-white px-4 py-1 rounded-full shadow flex items-center gap-1 text-sm">
      <Star className="w-4 h-4 text-yellow-400 fill-current" />
      <span>{card.rating}</span>
      <span className="text-gray-500">{card.reviews}</span>
      <span className="text-lg">{card.emoji}</span>
    </div>
  </div>

  <div className="p-5 pt-8 flex flex-col justify-between gap-3 h-full">
    <div>
      <h3 className="text-xl font-semibold text-gray-900 mb-1">{card.name}</h3>
      <p className="mb-2 text-[#4f9b87] font-medium text-sm leading-relaxed">
        {card.subline}
      </p>
    </div>
    <div className="flex justify-between text-sm text-gray-600 mb-3">
      <div className="flex items-center gap-1">
        <Clock className="w-4 h-4" />
        {card.days}
      </div>
      <div className="flex items-center gap-1">
        <Users className="w-4 h-4" />
        {card.people}
      </div>
      <div className="flex items-center gap-1">
        <MapPin className="w-4 h-4" />
        {card.country}
      </div>
    </div>
    <button className="mt-auto bg-[#4f9b87] text-white text-sm font-semibold py-2 px-4 rounded-[10px] hover:bg-[#3e7e6c] transition-all">
      Contact for Pricing
    </button>
  </div>
</div>

                  ))}
              </div>
            ))}
          
          </div>
            <br />
            <br />
        </div>


        {/* Pagination */}
        <div className="flex justify-center gap-3 mt-10">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`rounded-full transition-all ${
                index === currentSlide
                  ? 'w-5 h-5 bg-[#97d9c8]'
                  : 'w-3 h-3 bg-[#4f9b87] hover:bg-[#97d9c8]'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default TravelDestinations;