import React, { useState } from 'react';
import { ShoppingCart, Menu, X, ChevronRight } from 'lucide-react';
import logoHarta from '../assets/LogoHartaTrans.webp';  

export default function Navbar({ currentPage, navigateTo, cartLength }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const handleNav = (page) => {
    navigateTo(page);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
      <div className="container px-4 py-3 md:py-4 mx-auto flex justify-between items-center max-w-7xl">
        
        {/* Logo Kiri */}
        <div className="flex items-center cursor-pointer" onClick={() => handleNav('home')}>
           <img src={logoHarta} alt="Harta Trans" className="h-8 md:h-10 object-contain" />
        </div>
        
        {/* Area Kanan (Menu + Keranjang) untuk Desktop */}
        <div className="hidden md:flex items-center">
          <div className="flex space-x-8 font-medium text-[15px] mr-6">
            <button onClick={() => handleNav('home')} className={`transition ${currentPage === 'home' ? 'font-bold text-[#0B7A3E]' : 'text-[#0B7A3E] hover:opacity-70'}`}>
              Beranda
            </button>
            <button onClick={() => handleNav('tour')} className={`transition ${currentPage === 'tour' ? 'font-bold text-[#0B7A3E]' : 'text-[#0B7A3E] hover:opacity-70'}`}>
              Tour
            </button>
            <button onClick={() => handleNav('sewa')} className={`transition ${currentPage === 'sewa' ? 'font-bold text-[#0B7A3E]' : 'text-[#0B7A3E] hover:opacity-70'}`}>
              Sewa Mobil
            </button>
            <button onClick={() => handleNav('driver')} className={`transition ${currentPage === 'driver' ? 'font-bold text-[#0B7A3E]' : 'text-[#0B7A3E] hover:opacity-70'}`}>
              Driver
            </button>
          </div>

          <div className="w-[1px] h-6 bg-gray-200 mx-2"></div>

          {/* Tombol Keranjang Desain Baru */}
          <button onClick={() => handleNav('cart')} className="ml-4 relative flex items-center gap-2 bg-[#E8F5E9] text-[#0B7A3E] px-6 py-2.5 rounded-full font-bold hover:bg-[#d1ebd6] transition shadow-sm" title="Keranjang Pesanan">
            <ShoppingCart size={20} />
            <span>Keranjang</span>
            {cartLength > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#F59E0B] text-white text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center border-2 border-white">
                {cartLength}
              </span>
            )}
          </button>
        </div>

        {/* Area Kanan untuk Mobile (HP) */}
        <div className="flex md:hidden items-center gap-3">
           <button onClick={() => handleNav('cart')} className="relative flex items-center justify-center bg-[#E8F5E9] text-[#0B7A3E] p-2 rounded-full">
              <ShoppingCart size={20} />
              {cartLength > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#F59E0B] text-white text-[9px] font-bold rounded-full w-4 h-4 flex items-center justify-center border-2 border-white">
                  {cartLength}
                </span>
              )}
           </button>
           <button className="text-[#0B7A3E] ml-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
           </button>
        </div>
      </div>
      
      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t p-5 absolute w-full shadow-2xl z-50 overflow-y-auto">
          <div className="flex flex-col font-bold text-lg text-gray-800">
            <button onClick={() => handleNav('home')} className={`text-left py-4 border-b flex justify-between items-center ${currentPage === 'home' ? 'text-[#0B7A3E]' : ''}`}>Beranda <ChevronRight size={18} className="text-gray-400"/></button>
            <button onClick={() => handleNav('tour')} className={`text-left py-4 border-b flex justify-between items-center ${currentPage === 'tour' ? 'text-[#0B7A3E]' : ''}`}>Paket Tour <ChevronRight size={18} className="text-gray-400"/></button>
            <button onClick={() => handleNav('sewa')} className={`text-left py-4 border-b flex justify-between items-center ${currentPage === 'sewa' ? 'text-[#0B7A3E]' : ''}`}>Sewa Mobil <ChevronRight size={18} className="text-gray-400"/></button>
            <button onClick={() => handleNav('driver')} className={`text-left py-4 border-b flex justify-between items-center ${currentPage === 'driver' ? 'text-[#0B7A3E]' : ''}`}>Our Driver <ChevronRight size={18} className="text-gray-400"/></button>
            
            <button onClick={() => handleNav('cart')} className="mt-8 bg-[#0B7A3E] text-white p-4 rounded-2xl flex justify-center items-center gap-2 shadow-lg">
               <ShoppingCart size={22} /> Lihat Keranjang ({cartLength})
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}