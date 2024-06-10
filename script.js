//Original Version//
const questions = [


    {
        question: "Perkembangan komputer pribadi seperti IBM PC pada tahun 1980-an memberikan akses kepada masyarakat untuk:", //1/OK/
        answers: [
            { text: "Terhubung dengan antariksa", correct: false },
            { text: "Mengakses informasi dan komunikasi pribadi", correct: true },
            { text: "Menjalankan bisnis besar", correct: false },
            { text: "Menjadi lebih terisolasi secara sosial", correct: false },
            { text: "Mempertahankan gaya hidup tradisional", correct: false },
        ],
    },


    {
        question: "Peran internet dalam komunikasi sosial ditandai oleh:", //2/OK/
        answers: [
            { text: "Munculnya surat kabar cetak", correct: false },
            { text: "Penurunan minat dalam budaya populer", correct: false },
            { text: "Penurunan penggunaan perangkat lunak komputer", correct: false },
            { text: "Peningkatan dalam perdagangan luar negeri", correct: false },
            { text: "Pertumbuhan media sosial dan jejaring online", correct: true },
        ],
    },


    {
        question: " Bagaimana perkembangan komputer telah mengubah cara pendidikan disampaikan dan diterima di masyarakat?", //3/OK/
        answers: [
            { text: "Mengurangi akses ke informasi", correct: false },
            { text: "Mendorong pembelajaran berbasis teknologi", correct: true },
            { text: "Meningkatkan ketidaksetaraan pendidikan", correct: false },
            { text: "Menghambat kemampuan siswa untuk berkolaborasi", correct: false },
            { text: "Meningkatkan kecenderungan plagiarisme", correct: false },
        ],
    },


    {
        question: " Apa dampak positif dari peningkatan aksesibilitas internet di masyarakat?", //4/OK/
        answers: [
            { text: "Peningkatan isolasi sosial", correct: false },
            { text: "Penurunan keterampilan teknologi", correct: false },
            { text: "Peningkatan kolaborasi global", correct: true },
            { text: "Perubahan signifikan dalam kebiasaan makan", correct: false },
            { text: "Penurunan minat dalam berolahraga", correct: false },
        ],
    },

    {
        question: "Bagaimana komputer telah mempengaruhi industri hiburan dan budaya populer?", //5/OK/
        answers: [
            { text: "Mengurangi variasi dalam bentuk hiburan", correct: false },
            { text: "Meningkatkan partisipasi dalam olahraga", correct: false },
            { text: "Memberdayakan seniman untuk bereksperimen", correct: true },
            { text: "Mempercepat hilangnya bahasa dan budaya lokal", correct: false },
            { text: "Meningkatkan minat dalam pertunjukan langsung", correct: false },
        ],
    },


    {

        question: "Siapakah ilmuwan yang dikenal karena perannya dalam memecahkan kode Enigma Jerman selama Perang Dunia II dan kontribusinya dalam pengembangan komputer modern yang digunakan banyak orang-orang saat ini?", //6/OK/
        answers: [
            { text: "Charles Babbage", correct: false },
            { text: "John von Neumann", correct: false },
            { text: "Grace Hopper", correct: false },
            { text: " Joseph Oppenheimer", correct: false },
            { text: "Alan Turing", correct: true },
        ],
    },
    

    {
        question: "Manakah dari berikut ini yang bukan dampak positif perkembangan komputer terhadap kehidupan sosial?", //7/OK/
        answers: [
            { text: " Meningkatkan akses informasi dan komunikasi ", correct: false },
            { text: "Mempermudah transaksi keuangan dan perdagangan ", correct: false },
            { text: "Meningkatkan keterpencilan dan isolasi sosial ", correct: true },
            { text: "Mempercepat proses belajar dan mengajar ", correct: false },
            { text: " Membuka peluang kerja baru di bidang teknologi", correct: false },
        ],
    },



    {
        question: "Bagaimana perkembangan komputer memengaruhi cara kita berinteraksi satu sama lain?", //8/OK/
        answers: [
            { text: "Mengurangi interaksi tatap muka dan meningkatkan interaksi online ", correct: false },
            { text: "Mempermudah komunikasi jarak jauh dan memperkuat hubungan antar individu ", correct: false },
            { text: "Memicu cyberbullying dan pelecehan online ", correct: false },
            { text: "Semua jawaban benar ", correct: false },
            { text: "Hanya jawaban A dan B yang benar", correct: true },
        ],
    },

    

    {
        question: " Bagaimana perkembangan komputer memengaruhi cara kita mengonsumsi informasi?", //9/OK/
        answers: [
            { text: "Meningkatkan akses ke berbagai sumber informasi ", correct: false },
            { text: "Memudahkan verifikasi kebenaran informasi ", correct: false },
            { text: "Meningkatkan risiko penyebaran informasi palsu ", correct: false },
            { text: "Semua jawaban benar ", correct: true },
            { text: "Hanya jawaban A dan B yang benar", correct: false },
        ],
    },

    {
        question: " Bagaimana perkembangan komputer memengaruhi cara masyarakat berbelanja?", //10/OK/
        answers: [
            { text: "Munculnya e-commerce dan platform belanja online ", correct: false },
            { text: "Mempermudah perbandingan harga dan produk ", correct: false },
            { text: " Meningkatkan risiko penipuan online ", correct: false },
            { text: "Semua jawaban benar ", correct: true },
            { text: "Hanya jawaban A dan B yang benar", correct: false },
        ],
    },


    {

        question: "Apa yang dimaksud dengan hak kekayaan intelektual (HKI) dalam konteks produk informatika?", //11/OK/
        answers: [
            { text: "Hak untuk mengakses internet gratis", correct: false },
            { text: "Hak untuk mengklaim kepemilikan atas karya kreatif", correct: true },
            { text: "Hak untuk mengekspor perangkat lunak", correct: false },
            { text: "Hak untuk menghapus data pribadi dari internet", correct: false },
            { text: "Hak untuk menyalin dan mendistribusikan konten tanpa izin", correct: false },
        ],
    },

    {

        question: "Bagaimana produk informatika berkontribusi terhadap pertumbuhan ekonomi?", //12/OK/
        answers: [
            { text: "Dengan membatasi akses informasi", correct: false },
            { text: "Dengan menciptakan lapangan kerja baru", correct: true },
            { text: "Dengan meningkatkan biaya produksi", correct: false },
            { text: "Dengan mengurangi investasi dalam teknologi", correct: false },
            { text: "Dengan meningkatkan kebutuhan akan bahan bakar fosil", correct: false },
        ],
    },

    {
        question: "Apa yang dimaksud dengan perangkat lunak sumber terbuka (open source software) dalam konteks ekonomi produk informatika?", //13/OK/
        answers: [
            { text: "Perangkat lunak yang hanya bisa diakses oleh pembeli berlangganan", correct: false },
            { text: "Perangkat lunak yang dapat dimodifikasi dan didistribusikan secara bebas", correct: true },
            { text: "Perangkat lunak yang hanya tersedia untuk perusahaan besar", correct: false },
            { text: "Perangkat lunak yang tidak dapat diakses secara online", correct: false },
            { text: "Perangkat lunak yang hanya bisa diinstal pada satu perangkat saja", correct: false },
        ],
    },

    {
        question: "Mengapa perlindungan data pribadi merupakan isu penting dalam hukum produk informatika?",  //14/OK/
        answers: [
            { text: "Untuk membatasi akses pengguna internet", correct: false },
            { text: "Untuk mempromosikan pelanggaran privasi", correct: false },
            { text: "Untuk melindungi informasi pribadi pengguna", correct: true },
            { text: "Untuk meningkatkan risiko keamanan siber", correct: false },
            { text: "Untuk membatasi inovasi teknologi", correct: false },
        ],
    },

    
   
    

    {
        question: "Apa peran hukum dalam mengatur keamanan produk informatika?", //15/OK/
        answers: [
            { text: "Memperketat kontrol atas konten internet", correct: false },
            { text: "Meningkatkan biaya produksi perangkat lunak", correct: false },
            { text: "Mengurangi inovasi dalam teknologi digital", correct: false },
            { text: "Meniadakan akses internet di wilayah tertentu", correct: false },
            { text: "Menetapkan standar untuk perlindungan data dan privasi", correct: true },
        ],
    },

   

    {
        question: "Apa yang dimaksud dengan Internet of Things (IoT) dalam konteks Informatika untuk masa depan?", //16/OK/
        answers: [
            { text: "Jaringan sosial untuk komunikasi antarplanet", correct: false },
            { text: "Konsep tentang kehidupan setelah kematian", correct: false },
            { text: "Koneksi perangkat elektronik ke internet untuk berbagi data dan kontrol", correct: true },
            { text: "Keterlibatan manusia dalam komputasi berbasis pikiran", correct: false },
            { text: "Pengembangan kecerdasan buatan untuk menggantikan manusia dalam pekerjaan", correct: false },
        ],
    },


    {
        question: "Apa yang dimaksud dengan kecerdasan buatan (Artificial Intelligence/AI) dan perannya dalam Informatika untuk masa depan?", //17/OK/
        answers: [
            { text: "Pengembangan komputer dan sistem untuk melakukan tugas yang biasanya memerlukan kecerdasan manusia", correct: true },
            { text: "Manusia yang telah diubah secara genetik untuk memiliki kemampuan super", correct: false },
            { text: "Kombinasi antara biologi dan teknologi untuk menciptakan organisme baru", correct: false },
            { text: "Penggunaan energi alternatif untuk menggerakkan perangkat elektronik", correct: false },
            { text: "Pemanfaatan robot untuk menggantikan pekerja manusia secara keseluruhan", correct: false },
        ],
    },


    {
        question: "Apa yang dimaksud dengan komputasi kuantum dan bagaimana potensi penggunaannya dalam Informatika untuk masa depan?", //18/OK/
        answers: [
            { text: " Komputer yang memanfaatkan energi gelombang sebagai sumber daya", correct: false },
            { text: "Pengembangan perangkat lunak yang berfokus pada memori dan emosi", correct: false },
            { text: "Pemanfaatan energi surya untuk mengoperasikan perangkat komputer", correct: false },
            { text: "Penggunaan logika kabur dalam pemrosesan data untuk kecerdasan buatan", correct: false },
            { text: "Penggunaan partikel subatom untuk menghitung informasi dengan sangat cepat", correct: true },
        ],
    },

    {
        question: "Apa manfaat yang didapat dari menyelesaikan gelar Master dalam bidang Informatika?", //19/OK/
        answers: [
            { text: "Kemampuan untuk memperoleh gaji yang lebih tinggi secara langsung", correct: false },
            { text: "Koneksi dengan profesional dan mentor di industri", correct: false },
            { text: "Keterampilan teknis yang diperdalam dan dipertajam", correct: false },
            { text: "Peluang untuk mempublikasikan penelitian dalam jurnal ilmiah", correct: false },
            { text: "Semua jawaban di atas benar", correct: true },
        ],
    },

    {
        question: "Apa peran utama seorang ilmuwan data dalam industri teknologi?", //20/OK/
        answers: [
            { text: "Menganalisis data untuk mendukung pengambilan keputusan bisnis", correct: true },
            { text: "Mengembangkan perangkat lunak untuk keperluan perusahaan", correct: false },
            { text: "Menjalankan tes keamanan sistem untuk menemukan kerentanan", correct: false },
            { text: "Membuat kampanye pemasaran digital yang efektif", correct: false },
            { text: "Mengelola infrastruktur jaringan perusahaan", correct: false },
        ],
    },

    {
        question: "Apa yang menjadi keunggulan utama belajar pemrograman komputer?", //21/OK/
        answers: [
            { text: "Kemampuan untuk membuat aplikasi perangkat lunak yang kompleks", correct: false },
            { text: "Peluang untuk memulai karier di berbagai industri", correct: false },
            { text: "Pemahaman yang mendalam tentang cara kerja teknologi modern", correct: false },
            { text: "Keterampilan untuk mengotomatiskan tugas-tugas rutin", correct: false },
            { text: "Semua jawaban di atas benar", correct: true },
        ],
    },

    {
        question: "Mengapa penting bagi seorang profesional IT untuk terus mengembangkan keterampilan mereka?", //22/OK/
        answers: [
            { text: "Untuk meningkatkan gaji dan kenaikan pangkat", correct: false },
            { text: "Agar tetap relevan di pasar kerja yang berubah cepat", correct: true },
            { text: "Untuk mendapatkan pengakuan dari rekan-rekan seprofesi", correct: false },
            { text: "Agar bisa mengajar di universitas terkemuka", correct: false },
            { text: "Hanya untuk memenuhi persyaratan perusahaan", correct: false },
        ],
    },

    {
        question: "Manakah dari pernyataan berikut yang paling tepat menggambarkan apa itu analisis data?", //23/OK/
        answers: [
            { text: "Proses mengumpulkan data dari berbagai sumber.", correct: false },
            { text: "Proses menafsirkan, mengklasifikasikan, dan meringkas data.", correct: true },
            { text: "Proses menyimpan data dalam basis data.", correct: false },
            { text: "Proses menghapus data yang tidak relevan.", correct: false },
            { text: "Proses mengamati tren dalam data.", correct: false },
        ],
    },


    {
        question: "Perkakas atau alat apa yang biasanya digunakan untuk melakukan analisis data secara visual?", //24/OK/
        answers: [
            { text: "Spreadsheet", correct: false },
            { text: "Database", correct: false },
            { text: "Python", correct: false },
            { text: "Data Visualization Tools", correct: true },
            { text: "Web browser", correct: false },
        ],
    },


    {
        question: "Manakah dari berikut ini yang bukan merupakan tahapan dalam proses analisis data?", //25/OK/
        answers: [
            { text: "Pengumpulan Data", correct: false },
            { text: "Interpretasi Data", correct: false },
            { text: "Validasi Data", correct: false },
            { text: "Penyimpanan Data", correct: true },
            { text: "Menghapus data yang tidak relevan.", correct: false },
        ],
    },


    {
        question: "Apakah peran utama dari algoritma dalam analisis data?", //26/OK/
        answers: [
            { text: "Mengumpulkan data dari sumber yang berbeda.", correct: false },
            { text: "Mengolah data untuk mendapatkan wawasan atau informasi yang berharga.", correct: true },
            { text: "Menyimpan data dalam basis data.", correct: false },
            { text: "Menghapus data yang tidak relevan.", correct: false },
            { text: " Memvisualisasikan data.", correct: false },
        ],
    },


    
    {
        question: "Apa yang dimaksud dengan web scraping?", //27/OK/
        answers: [
            { text: "Proses membuat tampilan website menjadi lebih menarik.", correct: false },
            { text: "Proses mengubah tata letak halaman web.", correct: false },
            { text: "Proses mengunduh konten web dan mengekstrak data dari halaman web.", correct: true },
            { text: "Proses mengenkripsi data yang ada di halaman web.", correct: false },
            { text: "Proses memblokir akses ke halaman web.", correct: false },
        ],
    },

    
    {
        question: "Manakah dari pernyataan berikut yang benar tentang HTML?", //28/OK/
        answers: [
            { text: "HTML adalah singkatan dari Hyper Text Transfer Protocol.", correct: false },
            { text: " HTML adalah bahasa pemrograman yang digunakan untuk membuat website dinamis.", correct: false },
            { text: "HTML adalah singkatan dari Hyperlinks and Text Markup Language.", correct: false },
            { text: "HTML adalah markup language yang digunakan untuk membuat struktur dan konten halaman web.", correct: true },
            { text: "HTML tidak digunakan dalam proses web scraping.", correct: false },
        ],
    },


    
    {
        question: "Apa yang dimaksud dengan tag HTML yang digunakan untuk menandai judul sebuah halaman web?", //29/OK/
        answers: [
            { text: "title", correct: true },
            { text: "h1", correct: false },
            { text: "head", correct: false },
            { text: "body", correct: false },
            { text: "div", correct: false },
        ],
    },


    
    {
        question: "Manakah dari pernyataan berikut yang benar tentang XPath?", //30/OK/
        answers: [
            { text: "XPath adalah bahasa pemrograman populer untuk pengembangan web.", correct: false },
            { text: "XPath digunakan untuk mengubah tata letak halaman web.", correct: false },
            { text: "XPath adalah cara untuk menavigasi dan mengekstrak data dari XML dan HTML.", correct: true },
            { text: "XPath hanya dapat digunakan untuk bahasa markup XML.", correct: false },
            { text: "XPath tidak dapat digunakan dalam proses web scraping.", correct: false },
        ],
    },
   

    
];


