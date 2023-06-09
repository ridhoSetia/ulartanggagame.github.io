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
  // A
  {
    soal: "Dani merupakan siswa yang biasanya memiliki banyak teman, tetapi pada suatu hari ia di kucilkan teman-temannya karena manipulatif atau fitnah dari seseorang. Hal yang di alami Dani termasuk Bullying? ",
    jawaban: [
      "a. Bullying prejudice ",
      "b. Bullying fisik",
      "c. Bullying verbal",
      "d. Bullying agresi relasional",
    ],
    jawabanBenar: "d. Bullying agresi relasional",
  },
  //   B
  {
    soal: "Budi merupakan siswa dari SMA 7, setiap hari ia sering diejek oleh teman-temannya hanya karena menganut agama yang berbeda. Jika hal semacam ini dilakukan secara terus menerus maka dapat mengakibatkan...",
    jawaban: [
      "a. Semakin akrab nya pertemanan",
      "b. Bullying yang awalnya berupa kata-kata bisa menjadi lebih parah, seperti memukul",
      "c. Munculnya sifat saling menyayangi",
      "d. Timbulnya sikap nasionalisme",
    ],
    jawabanBenar:
      "b. Bullying yang awalnya berupa kata-kata bisa menjadi lebih parah, seperti memukul",
  },
  //   C
  {
    soal: "Sarah merupakan seorang siswi baru di SMA 9, suatu hari dia mendapatkan komentar SARA di media sosial nya. Sarah merasa terpukul dan mulai merasa cemas dan tertekan.\n Apa yang bisa dilakukan Sarah untuk mengatasi hal yang dialaminya?",
    jawaban: [
      "a. Membalas dengan komentar yang sama jahatnya kepada pelaku",
      "b. Mengabaikan komentar tersebut dan menghindari media sosial",
      "c. Melaporkan komentar tersebut ke pihak sekolah dan meminta bantuan dari guru atau orang tua",
      "d. Berdiam diri dan tidak melakukan apapun",
    ],
    jawabanBenar:
      "c. Melaporkan komentar tersebut ke pihak sekolah dan meminta bantuan dari guru atau orang tua",
  },
  //   D
  {
    soal: "Siapa pengaduan terdekat di sekolah jika kita mengalami bullying?",
    jawaban: [
      "a.	Pedagang kantin",
      "b.	Satpam",
      "c.	Teman sebaya",
      "d.	Bimbingan Konselling",
    ],
    jawabanBenar: "d.	Bimbingan Konselling",
  },
  //   E
  {
    soal: "Bullying merupakan salah satu contoh dari? mengapa?",
    jawaban: [
      "a.	Perilaku terpuji, karena membuat kita senang",
      "b.	Perilaku tercela, karena dapat merenggut masa depan seseorang ",
      "c.	Perilaku mulia, karena bisa menyelamatkan masa deoan",
      "d. Perilaku tercela, karena membuat kita merasa keren",
    ],
    jawabanBenar:
      "b.	Perilaku tercela, karena dapat merenggut masa depan seseorang ",
  },
  // F
  {
    soal: "Di era modern ini, kita harus bijak dalam menggunakan social media, jangan sampai kita melakukan cyber bullying. Apa sih yang dimaksud dengan cyberbullying?",
    jawaban: [
      "a.	Penindasan secara online",
      "b.	Penindasan secara langsung",
      "c.	Penindasan berkelanjutan",
      "d.	Penindasan tercela",
    ],
    jawabanBenar: "a.	Penindasan secara online",
  },
  //   G
  {
    soal: "Bullying memiliki dampak yang sangat besar bagi korban, efek dari bullying yang paling sering terjadi adalah?",
    jawaban: [
      "a.	Membuat korban menjadi Bahagia",
      "b.	Meningkatkan kepercayaan diri",
      "c.	Korban dapat mengalami trauma dan takut bersosialisasi",
      "d.	Mendapat ketidakadilan hukum",
    ],
    jawabanBenar: "c.	Korban dapat mengalami trauma dan takut bersosialisasi",
  },
  //   H
  {
    soal: "Salah satu contoh perilaku prejudice bullying adalah?",
    jawaban: [
      "a.	Amin sering memukul Andi tanpa sebab.",
      "b.	Di sekolah, Pano sering mengolok-olok dan mengancam siswa lain berdasarkan ras atau agama mereka.",
      "c.	Didi diketahui menyebarkan rumor palsu tentang siswa lain di media sosial dan di sekolah untuk merusak reputasi mereka.",
      "d.	Rati sering mengintimidasi siswa di sekolahannya.",
    ],
    jawabanBenar:
      "b.	Di sekolah, Pano sering mengolok-olok dan mengancam siswa lain berdasarkan ras atau agama mereka.",
  },
  //   I
  {
    soal: "Pidana bagi orang yang melanggar pasal 76C berada dalam Undang-Undang nomor 35 Tahun 2014 Pasal berapa?",
    jawaban: [
      "a.	Pasal 79 (1)",
      "b. Pasal 54 (2)",
      "c.	Pasal 80 (1)",
      "d.	Pasal 81 (2)",
    ],
    jawabanBenar: "c.	Pasal 80 (1)",
  },
  //   J
  {
    soal: "Undang-Undang Nomor 35 Tahun 2014 Pasal 76C berbunyi...",
    jawaban: [
      "a.	Setiap Anak dilarang melakukan atau menyuruh melakukan kekerasan",
      "b.	Setiap Orang dilarang menempatkan, membiarkan, melakukan, menyuruh melakukan, atau turut serta melakukan kekerasan terhadap anak",
      "c.	Setiap Anak dilarang melakukan kekerasan terhadap sesama",
      "d.	Setiap Orang dilarang melakukan atau membiarkan anak melakukan kekerasan",
    ],
    jawabanBenar:
      "b.	Setiap Orang dilarang menempatkan, membiarkan, melakukan, menyuruh melakukan, atau turut serta melakukan kekerasan terhadap anak",
  }, // K
  {
    soal: "Apa semboyan bangsa Indonesia?",
    jawaban: [
      "a.	Bersekutu Bertambah Mutu",
      "b.	In God We Trust",
      "c.	Bhinneka Tunggal Ika",
      "d.	Liberté, égalité, fraternité",
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
