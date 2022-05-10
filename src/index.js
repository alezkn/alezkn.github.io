console.log("Hello dear inspector!");

function playAudio() {
  var audio = new Audio(
    `src/assets/sound/grub_0${Math.floor(Math.random() * (6 - 1)) + 1}.wav`
  );
  audio.volume = 0.1;
  audio.play();
}
