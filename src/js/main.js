import "../styles/style.scss";
import logo from "../../public/images/logo.png";
import eaLogo from "../../public/images/eaLogo.png";
import sengoku from "../../public/images/Sengoku.jpg";
import theSims from "../../public/images/theSims.jpg";
import remnant from "../../public/images/remnant.jpg";
import viteLogo from "../../public/images/vite.svg";

const cardsImages = [sengoku, theSims, remnant];

document.querySelector(".logo").setAttribute("src", logo);

for (let i = 1; i <= 8; i++) {
  document
    .querySelector(`#large-menu-top-list-logo${i}`)
    .setAttribute("src", eaLogo);
}
for (let i = 1; i <= 3; i++) {
  document
    .querySelector(`#large-menu-bottom-list-logo${i}`)
    .setAttribute("src", logo);
}
for (let i = 1; i <= 3; i++) {
  document
    .querySelector(`#game-card-img${i}`)
    .setAttribute("src", cardsImages[i - 1]);
}

document.querySelector(".mobileLogo").setAttribute("src", logo);
