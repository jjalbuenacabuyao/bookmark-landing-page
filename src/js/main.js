const header = document.querySelector("[data-header]")
const nav = document.querySelector("[data-nav]")
const navToggler = document.querySelector("[data-navToggler]")
const logo = document.querySelector("[data-logo]")

navToggler.addEventListener("click", () => {
  console.log("clicked");
  const visibility = nav.getAttribute("data-visible")
  console.log(visibility);

  if (visibility === "false") {
    nav.setAttribute("data-visible", "true")
    navToggler.setAttribute("aria-expanded", "true")
    document.body.classList.add("overflow-y-hidden")
    header.style.backgroundColor = "hsl(229, 31%, 21%)";
    navToggler.style.backgroundImage = "url('./src/assets/images/icon-close.svg')"
    navToggler.style.width = "1rem";
    document.body.style.overflowY = "hidden";
    logo.setAttribute("src", "./src/assets/images/logo-bookmark-white.svg")
    nav.style.transform = "translateY(0)"
    
  } else {
    nav.setAttribute("data-visible", "false")
    navToggler.setAttribute("aria-expanded", "false")
    document.body.style.overflowY = ""
    header.style.backgroundColor = "";
    navToggler.style.backgroundImage = "url('./src/assets/images/icon-hamburger.svg')"
    logo.setAttribute("src", "./src/assets/images/logo-bookmark.svg")
    nav.style.transform = "translateY(200%)"
  }
})