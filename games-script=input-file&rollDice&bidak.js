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
let words = ["player1", "player2", "player3", "player4", "player5"];
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

// Mendefinisikan fungsi untuk mengklik tombol "kocok dadu"
function rollButtonClick() {
  rollSound();

  // Menonaktifkan tombol selama animasi berlangsung
  rollButton.disabled = true;
  setTimeout(() => {
    // mengubah teks tombol menjadi kata selanjutnya dalam array
    rollButton.innerHTML = words[currentWordIndex];
    rollButton.style.background = color[currentColorIndex];
    document.querySelector(".showQuestion").disabled = false;
  }, 1800);

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
  rollButton.innerHTML = words[storedcurrentWordIndex];
}
if (storedcurrentColorIndex) {
  rollButton.style.background = color[storedcurrentColorIndex];
}

// Mengaitkan fungsi rollButtonClick dengan tombol "kocok dadu"
var rollButton = document.getElementById("rollButton");
rollButton.addEventListener("click", rollButtonClick);

const players = [
  {
    skinClass: "skinPlayer3",
    cursor: "cursor3",
    cursorName: "nameColor3",
  },
  {
    skinClass: "skinPlayer4",
    cursor: "cursor4",
    cursorName: "nameColor4",
  },
  {
    skinClass: "skinPlayer5",
    cursor: "cursor5",
    cursorName: "nameColor5",
  },
];

function pickPlayer(count) {
  const startIndex = players.length - count;
  for (let i = players.length - 1; i >= startIndex; i--) {
    const player = players[i];
    klik();
    const skinPlayer = document.querySelector(`.${player.skinClass}`);
    const cursorPlayer = document.querySelector(`#${player.cursor}`);
    const cursorColor = document.querySelector(`.${player.cursorName}`);

    setTimeout(() => {
      skinPlayer.style.display = "none";
      cursorPlayer.style.display = "none";
      cursorColor.style.display = "none";

      localStorage.setItem(`skinPlayer${i}`, skinPlayer.style.display);
      localStorage.setItem(`cursorPlayer${i}`, cursorPlayer.style.display);
      localStorage.setItem(`cursorColor${i}`, cursorColor.style.display);
    }, 500);
    const savedSkinPlayer = localStorage.getItem(`skinPlayer${i}`);
    const savedCursorPlayer = localStorage.getItem(`cursorPlayer${i}`);
    const savedCursorColor = localStorage.getItem(`cursorColor${i}`);

    if (savedSkinPlayer) {
      const skinPlayer = document.querySelector(`.${player.skinClass}`);
      skinPlayer.style.display = savedSkinPlayer;
    }

    if (savedCursorPlayer) {
      const cursorPlayer = document.querySelector(`#${player.cursor}`);
      cursorPlayer.style.display = savedCursorPlayer;
    }

    if (savedCursorColor) {
      const cursorColor = document.querySelector(`.${player.cursorName}`);
      cursorColor.style.display = savedCursorColor;
    }
  }
}

const pickButton = document.querySelectorAll('input[name="pilihPlayer"]');
const buttonPick = document.querySelector("#buttonPick");

pickButton.forEach((pickButton) => {
  pickButton.addEventListener("change", () => {
    if (pickButton.checked) {
      buttonPick.disabled = false;
    } else {
      buttonPick.disabled = true;
    }
  });
});

buttonPick.onclick = () => {
  document.querySelector(".pilihBerapaPlayer").classList.remove("active");
};

const pick1 = document.querySelector("#pick1");
pick1.onclick = () => {
  pickPlayer(3);

  if (words.length > 0) {
    words.splice(words.length - 3, 3);
    color.splice(color.length - 3, 3);

    // Menyimpan ke localStorage
    localStorage.setItem("words", JSON.stringify(words));
    localStorage.setItem("color", JSON.stringify(color));
  }

  const savedWords = localStorage.getItem("words");
  const savedColor = localStorage.getItem("color");

  if (savedWords) {
    words = JSON.parse(savedWords);
  }

  if (savedColor) {
    color = JSON.parse(savedColor);
  }
};

const pick2 = document.querySelector("#pick2");
pick2.onclick = () => {
  pickPlayer(2);

  if (words.length > 0) {
    words.splice(words.length - 2, 2);
    color.splice(color.length - 2, 2);

    // Menyimpan ke localStorage
    localStorage.setItem("words", JSON.stringify(words));
    localStorage.setItem("color", JSON.stringify(color));
  }

  const savedWords = localStorage.getItem("words");
  const savedColor = localStorage.getItem("color");

  if (savedWords) {
    words = JSON.parse(savedWords);
  }

  if (savedColor) {
    color = JSON.parse(savedColor);
  }
};

const pick3 = document.querySelector("#pick3");
pick3.onclick = () => {
  pickPlayer(1);

  if (words.length > 0) {
    words.pop();
    color.pop();

    // Menyimpan ke localStorage
    localStorage.setItem("words", JSON.stringify(words));
    localStorage.setItem("color", JSON.stringify(color));
  }

  const savedWords = localStorage.getItem("words");
  const savedColor = localStorage.getItem("color");

  if (savedWords) {
    words = JSON.parse(savedWords);
  }

  if (savedColor) {
    color = JSON.parse(savedColor);
  }
};

const pick4 = document.querySelector("#pick4");
pick4.onclick = () => {
  pickPlayer(0);
};
