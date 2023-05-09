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
  }, 500);
}

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

function pop() {
  const pop = new Audio("sfx/pop.mp3");
  pop.play();
  pop.volume = 0.5;
}

function klik() {
  const klik = new Audio("sfx/klik.mp3");
  klik.play();
  klik.volume = 0.7;
}

function spin() {
  const spin = new Audio("sfx/spiningSfx.mp3");
  spin.play();
  spin.volume = 0.5;
}

const backsound = new Audio("sfx/backsound.mp3");

function playBacksoundMusic() {
  if (backsound.paused) {
    backsound.play();
    backsound.volume = 0.2;
  } else {
    backsound.currentTime = 0;
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

const userEdit = document.querySelector(".fas");
userEdit.onclick = () => {
  userEdit.classList.toggle("fa-times");
  document.querySelector(".user-experience").classList.toggle("showEdit");
  document.querySelector("html").classList.toggle("showEdit");
};

const card = document.querySelector(".shakeCard");

card.onclick = () => {
  card.classList.toggle("flip");
  pop();
};

// Mendefinisikan fungsi untuk menghasilkan angka acak dari 1 hingga 6
function rollCardfront() {
  return Math.floor(Math.random() * 6) + 1;
}
// Mendefinisikan fungsi untuk menghasilkan angka acak dari 1 hingga 6
function rollCardback() {
  return Math.floor(Math.random() * 6) + 1;
}

// Mendefinisikan fungsi untuk mengambil elemen HTML dadu dan memperbarui gambarnya dengan nilai dadu yang baru
function updateCardfront(value) {
  var card = document.querySelector(".front");
  card.src = "img/cardFront" + value + ".jpeg";
}
// Mendefinisikan fungsi untuk mengambil elemen HTML dadu dan memperbarui gambarnya dengan nilai dadu yang baru
function updateCardback(value) {
  var card = document.querySelector(".back");
  card.src = "img/cardBack" + value + ".jpeg";
}

const boxCard = document.querySelector(".boxCard");

// Mendefinisikan fungsi untuk mengklik tombol "kocok dadu"
function rollCardclick() {
  boxCard.style.display = "block";
  spin();
  // Mendapatkan elemen HTML dadu dan tombol
  var rollButton = document.getElementById("shakeCard");

  // Menonaktifkan tombol selama animasi berlangsung
  rollButton.disabled = true;

  // Mengulangi animasi dadu selama 10 frame dengan interval 50 ms
  var frames = 48;
  var interval = 50;
  var currentFrame = 0;
  var rollInterval = setInterval(function () {
    // Mengubah gambar dadu secara acak setiap frame
    var frontValue = rollCardfront();
    updateCardfront(frontValue);
    var value = rollCardback();
    updateCardback(value);

    // Meningkatkan frame saat ini
    currentFrame++;

    // Menghentikan animasi setelah 10 frame dan mengaktifkan kembali tombol
    if (currentFrame === frames) {
      clearInterval(rollInterval);
      rollButton.disabled = false;
    }
  }, interval);
}

// Mengaitkan fungsi rollButtonClick dengan tombol "kocok dadu"
const shakeCard = document.getElementById("shakeCard");
shakeCard.addEventListener("click", rollCardclick);

const closeCard = document.querySelector("#closeCard");
closeCard.onclick = () => {
  boxCard.style.display = "none";
};

const parentElement = document.querySelector(".flex-point");
const childElements = parentElement.children;

// fungsi untuk mengacak urutan child element secara acak
function shuffleChildren() {
  for (let i = childElements.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    parentElement.insertBefore(childElements[j], childElements[i]);
  }
}

// panggil fungsi di atas setiap kali halaman dimuat ulang
window.onload = shuffleChildren;

// Mengambil semua elemen input
const progressInput = document.querySelectorAll('input[type="text"]');
const questionInput = document.querySelectorAll('textarea[name="pertanyaan"]');

// Event listener untuk menangani peristiwa sebelum halaman dimuat ulang
window.addEventListener("unload", () => {
  for (let i = 0; i < progressInput.length; i++) {
    const inputNameValue = progressInput[i].value;
    localStorage.setItem(`player${i}`, inputNameValue);
  }
  for (let q = 0; q < questionInput.length; q++) {
    const inputQuestionValue = questionInput[q].value;
    localStorage.setItem(`question${q}`, inputQuestionValue);
  }
});

// Mengisi nilai input dengan data yang disimpan di Local Storage (jika ada)
for (let i = 0; i < progressInput.length; i++) {
  const inputDataName = localStorage.getItem(`player${i}`);
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
  board.style.backgroundImage = "url(img/board.png)";
};
const height = document.querySelector(".height");
height.onclick = () => {
  board.style.backgroundImage = "url(img/board-hd.jpg)";
};
