import React from 'react';
import { Settings2, Users } from 'lucide-react';

export default function CarCard({ car, navigateTo }) {
  const formatPrice = (price) => new Intl.NumberFormat('id-ID').format(price);

  return (
    <div 
      onClick={() => navigateTo('sewaDetail', car.id)}
      className="bg-white rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-gray-100 flex flex-col overflow-hidden transition-transform hover:-translate-y-1 cursor-pointer pb-6"
    >
      {/* Gambar Full Rectangle (Tanpa Padding) */}
      <div className="w-full h-[220px] md:h-[240px] relative overflow-hidden bg-white">
        <img 
          src={car.img} 
          alt={car.name} 
          className="w-full h-full object-cover object-center" 
        />
      </div>

      {/* Teks */}
      <div className="px-6 pt-5 flex flex-col flex-grow">
        <h3 className="font-bold text-[18px] text-gray-900 mb-3 truncate">
          {car.name}
        </h3>

        {/* Spesifikasi (Transmisi & Kursi) */}
        <div className="flex items-center gap-5 text-gray-500 text-[13px] mb-5">
          <div className="flex items-center gap-1.5"><Settings2 size={16} className="text-gray-400"/> {car.transmission}</div>
          <div className="flex items-center gap-1.5"><Users size={16} className="text-gray-400"/> {car.seats}</div>
        </div>

        {/* Harga */}
        <div className="mt-auto">
          <p className="text-[12px] text-gray-400 mb-0.5">Start from</p>
          <p className="font-bold text-[17px] text-gray-900">
            {car.lepasKunci === 'Unavailable' ? 'Call Admin' : `Rp ${formatPrice(car.lepasKunci)}`}
          </p>
        </div>
      </div>
    </div>
  );
}