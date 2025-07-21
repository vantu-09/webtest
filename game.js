function on_level_menu() {
  let text = document.getElementById("level");
  let textmenu = document.getElementById("level_menu");
  let custome = document.getElementById("custome");

  text.style.display = "none";
  textmenu.style.display = "flex";
  custome.style.display = "none";
}

function of_level_menu(){
  let text = document.getElementById("level");
  let textmenu = document.getElementById("level_menu");
  let custome = document.getElementById("custome");

  text.style.display = "block";
  textmenu.style.display = "none";
  custome.style.display = "block";
}

function on_custome_menu(){
  let text = document.getElementById("level");
  let textmenu = document.getElementById("custome_menu");
  let custome = document.getElementById("custome");

  text.style.display = "none";
  textmenu.style.display = "flex";
  custome.style.display = "none";
}

function of_custome_menu(){
  let text = document.getElementById("level");
  let textmenu = document.getElementById("custome_menu");
  let custome = document.getElementById("custome");

  text.style.display = "block";
  textmenu.style.display = "none";
  custome.style.display = "block";
}