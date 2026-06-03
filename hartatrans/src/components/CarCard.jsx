import React from 'react';
import { Settings, Users, Star } from 'lucide-react';

export default function CarCard({ car, navigateTo }) {
  // Fungsi format angka ke format Rupiah (ex: 450000 -> 450.000)
  const formatPrice = (price) => {
    if (price === 'Unavailable') return 'Hubungi Kami';
    return new Intl.NumberFormat('id-ID').format(price);
  };

  // Tentukan harga termurah (Start from)
  const startPrice = car.lepasKunci !== 'Unavailable' ? car.lepasKunci : car.bbmDriver;

  return (
    <div 
      // Opsional: Bikin seluruh area card bisa diklik menuju halaman sewa
      onClick={() => navigateTo('sewa')}
      className="bg-white rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.08)] border border-gray-100 flex flex-col overflow-hidden group transition-transform hover:-translate-y-1 cursor-pointer"
    >
      
      {/* Jika gambar mobilmu PNG transparan, latar abu-abunya (bg-gray-200) akan terlihat seperti di desain */}
      <div className="w-full aspect-square bg-gray-200 relative overflow-hidden">
         <img 
           src={car.img} 
           alt={car.name} 
           className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
         />
      </div>
      
      {/* 2. BAGIAN TEKS & INFO (Padding proporsional) */}
      <div className="p-5 md:p-6 flex flex-col flex-grow">
        
        {/* Judul Mobil */}
        <h3 className="font-bold text-[22px] text-gray-900 mb-3 leading-tight">{car.name}</h3>
        
        {/* Transmisi */}
        <div className="flex items-center text-gray-500 text-[15px] mb-2.5">
           <Settings size={18} className="mr-2" strokeWidth={2} /> 
           {car.trans || 'Automatic/Manual'}
        </div>
        
        {/* Kursi & Rating */}
        <div className="flex items-center text-gray-500 text-[15px] mb-6 gap-6">
           <div className="flex items-center">
             <Users size={18} className="mr-2" strokeWidth={2} /> 
             {car.seat || 6}
           </div>
           <div className="flex items-center">
             <Star size={18} className="mr-2" strokeWidth={2} /> 
             {car.rating || 4.7}
           </div>
        </div>
        
        {/* Harga (Rata Kiri, Warna Gelap) */}
        <div className="mt-auto pt-1">
           <p className="text-[15px] text-gray-500 mb-1">Start from</p>
           <p className="text-gray-900 font-medium text-[22px] tracking-tight">
             {startPrice === 'Hubungi Kami' ? startPrice : `Rp. ${formatPrice(startPrice)}`}
           </p>
        </div>

      </div>
    </div>
  );
}