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
var boxes = [
  { element: document.getElementById("cursor1"), isDragging: false },
  { element: document.getElementById("cursor2"), isDragging: false },
  { element: document.getElementById("cursor3"), isDragging: false },
  { element: document.getElementById("cursor4"), isDragging: false },
  { element: document.getElementById("cursor5"), isDragging: false },
];

// fungsi untuk mengubah posisi kotak sesuai dengan posisi kursor
function moveBox(event, box) {
  if (box.isDragging) {
    var x = event.clientX;
    var y = event.clientY;
    box.element.style.left = x + "px";
    box.element.style.top = y + "px";
  }
}

// loop untuk menambahkan event listener ke setiap kotak
boxes.forEach(function (box) {
  box.element.addEventListener("mousedown", function (event) {
    box.isDragging = true;
    moveBox(event, box);
  });

  document.addEventListener("mouseup", function () {
    box.isDragging = false;
  });

  document.addEventListener("mousemove", function (event) {
    moveBox(event, box);
  });
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
    }
  }
});

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
let color = ["#ff0000", "#0000ff", "#00ff00", "#800080", "#00a5a7"];

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
}

document.querySelector(".showQuestion").disabled = true;

// Mendefinisikan fungsi untuk mengklik tombol "kocok dadu"
function rollButtonClick() {
  rollSound();
  // Mendapatkan elemen HTML dadu dan tombol
  var dice = document.getElementById("dice");
  var rollButton = document.getElementById("rollButton");

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

// Mengaitkan fungsi rollButtonClick dengan tombol "kocok dadu"
var rollButton = document.getElementById("rollButton");
rollButton.addEventListener("click", rollButtonClick);

const players = [
  {
    skinClass: "skinPlayer3",
    deleteButtonClass: "hapus3",
    cursor: "cursor3",
  },
  {
    skinClass: "skinPlayer4",
    deleteButtonClass: "hapus4",
    cursor: "cursor4",
  },
  {
    skinClass: "skinPlayer5",
    deleteButtonClass: "hapus5",
    cursor: "cursor5",
  },
];

for (let i = players.length - 1; i >= 0; i--) {
  const player = players[i];

  const deleteButton = document.querySelector(`.${player.deleteButtonClass}`);
  deleteButton.onclick = () => {
    klik();
    const skinPlayer = document.querySelector(`.${player.skinClass}`);
    const cursorPlayer = document.querySelector(`#${player.cursor}`);
    skinPlayer.style.animation = "hapus 0.2s 0.1s forwards";

    setTimeout(() => {
      skinPlayer.style.display = "none";
      cursorPlayer.style.display = "none";
      popIp();

      if (words.length > 0) {
        words.pop();
        color.pop();
      }

      if (i > 0) {
        const prevDeleteButton = document.querySelector(
          `.${players[i - 1].deleteButtonClass}`
        );
        prevDeleteButton.style.display = "block";
      }
    }, 500);
  };
}

// const deleteBidak5 = document.querySelector(".hapus5");
// deleteBidak5.onclick = () => {
//   klik();
//   document.querySelector(".skinPlayer5").style.animation =
//     "hapus 0.2s 0.1s forwards";
//   setTimeout(() => {
//     document.querySelector(".skinPlayer5").style.display = "none";

//     popIp();
//     if (words.length > 0) {
//       words.pop();
//       color.pop();
//     }
//     document.querySelector(".hapus4").style.display = "block";
//   }, 500);
// };

// const deleteBidak4 = document.querySelector(".hapus4");
// deleteBidak4.onclick = () => {
//   klik();
//   document.querySelector(".skinPlayer4").style.animation =
//     "hapus 0.2s 0.1s forwards";
//   setTimeout(() => {
//     document.querySelector(".skinPlayer4").style.display = "none";
//     popIp();
//     if (words.length > 0) {
//       words.pop();
//       color.pop();
//     }
//     document.querySelector(".hapus3").style.display = "block";
//   }, 500);
// };

// const deleteBidak3 = document.querySelector(".hapus3");
// deleteBidak3.onclick = () => {
//   klik();
//   document.querySelector(".skinPlayer3").style.animation =
//     "hapus 0.2s 0.1s forwards";
//   setTimeout(() => {
//     document.querySelector(".skinPlayer3").style.display = "none";
//     popIp();
//     if (words.length > 0) {
//       words.pop();
//       color.pop();
//     }
//   }, 500);
// };
