import React, { useState, useEffect } from 'react';
import { ArrowLeft, Clock, Star } from 'lucide-react';
import { tour3D2N } from '../data/tour3D2NData';
import { initialReviewsData } from '../data/dataReview';
import { carsData } from '../data/carsData';
import { driverData } from '../data/driverData';

export default function TourDetail({ navigateTo }) {
  const [selectedPax, setSelectedPax] = useState('2-3 PAX');
  const [selectedHotel, setSelectedHotel] = useState('TANPA HOTEL');
  const [selectedHari1, setSelectedHari1] = useState('Pilihan 1');
  const [selectedHari2, setSelectedHari2] = useState('Hari 2 A (Gili Trawangan)');
  const [selectedCar, setSelectedCar] = useState('');

  // State untuk Review & LocalStorage
  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [reviewerName, setReviewerName] = useState('');
  const [reviewText, setReviewText] = useState('');

  // 1. Ambil data review dari LocalStorage saat halaman dimuat
  useEffect(() => {
    const savedReviews = localStorage.getItem('hartaTransReviews');
    if (savedReviews) {
      setReviews(JSON.parse(savedReviews));
    } else {
      // Jika kosong, gunakan data dummy dari js, dan simpan ke LocalStorage
      setReviews(initialReviewsData);
      localStorage.setItem('hartaTransReviews', JSON.stringify(initialReviewsData));
    }
  }, []);

  // Filter hanya review yang ID tour-nya cocok dengan tour ini
  const currentTourReviews = reviews.filter(r => r.tourId === tour3D2N.id);

  const formatPrice = (price) => new Intl.NumberFormat('id-ID').format(price);
  
  // 1. Ambil harga dasar tour dari matriks Hotel & Pax
  const baseTourPrice = tour3D2N.pricing[selectedHotel][selectedPax];
  
  // 2. Cari data mobil yang dipilih dari carsData, ambil harga bbmDriver-nya
  const activeCarData = carsData.find(car => car.name === selectedCar);
  const carPrice = activeCarData && typeof activeCarData.bbmDriver === 'number' ? activeCarData.bbmDriver : 0;
  
  // 3. Totalkan harganya!
  const currentPrice = baseTourPrice + carPrice;

  // 2. Fungsi untuk post dan simpan review ke LocalStorage
  const handleSubmitReview = () => {
    if (!reviewerName || !reviewText || rating === 0) {
      alert("Mohon isi nama, komentar, dan pilih rating bintang ya!");
      return;
    }

    const newReview = {
      id: Date.now(),
      tourId: tour3D2N.id, // Kaitkan review ini dengan Tour 3D2N
      name: reviewerName,
      date: 'Just now',
      rating: rating,
      comment: reviewText
    };

    // Tambahkan review baru ke array
    const updatedReviews = [newReview, ...reviews];
    
    // Update State & Simpan permanen di LocalStorage browser
    setReviews(updatedReviews);
    localStorage.setItem('hartaTransReviews', JSON.stringify(updatedReviews));

    alert("Review berhasil disimpan!");
    setReviewerName('');
    setReviewText('');
    setRating(0);
  };

  return (
    <div className="bg-white min-h-screen pt-8 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-[1200px]">
        
        <button onClick={() => navigateTo('tour')} className="flex items-center text-gray-600 hover:text-[#0B7A3E] font-medium mb-6 transition">
          <ArrowLeft size={18} className="mr-2" /> Kembali ke Daftar Tour
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* KOLOM KIRI (Informasi) */}
          <div className="lg:col-span-2">
            <div className="w-full aspect-[16/9] md:h-[400px] rounded-2xl overflow-hidden mb-8">
              <img src={tour3D2N.image} alt={tour3D2N.title} className="w-full h-full object-cover" />
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">{tour3D2N.title}</h1>
            <p className="text-gray-700 text-[15px] mb-4">{tour3D2N.description}</p>
            <div className="flex items-center text-gray-500 text-sm mb-8">
              <Clock size={16} className="mr-2" /> {tour3D2N.duration}
            </div>

            <h3 className="font-bold text-xl text-gray-900 mb-4 border-b pb-2">Rencana Perjalanan</h3>
            <div className="mb-8 space-y-5">
              <div>
                <h4 className="font-bold text-gray-900 text-md mb-2">{tour3D2N.itinerary.hari1.title}</h4>
                <ul className="text-gray-700 text-sm space-y-1">
                  {tour3D2N.itinerary.hari1.base.map((act, i) => <li key={i}>• {act}</li>)}
                  {tour3D2N.itinerary.hari1.options[selectedHari1].map((act, i) => <li key={`opt-${i}`}>• {act} <span className="text-[#F59E0B] italic text-[11px]">({selectedHari1})</span></li>)}
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-md mb-2">{selectedHari2}</h4>
                <ul className="text-gray-700 text-sm space-y-1">
                  {tour3D2N.itinerary.hari2.options[selectedHari2].map((act, i) => <li key={i}>• {act}</li>)}
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-md mb-2">{tour3D2N.itinerary.hari3.title}</h4>
                <ul className="text-gray-700 text-sm space-y-1">
                  {tour3D2N.itinerary.hari3.activities.map((act, i) => <li key={i}>• {act}</li>)}
                </ul>
              </div>
            </div>

            <h3 className="font-bold text-xl text-gray-900 mb-4 border-b pb-2">INCLUDE</h3>
            <ul className="text-gray-700 text-sm mb-10 space-y-1">
              {tour3D2N.includes.map((inc, i) => <li key={i}>• {inc}</li>)}
            </ul>

            <div className="border-t pt-6 mb-12">
              <p className="text-sm font-bold text-gray-900 mb-1">Harga (Per Pax)</p>
              <p className="text-3xl font-bold text-[#0B7A3E]">Rp {formatPrice(currentPrice)}</p>
            </div>
          </div>

          {/* KOLOM KANAN (Form) */}
          <div className="lg:col-span-1">
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm sticky top-28">
              <h3 className="font-bold text-lg text-gray-900 mb-6">Konfigurasi Perjalanan Tour</h3>
              <div className="space-y-4">
                <div className="flex flex-col">
                  <label className="text-[11px] font-bold text-gray-700 mb-1">Tanggal Tour</label>
                  <input type="date" className="border border-gray-300 rounded-md p-2.5 text-sm w-full focus:outline-none focus:border-[#0B7A3E]" />
                </div>
                {/* DROPDOWN KENDARAAN (Sekarang Terhubung dengan Harga) */}
                <div className="flex flex-col">
                  <label className="text-[11px] font-bold text-gray-700 mb-1">Pilih Kendaraan</label>
                  <select 
                    value={selectedCar}
                    onChange={(e) => setSelectedCar(e.target.value)}
                    className="border border-gray-300 rounded-md p-2.5 text-sm w-full bg-white text-gray-900 font-medium focus:outline-none focus:border-[#0B7A3E]"
                  >
                    <option value="">-- Pilih Kendaraan Anda --</option>
                    <optgroup label="Seri Regular">
                      {carsData.filter(car => car.category === 'regular').map(car => (
                        <option key={car.id} value={car.name}>{car.name}</option>
                      ))}
                    </optgroup>
                    <optgroup label="Seri Bisnis">
                      {carsData.filter(car => car.category === 'bisnis').map(car => (
                        <option key={car.id} value={car.name}>{car.name}</option>
                      ))}
                    </optgroup>
                  </select>
                </div>

                {/* DROPDOWN DRIVER (Ambil dari driverData) */}
                <div className="flex flex-col">
                  <label className="text-[11px] font-bold text-gray-700 mb-1">Pilih Driver</label>
                  <select className="border border-gray-300 rounded-md p-2.5 text-sm w-full bg-white text-gray-900 font-medium focus:outline-none focus:border-[#0B7A3E]">
                    <option value="">-- Pilih Driver Anda --</option>
                    {driverData.map(driver => (
                      <option key={driver.id} value={driver.name}>{driver.name}</option>
                    ))}
                  </select>
                </div>
                <div className="flex flex-col">
                  <label className="text-[11px] font-bold text-gray-700 mb-1">Pilihan Hari 1</label>
                  <select value={selectedHari1} onChange={(e) => setSelectedHari1(e.target.value)} className="border border-gray-300 rounded-md p-2.5 text-sm w-full bg-white text-gray-900 font-medium focus:outline-none focus:border-[#0B7A3E]">
                    {Object.keys(tour3D2N.itinerary.hari1.options).map(opt => <option key={opt} value={opt}>{opt}</option>)}
                  </select>
                </div>
                <div className="flex flex-col">
                  <label className="text-[11px] font-bold text-gray-700 mb-1">Pilihan Hari 2</label>
                  <select value={selectedHari2} onChange={(e) => setSelectedHari2(e.target.value)} className="border border-gray-300 rounded-md p-2.5 text-sm w-full bg-white text-gray-900 font-medium focus:outline-none focus:border-[#0B7A3E]">
                    {Object.keys(tour3D2N.itinerary.hari2.options).map(opt => <option key={opt} value={opt}>{opt}</option>)}
                  </select>
                </div>
                <div className="flex flex-col">
                  <label className="text-[11px] font-bold text-gray-700 mb-1">Penginapan</label>
                  <select value={selectedHotel} onChange={(e) => setSelectedHotel(e.target.value)} className="border border-gray-300 rounded-md p-2.5 text-sm w-full bg-white text-gray-900 font-medium focus:outline-none focus:border-[#0B7A3E]">
                    {Object.keys(tour3D2N.pricing).map(hotel => <option key={hotel} value={hotel}>{hotel}</option>)}
                  </select>
                </div>
                <div className="flex flex-col">
                  <label className="text-[11px] font-bold text-gray-700 mb-1">Jumlah Orang Dalam Tour</label>
                  <select value={selectedPax} onChange={(e) => setSelectedPax(e.target.value)} className="border border-gray-300 rounded-md p-2.5 text-sm w-full bg-white text-gray-900 font-medium focus:outline-none focus:border-[#0B7A3E]">
                    {tour3D2N.paxOptions.map(pax => <option key={pax} value={pax}>{pax}</option>)}
                  </select>
                </div>
              </div>
              <button className="w-full bg-[#F59E0B] text-white font-bold py-3.5 rounded-md mt-6 shadow-md hover:bg-amber-600 transition flex items-center justify-center gap-2 text-sm">
                 Masukkan ke Keranjang Tour
              </button>
            </div>
          </div>
        </div>

        {/* ========================================= */}
        {/* HASIL REVIEW KHUSUS PAGE INI */}
        {/* ========================================= */}
        <div className="max-w-4xl mx-auto mt-20">
          <h3 className="font-bold text-2xl text-[#0B7A3E] mb-8 text-center uppercase tracking-wide">Ulasan Pelanggan</h3>
          
          {currentTourReviews.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {currentTourReviews.map((review) => (
                <div key={review.id} className="bg-white p-6 rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.06)] border border-gray-100 flex flex-col">
                  <h4 className="font-bold text-gray-900 text-[17px]">{review.name}</h4>
                  <p className="text-xs text-gray-400 mb-4">{review.date}</p>
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className={i < review.rating ? "text-[#F59E0B] fill-[#F59E0B]" : "text-gray-200 fill-gray-200"} />
                    ))}
                  </div>
                  <p className="text-[15px] text-gray-700 leading-relaxed italic line-clamp-4">"{review.comment}"</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500 bg-gray-50 py-10 rounded-xl border border-dashed">Belum ada ulasan untuk tour ini. Jadilah yang pertama memberikan review!</p>
          )}
        </div>

        {/* ========================================= */}
        {/* FORM KOMENTAR */}
        {/* ========================================= */}
        <div className="max-w-4xl mx-auto border border-gray-200 p-8 md:p-10 rounded-xl bg-[#FAFAFA] mt-12 shadow-sm">
          <h3 className="font-bold text-xl mb-2 text-gray-900">Leave a Comment</h3>
          <p className="text-xs text-gray-500 mb-8">Your email address will not be published. Required fields are marked *</p>
          
          <textarea 
            placeholder="Type here..." 
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
            className="w-full bg-gray-200 border-none rounded-md p-4 text-sm mb-6 h-32 focus:outline-none focus:ring-2 focus:ring-[#0B7A3E]"
          ></textarea>
          
          <div className="flex flex-col md:flex-row md:items-center gap-6 mb-6">
             <input 
               type="text" 
               placeholder="Name *" 
               value={reviewerName}
               onChange={(e) => setReviewerName(e.target.value)}
               className="bg-gray-200 border-none rounded-md p-3 text-sm w-full md:w-1/2 focus:outline-none focus:ring-2 focus:ring-[#0B7A3E]" 
             />
             
             <div className="flex gap-1 items-center">
               <span className="text-sm text-gray-500 mr-2">Rating:</span>
               {[1, 2, 3, 4, 5].map((star) => (
                 <Star 
                   key={star} 
                   size={24} 
                   className={`cursor-pointer transition-colors duration-200 ${
                     star <= (hoverRating || rating) ? "text-[#F59E0B] fill-[#F59E0B]" : "text-gray-300 fill-gray-300"
                   }`}
                   onClick={() => setRating(star)}
                   onMouseEnter={() => setHoverRating(star)}
                   onMouseLeave={() => setHoverRating(0)}
                 />
               ))}
             </div>
          </div>
          
          <div className="flex items-center gap-3 mb-8">
             <input type="checkbox" id="saveInfo" className="rounded text-[#0B7A3E] w-4 h-4 cursor-pointer" />
             <label htmlFor="saveInfo" className="text-xs text-gray-500 cursor-pointer">
               Save my name, email, and website in this browser for the next time I comment.
             </label>
          </div>
          
          <button onClick={handleSubmitReview} className="bg-[#0B7A3E] hover:bg-green-700 text-white text-sm font-bold px-8 py-3 rounded-md transition shadow-md">
            Post Comment
          </button>
        </div>

      </div>
    </div>
  );
}