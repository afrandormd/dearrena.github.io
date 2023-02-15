// Tampilkan pesan sapaan ketika pengunjung membuka situs web untuk pertama kali
let info = alert('pencet gambar suratnya sayaang!')

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


// fungsi teks berjalan
// let type = document.getElementById("typewriter")
// let name = 'Raina Syaffura Rabiani'
// let text = `Dear Sayangku,\n ${name} selamat hari valentine sayang, terima kasih sudah menjadi kekasihku yang paling perhatian dan pengertian🥰`
// let i = 0
// let speed = 50
// let maxWidth = window.screen.availWidth

// function typeWriter() {
//     if (i < text.length){
//         type.innerHTML += text.charAt(i)
//         i++
//         type.classList.add("word-wrap")
//         setTimeout(typeWriter, speed)
//     }
// }

// typeWriter()

// // Cek apakah ini kunjungan pertama pengunjung menggunakan cookie
function checkFirstVisit() {
  if (document.cookie.indexOf("visited") == -1) {
    // Jika belum pernah dikunjungi, tampilkan pesan sapaan
    alert(info)
    
    // Set cookie untuk menandai bahwa pengunjung sudah pernah mengunjungi situs web
    var date = new Date();
    date.setTime(date.getTime() + (30 * 24 * 60 * 60 * 1000)); // Set cookie untuk 30 hari
    var expires = "expires=" + date.toUTCString();
    document.cookie = "visited=true; " + expires + "; path=/";
  }
}

// Panggil fungsi checkFirstVisit() ketika halaman dimuat
window.onload = checkFirstVisit;
window.onload = showGreeting();
// Tambahkan event listener pada tombol "Saya Mengerti"
document.getElementById("dismiss").addEventListener("click", dismissGreeting);
