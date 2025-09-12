// Menunggu seluruh konten halaman dimuat sebelum menjalankan script
document.addEventListener('DOMContentLoaded', function() {

    // ===================================
    // === FUNGSI SCROLL TO TOP BUTTON ===
    // ===================================
    const scrollToTopBtn = document.getElementById('scroll-to-top-btn');

    // Tampilkan tombol jika pengguna scroll ke bawah sejauh 200px
    window.onscroll = function() {
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            scrollToTopBtn.style.display = "flex";
        } else {
            scrollToTopBtn.style.display = "none";
        }
    };

    // Saat tombol di-klik, scroll halaman ke paling atas dengan mulus
    scrollToTopBtn.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });


    // =====================================
    // === FUNGSI TRANSLATE (GANTI BAHASA) ===
    // =====================================
    const translateBtn = document.getElementById('translate-btn');
    // 1. Definisikan semua teks dalam dua bahasa
    const translations = {
        // Teks untuk Navigasi (ini "kamus"-nya)
        'nav-home': { id: 'Home', en: 'Home' },
        'nav-about': { id: 'Tentang Kami', en: 'About Us' },
        'nav-product': { id: 'Produk', en: 'Product' },
        'nav-product-discus': { id: 'Ikan Discus', en: 'Discus Fish' },
        'nav-product-arwana': { id: 'Ikan Arwana', en: 'Arowana Fish' },
        'nav-product-food': { id: 'Pakan Ikan', en: 'Fish Food' },
        'nav-product-meds': { id: 'Obat-obatan Ikan', en: 'Fish Medicine' },
        'nav-product-supplies': { id: 'Perlengkapan Ikan', en: 'Fish Supplies' },
        'nav-product-aquazen': { id: 'Aquazen', en: 'Aquazen' },
        'nav-sponsor': { id: 'Sponsor', en: 'Sponsor' },
        'nav-contact': { id: 'Hubungi Kami', en: 'Contact Us' },
        
        // Teks untuk Halaman Index (Hero Section)
        'hero-title': { id: 'CARI DISCUS? <br> DI RICHIE FARM AJA..', en: 'LOOKING FOR DISCUS? <br> RICHIE FARM IS THE PLACE..' },
        'passion-title': { id: 'DIMULAI DARI KECINTAAN', en: 'IT\'S BORN FROM PASSION' },
        
        // Teks Halaman Index
        'passion-desc': {
            id: 'Ikan Discus berasal dari Sungai Amazon Brazil, telah mencuri hati para hobiis di seluruh dunia. Mereka berenang dengan sangat anggun dan memiliki beragam warna cerah, menjadikannya salah satu pilihan terbaik bagi hobiis yang ingin bersantai di rumah setelah seharian bekerja keras.',
            en: 'Discus fish originated from Amazon River Brazil, has stolen hobbyist heart all around the world. They swim very gracefully and have various bright color, make them one of the best choice for hobbyist who want to relax at their home, after whole day of stressful work.'
        },
        'quote-text': {
            id: 'KAMI, Richie Farm, sungguh percaya bahwa Ikan dapat merasakan cinta kita. Jika kita memberikan yang terbaik, mereka pasti akan membalasnya dan berkata "Terima Kasih" dengan menunjukkan bentuk dan warna terbaiknya kepada kita. <br> Ikan Bahagia, Hidup Bahagia ❤️',
            en: 'WE, Richie Farm, truly believe that Fish can feel our love. If we give them our best, surely they will pay us back and say "Thank You" by showing their best form and color to us. <br> Happy Fish, Happy Life ❤️'
        },
        'specialize-title': {
            id: 'PILIH SESUAI KEINGINAN ANDA',
            en: 'HAVE IT YOUR WAY'
        },
        'specialize-subtitle': {
            id: 'IKAN DISCUS SPESIAL KAMI',
            en: 'OUR SPECIALIZE DISCUS FISH'
        },
        'fish-sanmerah-title': {
            id: 'SAN MERAH',
            en: 'SAN MERAH'
        },
        'fish-sanmerah-desc': {
            id: 'Signature 2024 kami dari galur snow, bercak di kepala dengan pola seluruh badan sangat langka. Strain ini bisa menjadi milik Anda...',
            en: 'Our 2024 Signature from snow line, head spotted with full body pattern is very rare. This Strain can be yours...'
        },
        'fish-grd-title': {
            id: 'GOLDEN RED DIAMOND',
            en: 'GOLDEN RED DIAMOND'
        },
        'fish-grd-desc': {
            id: 'Terkenal dengan corak dan warnanya yang mengesankan. Tentu saja galur ini memiliki kelasnya sendiri di hati para hobiis. Tumbuh dengan baik di Akuarium tanam.',
            en: 'Famous for its impressive pattern and color. For sure this line up its own class in hobbyist heart. Thrive well in Planted Aquarium.'
        },
        'fish-redcover-title': {
            id: 'RED COVER',
            en: 'RED COVER'
        },
        'fish-redcover-desc': {
            id: 'Tidak ada waktu yang lebih baik dari sekarang untuk mengunjungi Richie Farm dan memilih discus Anda untuk mencerahkan akuarium Anda di rumah.',
            en: 'There will be no better time than right now to visit Richie Farm and pick your discus to brighten up your aquarium at home.'
        },

        // Teks Footer
        'footer-tagline': {
            id: 'Ikan Bersih, Sehat, & Berkualitas Tinggi',
            en: 'Clean, Healthy, & High Quality Fish'
        },
        'footer-title-nav': {
            id: 'Navigasi',
            en: 'Navigation'
        },
        'footer-title-contact': {
            id: 'Hubungi Kami',
            en: 'Contact Us'
        },
        'footer-title-address': {
            id: 'Alamat',
            en: 'Address'
        },
        'footer-address': {
            id: 'Jl. Dharma Kencana Blok A No. 23, Jakarta, Indonesia 11750',
            en: 'Jl. Dharma Kencana Blok A No. 23, Jakarta, Indonesia 11750'
        }
    };

    // 2. Cek bahasa yang tersimpan di browser, default ke 'id' (Indonesia)
    let currentLang = localStorage.getItem('lang') || 'id';

    // 3. Fungsi untuk mengganti bahasa
    function setLanguage(lang) {
        // Simpan pilihan bahasa pengguna
        localStorage.setItem('lang', lang);
        currentLang = lang;

        // Loop semua elemen yang punya atribut data-lang
        document.querySelectorAll('[data-lang]').forEach(el => {
            const key = el.getAttribute('data-lang');
            if (translations[key] && translations[key][lang]) {
                el.innerHTML = translations[key][lang];
            }
        });
    }

    // 4. Event listener untuk tombol translate
    translateBtn.addEventListener('click', function(e) {
        e.preventDefault();
        const newLang = currentLang === 'id' ? 'en' : 'id';
        setLanguage(newLang);
    });

    // 5. Terapkan bahasa saat halaman pertama kali dimuat
    setLanguage(currentLang);

});