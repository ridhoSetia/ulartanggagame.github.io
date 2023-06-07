function pop() {
  const pop = new Audio("sfx/pop.mp3");
  pop.play();
  pop.volume = 0.1;
}

function klik() {
  const klik = new Audio("sfx/klik.mp3");
  klik.play();
}

function spin() {
  const spin = new Audio("sfx/spiningSfx.mp3");
  spin.play();
  spin.volume = 0.5;
}

function whoosh() {
  const whoosh = new Audio("sfx/whoosh.mp3");
  whoosh.play();
}

const board = document.querySelector(".board");

function openFullscreen() {
  pop();
  setTimeout(() => {
    if (board.requestFullscreen) {
      board.requestFullscreen();
    } else if (board.webkitRequestFullscreen) {
      /* Safari */
      board.webkitRequestFullscreen();
    } else if (board.msRequestFullscreen) {
      /* IE11 */
      board.msRequestFullscreen();
    }

    // Fungsi untuk mengubah orientasi layar
    if (screen.orientation.lock) {
      screen.orientation.lock("landscape");
    } else if (screen.lockOrientation) {
      // Untuk Firefox
      screen.lockOrientation("landscape");
    } else if (screen.mozLockOrientation) {
      // Untuk Firefox versi lama
      screen.mozLockOrientation("landscape");
    } else if (screen.webkitLockOrientation) {
      // Untuk Chrome, Safari, dan Opera
      screen.webkitLockOrientation("landscape");
    } else if (screen.msLockOrientation) {
      // Untuk Internet Explorer
      screen.msLockOrientation("landscape");
    }

    const buttonResume = (buttonPlay.textContent = "Lanjut");
    localStorage.setItem("buttonResume", buttonResume);
  }, 300);

  var storedDiceValue = localStorage.getItem("diceValue");
  var storedcurrentWordIndex = localStorage.getItem("currentWordIndex");
  var storedcurrentColorIndex = localStorage.getItem("currentColorIndex");

  if (storedDiceValue) {
    var dice = document.getElementById("dice");
    dice.src = `img/Dadu${storedDiceValue}.png`;
  }
  rollButton.innerHTML = words[0];

  if (storedcurrentWordIndex) {
    rollButton.innerHTML = words[storedcurrentWordIndex - 1];
  }

  if (storedcurrentColorIndex) {
    rollButton.style.background = color[storedcurrentColorIndex - 1];
  }
}
const buttonPlay = document.querySelector(".open");

window.addEventListener("load", () => {
  const resume = localStorage.getItem("buttonResume");
  if (resume) {
    buttonPlay.textContent = resume;
  }
});

function exitFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) {
    /* Safari */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    /* IE11 */
    document.msExitFullscreen();
  }
}

const rotatePhone = document.querySelector(".rotate-smartphone");

// menangani event fullscreenchange
document.addEventListener("fullscreenchange", () => {
  // mendeteksi apakah perangkat sedang dalam mode fullscreen
  if (document.fullscreenElement) {
    // perangkat sedang dalam mode fullscreen
    board.style.display = "block";
  } else {
    // perangkat tidak dalam mode fullscreen
    board.style.display = "none";
    pop();
  }
});

// event listener untuk memanggil fungsi isLandscape() saat layar berubah ukuran
window.addEventListener("resize", () => {
  if (window.innerWidth > window.innerHeight) {
    rotatePhone.style.display = "none";
    // lakukan tindakan tertentu untuk orientasi landscape
  } else {
    rotatePhone.style.display = "block";
    // lakukan tindakan tertentu untuk orientasi potrait
  }
});

const backsound = new Audio("sfx/backsound.mp3");

function playBacksoundMusic() {
  if (backsound.paused) {
    backsound.loop = true;
    backsound.play();
    backsound.volume = 0.1;
  } else {
    backsound.pause();
  }
}

