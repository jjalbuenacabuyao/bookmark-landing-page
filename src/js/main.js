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
    nav.style.transform = "translateY(-200%)"
  }
})

const tabs = document.querySelectorAll("[role='tab']");
const tabpanels = document.querySelectorAll("[role='tabpanel']")

let currentSelected = document.querySelector("li[aria-selected='true']");

tabs.forEach((tab) => {
  
  tab.addEventListener("click", () => {
    currentSelected = document.querySelector("li[aria-selected='true']")

    if (tab === currentSelected) { return }

    currentSelected.setAttribute("aria-selected", "false")
    tab.setAttribute("aria-selected", "true")
  })

  tabpanels.forEach((tabpanel) => {
    console.log(tabpanel);
    const currentPanel = document.querySelector(`[aria-labelledby=${currentSelected.id}]`)
  
    if (tabpanel === currentPanel) {
      tabpanel.setAttribute("hidden", "false")
    } else {
      tabpanel.setAttribute("hidden", "true")
    }
  })
})

