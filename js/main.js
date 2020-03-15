const nav = document.getElementsByClassName("navigation")[0];
console.log(nav);

function openNav() {
  nav.classList.add("active");
}

function closeNav() {
  nav.classList.remove("active");
}
