import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Tour from './pages/Tour';
import Footer from './components/Footer';
import TourDetail from './pages/TourDetail';
import TripHarianDetail from './pages/TripHarianDetail';
import Sewa from './pages/Sewa';
import SewaDetail from './pages/SewaDetail';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedId, setSelectedId] = useState('');
  const [cart, setCart] = useState([]);

  const navigateTo = (page, paramId = '') => {
    setCurrentPage(page);
    if(paramId) setSelectedId(paramId); 
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <div className="font-sans text-gray-800 bg-white relative">
      
      <Navbar currentPage={currentPage} navigateTo={navigateTo} cartLength={cart.length} />

      <main className="w-full">
        {currentPage === 'home' && <Home navigateTo={navigateTo} />}
        {currentPage === 'tour' && <Tour navigateTo={navigateTo} />}
        {currentPage === 'tourDetail' && <TourDetail navigateTo={navigateTo} tourId={selectedId} />}
        
        {/* TAMBAHKAN 2 RUTE BARU INI */}
        {currentPage === 'sewa' && <Sewa navigateTo={navigateTo} />}
        {currentPage === 'sewaDetail' && <SewaDetail navigateTo={navigateTo} itemId={selectedId} />}
        
        {/* Update kondisi halaman belum dirakit */}
        {currentPage !== 'home' && currentPage !== 'tour' && currentPage !== 'tourDetail' && currentPage !== 'tripHarianDetail' && currentPage !== 'sewa' && currentPage !== 'sewaDetail' && (
          <div className="flex flex-col items-center justify-center pt-32 pb-32 px-4 text-center min-h-[70vh]">
            <h2 className="text-2xl font-bold text-gray-400 mb-4">
              Halaman <span className="uppercase text-[#0B7A3E]">{currentPage}</span> belum dirakit! 🚧
            </h2>
            <button onClick={() => navigateTo('home')} className="bg-[#0B7A3E] text-white px-6 py-2.5 rounded-full font-bold shadow-md">Kembali ke Beranda</button>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}