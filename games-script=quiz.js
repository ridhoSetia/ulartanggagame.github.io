const showPoint = document.querySelector(".showQuestion");
showPoint.onclick = () => {
  showPoint.classList.toggle("showQ");
  document.querySelector(".flex-point").classList.toggle("show");
};

const waktuMundur = new Audio("sfx/countdown.mp3");
waktuMundur.volume = 0.5;

function playCountDownTimeSfx() {
  waktuMundur.play();
  waktuMundur.loop = true;
}
function stopCountDownTimeSfx() {
  waktuMundur.pause();
  waktuMundur.currentTime = 0;
}

function isTrue() {
  const isTrue = new Audio("sfx/yeay.mp3");
  isTrue.play();
}

function isFalse() {
  const isFalse = new Audio("sfx/ohno.mp3");
  isFalse.play();
}

function lambat() {
  const lambat = new Audio("sfx/lambat.mp3");
  lambat.play();
}

// Array pertanyaan dan jawaban
let pertanyaan = [
  {
    soal: "",
    jawaban: ["", "", "", ""],
    jawabanBenar: "",
  },
  {
    soal: "",
    jawaban: ["", "", "", ""],
    jawabanBenar: "",
  },
  {
    soal: "",
    jawaban: ["", "", "", ""],
    jawabanBenar: "",
  },
  {
    soal: "",
    jawaban: ["", "", "", ""],
    jawabanBenar: "",
  },
  {
    soal: "",
    jawaban: ["", "", "", ""],
    jawabanBenar: "",
  },
  {
    soal: "",
    jawaban: ["", "", "", ""],
    jawabanBenar: "",
  },
  {
    soal: "",
    jawaban: ["", "", "", ""],
    jawabanBenar: "",
  },
  {
    soal: "",
    jawaban: ["", "", "", ""],
    jawabanBenar: "",
  },
  {
    soal: "",
    jawaban: ["", "", "", ""],
    jawabanBenar: "",
  },
  {
    soal: "",
    jawaban: ["", "", "", ""],
    jawabanBenar: "",
  },
  {
    soal: "",
    jawaban: ["", "", "", ""],
    jawabanBenar: "",
  },
  {
    soal: "",
    jawaban: ["", "", "", ""],
    jawabanBenar: "",
  },
  {
    soal: "",
    jawaban: ["", "", "", ""],
    jawabanBenar: "",
  },
  {
    soal: "",
    jawaban: ["", "", "", ""],
    jawabanBenar: "",
  },
  {
    soal: "",
    jawaban: ["", "", "", ""],
    jawabanBenar: "",
  },
];

const editQuestion = document.querySelector(".edit-question");
const createButton = document.querySelector("#create");

let videoMateri = document.querySelector(".video-explain video");

