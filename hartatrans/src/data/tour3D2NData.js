import img3D2N from '../assets/tours/3d2n.webp';

export const tour3D2N = {
  id: 'ph1',
  title: 'Trip Lombok 3D2N',
  image: img3D2N,
  duration: '3 Hari 2 Malam',
  description: 'Eksplorasi mendalam wisata Lombok mulai dari pantai hingga pegunungan Rinjani (Area kaki gunung).',
  
  // ITINERARY DINAMIS
  itinerary: {
    hari1: {
      title: 'Hari 1',
      base: ['Penjemputan di Bandara', 'Desa Adat Sukerare', 'Desa Adat Sade', 'Pantai Kuta'],
      options: {
        'Pilihan 1': ['Bukit Merese', 'Pantai Tanjung Aan'],
        'Pilihan 2': ['Pantai Mawun', 'Pantai Selong Belanak']
      }
    },
    hari2: {
      title: 'Hari 2',
      options: {
        'Hari 2 A (Gili Trawangan)': ['Villa Hantu', 'Bukit Malimbu', 'Bukit Malaka', 'Pantai Kecinan', 'Gili Air, Meno, dan Trawangan (Snorkling)'],
        'Hari 2 B (Gili Nanggu)': ['Gili Nanggu', 'Gili Sudak', 'Gili Kedis'],
        'Hari 2 C (Pantai Pink)': ['Pantai Pink 3', 'Snorkling', 'Pantai Pink 1', 'Bukit Tangsi', 'Pulau Pasir'],
        'Hari 2 D (Sembalun)': ['Rest Area', 'Bukit Selong', 'Kedai Sawah', 'Kebun Strawberry', 'Puncak Sembalun'],
        'Hari 2 E (Air Terjun)': ['Bukit Malimbu', 'Bukit Malaka', 'Air Terjun Tiu Kelep', 'Air Terjun Sendang Gile']
      }
    },
    hari3: {
      title: 'Hari 3',
      activities: ['Pusat Oleh Oleh', 'Masjid Islamic Centre NTB', 'Desa Banyumulek', 'Pengantaran Ke Bandara / Pelabuhan']
    }
  },
  
  // Data Include
  includes: ['Mobil + Sopir + BBM', 'Hotel', 'Air mineral', 'Private Boat', 'Alat Snorkling', 'Guide', 'Makan Selama Trip', 'Tiket masuk semua wisata', 'Dokumentasi'],

  // Opsi Pax (Jumlah Orang)
  paxOptions: ['2-3 PAX', '4-5 PAX', '6-10 PAX', '11-13 PAX', '14-20 PAX', '21-30 PAX', '31-50 PAX'],

  // Matriks Harga
  pricing: {
    'TANPA HOTEL': { '2-3 PAX': 2200000, '4-5 PAX': 2150000, '6-10 PAX': 2100000, '11-13 PAX': 2050000, '14-20 PAX': 2000000, '21-30 PAX': 1950000, '31-50 PAX': 1900000 },
    'CENTRAL INN (HOTEL *2)': { '2-3 PAX': 2500000, '4-5 PAX': 1800000, '6-10 PAX': 1750000, '11-13 PAX': 1700000, '14-20 PAX': 1650000, '21-30 PAX': 1600000, '31-50 PAX': 1550000 },
    'DIVA LOMBOK (HOTEL *3)': { '2-3 PAX': 2700000, '4-5 PAX': 2000000, '6-10 PAX': 1950000, '11-13 PAX': 1900000, '14-20 PAX': 1850000, '21-30 PAX': 1800000, '31-50 PAX': 1750000 },
    'ARUNA SENGGIGI (HOTEL *4)': { '2-3 PAX': 2900000, '4-5 PAX': 2200000, '6-10 PAX': 2150000, '11-13 PAX': 2100000, '14-20 PAX': 2050000, '21-30 PAX': 2000000, '31-50 PAX': 1950000 },
    'MERUMATTA (HOTEL *5)': { '2-3 PAX': 3400000, '4-5 PAX': 2700000, '6-10 PAX': 2650000, '11-13 PAX': 2600000, '14-20 PAX': 2550000, '21-30 PAX': 2500000, '31-50 PAX': 2450000 },
    'SVARGA (RESORT)': { '2-3 PAX': 3100000, '4-5 PAX': 2400000, '6-10 PAX': 2350000, '11-13 PAX': 2300000, '14-20 PAX': 2250000, '21-30 PAX': 2200000, '31-50 PAX': 2150000 },
    'JEEVA SANTAI (VILLA)': { '2-3 PAX': 3500000, '4-5 PAX': 2800000, '6-10 PAX': 2750000, '11-13 PAX': 2700000, '14-20 PAX': 2650000, '21-30 PAX': 2600000, '31-50 PAX': 2550000 }
  }
};