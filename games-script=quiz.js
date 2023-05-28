const showPoint = document.querySelector(".showQuestion");
showPoint.onclick = () => {
  showPoint.classList.toggle("showQ");
  document.querySelector(".flex-point").classList.toggle("show");
};

const waktuMundur = new Audio("sfx/countdown.mp3");
waktuMundur.volume = 0.2;

function playCountDownTimeSfx() {
  waktuMundur.play();
}
function stopCountDownTimeSfx() {
  waktuMundur.pause();
  waktuMundur.currentTime = 0;
}

function isTrue() {
  const isTrue = new Audio("sfx/yeay.mp3");
  isTrue.play();
  isTrue.currentTime = 1.2;
  isTrue.volume = 0.5;
}

function isFalse() {
  const isFalse = new Audio("sfx/ohno.mp3");
  isFalse.play();
  isFalse.currentTime = 0.5;
  isFalse.volume = 0.5;
}

// Array pertanyaan dan jawaban
let pertanyaan = [
  // A
  {
    soal: "Siapakah pemain basket NBA dengan jumlah poin tertinggi sepanjang masa?",
    jawaban: [
      "a) Michael Jordan",
      "b) LeBron James",
      "c) Kobe Bryant",
      "d) Kareem Abdul-Jabbar",
    ],
    jawabanBenar: "d) Kareem Abdul-Jabbar",
  },
  //   B
  {
    soal: "Negara mana yang menjadi juara Piala Dunia FIFA 2018?",
    jawaban: ["a) Brasil", "b) Prancis", "c) Jerman", "d) Spanyol"],
    jawabanBenar: "b) Prancis",
  },
  //   C
  {
    soal: "Siapakah penemu bola lampu?",
    jawaban: [
      "Thomas Edison",
      "Alexander Graham Bell",
      "Nikola Tesla",
      "Danang",
    ],
    jawabanBenar: "Thomas Edison",
  },
  //   D
  {
    soal: "Kapankah Indonesia merdeka?",
    jawaban: [
      "17 Agustus 1945",
      "15 Agustus 1945",
      "19 Agustus 1945",
      "Tahun lalu",
    ],
    jawabanBenar: "17 Agustus 1945",
  },
  //   E
  {
    soal: "Siapakah presiden pertama Indonesia?",
    jawaban: ["Soekarno", "Jokowi", "SBY", "Puan"],
    jawabanBenar: "Soekarno",
  },
  // F
  {
    soal: "Dalam tenis, siapa pemain yang memiliki rekor Grand Slam paling banyak?",
    jawaban: [
      "a) Roger Federer",
      "b) Rafael Nadal",
      "c) Novak Djokovic",
      "d) Serena Williams",
    ],
    jawabanBenar: "b) Rafael Nadal",
  },
  //   G
  {
    soal: "Klub sepak bola mana yang menjadi juara Liga Champions UEFA pada musim 2020-2021?",
    jawaban: [
      "a) Real Madrid",
      "b) Manchester City",
      "c) Chelsea",
      "d) Bayern Munich",
    ],
    jawabanBenar: "c) Chelsea",
  },
  //   H
  {
    soal: "Siapa pemain sepak bola yang memenangkan Ballon d'Or 2021?",
    jawaban: [
      "a) Lionel Messi",
      "b) Cristiano Ronaldo",
      "c) Robert Lewandowski",
      "d) Kylian Mbappé",
    ],
    jawabanBenar: "Thomas Edison",
  },
  //   I
  {
    soal: "Klub sepak bola mana yang memenangkan Liga Primer Inggris pada musim 2020-2021?",
    jawaban: [
      "a) Manchester United",
      "b) Liverpool",
      "c) Manchester City",
      "d) Chelsea",
    ],
    jawabanBenar: "c) Manchester City",
  },
  //   J
  {
    soal: "Siapakah atlet renang pria yang memegang rekor medali emas Olimpiade terbanyak?",
    jawaban: [
      "a) Michael Phelps",
      "b) Ian Thorpe",
      "c) Mark Spitz",
      "d) Ryan Lochte",
    ],
    jawabanBenar: "a) Michael Phelps",
  }, // A
  {
    soal: "Siapakah presiden pertama Indonesia?",
    jawaban: ["Soekarno", "Jokowi", "SBY", "Gusdur"],
    jawabanBenar: "Soekarno",
  },
  //   B
  {
    soal: "Kapankah Indonesia merdeka?",
    jawaban: [
      "17 Agustus 1945",
      "15 Agustus 1945",
      "19 Agustus 1945",
      "Kemarin",
    ],
    jawabanBenar: "17 Agustus 1945",
  },
  //   C
  {
    soal: "Siapakah penemu bola lampu?",
    jawaban: [
      "Thomas Edison",
      "Alexander Graham Bell",
      "Nikola Tesla",
      "Danang",
    ],
    jawabanBenar: "Thomas Edison",
  },
  //   D
  {
    soal: "Kapankah Indonesia merdeka?",
    jawaban: [
      "17 Agustus 1945",
      "15 Agustus 1945",
      "19 Agustus 1945",
      "Tahun lalu",
    ],
    jawabanBenar: "17 Agustus 1945",
  },
  //   E
  {
    soal: "Siapakah presiden pertama Indonesia?",
    jawaban: ["Soekarno", "Jokowi", "SBY", "Puan"],
    jawabanBenar: "Soekarno",
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
  }, 300);

  // Menunggu 21 detik sebelum menyembunyikan kotak pertanyaan
  timerId = setTimeout(() => {
    xResult.classList.add("on");
    result.classList.add("on");
    result.innerHTML = "Maaf kamu terlambat";
    document.querySelector(".showQuestion").disabled = true;
    clearTimeout(timerId);
    whoosh();
    // Menyembunyikan kotak pertanyaan
    hideQuestionBox();
  }, 21000);
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
const xResult = document.querySelector(".x");

