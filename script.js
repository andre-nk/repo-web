const menuButton = document.querySelector(".menu");
const headerNav = document.querySelector(".header-nav");
const menuIcon = document.querySelector(".menu img");
const authorButton = document.querySelector(".author-button");
const authorContact = document.querySelector(".author-contact");
const authorBio = document.querySelector(".author-bio");

function setMenuState() {
  if (window.innerWidth >= 1024) {
    headerNav.style.display = "block";
    headerNav.style.maxHeight = "none";
    headerNav.style.opacity = "1";
    headerNav.style.overflow = "visible";
  } else {
    headerNav.style.display = "none";
    headerNav.style.maxHeight = "0";
    headerNav.style.opacity = "0";
    headerNav.style.overflow = "hidden";
    menuIcon.src = "images/menu.svg";
  }
}

setMenuState();

if (window.innerWidth < 1024) {
  headerNav.style.transition =
    "max-height 0.3s ease-in-out, opacity 0.3s ease-in-out";
}

let isMenuOpen = false;
let isContactOpen = false;

menuButton.addEventListener("click", () => {
  if (window.innerWidth >= 1024) return;

  isMenuOpen = !isMenuOpen;

  if (isMenuOpen) {
    headerNav.style.display = "block";
    setTimeout(() => {
      headerNav.style.maxHeight = "300px";
      headerNav.style.opacity = "1";
    }, 10);
    menuIcon.src = "images/close.svg";
  } else {
    headerNav.style.maxHeight = "0";
    headerNav.style.opacity = "0";
    menuIcon.src = "images/menu.svg";
    setTimeout(() => {
      headerNav.style.display = "none";
    }, 300);
  }
});

authorButton.addEventListener("click", () => {
  isContactOpen = !isContactOpen;

  if (isContactOpen) {
    authorButton.textContent = "see less...";
    authorBio.textContent =
      authorBio.textContent +
      " Throughout these years, the one true calling has always been software engineering. I'm intrigued by the intricacies of delivering production-grade apps, starting from the architectural design, leveraging discipline in the coding process, and also the human dynamics behind the project.";
    authorContact.style.display = "flex";
  } else {
    authorButton.textContent = "see more...";
    authorBio.textContent =
      "  A versatile software engineer and Computer Science student at Universitas Gadjah Mada in Yogyakarta, Indonesia. With over 4 years of diverse experience, I'm forever grateful for opportunities to delve into numerous facets of technology, from full-stack web development to mobile app development, project management, UI/UX design, cloud computing, and lately operating system (OS)...";
    authorContact.style.display = "none";
  }
});

window.addEventListener("resize", setMenuState);
