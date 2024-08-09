import { products } from "./product.js";
import { product } from "./generationofHTML/productHTML.js";
const search = document.getElementById("search");
export function codetosearch() {
  search.addEventListener("input", (event) => {
    const userInput = event.target.value.toLowerCase();
    const filteredList = products.filter((product) => {
      return product.name.toLowerCase().includes(userInput) || product.location.toLowerCase().includes(userInput);
    });

    let filteredListHTML = "";
    filteredList.forEach((product) => {
      filteredListHTML += 
      `<div id="product" class="w-80">
      <div class="display my-4 shadow-md w-56 translate-x-10  relative overflow-hidden">
  
        <video class="video-container" class="flex w-full rounded-lg">
          <source src="./media/video/Eskimo.mp4" type="video/mp4">
        </video>
  
        <div class="absolute bottom-[45%] w-full flex items-center justify-center right-3 text-white">
          <span class="playBtn fa-solid fa-circle-play rounded-full bg-orange-500 shadow shadow-gray-950 hover:cursor-pointer  hover:text-orange-500 hover:bg-white hover:border border-orange-500 transition duration-200 ease-linear text-3xl"></span>
        </div>
      </div>
  
      <div>
        <div class="mb-4">
         <span class="font-bold">Name:</span> <span >${product.name}</span>
        </div>
  
        <div class="mb-4">
          <span class="font-bold">Location:</span> <span>${product.location}</span>
        </div>
  
        <span class="font-bold mb-4">Details:</span> 
        <span class="product-details mb-4">Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Quos similique dicta ut itaque fugiat praesentium sint, fuga vero repudiandae
          accusantium assumenda repellat repellendus incidunt sapiente non laudantium alias quod recusandae?
        </span>
  
      </div>
      <div class="mb-4">
        <span class="font-bold">Price:</span> <span ></span>
      </div>
  
      <a href="https://wa.me/message/WUS7G3SB7NX5J1">
        <button
          class="rounded-full text-white bg-orange-500 shadow-md shadow-gray-900 p-2 mt-3 hover:text-orange-500 hover:bg-white hover:border border-orange-500 transition duration-200 ease-linear">Adopt <span class="fa-solid fa-bone"></span>
        </button>
      </a>
    </div>`;
    });
    product.innerHTML = filteredListHTML;
  });
}
