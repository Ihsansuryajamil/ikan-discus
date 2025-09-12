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
        },
        'about-title': { id: 'Tentang Richie Farm', en: 'About Richie Farm' },
        'about-subtitle': { id: 'Dedikasi Kami untuk Kualitas Akuatik Terbaik.', en: 'Our Dedication to the Best Aquatic Quality.' },
        'about-profile-title': { id: 'Profil Perusahaan', en: 'Company Profile' },
        'about-profile-desc1': { id: '<strong>Richie Farm</strong> adalah pembudidaya dan pemasok ikan hias premium terkemuka di Indonesia, yang berfokus pada Ikan Discus dan Arwana berkualitas tinggi. Berawal dari hasrat mendalam terhadap dunia akuatik, kami telah berkembang menjadi nama tepercaya bagi para hobiis, kolektor, dan reseller di seluruh negeri maupun mancanegara.', en: '<strong>Richie Farm</strong> is a leading breeder and supplier of premium ornamental fish in Indonesia, focusing on high-quality Discus and Arowana. Starting from a deep passion for the aquatic world, we have grown into a trusted name for hobbyists, collectors, and resellers throughout the country and abroad.' },
        'about-profile-desc2': { id: 'Kami menggabungkan metode pembiakan modern dengan pengalaman bertahun-tahun untuk menghasilkan ikan dengan genetik unggul, warna cerah, dan kesehatan optimal. Di Richie Farm, setiap ikan adalah karya seni yang kami rawat dengan penuh cinta.', en: 'We combine modern breeding methods with years of experience to produce fish with superior genetics, vibrant colors, and optimal health. At Richie Farm, every fish is a work of art that we care for with love.' },
        'about-vision-title': { id: 'Visi Kami', en: 'Our Vision' },
        'about-vision-desc': { id: 'Menjadi acuan utama bagi para pencinta ikan hias di Asia Tenggara untuk kualitas, inovasi, dan layanan terbaik.', en: 'To become the main reference for ornamental fish enthusiasts in Southeast Asia for the best quality, innovation, and service.' },
        'about-mission-title': { id: 'Misi Kami', en: 'Our Mission' },
        'about-mission-1': { id: 'Menghasilkan ikan hias dengan standar kualitas ekspor.', en: 'To produce ornamental fish with export quality standards.' },
        'about-mission-2': { id: 'Memberikan edukasi dan dukungan terbaik bagi pelanggan.', en: 'To provide the best education and support for customers.' },
        'about-mission-3': { id: 'Membangun jaringan reseller yang solid dan saling menguntungkan.', en: 'To build a solid and mutually beneficial reseller network.' },
        'about-mission-4': { id: 'Terus berinovasi dalam teknik pembiakan dan perawatan.', en: 'To continuously innovate in breeding and care techniques.' },
        'about-advantages-title': { id: 'Keunggulan Kami', en: 'Our Advantages' },
        'about-advantages-subtitle': { id: 'Alasan mengapa Richie Farm adalah pilihan terbaik Anda.', en: 'The reason why Richie Farm is your best choice.' },
        'about-advantage1-title': { id: 'Garansi Kualitas', en: 'Quality Guarantee' },
        'about-advantage1-desc': { id: 'Kami menjamin setiap ikan yang kami kirim dalam kondisi sehat, aktif, dan sesuai dengan deskripsi. Kepuasan Anda adalah prioritas utama kami.', en: 'We guarantee every fish we send is in a healthy, active, and as-described condition. Your satisfaction is our top priority.' },
        'about-advantage2-title': { id: 'Standar Kualitas Ekspor', en: 'Export Quality Standards' },
        'about-advantage2-desc': { id: 'Ikan kami telah memenuhi standar kualitas internasional, baik dari segi ukuran, bentuk tubuh, warna, maupun kesehatan, menjadikannya layak untuk pasar global.', en: 'Our fish have met international quality standards, in terms of size, body shape, color, and health, making them worthy for the global market.' },
        'about-advantage3-title': { id: 'Jaringan Reseller Luas', en: 'Extensive Reseller Network' },
        'about-advantage3-desc': { id: 'Kami memiliki jaringan reseller tepercaya yang tersebar di berbagai kota, memudahkan Anda untuk mendapatkan produk kami dengan lebih cepat dan mudah.', en: 'We have a trusted reseller network spread across various cities, making it easier for you to get our products faster and more conveniently.' },

        // Halaman Produk
        'product-title': { id: 'Produk Unggulan Kami', en: 'Our Featured Products' },
        'product-subtitle': { id: 'Temukan semua kebutuhan akuatik Anda di sini.', en: 'Find all your aquatic needs here.' },
        'product-discus-title': { id: 'Ikan Discus', en: 'Discus Fish' },
        'product-discus-desc': { id: 'Koleksi Ikan Discus dengan warna-warni memukau dan genetik superior, cocok untuk memperindah akuarium Anda.', en: 'A collection of Discus Fish with stunning colors and superior genetics, perfect for beautifying your aquarium.' },
        'product-discus-btn': { id: 'Lihat Koleksi', en: 'View Collection' },
        'product-arwana-title': { id: 'Ikan Arwana', en: 'Arowana Fish' },
        'product-arwana-desc': { id: 'Ikan Arwana premium dengan sisik metalik dan anatomi sempurna. Simbol kemewahan dan keberuntungan.', en: 'Premium Arowana fish with metallic scales and perfect anatomy. A symbol of luxury and good fortune.' },
        'product-arwana-btn': { id: 'Lihat Koleksi', en: 'View Collection' },
        'product-food-title': { id: 'Pakan Ikan', en: 'Fish Food' },
        'product-food-desc': { id: 'Pakan berkualitas tinggi yang diformulasikan khusus untuk memaksimalkan warna dan pertumbuhan ikan kesayangan Anda.', en: 'High-quality food specially formulated to maximize the color and growth of your beloved fish.' },
        'product-food-btn': { id: 'Lihat Produk', en: 'View Product' },
        'product-meds-title': { id: 'Obat-obatan Ikan', en: 'Fish Medicine' },
        'product-meds-desc': { id: 'Solusi efektif untuk menjaga kesehatan ikan Anda. Tersedia berbagai macam obat untuk pencegahan dan pengobatan.', en: 'Effective solutions to maintain the health of your fish. Various medicines are available for prevention and treatment.' },
        'product-meds-btn': { id: 'Lihat Produk', en: 'View Product' },
        'product-supplies-title': { id: 'Perlengkapan Akuarium', en: 'Aquarium Supplies' },
        'product-supplies-desc': { id: 'Dari filter, aerator, hingga dekorasi. Sediakan ekosistem terbaik untuk ikan Anda dengan perlengkapan dari kami.', en: 'From filters, aerators, to decorations. Provide the best ecosystem for your fish with our supplies.' },
        'product-supplies-btn': { id: 'Lihat Produk', en: 'View Product' },
        'product-aquazen-title': { id: 'Aquazen', en: 'Aquazen' },
        'product-aquazen-desc': { id: 'Produk perawatan air inovatif untuk menjaga kualitas air akuarium tetap jernih, sehat, dan stabil.', en: 'Innovative water care products to keep aquarium water clear, healthy, and stable.' },
        'product-aquazen-btn': { id: 'Lihat Produk', en: 'View Product' },
        // Halaman Detail: Ikan Discus
        'detail-discus-title': { id: 'Ikan Discus', en: 'Discus Fish' },
        'detail-discus-desc': {
            id: 'Dikenal sebagai "Raja Akuarium", Ikan Discus kami dibiakkan secara selektif untuk menghasilkan warna yang cerah, bentuk tubuh bulat sempurna, dan karakter yang tenang. Setiap ikan telah melalui proses karantina yang ketat untuk memastikan kesehatannya.',
            en: 'Known as the "King of the Aquarium", our Discus fish are selectively bred to produce bright colors, a perfectly round body shape, and a calm temperament. Each fish has undergone a strict quarantine process to ensure its health.'
        },

        // Halaman Detail: Ikan Arwana
        'detail-arwana-title': { id: 'Ikan Arwana', en: 'Arowana Fish' },
        'detail-arwana-desc': {
            id: 'Ikan Arwana dari Richie Farm adalah puncak keindahan dan prestise. Kami menyediakan varietas unggulan seperti Super Red dan Golden, yang dikenal dengan warna metalik yang menyala dan anatomi tubuh yang proporsional. Setiap Arwana kami dirawat secara khusus untuk menonjolkan bakat genetiknya, menjadikannya bukan sekadar ikan hias, tetapi juga simbol kemewahan dan pembawa keberuntungan bagi pemiliknya.',
            en: 'Arowana from Richie Farm represent the pinnacle of beauty and prestige. We provide superior varieties such as Super Red and Golden, known for their vibrant metallic colors and proportional body anatomy. Each of our Arowana is specially cared for to highlight its genetic potential, making it not just an ornamental fish, but also a symbol of luxury and good fortune for its owner.'
        },

        // Halaman Detail: Pakan Ikan
        'detail-food-title': { id: 'Pakan Ikan Premium', en: 'Premium Fish Food' },
        'detail-food-desc': {
            id: 'Nutrisi adalah kunci utama untuk ikan yang sehat dan menawan. Pakan Ikan Premium kami diformulasikan dari bahan-bahan berkualitas tinggi untuk memenuhi kebutuhan gizi spesifik Ikan Discus dan Arwana. Diperkaya dengan astaxanthin dan spirulina untuk memaksimalkan kecerahan warna, serta protein tinggi untuk pertumbuhan optimal. Berikan yang terbaik bagi ikan Anda, dan saksikan mereka tumbuh sehat dan mempesona.',
            en: 'Nutrition is the key to a healthy and stunning fish. Our Premium Fish Food is formulated from high-quality ingredients to meet the specific nutritional needs of Discus and Arowana. Enriched with astaxanthin and spirulina to maximize color vibrancy, and high in protein for optimal growth. Give your fish the best, and watch them grow healthy and beautiful.'
        },

        // Halaman Detail: Obat Ikan
        'detail-meds-title': { id: 'Obat & Vitamin Ikan', en: 'Fish Medicine & Vitamins' },
        'detail-meds-desc': {
            id: 'Kesehatan ikan Anda adalah prioritas kami. Kami menyediakan rangkaian lengkap obat-obatan dan vitamin yang efektif untuk pencegahan dan pengobatan berbagai penyakit umum pada ikan hias. Produk kami telah teruji aman dan ampuh untuk mengatasi white spot, fin rot, jamur, dan infeksi bakteri. Jaga investasi berharga Anda dengan solusi kesehatan terpercaya dari Richie Farm.',
            en: 'Your fish\'s health is our priority. We provide a complete range of effective medicines and vitamins for the prevention and treatment of various common diseases in ornamental fish. Our products are tested to be safe and effective in treating white spot, fin rot, fungus, and bacterial infections. Protect your valuable investment with trusted health solutions from Richie Farm.'
        },

        // Halaman Detail: Perlengkapan Akuarium
        'detail-supplies-title': { id: 'Perlengkapan Akuarium', en: 'Aquarium Supplies' },
        'detail-supplies-desc': {
            id: 'Ciptakan ekosistem akuatik yang sempurna dengan perlengkapan berkualitas dari kami. Kami menyediakan semua yang Anda butuhkan, mulai dari sistem filtrasi canggih, pemanas air (heater) yang stabil, aerator untuk suplai oksigen maksimal, hingga sistem pencahayaan yang menonjolkan keindahan ikan Anda. Semua produk kami dipilih untuk ketahanan dan performa terbaik, memastikan lingkungan yang sehat dan stabil bagi ikan kesayangan Anda.',
            en: 'Create the perfect aquatic ecosystem with quality supplies from us. We provide everything you need, from advanced filtration systems, stable water heaters, aerators for maximum oxygen supply, to lighting systems that highlight the beauty of your fish. All our products are selected for durability and top performance, ensuring a healthy and stable environment for your beloved fish.'
        },

        // Halaman Detail: Aquazen
        'detail-aquazen-title': { id: 'Aquazen Water Care', en: 'Aquazen Water Care' },
        'detail-aquazen-desc': {
            id: 'Kualitas air adalah fondasi dari akuarium yang sehat. Aquazen adalah rangkaian produk perawatan air eksklusif kami yang dirancang untuk menjaga kondisi air tetap jernih, stabil, dan bebas dari zat berbahaya. Mulai dari penjernih air, bakteri starter, hingga kondisioner, Aquazen membantu menyeimbangkan parameter penting seperti pH dan amonia, menciptakan lingkungan hidup yang ideal bagi ikan Discus dan Arwana.',
            en: 'Water quality is the foundation of a healthy aquarium. Aquazen is our exclusive line of water care products designed to keep water conditions clear, stable, and free from harmful substances. From water clarifiers and starter bacteria to conditioners, Aquazen helps balance important parameters like pH and ammonia, creating an ideal living environment for Discus and Arowana fish.'
        },
        // Halaman Kontak
        'contact-subtitle': { id: 'INFORMASI', en: 'INFORMATION' },
        'contact-title': { id: 'Hubungi Kami', en: 'Contact Us' },
        'contact-intro': { id: 'Kami siap membantu Anda. Jangan ragu untuk menghubungi kami melalui detail di bawah ini atau kunjungi lokasi kami.', en: 'We are ready to help you. Do not hesitate to contact us through the details below or visit our location.' },
        'contact-address-title': { id: 'Alamat', en: 'Address' },
        'contact-address-detail': { id: 'Jl. Dharma Kencana Blok A No. 23, Jakarta, Indonesia 11750', en: 'Jl. Dharma Kencana Block A No. 23, Jakarta, Indonesia 11750' },
        'contact-social-title': { id: 'Media Sosial', en: 'Social Media' },
        'contact-wa-btn': { id: 'Hubungi via WhatsApp', en: 'Contact via WhatsApp' },

        // Halaman Sponsor
        'sponsor-title': { id: 'Kisah Kolaborasi', en: 'Collaboration Stories' },
        'sponsor-subtitle': { id: 'Cerita sukses bersama partner dan klien kami.', en: 'Success stories with our partners and clients.' },
        'sponsor-readmore-btn': { id: 'Baca Selengkapnya', en: 'Read More' },
        'sponsor-card1-watermark': { id: 'KERJASAMA', en: 'PARTNERSHIP' },
        'sponsor-card1-tag': { id: 'Event', en: 'Event' },
        'sponsor-card1-title': { id: 'Richie Farm Sukses Sponsori Kontes Discus Nasional 2025', en: 'Richie Farm Successfully Sponsors the 2025 National Discus Contest' },
        'sponsor-card1-desc': { id: 'Dukungan penuh kami untuk para breeder lokal dalam menampilkan discus kualitas terbaik di panggung nasional.', en: 'Our full support for local breeders in showcasing the best quality discus on the national stage.' },
        'sponsor-card2-watermark': { id: 'KISAH KLIEN', en: 'CLIENT STORY' },
        'sponsor-card2-tag': { id: 'Ekspor', en: 'Export' },
        'sponsor-card2-title': { id: 'Kisah Sukses Ekspor Perdana Ikan Arwana ke Pasar Jepang', en: 'The Success Story of the First Arowana Fish Export to the Japanese Market' },
        'sponsor-card2-desc': { id: 'Menembus pasar yang ketat, kualitas Arwana Richie Farm diakui oleh para kolektor internasional.', en: 'Penetrating a competitive market, the quality of Richie Farm Arowana is recognized by international collectors.' },
        'sponsor-card3-watermark': { id: 'PROYEK', en: 'PROJECT' },
        'sponsor-card3-tag': { id: 'Kolaborasi', en: 'Collaboration' },
        'sponsor-card3-title': { id: 'Kolaborasi dengan Aquascaper Ternama untuk Proyek Galeri', en: 'Collaboration with a Famous Aquascaper for a Gallery Project' },
        'sponsor-card3-desc': { id: 'Menyediakan puluhan ekor Ikan Discus pilihan untuk menjadi primadona dalam karya aquascape terbaru.', en: 'Providing dozens of selected Discus Fish to be the star in the latest aquascape masterpiece.' },

        // Halaman Detail
        'detail-title1': { id: 'Richie Farm Sukses Sponsori Kontes Discus Nasional 2025', en: 'Richie Farm Successfully Sponsors the 2025 National Discus Contest' },
        'detail-meta1': { id: 'Dipublikasikan pada <span class="fw-bold">15 Agustus 2025</span> dalam kategori <a href="#">Event</a>', en: 'Published on <span class="fw-bold">August 15, 2025</span> in <a href="#">Events</a> category' },
        'detail-p1-1': { id: 'Antusiasme para penggemar Ikan Discus mencapai puncaknya pada akhir pekan lalu dalam ajang Kontes Discus Nasional 2025 yang diselenggarakan di Jakarta. Sebagai bentuk komitmen kami terhadap kemajuan komunitas ikan hias di Indonesia, Richie Farm dengan bangga menjadi sponsor utama dalam perhelatan bergengsi ini.', en: 'The enthusiasm of Discus Fish fans reached its peak last weekend at the 2025 National Discus Contest held in Jakarta. As a form of our commitment to the advancement of the ornamental fish community in Indonesia, Richie Farm was proud to be the main sponsor of this prestigious event.' },
        'detail-p1-2': { id: 'Acara ini berhasil menarik ratusan peserta dari berbagai daerah, yang datang untuk memamerkan Ikan Discus hasil budidaya terbaik mereka. Kategori yang dilombakan pun beragam, mulai dari Solid Color, Pattern, hingga kelas paling dinanti, Grand Champion.', en: 'The event successfully attracted hundreds of participants from various regions, who came to exhibit their best-bred Discus Fish. The categories competed were diverse, ranging from Solid Color, Pattern, to the most anticipated class, Grand Champion.' },
        'detail-h2-1': { id: 'Dukungan Penuh untuk Breeder Lokal', en: 'Full Support for Local Breeders' },
        'detail-p1-3': { id: 'CEO Richie Farm, dalam sambutannya, menyatakan bahwa dukungan ini adalah wujud nyata dari misi perusahaan untuk terus mendorong dan mengangkat kualitas breeder lokal ke panggung yang lebih tinggi. "Kami percaya Indonesia memiliki potensi luar biasa dalam budidaya Ikan Discus. Melalui acara seperti ini, kami ingin memberikan platform bagi para breeder untuk menunjukkan karya mereka dan saling bertukar ilmu," ujarnya.', en: 'The CEO of Richie Farm, in his speech, stated that this support is a tangible manifestation of the company\'s mission to continuously encourage and elevate the quality of local breeders to a higher stage. "We believe Indonesia has extraordinary potential in Discus Fish breeding. Through events like this, we want to provide a platform for breeders to showcase their work and exchange knowledge," he said.' },
        'detail-quote1': { id: '<p class="mb-0">"Ini bukan hanya tentang kompetisi, tetapi tentang membangun komunitas yang kuat dan solid."</p>', en: '<p class="mb-0">"This is not just about competition, but about building a strong and solid community."</p>' },
        'detail-p1-4': { id: 'Selain menyediakan hadiah utama untuk pemenang Grand Champion, Richie Farm juga membuka booth edukasi di mana pengunjung dapat berkonsultasi langsung mengenai teknik perawatan, pemilihan pakan, dan penanganan penyakit pada Ikan Discus. Booth kami menjadi salah satu yang paling ramai dikunjungi, menunjukkan tingginya minat masyarakat untuk belajar lebih dalam.', en: 'Besides providing the grand prize for the Grand Champion winner, Richie Farm also opened an educational booth where visitors could consult directly on care techniques, food selection, and disease management for Discus Fish. Our booth was one of the most visited, indicating the high interest of the community to learn more.' },
        'detail-p1-5': { id: 'Kami mengucapkan selamat kepada seluruh pemenang dan berterima kasih kepada semua pihak yang telah menyukseskan acara ini. Sampai jumpa di event selanjutnya!', en: 'We congratulate all the winners and thank all parties who made this event a success. See you at the next event!' },
        'detail-back-btn': { id: 'Kembali ke Semua Cerita', en: 'Back to All Stories' }
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