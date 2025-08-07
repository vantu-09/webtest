function on_level_menu() {
  var text = document.getElementById("level");
  var textmenu = document.getElementById("level_menu");
  var custome = document.getElementById("custome");

  text.style.display = "none";
  textmenu.style.display = "flex";
  custome.style.display = "none";
}

function of_level_menu(){
  var text = document.getElementById("level");
  var textmenu = document.getElementById("level_menu");
  var custome = document.getElementById("custome");

  text.style.display = "block";
  textmenu.style.display = "none";
  custome.style.display = "block";
}

function on_custome_menu(){
  var text = document.getElementById("level");
  var textmenu = document.getElementById("custome_menu");
  var custome = document.getElementById("custome");

  text.style.display = "none";
  textmenu.style.display = "flex";
  custome.style.display = "none";
}

function of_custome_menu(){
  var text = document.getElementById("level");
  var textmenu = document.getElementById("custome_menu");
  var custome = document.getElementById("custome");

  text.style.display = "block";
  textmenu.style.display = "none";
  custome.style.display = "block";
}

function batDauChoi() {
  var soHang = parseInt(document.getElementById("image_doc").value);
  var soCot = parseInt(document.getElementById("image_ngang").value);

  var mauNen = document.getElementById("mauNen").value;
  var mauVien = document.getElementById("mauVien").value;

  var time = parseInt(document.getElementById("time").value);


  localStorage.setItem("soHang", soHang);
  localStorage.setItem("soCot", soCot);

  localStorage.setItem("mauNen", mauNen);
  localStorage.setItem("mauVien", mauVien);

  localStorage.setItem("time",time);


  window.location.href = "main_game.html";
}

function level1(){
  window.location.href = "level/level1.html";
}
function level2(){
  window.location.href = "level/level2.html";
}
function level3(){
  window.location.href = "level/level3.html";
}
function level4(){
  window.location.href = "level/level4.html";
}
function level5(){
  window.location.href = "level/level5.html";
}
function level6(){
  window.location.href = "level/level6.html";
}
function level7(){
  window.location.href = "level/level7.html";
}
function level8(){
  window.location.href = "level/level8.html";
}
function level9(){
  window.location.href = "level/level9.html";
}
function level10(){
  window.location.href = "level/level10.html";
}