import "../styles/style.scss";
import logo from "../../public/images/logo.png";
import eaLogo from "../../public/images/eaLogo.png";
import sengoku from "../../public/images/Sengoku.jpg";
import theSims from "../../public/images/theSims.jpg";
import remnant from "../../public/images/remnant.jpg";
import ubisoft from "../../public/images/links/ubisoft.jpg";
import battle from "../../public/images/links/battle.png";
import rockstar from "../../public/images/links/rockstar.png";
import streamLarge from "../../public/images/links/streamLarge.png";
import igLarge from "../../public/images/links/igLarge.png";
import bilzardLarge from "../../public/images/links/bilzardLarge.png";

const gameCardsImages = [sengoku, theSims, remnant];
const linksLogo = [
  eaLogo,
  ubisoft,
  eaLogo,
  battle,
  rockstar,
  battle,
  eaLogo,
  ubisoft,
];

const largeLinks = [streamLarge, igLarge, bilzardLarge];

document.getElementById("title-logo").setAttribute("href", logo);
document.querySelector(".logo").setAttribute("src", logo);

for (let i = 1; i <= 8; i++) {
  document
    .querySelector(`#large-menu-top-list-logo${i}`)
    .setAttribute("src", linksLogo[i - 1]);
}
for (let i = 1; i <= 3; i++) {
  document
    .querySelector(`#large-menu-bottom-list-logo${i}`)
    .setAttribute("src", largeLinks[i - 1]);
}
for (let i = 1; i <= 3; i++) {
  document
    .querySelector(`#game-card-img${i}`)
    .setAttribute("src", gameCardsImages[i - 1]);
}

document.querySelector(".mobileLogo").setAttribute("src", logo);

// functionalities

const linkButtons = document.getElementsByClassName("menu-link");
const searchBox = document.getElementById("search-input");
const searchButton = document.getElementById("searchButton");
const closeSearchBtn = document.getElementById("search-close");
const largeMenu = document.getElementsByClassName("large-menu")[0];

let showSearchBox = false;
let showLargeMenu = false;

// function for handle large menu on click in menu item
const handleLink = (button) => {
  const buttonText = button.querySelector("span").innerText;

  if (showLargeMenu == buttonText) {
    showLargeMenu = false;
    largeMenu.classList.remove("show-large-menu");
  } else {
    showLargeMenu = buttonText;
    // largeMenu.style.display = "block";
    largeMenu.classList.add("show-large-menu");
  }

  // adding bold effect in selected link
  Array.from(linkButtons).forEach((button) => {
    const text = button.querySelector("span").innerText;
    if (text == buttonText && showLargeMenu) {
      button.style.fontWeight = "bold";
    } else {
      button.style.fontWeight = 400;
    }
  });
};

Array.from(linkButtons).forEach((button) => {
  button.addEventListener("click", () => handleLink(button));
});

// search button functionalities
const onSearchBtnClick = () => {
  if (!showSearchBox) {
    showLargeMenu = false;
    showSearchBox = true;
    largeMenu.classList.remove("show-large-menu");
    searchBox.classList.add("show-input");

    // removing bold effect in selected link in menu
    Array.from(linkButtons).forEach((button) => {
      button.style.fontWeight = 400;
    });
  } else {
    showSearchBox = false;
  }
};

// close search button function
const onCloseSearchBtn = () => {
  showSearchBox = false;
  searchBox.classList.remove("show-input");
};

searchButton.addEventListener("click", onSearchBtnClick);
closeSearchBtn.addEventListener("click", onCloseSearchBtn);