const volumeCLick = document.querySelector(".volume");
const audioOnOff = document.querySelector(".fa-volume-up");
volumeCLick.onclick = () => {
  playBacksoundMusic();
  audioOnOff.classList.toggle("fa-volume-mute");
  audioOnOff.classList.toggle("fa-volume-up");
};

const buttonChooseSkin = document.querySelectorAll(".splide__arrow");
for (var i = 0; i < buttonChooseSkin.length; i++) {
  buttonChooseSkin[i].onclick = () => {
    klik();
  };
}

const buttonNumberSkin = document.querySelectorAll(".splide__pagination__page");
for (var i = 0; i < buttonNumberSkin.length; i++) {
  buttonNumberSkin[i].onclick = () => {
    klik();
  };
}

const userEdit = document.querySelector("p .fas");
userEdit.onclick = () => {
  userEdit.classList.toggle("fa-times");
  document.querySelector(".user-experience").classList.toggle("showEdit");
  document.querySelector("html").classList.toggle("showEdit");
  document.querySelector(".edit-content").classList.toggle("showEdit");
  whoosh();
};

const createNameButton = document.querySelector("#createName");
createNameButton.onclick = () => {};

const card = document.querySelector(".shakeCard");

card.onclick = () => {
  card.classList.toggle("flip");
  pop();
};

// Mendefinisikan fungsi untuk menghasilkan angka acak dari 1 hingga 6
function rollCard() {
  return Math.floor(Math.random() * 8) + 1;
}

// Mendefinisikan fungsi untuk mengambil elemen HTML kartu dan memperbarui gambarnya dengan nilai kartu yang baru
function updateCard(value) {
  var cardFront = document.querySelector(".front");
  cardFront.src = "img/cardFront" + value + ".png";
  var cardBack = document.querySelector(".back");
  cardBack.src = "img/cardBack" + value + ".png";
}

const boxCard = document.querySelector(".boxCard");

// Mendefinisikan fungsi untuk mengklik tombol "kocok kartu"
function rollCardclick() {
  boxCard.style.display = "block";
  spin();
  // Mendapatkan elemen HTML kartu dan tombol
  var rollButton = document.getElementById("shakeCard");

  // Menonaktifkan tombol selama animasi berlangsung
  rollButton.disabled = true;

  // Mengulangi animasi kartu selama 10 frame dengan interval 50 ms
  var frames = 48;
  var interval = 50;
  var currentFrame = 0;
  var rollInterval = setInterval(function () {
    // Mengubah gambar dadu secara acak setiap frame
    var value = rollCard();
    updateCard(value);

    // Meningkatkan frame saat ini
    currentFrame++;

    // Menghentikan animasi setelah 10 frame dan mengaktifkan kembali tombol
    if (currentFrame === frames) {
      clearInterval(rollInterval);
    }
  }, interval);

  setTimeout(() => {
    closeCard.style.display = "block";
  }, 2500);
}

// Mengaitkan fungsi rollButtonClick dengan tombol "kocok dadu"
const shakeCard = document.getElementById("shakeCard");
shakeCard.addEventListener("click", rollCardclick);

shakeCard.disabled = false;

const closeCard = document.querySelector("#closeCard");
closeCard.onclick = () => {
  boxCard.style.display = "none";
  shakeCard.disabled = true;
  document.querySelector(".showQuestion").disabled = false;
  card.classList.remove("flip");
};

// Mengambil semua elemen input
const progressInput = document.querySelectorAll('input[type="text"]');
const questionInput = document.querySelectorAll('textarea[name="pertanyaan"]');

// Event listener untuk menangani peristiwa sebelum halaman dimuat ulang
window.addEventListener("input", () => {
  for (let i = 0; i < progressInput.length; i++) {
    const inputNameValue = progressInput[i].value;
    localStorage.setItem(`textProgress${i}`, inputNameValue);
  }
  for (let q = 0; q < questionInput.length; q++) {
    const inputQuestionValue = questionInput[q].value;
    localStorage.setItem(`question${q}`, inputQuestionValue);
  }
});

