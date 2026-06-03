import React, { useState } from 'react';

import Navbar from './components/Navbar';
import Home from './pages/Home'; 
import Footer from './components/Footer';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [cart, setCart] = useState([]); 

  const navigateTo = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    // Hanya ada SATU div pembungkus utama di sini
    <div className="font-sans text-gray-800 bg-white relative">
      
      {/* NAVBAR (Selalu muncul di atas) */}
      <Navbar 
        currentPage={currentPage} 
        navigateTo={navigateTo} 
        cartLength={cart.length} 
      />

      {/* AREA KONTEN UTAMA (Berubah sesuai halaman yang diklik) */}
      <main className="w-full">
        {currentPage === 'home' && <Home navigateTo={navigateTo} />}
        
        {/* Placeholder halaman lain */}
        {currentPage !== 'home' && (
          <div className="flex flex-col items-center justify-center pt-32 pb-32 px-4 text-center min-h-[70vh]">
            <h2 className="text-2xl font-bold text-gray-400 mb-4">
              Halaman <span className="uppercase text-[#0B7A3E]">{currentPage}</span> belum dirakit! 🚧
            </h2>
            <button 
              onClick={() => navigateTo('home')} 
              className="bg-[#0B7A3E] text-white px-6 py-2.5 rounded-full font-bold hover:bg-green-700 transition shadow-md"
            >
              Kembali ke Beranda
            </button>
          </div>
        )}
      </main>

      <Footer /> 

    </div>
  );
}