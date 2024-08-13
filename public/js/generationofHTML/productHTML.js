import { products } from "../product.js";
export let product = document.getElementById("product-container");
export let productHTML = "";
products.forEach((product) => {
  productHTML +=
    `<div id="product" class="w-80">
    <div class="display my-4 shadow-md w-60 translate-x-10 rounded-lg">
        <iframe class="rounded-lg shadow-md" src="${product.video}" width="100%" allowfullscreen></iframe>
    </div>

    <div>
      <div class="mb-4">
       <span class="font-bold">Name:</span> <span >${product.name}</span>
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

    <a href="https://wa.me/message/WUS7G3SB7NX5J1">
      <button
        class="rounded-full text-white bg-orange-500 shadow-md shadow-gray-900 p-2 mt-3 hover:text-orange-500 hover:bg-white hover:border border-orange-500 transition duration-200 ease-linear">Adopt <span class="fa-solid fa-bone"></span>
      </button>
    </a>
  </div>`;
});
export function generatedHTMLForTheProducts() {
  product.innerHTML = productHTML;
}