let currentQuestionIndex = 0;
let userScore = 0;

const startButtonEl = document.querySelector(".start-btn");
const welcomeScreenEl = document.querySelector(".welcome-screen");
const quizScreenEl = document.querySelector(".quiz-screen");
const questionEl = document.querySelector(".question");
const answersButtons = document.querySelector(".answers-container");
const nextButtonEl = document.querySelector(".next-btn");

startButtonEl.addEventListener("click", startQuiz);

function startQuiz() {
    welcomeScreenEl.style.display = "none";
    quizScreenEl.style.display = "flex";
    currentQuestionIndex = 0;
    userScore = 0;
    nextButtonEl.innerHTML = "Next";
    nextButtonEl.style.display = "none";
    shuffleArray(questions);  // Shuffle the questions
    displayQuestion();
}

function displayQuestion() {
    resetContainer();
    const currentQuestion = questions[currentQuestionIndex];
    questionEl.textContent = currentQuestion.question;
    shuffleArray(currentQuestion.answers);  // Shuffle the answers
    currentQuestion.answers.forEach((answer) => {
        const buttonEl = document.createElement("button");
        buttonEl.innerHTML = answer.text;
        buttonEl.classList.add("ans-btn");
        answersButtons.appendChild(buttonEl);

        if (answer.correct) {
            buttonEl.dataset.correctAns = answer.correct;
        }

        buttonEl.addEventListener("click", checkAnswer);
    });
}

function checkAnswer(e) {
    const selectedButton = e.target;
    if (selectedButton.dataset.correctAns) {
        userScore++;
        console.log(userScore);
        selectedButton.classList.add("correct-ans");
    } else {
        selectedButton.classList.add("wrong-ans");
    }

    Array.from(answersButtons.children).forEach((button) => {
        if (button.dataset.correctAns === "true") {
            button.classList.add("correct-ans");
        }
        button.disabled = true;
    });

    nextButtonEl.style.display = "block";
}

function displayResult() {
    resetContainer();
    questionEl.innerHTML = `Quiz is Completed! <br> Your Score: <span class="score">${userScore}/${questions.length}</span>`;
    nextButtonEl.innerHTML = "Restart Quiz";
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
        nextButtonEl.style.display = "none";
    } else {
        displayResult();
    }
}

nextButtonEl.addEventListener("click", function () {
    if (currentQuestionIndex < questions.length) {
        nextQuestion();
    } else {
        startQuiz();
    }
});

function resetContainer() {
    questionEl.textContent = "";
    answersButtons.innerHTML = "";
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}














