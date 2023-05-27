function popIp() {
  const popIp = new Audio("sfx/pop.mp3");
  popIp.play();
  popIp.volume = 0.3;
}

function klik() {
  const klik = new Audio("sfx/klik.mp3");
  klik.play();
  klik.volume = 0.3;
}

function rollSound() {
  const roll = new Audio("sfx/roll.mp3");
  roll.play();
  roll.volume = 0.5;
}

// array untuk menyimpan elemen kotak dan status dragging-nya
let boxes = [
  {
    element: document.getElementById("cursor1"),
    isDragging: false,
    offsetX: 0,
    offsetY: 0,
  },
  {
    element: document.getElementById("cursor2"),
    isDragging: false,
    offsetX: 0,
    offsetY: 0,
  },
  {
    element: document.getElementById("cursor3"),
    isDragging: false,
    offsetX: 0,
    offsetY: 0,
  },
  {
    element: document.getElementById("cursor4"),
    isDragging: false,
    offsetX: 0,
    offsetY: 0,
  },
  {
    element: document.getElementById("cursor5"),
    isDragging: false,
    offsetX: 0,
    offsetY: 0,
  },
];

// Variabel untuk menyimpan status pesan selamat yang ditampilkan
let congratulationsShown = [false, false, false, false, false];

// Fungsi untuk memeriksa tabrakan kotak dengan lingkaran
function checkCollision(box, index) {
  const circle = document.querySelector(".finish");
  const circleRect = circle.getBoundingClientRect();
  const boxRect = box.element.getBoundingClientRect();

  if (
    boxRect.left < circleRect.right &&
    boxRect.right > circleRect.left &&
    boxRect.top < circleRect.bottom &&
    boxRect.bottom > circleRect.top &&
    !congratulationsShown[index]
  ) {
    showCongratulations(index + 1);
    congratulationsShown[index] = true;
  }
}

// Fungsi untuk menampilkan pesan selamat
function showCongratulations(boxNumber) {
  const pesanJuara = [
    "Selamat kepada Andi",
    "Keren sekali Saiful",
    "Kamu Hebat Herman",
    "Congratulations Dani",
    "Ridho adalah juaranya!",
  ];
  setTimeout(() => {
    const message = document.createElement("div");
    message.className = "selamat" + boxNumber;
    message.textContent = pesanJuara[boxNumber - 1];
    document.querySelector(".congratulations").appendChild(message);
    document.querySelector(".congratulations").style.display = "flex";
  }, 500);
}

// loop untuk menambahkan event listener ke setiap kotak
boxes.forEach(function (box, index) {
  box.element.addEventListener("mousedown", function (event) {
    box.isDragging = true;
    box.offsetX = event.clientX - box.element.offsetLeft;
    box.offsetY = event.clientY - box.element.offsetTop;
  });

  document.addEventListener("mouseup", function () {
    box.isDragging = false;
    saveBoxPosition(index);
    checkCollision(box, index);
  });

  document.addEventListener("mousemove", function (event) {
    moveBox(event, box);
  });
});

// Fungsi untuk memindahkan kotak
function moveBox(event, box) {
  if (box.isDragging) {
    box.element.style.left = event.clientX - box.offsetX + "px";
    box.element.style.top = event.clientY - box.offsetY + "px";
    checkCollision(box, boxes.indexOf(box));
  }
}

// Fungsi untuk menyimpan posisi kotak ke localStorage
function saveBoxPosition(index) {
  localStorage.setItem(
    "box" + index,
    JSON.stringify({
      left: boxes[index].element.style.left,
      top: boxes[index].element.style.top,
    })
  );
}

// Memulihkan posisi kotak dari localStorage (jika ada)
boxes.forEach(function (box, index) {
  const savedPosition = localStorage.getItem("box" + index);
  if (savedPosition) {
    const { left, top } = JSON.parse(savedPosition);
    box.element.style.left = left;
    box.element.style.top = top;
  }
});

// Membuat variabel untuk objek dan halaman
let objCursor = [
  document.getElementById("cursor1"),
  document.getElementById("cursor2"),
  document.getElementById("cursor3"),
  document.getElementById("cursor4"),
  document.getElementById("cursor5"),
];
let halaman = document.documentElement;

// Menambahkan event listener untuk mendeteksi gerakan sentuhan pada perangkat mobile
halaman.addEventListener("touchmove", (event) => {
  // Looping melalui setiap sentuhan yang terdeteksi
  for (let i = 0; i < event.touches.length; i++) {
    // Mengambil koordinat sentuhan
    let x = event.touches[i].clientX;
    let y = event.touches[i].clientY;

    checkCollision({ element: objCursor[i] }, i);

    // Menentukan objek cursor mana yang akan mengikuti setiap sentuhan
    let objTarget = objCursor[event.target.getAttribute("data-sentuhan") - 1];

    // Memastikan bahwa elemen yang men-trigger event listener memiliki atribut data-sentuhan
    if (objTarget) {
      objTarget.style.top = y + "px";
      objTarget.style.left = x + "px";

      // Simpan pergeseran pada localStorage
      localStorage.setItem(
        `cursor${event.target.getAttribute("data-sentuhan")}_position`,
        JSON.stringify({ x, y })
      );
    }
  }
});