// Cek jawaban
function cekJawaban() {
  xResult.classList.add("on");
  document.querySelector(".showQuestion").disabled = true;
  whoosh();

  stopTimer(); // Menghentikan timer sebelum memeriksa jawaban

  let jawabanUser = document.querySelector(
    'input[name="jawaban"]:checked'
  ).value;

  result.classList.add("on");

  if (jawabanUser == pertanyaan[nomorSoal].jawabanBenar) {
    result.innerHTML = "Benar! naik ke tangga";
    isTrue();
  } else {
    result.innerHTML = "Salah! turun sampai ekor ular";
    isFalse();
  }

  // Reset opsi jawaban
  document.getElementById("opsiJawaban").innerHTML = "";

  document.querySelector("#shakeCard").disabled = false;

  hideQuestionBox();
}

xResult.onclick = () => {
  xResult.classList.remove("on");
  result.classList.remove("on");
  whoosh();
};

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

const cursorName = [
  document.querySelector(".nameColor1"),
  document.querySelector(".nameColor2"),
  document.querySelector(".nameColor3"),
  document.querySelector(".nameColor4"),
  document.querySelector(".nameColor5"),
];
const nameSkinPlayer = document.querySelectorAll(".nameSkinPlayer");
let succesInput = document.querySelector(".succesInput");

function editName(event) {
  event.preventDefault(); // Mencegah halaman untuk refresh
  const inputs = document.querySelectorAll('input[name="teks"]');
  inputs.forEach((input) => {
    const index = input.getAttribute("data-name");
    const replacementText = input.value;
    words[index] = replacementText;
    nameSkinPlayer[index].textContent = replacementText;
    cursorName[index].textContent = replacementText;
    localStorage.setItem(`replacementText${index}`, replacementText);
    if (index === "0") {
      document.querySelector(".player").textContent = replacementText;
    }
  });
  userEdit.classList.remove("fa-times");
  document.querySelector(".user-experience").classList.remove("showEdit");
  document.querySelector("html").classList.remove("showEdit");
  document.querySelector(".edit-content").classList.remove("showEdit");
  document.querySelector(".alertBerhasilSave").classList.add("active");
  setTimeout(() => {
    document.querySelector(".alertBerhasilSave").classList.remove("active");
  }, 3000);
}

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

  let succesInputText = (succesInput.textContent = "Game Storage Full 🔒");
  let succesInputColor = (succesInput.style.background = "#f31414");
  localStorage.setItem(`succesInputText`, succesInputText);
  localStorage.setItem(`succesInputColor`, succesInputColor);

  for (let i = 0; i < words.length; i++) {
    const storedText = localStorage.getItem(`replacementText${i}`);
    if (storedText) {
      words[i] = storedText;
      nameSkinPlayer[i].textContent = storedText;
      cursorName[i].textContent = storedText;
      if (i === 0) {
        document.querySelector(".player").textContent = storedText;
      }
    }
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
}

const reset = document.querySelector("#reset");
reset.onclick = () => {
  localStorage.clear();
  // Refresh halaman untuk memuat ulang nilai-nilai default
  window.location.reload();
};
