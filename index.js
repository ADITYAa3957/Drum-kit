// alert("hello");
var li_sounds = [
  "tom-1.mp3",
  "tom-2.mp3",
  "tom-3.mp3",
  "tom-4.mp3",
  "snare.mp3",
  "crash.mp3",
  "kick-bass.mp3",
];
function soundButtonClicked(i) {
  var aud = new Audio("sounds/" + li_sounds[i]);
  aud.play();
}
var l = document.querySelectorAll(".sound-btn").length;
for (var i = 0; i < l; i++) {
  switch (i) {
    case 0:
      document
        .querySelectorAll(".sound-btn")
        [i].addEventListener("click", function () {
          soundButtonClicked(0);
          this.classList.add("sound-btn-clicked");
          setTimeout(() => {
            this.classList.remove("sound-btn-clicked");
          }, 250);
        });
      break;
    case 1:
      document
        .querySelectorAll(".sound-btn")
        [i].addEventListener("click", function () {
          soundButtonClicked(1);
          this.classList.add("sound-btn-clicked");
          setTimeout(() => {
            this.classList.remove("sound-btn-clicked");
          }, 250);
        });
      break;
    case 2:
      document
        .querySelectorAll(".sound-btn")
        [i].addEventListener("click", function () {
          soundButtonClicked(2);
          this.classList.add("sound-btn-clicked");
          setTimeout(() => {
            this.classList.remove("sound-btn-clicked");
          }, 250);
        });
      break;
    case 3:
      document
        .querySelectorAll(".sound-btn")
        [i].addEventListener("click", function () {
          soundButtonClicked(3);
          this.classList.add("sound-btn-clicked");
          setTimeout(() => {
            this.classList.remove("sound-btn-clicked");
          }, 250);
        });
      break;
    case 4:
      document
        .querySelectorAll(".sound-btn")
        [i].addEventListener("click", function () {
          soundButtonClicked(4);
          this.classList.add("sound-btn-clicked");
          setTimeout(() => {
            this.classList.remove("sound-btn-clicked");
          }, 250);
        });
      break;
    case 5:
      document
        .querySelectorAll(".sound-btn")
        [i].addEventListener("click", function () {
          soundButtonClicked(5);
          this.classList.add("sound-btn-clicked");
          setTimeout(() => {
            this.classList.remove("sound-btn-clicked");
          }, 250);
        });
      break;
    case 6:
      document
        .querySelectorAll(".sound-btn")
        [i].addEventListener("click", function () {
          soundButtonClicked(6);
          this.classList.add("sound-btn-clicked");
          setTimeout(() => {
            this.classList.remove("sound-btn-clicked");
          }, 250);
        });
      break;
  }
}
function playSound(c) {
    var aud;
  switch (c) {
    case "w":
    aud=new Audio("sounds/" + li_sounds[0]);
      break;
    case "a":
        aud=new Audio("sounds/" + li_sounds[1]);
      break;
    case "s":
        aud=new Audio("sounds/" + li_sounds[2]);
      break;
    case "d":
        aud=new Audio("sounds/" + li_sounds[3]);
      break;
    case "j":
        aud=new Audio("sounds/" + li_sounds[4]);
      break;
    case "k":
        aud=new Audio("sounds/" + li_sounds[5]);
      break;
    case "l":
        aud=new Audio("sounds/" + li_sounds[6]);
      break;
    default:
      break;
  }
  aud.play();
}
document.addEventListener("keydown", function (event) {
  playSound(event.key);
  document.querySelector("."+event.key).classList.add("sound-btn-clicked");//with key the button pressed found out
  setTimeout(() => {
    document.querySelector("."+event.key).classList.remove("sound-btn-clicked");
  }, 250);
});