function direct() {
  // Array pertanyaan dan jawaban
  pertanyaan = [
    // A
    {
      soal: "Apakah vitamin dapat mencegah stunting pada anak?",
      jawaban: [
        "a) Tidak ada yang dapat mencegah stunting",
        "b) Vitamin hanya berpengaruh pada warna kulit",
        "c) Vitamin bisa menjadi salah satu usaha untuk mencegah stunting",
        "d) Hanya vitamin D yang berpengaruh",
      ],
      jawabanBenar: "c) Vitamin bisa menjadi salah satu usaha untuk mencegah stunting",
    },
    //   B
    {
      soal: "Sebagai remaja, mulai dari sekarang kita bisa mencegah terjadinya stunting dikemudian hari, salah satu caranya adalah?",
      jawaban: [
        "a) Selalu mencukupi gizi yang dibutuhkan oleh tubuh",
        "b) Olahraga berlebihan",
        "c) Menjaga pola tidur yang buruk",
        "d) Makan makanan sayur saja",
      ],
      jawabanBenar:
        "a) Selalu mencukupi gizi yang dibutuhkan oleh tubuh",
    },
    //   C
    {
      soal: "Apakah stunting setelah usia 2 tahun sudah lewat 1000 hari pertama kehidupan sama sekali tidak bisa diperbaiki?",
      jawaban: [
        "a) Bisa diperbaiki dengan operasi",
        "b) Pertumbuhan otak sangat pesat terjadi pada 2 tahun pertama sehingga setelah usia 2 tahun, tidak bisa diperbaiki",
        "c) Hanya bisa diperbaiki dengan obat-obatan khusus",
        "d) Bisa diperbaiki dengan menghindari aktivitas fisik",
      ],
      jawabanBenar:
        "b) Pertumbuhan otak sangat pesat terjadi pada 2 tahun pertama sehingga setelah usia 2 tahun, tidak bisa diperbaiki",
    },
    //   D
    {
      soal: "Apakah stunting dapat dicegah atau dikoreksi?",
      jawaban: [
        "a) Tidak bisa sama sekali",
        "b) Hanya bisa dikoreksi pada masa remaja",
        "c) Selama periode emas atau pada 1000 Hari Pertama Kehidupan s/d usia 2 tahun",
        "d) Hanya bisa dicegah sebelum usia 1 tahun",
      ],
      jawabanBenar: "c) Selama periode emas atau pada 1000 Hari Pertama Kehidupan s/d usia 2 tahun",
    },
    //   E
    {
      soal: "Apa dampak dari masalah gizi kronis selain stunting?",
      jawaban: [
        "a) Warna rambut berubah",
        "b) Gangguan pada perkembangan kognitif, motorik, dan sistem kekebalan tubuh",
        "c) Menjadi lebih kuat secara fisik",
        "d) Tidur lebih nyenyak",
      ],
      jawabanBenar:
        "b) Gangguan pada perkembangan kognitif, motorik, dan sistem kekebalan tubuh",
    },
    // F
    {
      soal: "Peran remaja dalam menurunkan angka stunting adalah dengan cara?",
      jawaban: [
        "a) Menghindari makanan daging",
        "b) Tidur sepanjang hari",
        "c) Mengonsumsi makanan bergizi seimbang",
        "d) Menjauhi teman sebaya",
      ],
      jawabanBenar: "c) Mengonsumsi makanan bergizi seimbang",
    },
    //   G
    {
      soal: "Selain faktor genetika, Faktor lain apa yang dapat mempengaruhi terjadinya stunting pada anak?",
      jawaban: [
        "a) Banyak bermain video game",
        "b) Faktor lingkungan dan pelayanan kesehatan",
        "c) Kelebihan tidur",
        "d) Konsumsi buah dan sayur",
      ],
      jawabanBenar: "b) Faktor lingkungan dan pelayanan kesehatan",
    },
    //   H
    {
      soal: "Mengapa dikatakan makanan yang tidak seimbang dapat memengaruhi pertumbuhan anak dan meningkatkan risiko stunting?",
      jawaban: [
        "a) Karena anak kurang suka makan",
        "b) Di karenakan ibu kurang mengerti tentang konsep gizi sebelum, saat, dan setelah melahirkan",
        "c) Ibu terlalu banyak berolahraga",
        "d) Di karenakan kurang nya uang",
      ],
      jawabanBenar:
        "b) Di karenakan ibu kurang mengerti tentang konsep gizi sebelum, saat, dan setelah melahirkan",
    },
    //   I
    {
      soal: "Keterbatasan akses pada air bersih juga akan mempertinggi risiko stunting pada anak, Hal ini merupakan faktor?",
      jawaban: [
        "a) Faktor kelalaian",
        "b) Faktor sanitasi",
        "c) Keberadaan hewan peliharaan",
        "d) Ketersediaan hiburan",
      ],
      jawabanBenar: "b) Faktor sanitasi",
    },
    //   J
    {
      soal: "Dalam jangka panjang, dampak stunting adalah?",
      jawaban: [
        "a) Peningkatan tinggi badan",
        "b) Kecerdasan tinggi",
        "c) Kesulitan belajar",
        "d) Kemampuan atletik lebih baik",
      ],
      jawabanBenar:
        "c) Kesulitan belajar",
    }, // K
    {
      soal: "Untuk mencegah stunting, tidak butuh biaya yang besar, salah satu contoh nya adalah?",
      jawaban: [
        "a) Konsumsi tempe, tahu, sayur kangkung, nasi, secara teratur",
        "b) Membeli ayam goreng di pasar",
        "c) Konsumsi daging, sayur-sayuran, nasi goreng, setiap hari",
        "d) Makan makanan yang murah seperti sosis",
      ],
      jawabanBenar: "c.	Bhinneka Tunggal Ika",
    },
    //   L
    {
      soal: "Bullying yang dilakukan dengan didasari pada prasangka pelaku terhadap seseorang dari ras, agama, atau suku dinamakan?",
      jawaban: [
        "a.	Bullying medsos ",
        "b.	Cyberbullying",
        "c.	Prejudice bullying",
        "d.	Cybercrime",
      ],
      jawabanBenar: "c.	Prejudice bullying",
    },
    //   M
    {
      soal: 'Pada UUD 1945, pasal berapa yang berbunyi "Setiap anak berhak atas kelangsungan hidup, tumbuh, dan berkembang serta berhak atas perlindungan dari kekerasan dan diskriminasi."',
      jawaban: [
        "a.	pasal 28B ayat 2 ",
        "b.	pasal 27B ayat 2 ",
        "c.	pasal 28B ayat 1",
        "d.	pasal 27B ayat 2 ",
      ],
      jawabanBenar: "a.	pasal 28B ayat 2 ",
    },
    //   N
    {
      soal: "Sebagai makhluk sosial, apa yang harus kita lakukan jika kita melihat tindakan bullying di sekitar kita?",
      jawaban: [
        "a. Membiarkan bullying terjadi",
        "b. Ikut membully",
        "c. Bantu ketawa",
        "d. Melerai dan melapor kepada orang dewasa",
      ],
      jawabanBenar: "d. Melerai dan melapor kepada orang dewasa",
    },
    //   O
    {
      soal: "Kasus bullying atau perundungan terhadap penyandang disabilitas kembali terjadi. Sekelompok remaja berseragam SMA tanpa ampun melakukan kekerasan fisik pada korban. Mereka menekan-nekan punggung korban dengan sepatu, lalu menginjak-injak pundak korban. Berkaitan dengan kasus diatas, apakah itu termasuk Bullying yang berbau SARA?",
      jawaban: [
        "a. Tidak, karena penyandang disabilitas adalah orang yang sehat",
        "b. Ya, karena penyandang disabilitas termasuk golongan di dalam SARA",
        "c. Tidak, karena penyandang disabilitas tidak termasuk golongan di dalam SARA",
        "d. Ya, karena penyandang disabilitas merupakan orang hebat",
      ],
      jawabanBenar:
        "b. Ya, karena penyandang disabilitas termasuk golongan di dalam SARA",
    },
  ];

  videoMateri.src = "Hal yang Harus Kamu Ketahui Tentang BULLYING.mp4";
  localStorage.setItem("videoExplain", "videoMateri");

  editQuestion.style.display = "none";
  createButton.style.display = "none";
  localStorage.setItem("directEditQuestion", "none");
  localStorage.setItem("createButton", "none");
  localStorage.setItem("pertanyaan", JSON.stringify(pertanyaan));
}

