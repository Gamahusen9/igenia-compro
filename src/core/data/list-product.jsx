export default function getProductList() {
    return [
        {
            id: 1,
            title: 'KOPITA (Aplikasi Koperasi Umum & Karyawan)',
            img: '/assets/products/project-kopita.png',
            faceImg: '/assets/products/mockup-laptop-kopita.png',
            description: 'Aplikasi yang dirancang untuk membantu mengelola operasional koperasi secara lebih efisien dan terintegrasi. Koperasi sebagai lembaga ekonomi yang dimiliki dan dikelola oleh anggotanya memerlukan sistem manajemen yang baik untuk mengelola simpanan, pinjaman, pembagian SHU (Sisa Hasil Usaha), dan aktivitas lainnya. ',
            features: [
                'Manajemen anggota',
                'Manajemen simpanan',
                'Manajemen pinjaman',
                'Laporan keuangan',
                'Manajemen inventaris',
                'Notifikasi dan reminder',
                'Keamanan data',
                'Integrasi dengan sistem & perangkat lain',
                'POS (Point of Sale)',
            ],
            techSpec: 'Java, Postgree SQL, Laravel, Linux',
            availableVersions: ['Web Apps', 'Mobile Apps (pengembangan tambahan)', 'Dapat dimodifikasi (Fully Customize)', 'White Label / Full Source', 'SAS (Software as a Service)'],
            mockups: [
                { type: 'desktop', img: '/assets/products/mockups/kopita-1.png' },
                { type: 'desktop', img: '/assets/products/mockups/kopita-2.png' },
                { type: 'desktop', img: '/assets/products/mockups/kopita-3.png' },
            ]
        },
        {
            id: 2,
            title: 'Mobi (Aplikasi Mobile Digital)',
            img: '/assets/products/project-mobi.png',
            faceImg: '/assets/products/platforms/mobile-platform.png',
            description: 'Aplikasi mobile banking digital dengan banyak fitur transaksional di dalamnya. sudah memenuhi standarisasi regulasi. Membangun Aplikasi digital, Pelaku usaha digital dan startup memerlukan effort sangat besar besar dari sisi biaya, SDM, waktu, hingga bisnis model. Mobi hadir untuk membantu para pelaku usaha digital dan startup dapat bergerak cepat dalam perkembangan pasar yang cepat..',
            features: [
                'QRIS',
                'Laporan',
                'Channelling ',
                'Nasabah',
                'Kartu',
                'Transfer',
                'Security Access',
                'Mutasi',
                'Modul Backoffice',
            ],
            techSpec: 'Java, Laravel, Postgree SQL, Linux, IOS, Kubernetes, Docker, Flutter',
            availableVersions: ['Mobile Android', 'Mobile IOS', 'Dapat dimodifikasi (Fully Customize)', 'White Label / Full Source'],
            mockups: [
                { type: 'mobile', img: '/assets/products/mockups/mobi-1.png' },
                { type: 'mobile', img: '/assets/products/mockups/mobi-2.png' },
            ]
        },
        {
            id: 3,
            title: 'EKO (ERP Kontraktor)',
            img: '/assets/products/project-bro.png',
            faceImg: '/assets/products/mockup-laptop-bro.png',
            description: 'Aplikasi ERP Sipil untuk kontraktor sekala kecil dan menengah ini hadir untuk memenuhi kebutuhan pelaku bisnis kontraktor, dimana aplikasi ini dibuat End to End mulai dari proses pendafaran calon nasabah, proses penwaran, pelaksanaan, hingga penutupan, Aplikasi ini dilengkapi dengan database AHSP yang sudah sesuai dengan standar perhitungan nasional.',
            features: [
                'Modul Customer',
                'Menu Sipil',
                'Menu Manager',
                'Menu Arsitek',
                'Modul AHSP',
                'Menu Marketing',
                'Menu Site Engineer',
                'Menu Stock Barang',
                'Menu Laporan, Proposal, dan adminitratif',
                'Menu User, Akuntasi, dan Menu',
            ],
            techSpec: 'Java, Laravel, Linux, Postgree SQL',
            availableVersions: ['Web Apps', 'Mobile Apps (pengembangan tambahan)', 'Dapat dimodifikasi (Fully Customize)', 'White Label / Full Source', 'SAS (Software as a Service)'],
            mockups: [
                { type: 'desktop', img: '/assets/products/mockups/bro-1.png' },
                { type: 'desktop', img: '/assets/products/mockups/bro-2.png' },
                { type: 'desktop', img: '/assets/products/mockups/bro-3.png' }
            ]
        },
        {
            id: 4,
            title: 'Payow (POS dan Warung Digital)',
            img: '/assets/products/project-payow.png',
            faceImg: '/assets/products/platforms/hybrid-platform.png',
            description: 'Produk utama IGENIA , POS yang berbasis B2B, B2C, dan C2C dimana para pengguna dan pelaku bisnis dapat menggunakan untuk menjual berbagai produk digital mulai dari pembayaran, tiket, PPOB, hingga voucher kepada para pelanggan atau anggotanya.',
            features: [
                'Modul Customer',
                'Modul POS',
                'Modul Payment',
                'Modul Channeling',
                'Modul Wallet',
                'Backoffice',
                'Modul Pegawai',
                'Modul QRIS',
                'Dapat di Kosumisasi',
            ],
            techSpec: 'Java, Laravel, Postgree SQL, Flutter, Android, IOS, React JS, Docker, Kubernetes, Linux',
            availableVersions: ['Mobile Android', 'Mobile IOS', 'Dapat dimodifikasi (Fully Customize)', 'White Label / Full Source'],
            mockups: [
                { type: 'desktop', img: '/assets/products/mockups/crm-desktop.png' },
                { type: 'mobile', img: '/assets/products/mockups/crm-mobile.png' }
            ]
        },
        {
            id: 5,
            title: 'PANDAWA (Protection and Data Warden)',
            img: '/assets/products/project-pandawa.png',
            faceImg: '/assets/products/platforms/web-platform.png',
            description: 'Aplikasi yang dirancang untuk membantu pengguna melindungi informasi pribadi mereka dari akses yang tidak sah, kebocoran data, atau penyalahgunaan. Dengan meningkatnya ancaman keamanan siber dan pelanggaran data, aplikasi semacam ini menjadi semakin penting bagi individu dan organisasi. aplikasi ini juga sudah di sesuaikan dengan kebutuhan standar Undang-Undang Nomor 27 Tahun 2022 tentang Perlindungan Data Pribadi (UU PDP) yang disahkan pada 17 Oktober 2022.',
            features: [
                'Enkripsi Data',
                'Manajemen Akses User',
                'Manajemen Akses Perangkat dan Jaringan',
                'OCR (Optical Character Recognition)',
                'Pemblokiran Pelacakan',
                'Penyimpanan Aman',
                'Pemantauan Jejak Digitakal',
                'Pengingat dan Notifikasi'
            ],
            techSpec: 'Java, Laravel, Postgree SQL, Linux, React JS',
            availableVersions: ['Web Apps', 'Mobile Apps (pengembangan tambahan)', 'Dapat dimodifikasi (Fully Customize)', 'White Label / Full Source', 'SAS (Software as a Service)'],
            mockups: [
                { type: 'desktop', img: '/assets/products/mockups/pandawa-1.png' },
                { type: 'desktop', img: '/assets/products/mockups/pandawa-2.png' },
                { type: 'desktop', img: '/assets/products/mockups/pandawa-3.png' },
            ]
        },
        {
            id: 6,
            title: 'ARJUNA (Aplikasi Rekam Jejak Uang Nasabah)',
            img: '/assets/products/project-arjuna.png',
            faceImg: '/assets/products/platforms/hybrid-platform.png',
            description: 'Aplikasi yang dirancang untuk membantu pengguna melindungi informasi pribadi mereka dari akses yang tidak sah, kebocoran data, atau penyalahgunaan. Dengan meningkatnya ancaman keamanan siber dan pelanggaran data, aplikasi semacam ini menjadi semakin penting bagi individu dan organisasi. aplikasi ini juga sudah di sesuaikan dengan kebutuhan standar Undang-Undang Nomor 27 Tahun 2022 tentang Perlindungan Data Pribadi (UU PDP) yang disahkan pada 17 Oktober 2022.',
            features: [
                'Enkripsi Data',
                'Manajemen Akses User',
                'Manajemen Akses Perangkat dan Jaringan',
                'OCR (Optical Character Recognition)',
                'Pemblokiran Pelacakan',
                'Penyimpanan Aman',
                'Pemantauan Jejak Digitakal',
                'Pengingat dan Notifikasi'
            ],
            techSpec: 'Java, Laravel, Postgree SQL, Linux, React JS',
            availableVersions: ['Web Apps', 'Mobile Apps (pengembangan tambahan)', 'Dapat dimodifikasi (Fully Customize)', 'White Label / Full Source', 'SAS (Software as a Service)'],
            mockups: [
            ]
        },
    ];
}