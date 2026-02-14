/* 
if you are gonna skid this please credit me! - frogiee1
*/

let titleText = "midnight spacey";
let opacity = 0;
let fadeIn = true;
let delay = 0.003;
const audio = document.getElementById("enter-sound");
const fade = document.getElementById("lowtaperfade");
const progressBar = document.getElementById("progress-bar");
const progressContainer = document.getElementById("progress-container");
const music = {
  "tracks": [
    {
      "title": "TEMPO",
      "audio": "tempo.mp3",
      "artist": "SUPXR",
      "id": 0,
      "cover": "tempo.png"
    },
    {
      "title": "SHE TRYNNA!",
      "audio": "shetrynna.mp3",
      "artist": "W4ddles, SaveTheWorld!, Bryansanon",
      "id": 1,
      "cover": "shetrynna.png"
    },
    {
      "title": "BLAME HER",
      "audio": "blameher.mp3",
      "artist": "SUPXR, QKReign",
      "id": 2,
      "cover": "blameher.png"
    },
    {
      "title": "LATELY",
      "audio": "lately.mp3",
      "artist": "SUPXR",
      "id": 3,
      "cover": "lately.png"
    },
    {
      "title": "we aint frens no mo lol.",
      "audio": "take-a-guess-why-this-song-doesnt-have-its-actual-name-in-the-filename.mp3",
      "artist": "shteppi",
      "id": 4,
      "cover": "are-these-w-hints-question-mark-question-mark.png"
    },
    {
      "title": "IN MY HEAD",
      "audio": "inmyhead-ok-yup-these-are-w-hints.mp3",
      "artist": "SUPXR",
      "id": 5,
      "cover": "inmyhead-ok-back-to-normal-tracks-ig.png"
    },
    {
      "title": "high with u!",
      "audio": "highwitu.mp3",
      "artist": "BroA$taR, ezzie4em, angst!, prodkaz",
      "id": 6,
      "cover": "highwithu.png"
    },
    {
      "title": "Soul Tie",
      "audio": "soultie.mp3",
      "artist": "jalenrekt, QKReign",
      "id": 7,
      "cover": "soultie.png"
    }
  ]
}
let enterSound = document.getElementById('enter-sound');
const songid = Math.floor(Math.random() * music.tracks.length)
const title = document.getElementById("songtitle");
const artist = document.getElementById("songartist");
const cover = document.getElementById("albumcover");
title.innerText = music.tracks[songid].title;
artist.innerText = music.tracks[songid].artist;
cover.src = music.tracks[songid].cover;
enterSound.src = music.tracks[songid].audio;

function getTrackFromAudio() {
  const src = audio.currentSrc || audio.src;
  return music.tracks.find(track =>
    src.endsWith(track.audio)
  ) || null;
}

function switchmusic(id){
    const musicelement = document.getElementById("enter-sound");
    const title = document.getElementById("songtitle");
    const artist = document.getElementById("songartist");
    const cover = document.getElementById("albumcover");
    const button = document.getElementsByClassName("play")[0];
    title.innerText = music.tracks[id].title;
    artist.innerText = music.tracks[id].artist;
    cover.src = music.tracks[id].cover;
    musicelement.src = music.tracks[id].audio;
    musicelement.play();
    button.innerText = "⏸";
}
function forward(){
    const musicelement = document.getElementById("enter-sound");
    const title = document.getElementById("songtitle");
    const artist = document.getElementById("songartist");
    const cover = document.getElementById("albumcover");
    const currentsong = getTrackFromAudio()
    if (currentsong.id === 7){
      title.innerText = music.tracks[0].title;
      artist.innerText = music.tracks[0].artist;
      cover.src = music.tracks[0].cover;
      musicelement.src = music.tracks[0].audio;
      musicelement.play();
    }
    else{
      title.innerText = music.tracks[currentsong.id + 1].title;
      artist.innerText = music.tracks[currentsong.id + 1].artist;
      cover.src = music.tracks[currentsong.id + 1].cover;
      musicelement.src = music.tracks[currentsong.id + 1].audio;
      musicelement.play();
    }
}
function rewind(){
    const musicelement = document.getElementById("enter-sound");
    const title = document.getElementById("songtitle");
    const artist = document.getElementById("songartist");
    const cover = document.getElementById("albumcover");
    const currentsong = getTrackFromAudio()
    if (currentsong.id === 0){
      title.innerText = music.tracks[7].title;
      artist.innerText = music.tracks[7].artist;
      cover.src = music.tracks[7].cover;
      musicelement.src = music.tracks[7].audio;
      musicelement.play();
    }
    else{
      title.innerText = music.tracks[currentsong.id - 1].title;
      artist.innerText = music.tracks[currentsong.id - 1].artist;
      cover.src = music.tracks[currentsong.id - 1].cover;
      musicelement.src = music.tracks[currentsong.id - 1].audio;
      musicelement.play();
    }
}
function togglePlay() {
  const music = document.getElementById("enter-sound");
  const button = document.getElementsByClassName("play")[0];
  if (music.paused) {
    music.play();
    button.innerText = "⏸";
  } else {
    music.pause();
    button.innerText = "▶";
  }
}
function updateTitle() {
    let displayText = titleText.charAt(0) + titleText.slice(1, Math.floor(opacity * (titleText.length - 1)) + 1);
    document.title = displayText;

    if (fadeIn) {
        opacity += delay;
        if (opacity >= 1) {
            fadeIn = false;
        }
    } else {
        opacity -= delay;
        if (opacity <= 0) {
            fadeIn = true;
        }
    }

    requestAnimationFrame(updateTitle);
}

