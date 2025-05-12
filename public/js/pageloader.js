export function pageLoader() {
  const pageLoader = document.querySelector(".pageloader")
  
  window.addEventListener("load", () => {
    pageLoader.style.display = "none"
  })

  
}