function edit() {
  // Array pertanyaan dan jawaban
  let pertanyaan = [
    {
      soal: "",
      jawaban: ["", "", "", ""],
      jawabanBenar: "",
    },
    {
      soal: "",
      jawaban: ["", "", "", ""],
      jawabanBenar: "",
    },
    {
      soal: "",
      jawaban: ["", "", "", ""],
      jawabanBenar: "",
    },
    {
      soal: "",
      jawaban: ["", "", "", ""],
      jawabanBenar: "",
    },
    {
      soal: "",
      jawaban: ["", "", "", ""],
      jawabanBenar: "",
    },
    {
      soal: "",
      jawaban: ["", "", "", ""],
      jawabanBenar: "",
    },
    {
      soal: "",
      jawaban: ["", "", "", ""],
      jawabanBenar: "",
    },
    {
      soal: "",
      jawaban: ["", "", "", ""],
      jawabanBenar: "",
    },
    {
      soal: "",
      jawaban: ["", "", "", ""],
      jawabanBenar: "",
    },
    {
      soal: "",
      jawaban: ["", "", "", ""],
      jawabanBenar: "",
    },
    {
      soal: "",
      jawaban: ["", "", "", ""],
      jawabanBenar: "",
    },
    {
      soal: "",
      jawaban: ["", "", "", ""],
      jawabanBenar: "",
    },
    {
      soal: "",
      jawaban: ["", "", "", ""],
      jawabanBenar: "",
    },
    {
      soal: "",
      jawaban: ["", "", "", ""],
      jawabanBenar: "",
    },
    {
      soal: "",
      jawaban: ["", "", "", ""],
      jawabanBenar: "",
    },
  ];

  videoMateri.src = "";
  localStorage.setItem("videoExplain", "videoMateri");

  editQuestion.style.display = "block";
  createButton.style.display = "block";
  localStorage.setItem("directEditQuestion", "block");
  localStorage.setItem("createButton", "block");
  localStorage.setItem("pertanyaan", JSON.stringify(pertanyaan));
}

