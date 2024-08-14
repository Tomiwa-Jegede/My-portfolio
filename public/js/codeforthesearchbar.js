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
      <div class="display my-4 shadow-md w-60 translate-x-10 rounded-lg">
          <iframe class="rounded-lg shadow-md" src="${product.video}" width="100%" allowfullscreen></iframe>
      </div>
  
      <div>
        <div class="mb-4">
         <span class="font-bold">Name:</span> <a href="${product.about}" target="blank"><span class="transiton duration-200 ease-in-out hover:text-orange-500 hover:font-bold">${product.name}</span></a>
        </div>
  
        <div class="mb-4">
          <span class="font-bold">Location:</span> <span>${product.location}</span>
        </div>
        <div class="mb-4">
        <span class="font-bold">Age:</span> <span>${product.age}</span>
        </div>
        <div class="mb-4">
        <span class="font-bold">Sex:</span> <span>${product.sex}</span>
        </div>
        <span class="font-bold mb-4">Vaccinated</span> 
      </div>
      <div class="mt-4 mb-4">
        <span class="font-bold">Price:</span> <span>₦${product.price}</span>
      </div>
      <div class="mb-4">
        <span class="font-bold">Dog ID:</span> <span>${product.id}</span>
      </div>
        <div class=" leading-5 font-bold  text-center text-red-600">
            <span class="fa-solid fa-bullhorn"></span>Attention Pet Owners! <span class="fa-solid fa-bullhorn"></span>
  
            You Can Click The Dogs Name For More Info About Breed. Send The Dog ID To The Number When You Click Adopt
  
            
          </div>
      <a href="https://wa.me/message/WUS7G3SB7NX5J1" target="blank">
        <button
          class="rounded-full text-white bg-orange-500 shadow-md shadow-gray-900 p-2 mt-3 hover:text-orange-500 hover:bg-white hover:border border-orange-500 transition duration-200 ease-linear">Adopt <span class="fa-solid fa-bone"></span>
        </button> 
      </a>
    </div>`;
    });
    product.innerHTML = filteredListHTML;
  });
}
