import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../assets/animation.json';

function Contactus() {
  return (
    <div
      style={{
        position: 'relative',
        width: '100vw',
        height: '100vh', // Changed from minHeight to height
        overflow: 'hidden',
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <Lottie
        animationData={animationData}
        loop
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          top: '10%',
          margin: '0 auto',
          padding: '40px 30px',
          maxWidth: '600px',
          backdropFilter: 'blur(16px)',
          background: 'rgba(255, 255, 255, 0.1)',
          border: '1px solid rgba(255, 255, 255, 0.3)',
          borderRadius: '16px',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
          color: '#000000',
          textAlign: 'center',
        }}
      >
        <h2 style={{ fontSize: '36px', fontWeight: 700, marginBottom: '16px' }}>
          Let’s Travel Together 🌏
        </h2>
        <p style={{ fontSize: '16px', marginBottom: '24px', fontWeight: 400 }}>
          Reach out to us and let’s plan your next unforgettable journey.
        </p>

        <div style={{ fontSize: '15px', lineHeight: '1.8', fontWeight: 300 }}>
          📍 <strong>Address:</strong> Hilltop Plaza, MG Road, Shimla, Himachal Pradesh<br />
          📞 <strong>Phone:</strong> +91 98765 43210<br />
          📧 <strong>Email:</strong> contact@letstravel.in<br />
          🕒 <strong>Hours:</strong> Mon - Sat | 9:00 AM - 7:00 PM
        </div>
      </div>
    </div>
  );
}

export default Contactus;
