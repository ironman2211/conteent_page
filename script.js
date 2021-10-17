const btn_open = document.querySelector(".open");
const btn_close = document.querySelector(".close");
const btn_home = document.querySelector(".home");
const container = document.querySelector(".container");
const btn_search = document.querySelector(".btn-1");
const search = document.querySelector(".search");
const form = document.querySelector(".form");
const labels = document.querySelectorAll(".form-controll label");
const loadingtext = document.querySelector(".textloaading");
const homebtn = document.querySelector(".login_page");
const login = document.querySelector(".login");

btn_open.addEventListener("click", function () {
  container.classList.add("show-nav");
});
btn_close.addEventListener("click", function () {
  container.classList.remove("show-nav");
});
btn_search.addEventListener("click", () => {
  search.classList.toggle("active");
  form.focus();
});

let load = 0;

let init = setInterval(bluring, 30);

function bluring() {
  load++;
  if (load > 99) {
    clearInterval(init);
  }
  loadingtext.innerText = `${load}%`;
  loadingtext.style.opacity = scale(load, 0, 100, 1, 0);
  container.style.filter = ` blur(${scale(load, 0, 100, 1, 0)}px)`;
}
bluring();
function scale(x, in_min, in_max, out_min, out_max) {
  return ((x - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
}

labels.forEach((label) => {
  label.innerHTML = label.innerText
    .split("")
    .map(
      (letter, index) =>
        `<span style="transition-delay:${index * 50}ms">${letter}</span>`
    )
    .join("");
});
homebtn.addEventListener("click", function () {
  console.log("hellow peter:)");
  container.classList.add("show_login");
  setTimeout(display, 1000);

  // .container.show-nav {
  //   transform: rotate(-20deg);
  // }
});
function display() {
  login.style.display = "block";
}
btn_home.addEventListener("click", function () {
  container.classList.remove("show_login");
  login.style.display = "none";
});