// Mengembalikan posisi terakhir dari localStorage saat halaman dimuat
for (let i = 0; i < objCursor.length; i++) {
  const cursorPosition = localStorage.getItem(`cursor${i + 1}_position`);
  if (cursorPosition) {
    const { x, y } = JSON.parse(cursorPosition);
    objCursor[i].style.top = y + "px";
    objCursor[i].style.left = x + "px";
  }
}

const skinElements = [
  {
    bidak: document.querySelector("#cursor1"),
    pilihSkin: document.querySelectorAll(".pilihan1"),
  },
  {
    bidak: document.querySelector("#cursor2"),
    pilihSkin: document.querySelectorAll(".pilihan2"),
  },
  {
    bidak: document.querySelector("#cursor3"),
    pilihSkin: document.querySelectorAll(".pilihan3"),
  },
  {
    bidak: document.querySelector("#cursor4"),
    pilihSkin: document.querySelectorAll(".pilihan4"),
  },
  {
    bidak: document.querySelector("#cursor5"),
    pilihSkin: document.querySelectorAll(".pilihan5"),
  },
];

function saveSkinIndex(element, skinIndex) {
  const bidakClass = element.getAttribute("id");
  localStorage.setItem(`skinIndex-${bidakClass}`, skinIndex);
}

skinElements.forEach((element) => {
  // mendapatkan indeks skinIndex yang disimpan di localStorage jika ada
  const savedSkinIndex = localStorage.getItem(
    `skinIndex-${element.bidak.getAttribute("id")}`
  );

  for (let i = 0; i < element.pilihSkin.length; i++) {
    const pickSkin = element.pilihSkin[i];
    const skinIndex = i - 1;

    pickSkin.onclick = () => {
      element.bidak.style.backgroundImage = `url(img/bidak${skinIndex}.png)`;
      pickSkin.style.backgroundSize = `120%`;
      pickSkin.style.backgroundPosition = `center`;
      pickSkin.style.border = `5px solid #fff`;
      saveSkinIndex(element.bidak, skinIndex); // menyimpan indeks skinIndex ke localStorage
      popIp();
    };

    // jika ada nilai skinIndex yang disimpan di localStorage untuk elemen saat ini
    if (savedSkinIndex !== null && skinIndex === parseInt(savedSkinIndex)) {
      element.bidak.style.backgroundImage = `url(img/bidak${skinIndex}.png)`;
    }

    function borderChooseSkin() {
      pickSkin.style.backgroundSize = `95%`;
      pickSkin.style.backgroundPosition = `center`;
      pickSkin.style.border = `none`;
    }
    const buttonChooseSkin = document.querySelectorAll(".splide__arrow");
    buttonChooseSkin.forEach((buttonChooseSkin) => {
      buttonChooseSkin.addEventListener("click", () => {
        borderChooseSkin();
      });
    });
  }
});

// membuat sebuah array yang berisi kata-kata yang ingin ditampilkan
let words = ["Player1", "Player2", "Player3", "Player4", "Player5"];
let color = ["#e20000", "#1919e2", "#11e211", "#800080", "#00a5a7"];

// membuat variabel untuk menunjukkan indeks kata saat ini
let currentWordIndex = 0;
let currentColorIndex = 0;

// Mendefinisikan fungsi untuk menghasilkan angka acak dari 1 hingga 6
function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

// Mendefinisikan fungsi untuk mengambil elemen HTML dadu dan memperbarui gambarnya dengan nilai dadu yang baru
function updateDice(value) {
  var dice = document.getElementById("dice");
  dice.src = "img/Dadu" + value + ".png";

  // Menyimpan nilai value ke localStorage
  localStorage.setItem("diceValue", value);
}

document.querySelector(".showQuestion").disabled = true;

// Mendapatkan elemen HTML tombol
var rollButton = document.getElementById("rollButton");

const pickrollDice = document.querySelector("#dice");
pickrollDice.onclick = () => {
  // mengubah teks tombol menjadi kata selanjutnya dalam array
  rollButton.innerHTML = words[currentWordIndex];
  rollButton.style.background = color[currentColorIndex];

  // menambahkan satu ke indeks kata saat ini
  currentWordIndex++;
  currentColorIndex++;

  // Menyimpan nilai indexWord ke localStorage
  localStorage.setItem("currentWordIndex", currentWordIndex);

  // Menyimpan nilai indexColor ke localStorage
  localStorage.setItem("currentColorIndex", currentColorIndex);
  // jika sudah mencapai kata terakhir, mengulang dari awal
  if (currentWordIndex >= words.length) {
    currentWordIndex = 0;
  }
  if (currentColorIndex >= color.length) {
    currentColorIndex = 0;
  }
};
// Mendefinisikan fungsi untuk mengklik tombol "kocok dadu"
function rollButtonClick() {
  rollSound();
  // Menonaktifkan tombol selama animasi berlangsung
  rollButton.disabled = true;
  setTimeout(() => {
    document.querySelector(".showQuestion").disabled = false;
  }, 1800);

  // Mengulangi animasi dadu selama 10 frame dengan interval 50 ms
  var frames = 36;
  var interval = 50;
  var currentFrame = 0;
  var rollInterval = setInterval(function () {
    // Mengubah gambar dadu secara acak setiap frame
    var value = rollDice();
    updateDice(value);

    // Meningkatkan frame saat ini
    currentFrame++;

    // Menghentikan animasi setelah 10 frame dan mengaktifkan kembali tombol
    if (currentFrame === frames) {
      clearInterval(rollInterval);
      rollButton.disabled = false;
    }
  }, interval);
}

