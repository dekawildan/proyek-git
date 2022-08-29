//fungsi lihat kontak saya
function lihat() {
	document.getElementById("kontak").style.display="block";
	document.getElementById("btnSembunyi").style.display="block";
	document.getElementById("btnLihat").style.display="none";
}

//fungsi sembunyikan kontak
function sembunyi() {
	document.getElementById("kontak").style.display="none";
	document.getElementById("btnLihat").style.display="block";
	document.getElementById("btnSembunyi").style.display="none";
}