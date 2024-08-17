import { products } from "./product.js";
import { product } from "./generationofHTML/productHTML.js";
const search = document.getElementById("search");

export function codetosearch() {
  search.addEventListener("input", (event) => {
    const userInput = event.target.value.toLowerCase();
    const filteredList = products.filter((product) => {
      return product.name.toLowerCase().includes(userInput) || product.location.toLowerCase().includes(userInput)
    });

    let filteredListHTML = "";
    filteredList.forEach((product) => {
      filteredListHTML +=

        `<div id="product" class="w-80">
<div class="display my-4 shadow-md w-80 rounded-lg relative">
  <iframe class="video rounded-lg shadow-md" src="${product.video}" width="100%" allowfullscreen=""></iframe>

  <div
    class="pageLoader-2 absolute rounded-lg bg-orange-300 bottom-0 top-0 right-0 left-0 flex flex-col items-center justify-center">

    <div class="text-white items-center justify-center w-full gap-3 flex py-3">
      <span class="fa-solid fa-paw animate-[change_2s_linear_.1s_infinite]"></span>
      <span class="fa-solid fa-paw animate-[change_2s_linear_.2s_infinite]"></span>
      <span class="fa-solid fa-paw animate-[change_2s_linear_.3s_infinite]"></span>
      <span class="fa-solid fa-paw animate-[change_2s_linear_.4s_infinite]"></span>
    </div>

    <div class="text-white text-center w-full py-3 font-bold">
      Fetching Your Furry Friend...
    </div>

  </div>

</div>

<div>
  <div class="mb-2">
    <span class="font-bold">Name:</span> <a href="${product.about}" target="blank"><span
        class="transiton duration-200 ease-in-out hover:text-orange-500 hover:font-bold">${product.name}</span></a>
  </div>

  <div class="mb-2"><span class="font-bold">Location:</span> <span>${product.location}</span></div>
  <div class="mb-2"><span class="font-bold">Age:</span> <span>${product.age}</span></div>
  <div class="mb-2"><span class="font-bold">Sex:</span> <span>${product.sex}</span></div>
  <span class="font-bold mb-4">Vaccinated</span>
</div>
<div class="mt-4 mb-4"><span class="font-bold">Price:</span> <span>${product.price}</span></div>
<div class="mb-4"><span class="font-bold">Dog ID:</span> <span>${product.id}</span></div>
<div class="leading-5 font-bold text-red-600">
  <span class="fa-solid fa-bullhorn"></span>
  <span>Attention Pet Owners!</span>
  <p class="fa-solid fa-bullhorn"></p>
  <p>You Can Click The Dog's Name For More Info About Breed. Send The Dog ID To The Number When You Click Adopt</p>
</div>
<div class="flex items-center justify-center">
  <a href="https://wa.me/message/WUS7G3SB7NX5J1" target="blank" class="w-80">
    <button
      class="rounded-full w-80 text-white bg-orange-500 shadow-md shadow-gray-900 p-2 mt-3 hover:text-orange-500 hover:bg-white hover:border border-orange-500 transition duration-200 ease-linear">
      Adopt <span class="fa-solid fa-bone"></span>
    </button>
  </a>
     
</div>
</div>`;
    });
    product.innerHTML = filteredListHTML;

    if (product.innerHTML) {
      const video = document.querySelectorAll(".video");
      const pageLoader2 = document.querySelectorAll(".pageLoader-2");

      video.forEach((vid) => {
        vid.addEventListener("load", () => {
          pageLoader2.forEach((loader) => {
            loader.style.display = "none"
          });
        });
      });
    };
  });
}