// Mengisi nilai input dengan data yang disimpan di Local Storage (jika ada)
for (let i = 0; i < progressInput.length; i++) {
  const inputDataName = localStorage.getItem(`textProgress${i}`);
  if (inputDataName) {
    progressInput[i].value = inputDataName;
  }
}
for (let q = 0; q < questionInput.length; q++) {
  const inputDataQuestion = localStorage.getItem(`question${q}`);
  if (inputDataQuestion) {
    questionInput[q].value = inputDataQuestion;
  }
}

const smooth = document.querySelector(".smooth");
smooth.onclick = () => {
  board.style.backgroundImage = "url(img/papanUlarTangga-smooth.png)";
};
const height = document.querySelector(".height");
height.onclick = () => {
  board.style.backgroundImage = "url(img/papanUlarTangga.png)";
};

const editQuestion = document.querySelector(".edit-question");
const createButton = document.querySelector("#create");

function direct() {
  editQuestion.style.display = "none";
  createButton.style.display = "none";
  localStorage.setItem("directEditQuestion", editQuestion.style.display);
  localStorage.setItem("createButton", createButton.style.display);
}

function edit() {
  editQuestion.style.display = "block";
  createButton.style.display = "block";
  localStorage.setItem("directEditQuestion", editQuestion.style.display);
  localStorage.setItem("createButton", createButton.style.display);
}

const storedDirect = localStorage.getItem("directEditQuestion");
const storedButton = localStorage.getItem("createButton");
if (storedDirect) {
  editQuestion.style.display = storedDirect;
  createButton.style.display = storedButton;
}

const buttonCloseGame = document.querySelector(".gameShowUlarTangga button");
const showGame = document.querySelector(".gameShowUlarTangga");

showGame.classList.add("active");
document.querySelector("html").classList.add("showEdit");

buttonCloseGame.onclick = () => {
  pop();
  showGame.classList.remove("active");
  document.querySelector("html").classList.remove("showEdit");

  // Menyimpan status pengaturan ke localStorage
  localStorage.setItem("closeShowGame", "true");
};

const savedCloseShow = localStorage.getItem("closeShowGame");
if (savedCloseShow === "true") {
  showGame.classList.remove("active");
  document.querySelector("html").classList.remove("showEdit");
}

const radioPickButtons = document.querySelectorAll(
  'input[name="pickTypeGame"]'
);

radioPickButtons.forEach((radioPickButtons) => {
  radioPickButtons.addEventListener("change", () => {
    klik();
    if (radioPickButtons.checked) {
      buttonCloseGame.disabled = false;
    } else {
      buttonCloseGame.disabled = true;
    }
  });
});

const faBook = document.querySelector(".fa-book");
faBook.onclick = () => {
  document.querySelector(".box-panduan").classList.toggle("active");
  document.querySelector("html").classList.toggle("showEdit");
  whoosh();
};

const videoExplain = document.querySelector(".video-explain video");
const mulai = document.querySelector(".mulai");
const alertMulai = document.querySelector("#alert-mulai");
const belum = document.querySelector(".belum");
const removeBidaks = document.querySelectorAll(
  "#cursor1, #cursor2, #cursor3, #cursor4, #cursor5"
);

removeBidaks.forEach((removeBidak) => {
  removeBidak.classList.add("remove");
});
alertMulai.onclick = () => {
  document.querySelector(".mulai-permainan").style.display = "flex";
};
belum.onclick = () => {
  document.querySelector(".mulai-permainan").style.display = "none";
};
mulai.onclick = () => {
  alertMulai.style.display = "none";
  document.querySelector(".mulai-permainan").style.display = "none";
  document.querySelector(".video-explain").style.display = "none";
  localStorage.setItem(
    "videoExplain",
    document.querySelector(".video-explain").style.display
  );
  videoExplain.pause();

  removeBidaks.forEach((removeBidak) => {
    removeBidak.classList.remove("remove");
    localStorage.setItem("removeBidak", "true");
    setTimeout(() => {
      removeBidak.style.transition = "none";
    }, 2000);
  });
};

