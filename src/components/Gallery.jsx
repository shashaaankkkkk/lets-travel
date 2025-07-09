import React from "react";

const imageColumns = [
  [
"/gallery1.jpg",
"/gallery2.jpg",
"/gallery3.jpg",
  ],
  [
"/gallery4.jpg",
"/gallery5.jpg",
"/gallery6.jpg",
  ],
  [
"/gallery7.jpg",
"/gallery8.jpg",
"/gallery9.jpg",
  ],
  [
"/gallery10.jpg",
"/gallery11.jpg",
"/gallery12.jpg",
  ],
];

const Gallery = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Text Heading */}
      <div className="text-center mb-8">
        <h2 className="text-5xl sm:text-5xl font-bold mb-2 text-black">
          Our Travel Gallery
        </h2>
        <p className="text-[#4f9b87] text-[20px] font-medium mb-2">
Discover beautiful places from our recent journeys around the world.
        </p>
      </div>

      {/* Gallery */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {imageColumns.map((column, colIndex) => (
          <div key={colIndex} className="grid gap-4">
            {column.map((src, imgIndex) => (
              <div
                key={imgIndex}
                className="w-full h-[200px] sm:h-[220px] md:h-[240px] overflow-hidden rounded-md"
              >
                <img
                  className="w-full h-full object-cover"
                  src={src}
                  alt={`Gallery ${colIndex}-${imgIndex}`}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
