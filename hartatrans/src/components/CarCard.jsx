import React from 'react';

export default function CarCard({ car, navigateTo }) {
  // Fungsi format harga (mengecek apakah angka atau tulisan 'Unavailable')
  const formatPrice = (price) => {
    if (price === 'Unavailable') return <span className="text-red-500 font-bold text-sm">Unavailable</span>;
    return `Rp ${price.toLocaleString('id-ID')}`;
  };

  return (
    <div 
      onClick={() => navigateTo('detail_mobil', car)} 
      className="w-full mx-auto bg-white rounded-xl md:rounded-3xl shadow-md hover:shadow-lg border border-gray-100 flex flex-col cursor-pointer group relative overflow-hidden transition-transform hover:-translate-y-1"
    >
      
      {/* Gambar Mobil */}
      <div className="h-[120px] sm:h-[180px] md:h-[220px] lg:h-[250px] w-full flex items-center justify-center p-4">
         <img 
           src={car.img} 
           alt={car.name} 
           className="w-full h-full object-contain group-hover:scale-105 transition duration-500 drop-shadow-xl mix-blend-multiply" 
         />
      </div>

      {/* Detail Harga & Info */}
      <div className="px-4 pb-5 md:px-6 md:pb-6 flex-grow flex flex-col justify-end bg-white z-20">
         <h3 className="font-bold text-lg md:text-[22px] text-black mb-3 border-b pb-2">{car.name}</h3>
         
         <div className="flex flex-col gap-2 mb-4">
            {/* Harga Lepas Kunci */}
            <div className="flex justify-between items-center bg-gray-50 p-2 rounded-lg">
               <span className="text-gray-500 text-[10px] md:text-xs font-semibold">Lepas Kunci</span>
               <div className="text-right">
                  <p className="font-bold text-[#0B7A3E] text-xs md:text-sm">{formatPrice(car.lepasKunci)}</p>
                  {car.lepasKunci !== 'Unavailable' && <span className="text-[8px] md:text-[10px] text-gray-400">/ 24 Jam</span>}
               </div>
            </div>

            {/* Harga BBM + Driver */}
            <div className="flex justify-between items-center bg-green-50 p-2 rounded-lg">
               <span className="text-[#0B7A3E] text-[10px] md:text-xs font-bold">BBM + Driver</span>
               <div className="text-right">
                  <p className="font-bold text-[#0B7A3E] text-xs md:text-sm">{formatPrice(car.bbmDriver)}</p>
                  <span className="text-[8px] md:text-[10px] text-gray-500">/ 12 Jam</span>
               </div>
            </div>
         </div>

         <button className="w-full bg-[#F59E0B] text-white py-2 rounded-lg text-sm font-bold hover:bg-amber-600 transition shadow-sm">
           Order Here
         </button>
      </div>
    </div>
  );
}