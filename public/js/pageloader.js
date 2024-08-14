export function pageLoader(){
  const pageloader =document.querySelector(".pageloader")
window.addEventListener("load",()=>{
  pageloader.style.display="none"
})
}