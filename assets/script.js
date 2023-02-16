// Tampilkan pesan sapaan ketika pengunjung membuka situs web untuk pertama kali
// let info = alert('pencet gambar suratnya sayaang!')

function showGreeting() {
  var greeting = document.getElementById("greeting");
  greeting.innerHTML = "Hallo, sayangkuuu Raina Syaffura Rabiani";
  
  var welcome = document.querySelector(".welcome");
  welcome.style.display = "block";
}

// Sembunyikan pesan sapaan ketika tombol "Saya Mengerti" diklik
function dismissGreeting() {
  var welcome = document.querySelector(".welcome");
  welcome.style.display = "none";
}

// audio play
let audio = document.getElementById('audio')
let playStopBTN = document.getElementById('playStopBTN')
let count = 0

function playStop(){
    if(count == 0){
        count = 1
        audio.play()
        playStopBTN.innerHTML = "&#9208"
    } else {
        count = 0
        audio.pause()
        playStopBTN.innerHTML = "&#9658"
    }
}

window.onload = showGreeting();
// Tambahkan event listener pada tombol "Saya Mengerti"
document.getElementById("dismiss").addEventListener("click", dismissGreeting);


// declare variable nomor awal
let nomor = 1
  function previous() {
    nomor = nomor-1
    // kondisi jika nomor > batas gambar
    if (nomor < 1) {
      nomor = 4 
    }
    // declare variable
    let lokasi = `assets/img/gallery/${nomor}.jpeg`
    // select atribut
    document.getElementById('gambar').src = lokasi
  }

  function next() {
    nomor = nomor+1
    // kondisi jika nomor > batas gambar
    if (nomor > 4) {
      nomor = 1 
    }
    // declare variable
    let lokasi = `assets/img/gallery/${nomor}.jpeg`
    // select atribut
    document.getElementById('gambar').src = lokasi
  }