// Load stored values
if (localStorage.getItem("directEditQuestion") === "none") {
  editQuestion.style.display = "none";
  createButton.style.display = "none";
  videoMateri.src = "Hal yang Harus Kamu Ketahui Tentang BULLYING.mp4";
} else {
  editQuestion.style.display = "block";
  createButton.style.display = "block";
  videoMateri.src = "";
}

const storedPertanyaan = localStorage.getItem("pertanyaan");
if (storedPertanyaan) {
  pertanyaan = JSON.parse(storedPertanyaan);
}

const boxQuestion = document.querySelector(".questionShadow");
const questionBox = document.querySelector(".questionBox");
let question = document.getElementById("pertanyaan");

function hideQuestionBox() {
  questionBox.style.display = "none";
  boxQuestion.style.display = "none";
  question.style.display = "none";
  stopCountDownTimeSfx();
}

let timerId; // buat variabel untuk menyimpan id penundaan

function showQuestion() {
  // Menampilkan kotak pertanyaan dan pertanyaan
  questionBox.style.display = "block";
  boxQuestion.style.display = "block";
  question.style.display = "block";
  boxQuestion.style.animation = "questionAnimation 0.3s";

  // Hapus penundaan sebelumnya jika ada
  if (timerId) {
    clearTimeout(timerId);
  }

  setTimeout(() => {
    playCountDownTimeSfx();
  }, 1000);

  // Menunggu 21 detik sebelum menyembunyikan kotak pertanyaan
  timerId = setTimeout(() => {
    result.classList.add("on");
    result.innerHTML = "Maaf kamu terlambat";
    document.querySelector(".showQuestion").disabled = true;
    clearTimeout(timerId);
    lambat();
    // Menyembunyikan kotak pertanyaan
    hideQuestionBox();
    setTimeout(() => {
      result.classList.remove("on");
    }, 2000);
  }, 40000);
}

// Function untuk menghentikan timer
function stopTimer() {
  clearTimeout(timerId);
}

// Menampilkan pertanyaan dan opsi jawaban
let nomorSoal = 0;
function tampilPertanyaan(nomor) {
  nomorSoal = nomor;
  showQuestion();

  question.innerHTML = pertanyaan[nomorSoal].soal;

  let opsiJawaban = "";
  for (let i = 0; i < pertanyaan[nomorSoal].jawaban.length; i++) {
    opsiJawaban +=
      "<input type='radio' name='jawaban' value='" +
      pertanyaan[nomorSoal].jawaban[i] +
      "'> " +
      pertanyaan[nomorSoal].jawaban[i] +
      "<br>";
  }
  document.getElementById("opsiJawaban").innerHTML = opsiJawaban;

  showPoint.classList.remove("showQ");
  document.querySelector(".flex-point").classList.remove("show");
  // Mendapatkan referensi elemen radio button dan tombol submit
  const radioButtons = document.querySelectorAll('input[type="radio"]');
  const submitButton = document.getElementById("jawab");

  // Tambahkan event listener untuk setiap radio button
  radioButtons.forEach((radioButton) => {
    radioButton.addEventListener("change", () => {
      if (radioButton.checked) {
        submitButton.disabled = false;
      } else {
        submitButton.disabled = true;
      }
    });
  });
}

const result = document.getElementById("result");
document.querySelector("#shakeCard").disabled = true;

