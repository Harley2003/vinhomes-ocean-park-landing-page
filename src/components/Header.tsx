"use client";
import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/80 sticky top-0 z-50 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <div className="text-xl font-bold font-serif text-vinhomes-blue">
            <a href="#">VINHOMES OCEAN PARK</a>
          </div>
          <nav className="hidden md:flex space-x-6 items-center">
            <a href="#overview" className="text-vinhomes-navy hover:text-vinhomes-blue transition-colors">Tổng Quan</a>
            <a href="#apartments" className="text-vinhomes-navy hover:text-vinhomes-blue transition-colors">Căn Hộ</a>
            <a href="#amenities" className="text-vinhomes-navy hover:text-vinhomes-blue transition-colors">Tiện Ích</a>
            <a href="#location" className="text-vinhomes-navy hover:text-vinhomes-blue transition-colors">Vị Trí</a>
            <a href="#contact" className="bg-vinhomes-orange text-white font-bold py-2 px-4 rounded-lg hover:bg-opacity-90 transition-colors">Liên Hệ</a>
          </nav>
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <svg className="w-6 h-6 text-vinhomes-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <nav className="flex flex-col space-y-4 p-4">
            <a href="#overview" className="text-vinhomes-navy hover:text-vinhomes-blue transition-colors" onClick={() => setIsMenuOpen(false)}>Tổng Quan</a>
            <a href="#apartments" className="text-vinhomes-navy hover:text-vinhomes-blue transition-colors" onClick={() => setIsMenuOpen(false)}>Căn Hộ</a>
            <a href="#amenities" className="text-vinhomes-navy hover:text-vinhomes-blue transition-colors" onClick={() => setIsMenuOpen(false)}>Tiện Ích</a>
            <a href="#location" className="text-vinhomes-navy hover:text-vinhomes-blue transition-colors" onClick={() => setIsMenuOpen(false)}>Vị Trí</a>
            <a href="#contact" className="bg-vinhomes-orange text-white font-bold py-2 px-4 rounded-lg hover:bg-opacity-90 transition-colors text-center" onClick={() => setIsMenuOpen(false)}>Liên Hệ</a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
