let buttons = document.querySelectorAll(".features-button button");
let tabOneCont = document.querySelector("#tab-one");
let tabTwoCont = document.querySelector("#tab-two");
let tabThreeCont = document.querySelector("#tab-three");
let menuBar = document.querySelector(".hamburger");
let closeBar = document.querySelector(".close");
let nav = document.querySelector("nav");
let tabOneBtn = buttons[0];
let tabTwoBtn = buttons[1];
let tabThreeBtn = buttons[2];

tabOneBtn.addEventListener("click", () => {
  tabOneCont.classList.remove("inactive");
  tabTwoCont.classList.add("inactive");
  tabThreeCont.classList.add("inactive");
});

tabTwoBtn.addEventListener("click", () => {
  tabOneCont.classList.add("inactive");
  tabTwoCont.classList.remove("inactive");
  tabThreeCont.classList.add("inactive");
});

tabThreeBtn.addEventListener("click", () => {
  tabOneCont.classList.add("inactive");
  tabTwoCont.classList.add("inactive");
  tabThreeCont.classList.remove("inactive");
});

const accordionItems = document.querySelectorAll(".accordion-item");

accordionItems.forEach((item) => {
  const header = item.querySelector(".accordion-header");
  const content = item.querySelector(".accordion-content");
  const icon = item.querySelector(".accordion-header i");

  header.addEventListener("click", () => {
    if (content.style.display === "block") {
      content.style.display = "none";
      icon.classList.add("fa-chevron-down");
      icon.classList.remove("fa-chevron-up");
    } else {
      content.style.display = "block";
      icon.classList.remove("fa-chevron-down");
      icon.classList.add("fa-chevron-up");
    }
  });
});

menuBar.addEventListener("click", () => {
  if (nav.classList.contains("hide")) {
    nav.classList.remove("hide");
  }
});

closeBar.addEventListener("click", () => {
  if (!nav.classList.contains("hide")) {
    nav.classList.add("hide");
  }
});