// Cek jawaban
function cekJawaban() {
  document.querySelector(".showQuestion").disabled = true;

  stopTimer(); // Menghentikan timer sebelum memeriksa jawaban

  let jawabanUser = document.querySelector(
    'input[name="jawaban"]:checked'
  ).value;

  result.classList.add("on");

  setTimeout(() => {
    result.classList.remove("on");
  }, 1800);
  if (jawabanUser == pertanyaan[nomorSoal].jawabanBenar) {
    result.innerHTML = '<i class="fa fa-check check-icon"></i> Benar!';
    isTrue();
  } else {
    result.innerHTML = '<i class="fa fa-times" aria-hidden="true"></i> Salah!';
    isFalse();
  }

  // Reset opsi jawaban
  document.getElementById("opsiJawaban").innerHTML = "";

  document.querySelector("#shakeCard").disabled = false;

  hideQuestionBox();
}

// set semua radio button menjadi unchecked
var jawaban = document.querySelectorAll("input[type='radio']:checked");
for (var i = 0; i < jawaban.length; i++) {
  jawaban[i].checked = false;
}

const pointQuestion = document.querySelectorAll(".flex-point button");
pointQuestion.forEach((pointQuestion) => {
  pointQuestion.addEventListener("mouseover", () => {
    klik();
  });
});

let succesInput = document.querySelector(".succesInput");

const inputVideo = document.getElementById("input-file-video");
const videoElement = document.querySelector(".explain-video");

const removeVideo = document.querySelector(".removeVideo");
removeVideo.onclick = () => {
  document.querySelector(".editVideo").remove();
  document.querySelector(".video-explain").remove();
  localStorage.removeItem("remove1");
  localStorage.setItem("remove1", "removed");
  localStorage.removeItem("remove2");
  localStorage.setItem("remove2", "removed");
  document.querySelector("#alert-mulai").remove();
  localStorage.setItem("remove-buttonMulai", "removed");
};

inputVideo.addEventListener("change", () => {
  const file = inputVideo.files[0];
  const videoURL = URL.createObjectURL(file);

  videoElement.src = videoURL;
});