audio.addEventListener("timeupdate", () => {
  if (!audio.duration) return;

  const progress = (audio.currentTime / audio.duration) * 100;
  progressBar.style.width = `${progress}%`;
});
progressContainer.addEventListener("click", (e) => {
  const rect = progressContainer.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const percent = Math.max(0, Math.min(1, x / rect.width));

  audio.currentTime = percent * audio.duration;
});
const entersoundrizz = document.getElementById("enter-sound");
            const context = new AudioContext();
            var src = context.createMediaElementSource(entersoundrizz);
            var analyser = context.createAnalyser();
        
            var canvas = document.getElementById("canvas");
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            var ctx = canvas.getContext("2d");
        
            src.connect(analyser);
            analyser.connect(context.destination);
            analyser.fftSize = 256;
        
            var bufferLength = analyser.frequencyBinCount;
            console.log(bufferLength);
        
            var dataArray = new Uint8Array(bufferLength);
        
            var WIDTH = canvas.width;
            var HEIGHT = canvas.height;
        
            var barWidth = (WIDTH / bufferLength) * 1.5;
            var barHeight;
            var x = 0;
        
            function renderFrame() {
              requestAnimationFrame(renderFrame);
              x = 0;
              analyser.getByteFrequencyData(dataArray);
              ctx.fillStyle = "#fff"
              ctx.clearRect(0, 0, WIDTH, HEIGHT);
              for (var i = 0; i < bufferLength; i++) {
                barHeight = dataArray[i] * 1.5;
                var dar = 0;
                var dag = barHeight + (4 * (i/bufferLength)) - 56
                var dab = barHeight + (4 * (i/bufferLength)) - 170
                var r = dar;
                var g = dag
                var b = dab;
                ctx.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
                ctx.fillRect(x, HEIGHT - barHeight, barWidth, barHeight);
                x += barWidth + 1;
              }
            }
            renderFrame();
const dataArray2 = new Uint8Array(analyser.frequencyBinCount);
const BASS_BINS = 20;
const MAX_OPACITY = 0.7;
const MIN_OPACITY = 0.0;
function updateOpacity() {
  analyser.getByteFrequencyData(dataArray);
  let sum = 0;
  for (let i = 0; i < BASS_BINS; i++) {
    sum += dataArray[i];
  }
  let bass = (sum / BASS_BINS) / 255;
  bass = Math.min(1, bass);
  bass = Math.pow(bass, 1.6);
  const opacity = MAX_OPACITY - bass * (MAX_OPACITY - MIN_OPACITY);

  fade.style.opacity = opacity.toFixed(3);
}
setInterval(updateOpacity, 8); 
function enter() {
    let enterPopup = document.getElementById('enter-popup');
    context.resume();
    enterSound.play();
    enterPopup.style.transition = 'all 0.3s ease';
    enterPopup.style.opacity = '0';
    setTimeout(() => {
        enterPopup.style.display = 'none';
    }, 500); 

    requestAnimationFrame(updateTitle);
};
// page things

fetch("https://api.frogiee1.com/api/frogiesarcade")
  .then(res => res.json())
  .then(data => {
    if (data.online) {
      document.getElementById("frogiesarcadeusercount").innerText = `users online: ${data.online}`
    } else {
      document.getElementById("frogiesarcadeusercount").innerText = `couldn't get user count`
    }
});

fetch("https://api.frogiee1.com/api/xenamc")
  .then(res => res.json())
  .then(data => {
    if (data.online) {
      document.getElementById("xenaplayercount").innerText = `players online: ${data.players}/1000`
    } else {
      document.getElementById("xenaplayercount").innerText = `couldn't get player count`
    }
});

  function isMobile() {
    return /Android|iPhone|iPod|Opera Mini|IEMobile|WPDesktop/i.test(navigator.userAgent);
  }

  if (isMobile()) {
    window.location.href = "https://m." + window.location.host;
  }



















/* 
if you are gonna skid this please credit me! - frogiee1
*/




























































































































































console.log(`
█▀▀ █▀█ █▀█ █▀▀ █ █▀▀ █▀▀ ░ █▀█ █▄░█ █▀▀
█▀░ █▀▄ █▄█ █▄█ █ ██▄ ██▄ ▄ █▄█ █░▀█ ██▄`)
console.log(`
█▀▀ █▀█ █▀█ █▀▀ █ █▀▀ █▀▀ ▄█ ░ █▀▀ █▀█ █▀▄▀█
█▀░ █▀▄ █▄█ █▄█ █ ██▄ ██▄ ░█ ▄ █▄▄ █▄█ █░▀░█`)
