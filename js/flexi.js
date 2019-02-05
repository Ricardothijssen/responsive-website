var dropdown = 0;
var dropdownLogo = document.getElementById("dropdownLogo");
var navbar = document.getElementById("navbar");

var subDropdown = 0;
var subDropdownLogo = document.getElementById("subDropdownLogo");
var subNavbar = document.getElementById("subNavbar");

function onclickDropdown(){
  if (dropdown == 0){ // ON
    dropdown = 1;
    dropdownLogo.style.color = "white";
    navbar.style.height = "225px";
  } else if (dropdown == 1){ // OFF
    dropdown = 0;
    dropdownLogo.style.color = "white";
    navbar.style.height = "52px";
  }
}

function onclickSubDropdown(){
  if (subDropdown == 0){ // ON
    subDropdown = 1;
    subDropdownLogo.style.color = "white";
    subNavbar.style.height = "207px";
    subNavbar.style.animation = "subDropdownAnimOn ease-in-out 0,5s";
  } else if (subDropdown == 1){ // OFF
    subDropdown = 0;
    subDropdownLogo.style.color = "white";
    subNavbar.style.height = "52px";
    subNavbar.style.animation = "subDropdownAnimOff ease-in-out 0,5s";
  }
}ðßß