const savedremoveBidak = localStorage.getItem("removeBidak");
const savedVideoExplain = localStorage.getItem("videoExplain");
if (savedremoveBidak === "true") {
  removeBidaks.forEach((removeBidak) => {
    removeBidak.classList.remove("remove");
    setTimeout(() => {
      removeBidak.style.transition = "none";
    }, 2000);
  });
  document.querySelector(".video-explain").style.display = savedVideoExplain;
  alertMulai.style.display = "none";
}

let minutes = 0;
let seconds = 0;
let intervalId;

const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const resetBtn = document.getElementById("resetBtn");

// Cek apakah waktu terakhir tersimpan di localStorage
if (localStorage.getItem("stopwatch")) {
  const lastTime = JSON.parse(localStorage.getItem("stopwatch"));
  minutes = lastTime.minutes;
  seconds = lastTime.seconds;
  updateTimer();
}

function startTimer() {
  intervalId = setInterval(updateTimer, 1000);
  startBtn.disabled = true;
  stopBtn.disabled = false;
}

function stopTimer() {
  clearInterval(intervalId);
  startBtn.disabled = false;
  stopBtn.disabled = true;
  saveTimer();
}

function resetTimer() {
  clearInterval(intervalId);
  minutes = 0;
  seconds = 0;
  updateTimer();
  startBtn.disabled = false;
  localStorage.removeItem("stopwatch");
}

function updateTimer() {
  seconds++;

  if (seconds === 60) {
    minutes++;
    seconds = 0;
  }

  minutesElement.textContent = padNumber(minutes);
  secondsElement.textContent = padNumber(seconds);
  saveTimer();
}

function padNumber(number) {
  return number.toString().padStart(2, "0");
}

function saveTimer() {
  const currentTime = {
    minutes: minutes,
    seconds: seconds,
  };
  localStorage.setItem("stopwatch", JSON.stringify(currentTime));
}

mulai.addEventListener("click", shuffleChildren);
startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);

const parentElement = document.querySelector(".flex-point");
const childElements = Array.from(parentElement.children);

// fungsi untuk mengacak urutan child element secara acak
function shuffleChildren() {
  for (let i = childElements.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    parentElement.insertBefore(childElements[j], childElements[i]);
  }
}

// panggil fungsi di atas setiap kali halaman dimuat ulang
window.onload = shuffleChildren();

// program reset localStorage
const setting = document.querySelector(".fa.fa-cog");
const menuSetting = document.querySelector(".menu-reset");
setting.onclick = () => {
  menuSetting.classList.toggle("active");
};

// Fungsi untuk menghapus class "active" jika yang diklik bukan elemen ".fa.fa-cog"
document.addEventListener("click", (event) => {
  const targetElement = event.target;

  // Cek apakah yang diklik bukan elemen ".fa.fa-cog" atau ".menu-reset"
  if (
    !targetElement.matches(".fa.fa-cog") &&
    !targetElement.matches(".menu-reset")
  ) {
    setTimeout(() => {
      menuSetting.classList.remove("active");
    }, 200);
  }
});

const resetSemua = document.querySelectorAll("#reset-semua");
const resetGameMode = document.querySelector("#reset-game-mode");
const resetPemain = document.querySelector("#reset-jumlah-pemain");
const resetPermainan = document.querySelector("#reset-permainan");

resetPermainan.onclick = () => {
  document.querySelector(".alert-reset").style.display = "flex";
  menuSetting.classList.remove("active");
};
document.querySelector("#cancel").onclick = () => {
  document.querySelector(".alert-reset").style.display = "none";
};
resetSemua.forEach((reset) => {
  reset.onclick = () => {
    localStorage.clear();
    window.location.reload();
  };
});
resetGameMode.onclick = () => {
  localStorage.removeItem("closeShowGame");
  window.location.reload();
};
