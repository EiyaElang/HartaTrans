// src/components/Footer.jsx
import React from 'react';
import { Phone } from 'lucide-react';
import logoHartaWhite from '../assets/logo-harta.png'; // Jika punya logo warna putih, gunakan di sini

export default function Footer({ navigateTo }) {
  return (
    <footer className="bg-[#054522] text-white pt-12 pb-8 border-t-4 border-[#0B7A3E]">
      <div className="container px-4 mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between pb-10 border-b border-green-800/50 gap-8">
           
           <div className="flex flex-col items-center md:items-start text-center md:text-left cursor-pointer" onClick={() => navigateTo('home')}>
              <img src={logoHartaWhite} alt="Harta Trans" className="h-8 object-contain opacity-90 mb-4" />
              <p className="text-green-200/70 text-sm max-w-xs">Solusi sewa mobil dan paket tour terbaik di Lombok. Aman, nyaman, dan terpercaya.</p>
           </div>
           
           <div className="flex flex-wrap justify-center gap-6 md:gap-8 text-sm text-green-100 font-medium">
              <button onClick={() => navigateTo('sewa')} className="hover:text-[#F59E0B] transition">Sewa Mobil</button>
              <button onClick={() => navigateTo('tour')} className="hover:text-[#F59E0B] transition">Paket Tour</button>
              <button onClick={() => navigateTo('driver')} className="hover:text-[#F59E0B] transition">Driver Kami</button>
           </div>
           
           <div className="flex flex-col items-center md:items-end">
              <p className="text-green-200/70 text-sm mb-2">Hubungi Kami</p>
              <div className="flex items-center gap-2 text-[#F59E0B] font-bold">
                 <Phone size={18} fill="currentColor"/> +62 823-3963-8686
              </div>
           </div>

        </div>
        <div className="text-center mt-8 text-green-200/50 text-xs flex flex-col md:flex-row justify-between items-center gap-2">
          <p>© 2026 Harta Trans Indonesia. All rights reserved.</p>
          <p className="font-bold">Proposal System Developed with User-Centered Design (UCD)</p>
        </div>
      </div>
    </footer>
  );
}