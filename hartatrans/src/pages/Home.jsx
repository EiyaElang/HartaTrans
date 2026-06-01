import React from 'react';
import { Clock, CarFront, Contact } from 'lucide-react';

// =========================================================================
// 1. IMPORT GAMBAR
// =========================================================================
import heroImg from '../assets/hero.webp'; 

// Logo Sponsor
import sponsor1 from '../assets/sponsor1.webp';
import sponsor2 from '../assets/sponsor2.webp';
import sponsor3 from '../assets/sponsor3.webp';
import sponsor4 from '../assets/sponsor4.webp';
import sponsor5 from '../assets/sponsor5.webp';
import sponsor6 from '../assets/sponsor6.webp';

export default function Home({ navigateTo }) {
  return (
    <div className="animate-fadeIn bg-white">
      
      {/* ========================================= */}
      {/* 2. HERO SECTION (Lebih Ramping & Full Width Image) */}
      {/* ========================================= */}
      <section className="pt-8 md:pt-14 pb-6 overflow-hidden">
        <div className="container px-4 sm:px-6 lg:px-12 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-[1400px]">
          
          {/* Teks Kiri (Lebih Proporsional) */}
          <div className="flex flex-col justify-center text-left lg:pr-6">
            <p className="text-[#F59E0B] font-bold text-[10px] md:text-xs tracking-[0.15em] mb-3 uppercase">
              Eksklusivitas & Kenyamanan
            </p>
            
            {/* Ukuran font disesuaikan agar tidak terlalu "gemuk" */}
            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-tight mb-4 text-[#0B7A3E] font-serif">
              Jelajahi Keindahan Dengan <br className="hidden md:block" />
              <span className="text-[#F59E0B] italic font-serif">Harta Trans</span>
            </h1>
            
            <p className="text-sm md:text-base text-[#0B7A3E] mb-8 font-medium max-w-lg">
              Sewa mobil Lombok di Harta Trans Indonesia murah, mewah dan lengkap
            </p>
            
            {/* Tombol Aksi (Padding dikurangi sedikit agar lebih proporsional) */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <button 
                onClick={() => navigateTo('sewa')} 
                className="bg-[#F59E0B] text-white px-6 md:px-8 py-3 rounded-lg text-sm font-bold hover:bg-amber-600 transition shadow-sm w-full sm:w-auto"
              >
                PILIH KENDARAAN
              </button>
              <button 
                onClick={() => navigateTo('tour')} 
                className="bg-white border-2 border-[#F59E0B] text-[#F59E0B] px-6 md:px-8 py-3 rounded-lg text-sm font-bold hover:bg-orange-50 transition w-full sm:w-auto"
              >
                LIHAT PAKET TOUR
              </button>
            </div>
          </div>

          {/* Gambar Kanan (Full Width dari container kolom) */}
            <div className="w-full h-[250px] sm:h-[350px] lg:h-[450px] rounded-2xl md:rounded-[2rem] shadow-xl overflow-hidden relative">
                <img 
                    src={heroImg} 
                    alt="Armada Harta Trans" 
                    className="absolute inset-0 w-full h-[112%] object-cover object-center -translate-y-[2%]" 
                />
            </div>
        </div>
      </section>

      {/* ========================================= */}
      {/* 3. LOGO SPONSOR (Diperbesar sedikit ukurannya) */}
      {/* ========================================= */}
      <section className="py-8 md:py-12">
        <div className="container px-4 sm:px-6 lg:px-12 mx-auto max-w-[1400px]">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-6 md:gap-8 px-4">
            <img src={sponsor1} alt="Sponsor 1" className="h-8 md:h-12 object-contain mix-blend-multiply opacity-80" />
            <img src={sponsor2} alt="Sponsor 2" className="h-8 md:h-12 object-contain mix-blend-multiply opacity-80" />
            <img src={sponsor3} alt="Sponsor 3" className="h-8 md:h-12 object-contain mix-blend-multiply opacity-80" />
            <img src={sponsor4} alt="Sponsor 4" className="h-8 md:h-12 object-contain mix-blend-multiply opacity-80" />
            <img src={sponsor5} alt="Sponsor 5" className="h-8 md:h-12 object-contain mix-blend-multiply opacity-80" />
            <img src={sponsor6} alt="Sponsor 6" className="h-8 md:h-12 object-contain mix-blend-multiply opacity-80" />
          </div>
        </div>
      </section>

      {/* ========================================= */}
      {/* 4. TRUST INDICATORS (Jarak Atas Diperbaiki) */}
      {/* ========================================= */}
      <section className="relative w-full mt-4 md:mt-8 mb-20">
        <div className="relative w-full h-[140px] md:h-[180px]">
          
          {/* Kotak Hijau Muda */}
          <div className="absolute top-[30%] md:top-[35%] bottom-0 left-[20%] right-0 bg-[#A3C7B0] rounded-l-[2rem] md:rounded-l-[3.5rem] z-0"></div>
          
          {/* Kotak Hijau Tua */}
          <div className="absolute top-0 bottom-[15%] left-0 w-[90%] md:w-[75%] bg-[#0B7A3E] rounded-r-[2rem] md:rounded-r-[4rem] shadow-lg z-10 flex items-center">
             
             {/* Konten 3 Ikon */}
             <div className="w-full flex justify-center md:justify-start md:pl-[10%]">
               <div className="grid grid-cols-3 w-full max-w-3xl gap-4 md:gap-10 px-4 md:px-0">
                  
                  {/* Item 1 */}
                  <div className="flex flex-col items-center text-center">
                    <CarFront className="text-[#F59E0B] mb-2 md:mb-3 w-6 h-6 md:w-8 md:h-8" />
                    <h3 className="font-bold text-white text-base md:text-2xl mb-1">50+</h3>
                    <p className="text-white text-[9px] md:text-sm leading-tight">Pilihan Armada<br/>Lengkap</p>
                  </div>
                  
                  {/* Item 2 */}
                  <div className="flex flex-col items-center text-center">
                    <Contact className="text-[#F59E0B] mb-2 md:mb-3 w-6 h-6 md:w-8 md:h-8" />
                    <h3 className="font-bold text-white text-base md:text-2xl mb-1">100%</h3>
                    <p className="text-white text-[9px] md:text-sm leading-tight">Driver Tersertifikasi</p>
                  </div>
                  
                  {/* Item 3 */}
                  <div className="flex flex-col items-center text-center">
                    <Clock className="text-[#F59E0B] mb-2 md:mb-3 w-6 h-6 md:w-8 md:h-8" />
                    <h3 className="font-bold text-white text-base md:text-2xl mb-1">24/7</h3>
                    <p className="text-white text-[9px] md:text-sm leading-tight">Layanan dan<br/>Transaksi Aman</p>
                  </div>

               </div>
             </div>
          </div>
        </div>
      </section>

    </div>
  );
}