function editContent(event) {
  event.preventDefault(); // Mencegah halaman untuk refresh
  const inputQuestion = document.querySelectorAll(
    'textarea[name="pertanyaan"]'
  );
  const inputOption = document.querySelectorAll('input[name="option"]');
  const inputTrueoption = document.querySelectorAll('input[name="trueOption"]');

  inputQuestion.forEach((inputQuestion) => {
    const indexQuestion = inputQuestion.getAttribute("data-question");
    const replacementQuestion = inputQuestion.value;
    pertanyaan[indexQuestion].soal = replacementQuestion;
    localStorage.setItem(
      `replacementQuestion${indexQuestion}`,
      replacementQuestion
    );
  });
  inputTrueoption.forEach((inputTrueoption) => {
    const indexTrueoption = inputTrueoption.getAttribute("data-trueOption");
    const replacementTrueoption = inputTrueoption.value;
    pertanyaan[indexTrueoption].jawabanBenar = replacementTrueoption;
    localStorage.setItem(
      `replacementTrueoption${indexTrueoption}`,
      replacementTrueoption
    );
  });
  inputOption.forEach((inputOption) => {
    const indexOption = inputOption.getAttribute("data-option");
    const replacementOption = inputOption.value;
    pertanyaan[0].jawaban[indexOption] = replacementOption;
    localStorage.setItem(`replacementOption${indexOption}`, replacementOption);
  });
  inputOption.forEach((inputOption) => {
    const indexOption = inputOption.getAttribute("data-option2");
    const replacementOption = inputOption.value;
    pertanyaan[1].jawaban[indexOption] = replacementOption;
    localStorage.setItem(`replacementOption2${indexOption}`, replacementOption);
  });
  inputOption.forEach((inputOption) => {
    const indexOption = inputOption.getAttribute("data-option3");
    const replacementOption = inputOption.value;
    pertanyaan[2].jawaban[indexOption] = replacementOption;
    localStorage.setItem(`replacementOption3${indexOption}`, replacementOption);
  });
  inputOption.forEach((inputOption) => {
    const indexOption = inputOption.getAttribute("data-option4");
    const replacementOption = inputOption.value;
    pertanyaan[3].jawaban[indexOption] = replacementOption;
    localStorage.setItem(`replacementOption4${indexOption}`, replacementOption);
  });
  inputOption.forEach((inputOption) => {
    const indexOption = inputOption.getAttribute("data-option5");
    const replacementOption = inputOption.value;
    pertanyaan[4].jawaban[indexOption] = replacementOption;
    localStorage.setItem(`replacementOption5${indexOption}`, replacementOption);
  });
  inputOption.forEach((inputOption) => {
    const indexOption = inputOption.getAttribute("data-option6");
    const replacementOption = inputOption.value;
    pertanyaan[5].jawaban[indexOption] = replacementOption;
    localStorage.setItem(`replacementOption6${indexOption}`, replacementOption);
  });
  inputOption.forEach((inputOption) => {
    const indexOption = inputOption.getAttribute("data-option7");
    const replacementOption = inputOption.value;
    pertanyaan[6].jawaban[indexOption] = replacementOption;
    localStorage.setItem(`replacementOption7${indexOption}`, replacementOption);
  });
  7;
  inputOption.forEach((inputOption) => {
    const indexOption = inputOption.getAttribute("data-option8");
    const replacementOption = inputOption.value;
    pertanyaan[7].jawaban[indexOption] = replacementOption;
    localStorage.setItem(`replacementOption8${indexOption}`, replacementOption);
  });
  inputOption.forEach((inputOption) => {
    const indexOption = inputOption.getAttribute("data-option9");
    const replacementOption = inputOption.value;
    pertanyaan[8].jawaban[indexOption] = replacementOption;
    localStorage.setItem(`replacementOption9${indexOption}`, replacementOption);
  });
  inputOption.forEach((inputOption) => {
    const indexOption = inputOption.getAttribute("data-option10");
    const replacementOption = inputOption.value;
    pertanyaan[9].jawaban[indexOption] = replacementOption;
    localStorage.setItem(
      `replacementOption10${indexOption}`,
      replacementOption
    );
  });
  inputOption.forEach((inputOption) => {
    const indexOption = inputOption.getAttribute("data-option11");
    const replacementOption = inputOption.value;
    pertanyaan[10].jawaban[indexOption] = replacementOption;
    localStorage.setItem(
      `replacementOption11${indexOption}`,
      replacementOption
    );
  });
  inputOption.forEach((inputOption) => {
    const indexOption = inputOption.getAttribute("data-option12");
    const replacementOption = inputOption.value;
    pertanyaan[11].jawaban[indexOption] = replacementOption;
    localStorage.setItem(
      `replacementOption12${indexOption}`,
      replacementOption
    );
  });
  inputOption.forEach((inputOption) => {
    const indexOption = inputOption.getAttribute("data-option13");
    const replacementOption = inputOption.value;
    pertanyaan[12].jawaban[indexOption] = replacementOption;
    localStorage.setItem(
      `replacementOption13${indexOption}`,
      replacementOption
    );
  });
  inputOption.forEach((inputOption) => {
    const indexOption = inputOption.getAttribute("data-option14");
    const replacementOption = inputOption.value;
    pertanyaan[13].jawaban[indexOption] = replacementOption;
    localStorage.setItem(
      `replacementOption14${indexOption}`,
      replacementOption
    );
  });
  inputOption.forEach((inputOption) => {
    const indexOption = inputOption.getAttribute("data-option15");
    const replacementOption = inputOption.value;
    pertanyaan[14].jawaban[indexOption] = replacementOption;
    localStorage.setItem(
      `replacementOption15${indexOption}`,
      replacementOption
    );
  });

  const alertBerhasilSave = document.querySelector(".alertBerhasilSave");
  userEdit.classList.remove("fa-times");
  document.querySelector(".user-experience").classList.remove("showEdit");
  document.querySelector("html").classList.remove("showEdit");
  document.querySelector(".edit-content").classList.remove("showEdit");
  alertBerhasilSave.classList.add("active");
  document.querySelector(".alertBerhasilSave p").textContent =
    "Soal berhasil disimpan ke dalam penyimpanan";
  setTimeout(() => {
    alertBerhasilSave.classList.remove("active");
  }, 3000);

  let succesInputText = (succesInput.textContent = "Game Storage Full 🔒");
  let succesInputColor = (succesInput.style.background = "#f31414");
  localStorage.setItem(`succesInputText`, succesInputText);
  localStorage.setItem(`succesInputColor`, succesInputColor);
}

