const params = new URLSearchParams(window.location.search);
let nama = params.get('to');

if(nama){
  document.querySelector(".nama-tamu").innerText = decodeURIComponent(nama);
}

function bukaUndangan(){
  document.getElementById("cover").style.display = "none";
  document.getElementById("musik").play();
}

/* COUNTDOWN */
const tgl = new Date("Juni 03, 2026 09:00:00").getTime();

setInterval(()=>{
  let now = new Date().getTime();
  let d = tgl - now;

  let hari = Math.floor(d/(1000*60*60*24));
  let jam = Math.floor((d%(1000*60*60*24))/(1000*60*60));
  let menit = Math.floor((d%(1000*60*60))/(1000*60));
  let detik = Math.floor((d%(1000*60))/1000);

  document.getElementById("countdown").innerHTML =
  `${hari}H ${jam}J ${menit}M ${detik}D`;
},1000);

/* ANIMASI SCROLL */
const fades = document.querySelectorAll('.fade');

window.addEventListener('scroll',()=>{
  fades.forEach(el=>{
    let top = el.getBoundingClientRect().top;
    if(top < window.innerHeight - 100){
      el.classList.add('show');
    }
  });
});

function copyRek(){
  navigator.clipboard.writeText("1234567890");
  alert("Nomor rekening berhasil disalin");
}