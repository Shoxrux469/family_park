let modal = document.querySelector(".modal");
let modal_bg = document.querySelector(".modal_bg");
let active = document.querySelector(".active");
let active_after = document.querySelector(".active::after");
let logo = document.querySelector(".logo");
let languages = document.querySelector(".languages");
let lang = document.querySelector(".lang");
let searcher = document.querySelector(".searcher");
let networks = document.querySelector(".networks");
let ru = document.querySelector(".ru");
let menu = document.querySelector(".menu");
let close_menu = document.querySelector(".close_menu");
let body = document.body;

menu.onclick = () => {
  modal_bg.classList.add("open_modal_bg");
  modal.classList.add("open_modal");
  active.classList.add("active_modal");
  lang.classList.remove("lang");
  languages.classList.add("brightness");
  logo.classList.add("brightness");
  logo.classList.add("logo_modal");
  searcher.classList.add("brightness");
  close_menu.classList.add("close_menu_open");
  menu.style.display = "none";
  
  // active.classList.add('active_modal')
};
close_menu.onclick = () => {
  modal_bg.classList.remove("open_modal_bg");
  modal.classList.remove("open_modal");
  active.classList.remove("active_modal");
  //   lang.classList.add("lang");
  languages.classList.remove("brightness");
  logo.classList.remove("brightness");
  logo.classList.remove("logo_modal");
  searcher.classList.remove("brightness");
  close_menu.classList.remove("close_menu_open");
  menu.style.display = "block";
};
console.log(logo);
console.log(modal);
console.log(searcher);