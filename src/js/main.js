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

const tabs = document.querySelectorAll("[role='tab']")
const tabpanels = document.querySelectorAll("[role='tabpanel']")


tabs.forEach((tab) => {
  tab.addEventListener("click", (e) => {
    const activeTab = document.querySelector("[aria-selected='true']")
    activeTab.setAttribute("aria-selected", "false");
    e.target.setAttribute("aria-selected", "true");

    tabpanels.forEach(panel => {
      const activeTabId = document.querySelector("[aria-selected='true']").id
      if (panel.getAttribute("aria-labelledby") === activeTabId) {
        panel.setAttribute("hidden", "false")
      } else {
        panel.setAttribute("hidden", "true")
      }
      console.log(panel.getAttribute("aria-labelledby"));
      console.log(activeTabId);
    })
  })
})

const accordionTogglers = document.querySelectorAll("[data-accordion-toggler]")
const accordionContents = document.querySelectorAll("[data-accordion-content]")

accordionContents.forEach(accordionContent => {
  accordionContent.style.display = "none";
})

accordionTogglers.forEach(accordionToggler => {
  accordionToggler.addEventListener("click", () => {
    const isExpanded = accordionToggler.getAttribute("aria-expanded")
    const activeAccordionContent = document.querySelector(`#${accordionToggler.getAttribute("aria-controls")}`)

    if (isExpanded === "false"){
      accordionToggler.setAttribute("aria-expanded", "true")
      const arrowIcon = document.querySelector("[data-accordion-toggler][aria-expanded='true'] svg")
      const arrowIconPath = document.querySelector("[data-accordion-toggler][aria-expanded='true'] svg > path")
      arrowIcon.style.transform = "rotate(180deg)";
      arrowIconPath.setAttribute("stroke", "#fa5757")

      activeAccordionContent.style.display = "block"
      activeAccordionContent.style.borderBottom = "solid 1px hsl(231 69% 60% / 0.3)"
      accordionToggler.style.borderBottom = "none"
    } 
    
    else {
      accordionToggler.setAttribute("aria-expanded", "false")
      const arrowIcon = document.querySelectorAll("[data-accordion-toggler][aria-expanded='false'] svg")
      const arrowIconPath = document.querySelectorAll("[data-accordion-toggler][aria-expanded='false'] svg > path")
      arrowIcon.forEach(icon => {
        icon.style.transform = "rotate(0deg)";
      })
      arrowIconPath.forEach(path => {
        path.setAttribute("stroke", "#5267DF")
      })
      activeAccordionContent.style.display = "none"
      accordionToggler.style.borderBottom = "solid 1px hsl(231 69% 60% / 0.3)"
    }
  })
})