window.addEventListener("DOMContentLoaded", () => {
  const savedRemoveInput = localStorage.getItem("remove1");
  const savedRemoveVideo = localStorage.getItem("remove2");
  if (savedRemoveInput === "removed") {
    document.querySelector(".editVideo").remove();
  }
  if (savedRemoveVideo === "removed") {
    document.querySelector(".video-explain").remove();
    document.querySelector("#alert-mulai").remove();
  }
  const savesuccesInputText = localStorage.getItem(`succesInputText`);
  if (savesuccesInputText) {
    succesInput.textContent = savesuccesInputText;
  }
  const savesuccesInputColor = localStorage.getItem(`succesInputColor`);
  if (savesuccesInputColor) {
    succesInput.style.background = savesuccesInputColor;
  }

  for (let q = 0; q < pertanyaan.length; q++) {
    const storedQuestion = localStorage.getItem(`replacementQuestion${q}`);
    if (storedQuestion) {
      pertanyaan[q].soal = storedQuestion;
    }
  }
  for (let t = 0; t < pertanyaan.length; t++) {
    const storedTrueoption = localStorage.getItem(`replacementTrueoption${t}`);
    if (storedTrueoption) {
      pertanyaan[t].jawabanBenar = storedTrueoption;
    }
  }
  for (let o = 0; o < pertanyaan.length; o++) {
    const storedOption = localStorage.getItem(`replacementOption${o}`);
    if (storedOption) {
      pertanyaan[0].jawaban[o] = storedOption;
    }
    const storedOption2 = localStorage.getItem(`replacementOption2${o}`);
    if (storedOption2) {
      pertanyaan[1].jawaban[o] = storedOption2;
    }
    const storedOption3 = localStorage.getItem(`replacementOption3${o}`);
    if (storedOption3) {
      pertanyaan[2].jawaban[o] = storedOption3;
    }
    const storedOption4 = localStorage.getItem(`replacementOption4${o}`);
    if (storedOption4) {
      pertanyaan[3].jawaban[o] = storedOption4;
    }
    const storedOption5 = localStorage.getItem(`replacementOption5${o}`);
    if (storedOption5) {
      pertanyaan[4].jawaban[o] = storedOption5;
    }
    const storedOption6 = localStorage.getItem(`replacementOption6${o}`);
    if (storedOption6) {
      pertanyaan[5].jawaban[o] = storedOption6;
    }
    const storedOption7 = localStorage.getItem(`replacementOption7${o}`);
    if (storedOption7) {
      pertanyaan[6].jawaban[o] = storedOption7;
    }
    const storedOption8 = localStorage.getItem(`replacementOption8${o}`);
    if (storedOption8) {
      pertanyaan[7].jawaban[o] = storedOption8;
    }
    const storedOption9 = localStorage.getItem(`replacementOption9${o}`);
    if (storedOption9) {
      pertanyaan[8].jawaban[o] = storedOption9;
    }
    const storedOption10 = localStorage.getItem(`replacementOption10${o}`);
    if (storedOption10) {
      pertanyaan[9].jawaban[o] = storedOption10;
    }
    const storedOption11 = localStorage.getItem(`replacementOption11${o}`);
    if (storedOption11) {
      pertanyaan[10].jawaban[o] = storedOption11;
    }
    const storedOption12 = localStorage.getItem(`replacementOption12${o}`);
    if (storedOption12) {
      pertanyaan[11].jawaban[o] = storedOption12;
    }
    const storedOption13 = localStorage.getItem(`replacementOption13${o}`);
    if (storedOption13) {
      pertanyaan[12].jawaban[o] = storedOption13;
    }
    const storedOption14 = localStorage.getItem(`replacementOption14${o}`);
    if (storedOption14) {
      pertanyaan[13].jawaban[o] = storedOption13;
    }
    const storedOption15 = localStorage.getItem(`replacementOption15${o}`);
    if (storedOption15) {
      pertanyaan[14].jawaban[o] = storedOption14;
    }
  }
});
