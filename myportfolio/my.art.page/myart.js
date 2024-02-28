onst indexes = document.querySelectorAll(".indexes li");
const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".tab-content");

function reset() {
  for (let i = 0; i < tabs.length; i++) {
    indexes[i].style.borderColor = "transparent";
    tabs[i].style.zIndex = 0;
    tabs[i].classList.remove("active");
    contents[i].classList.remove("active");
  }
}