// Mendapatkan nilai rollInterval dari localStorage
var storedDiceValue = localStorage.getItem("diceValue");
var storedcurrentWordIndex = localStorage.getItem("currentWordIndex");
var storedcurrentColorIndex = localStorage.getItem("currentColorIndex");

// Menggunakan nilai storedrollInterval jika ada
if (storedDiceValue) {
  var dice = document.getElementById("dice");
  dice.src = `img/Dadu${storedDiceValue}.png`;
}

if (storedcurrentWordIndex) {
  rollButton.innerHTML = words[storedcurrentWordIndex - 1];
}
if (storedcurrentColorIndex) {
  rollButton.style.background = color[storedcurrentColorIndex - 1];
}

// Mengaitkan fungsi rollButtonClick dengan tombol "kocok dadu"
var rollButton = document.getElementById("rollButton");
rollButton.addEventListener("click", rollButtonClick);

const players = [
  {
    id: 1,
    skinClass: "skinPlayer3",
    cursor: "cursor3",
  },
  {
    id: 2,
    skinClass: "skinPlayer4",
    cursor: "cursor4",
  },
  {
    id: 3,
    skinClass: "skinPlayer5",
    cursor: "cursor5",
  },
];

function handleClick(player) {
  const skinPlayer = document.querySelector(`.${player.skinClass}`);
  const cursorPlayer = document.querySelector(`#${player.cursor}`);

  skinPlayer.style.display = "none";
  cursorPlayer.style.display = "none";

  localStorage.setItem(`skinPlayer${player.id}`, skinPlayer.style.display);
  localStorage.setItem(`cursorPlayer${player.id}`, cursorPlayer.style.display);

  let numToRemove = players.length - player.id;

  if (numToRemove > 0) {
    for (
      let i = players.length - 1;
      i > players.length - numToRemove - 1;
      i--
    ) {
      const skinToRemove = document.querySelector(`.${players[i].skinClass}`);
      const cursorToRemove = document.querySelector(`#${players[i].cursor}`);

      skinToRemove.style.display = "none";
      cursorToRemove.style.display = "none";

      localStorage.setItem(
        `skinPlayer${players[i].id}`,
        skinToRemove.style.display
      );
      localStorage.setItem(
        `cursorPlayer${players[i].id}`,
        cursorToRemove.style.display
      );
    }
  }
}

for (let i = players.length - 1; i >= 0; i--) {
  const player = players[i];
  const pick = document.querySelector(`#pick${player.id}`);

  const handleClickPick = () => {
    const count = parseInt(pick.getAttribute("data-count"));

    // Menghapus elemen-elemen dari array words dan color
    words.splice(-count);
    color.splice(-count);

    localStorage.setItem("words", JSON.stringify(words));
    localStorage.setItem("color", JSON.stringify(color));

    handleClick(player);
    pick.removeEventListener("click", handleClickPick);
    klik();
  };

  pick.addEventListener("click", handleClickPick);

  const savedSkinPlayer = localStorage.getItem(`skinPlayer${player.id}`);
  const savedCursorPlayer = localStorage.getItem(`cursorPlayer${player.id}`);

  if (savedSkinPlayer === "none") {
    const skinPlayer = document.querySelector(`.${player.skinClass}`);
    skinPlayer.style.display = savedSkinPlayer;
  }

  if (savedCursorPlayer) {
    const cursorPlayer = document.querySelector(`#${player.cursor}`);
    cursorPlayer.style.display = savedCursorPlayer;
  }
}

const savedWords = localStorage.getItem("words");
const savedColor = localStorage.getItem("color");

if (savedWords) {
  words = JSON.parse(savedWords);
}

if (savedColor) {
  color = JSON.parse(savedColor);
}

const pick4 = document.querySelector("#pick4");

const handleClickPick4 = () => {
  pick4.removeEventListener("click", handleClickPick4);
  klik();
};

pick4.addEventListener("click", handleClickPick4);

const pickButton = document.querySelectorAll('input[name="pilihPlayer"]');

pickButton.forEach((button) => {
  button.addEventListener("change", (event) => {
    const selectedButton = event.target;

    pickButton.forEach((btn) => {
      btn.disabled = btn !== selectedButton;
    });

    setTimeout(() => {
      document.querySelector(".pilihBerapaPlayer").classList.add("active");
      localStorage.setItem("closePick", "true");
    }, 100);
  });
});

const savedClosePick = localStorage.getItem("closePick");
if (savedClosePick === "true") {
  document.querySelector(".pilihBerapaPlayer").classList.add("active");
}
