function Alphabet(nilai, pesan) {
  var alphaExp = /^[a-zA-Z]+$/;
  if (nilai.value.match(alphaExp)) {
    return true;
  } else {
    alert(pesan);
    nilai.focus();
    return false;
  }
}
function cekEmail(nilai, pesan) {
  var email = /^([a-zA-Z0-9_.+-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/;
  if (nilai.value.match(email)) {
    return true;
  } else {
    alert(pesan);
    nilai.focus();
    return false;
  }
}
function validasi() {
  Alphabet(document.getElementById('nama'), 'Nama harus Huruf semua!!');

  cekEmail(document.getElementById('email'), 'Email tidak benar!!');
}
