import allProduct from "../data/allData.js";
import { addProductToCart } from "./modules/addProductToCart.js";
import detailsProduct from "./modules/detailsProduct.js"
const allProductsContainer = document.querySelector("#allProducts");
const searchParameter = new URLSearchParams(location.search)
let searchPageProducts = searchParameter.get("page")

function allProductsGenerate() {
  allProduct.map((product) => {
    allProductsContainer.insertAdjacentHTML(
      "beforeend",
      `<div class="col mb-5 product-item">
      <div class="card card-img__hover">
        <div class="product-badge">
          <div class="product-label">
            <span class="product-label__text"> جدید</span>
          </div>
          <div class="product-label discount">
            <span>${product.discount}%</span>
        </div>
        </div> 
        <div class="btn-groups pt-2 " role="group" aria-label="Vertical button group">
          <a href="#" class="btn-group__link" title="افزودن به علاقه مندی ها" aria-label="افزودن به علاقه مندی ها "><i class="fa fa-heart"></i></a>
          <a href="#" class="btn-group__link quick__view" title="مشاهده سریع" aria-label=" مشاهده سریع " product-id="${product.id}" data-bs-toggle="modal" data-bs-target="#quick_view"><i product-id="${product.id}" class="fa fa-search"></i></a>
          <a class="btn-group__link basket__btn" title=" افزودن به سبد" aria-label="افزودن به سبد" product-id="${product.id}" > <i product-id="${product.id}" class="fa fa-cart-shopping"></i></a>
        </div>       
        <img  class="card-img-top" 
        src="${searchPageProducts === "products"  ? "../" + product.img : product.img}" 
        alt="Product Image">
      </div>
      <div class="card-body pt-3">
        <a class="card-title__hover card-title__link" href="#"> ${product.name} </a>
        <div class="product-price">
          <span class="product-price__old"><del> ${product.originalPrice} تومان </del></span>
          <span class="product-price__regular"> ${product.discountPrice} تومان</span>
        </div>
      </div>
    </div>`
    );
  });
}

allProductsGenerate();
document.querySelectorAll(".basket__btn").forEach((btn) => {
  btn.addEventListener("click", (event) => {
    addProductToCart(event.target.getAttribute("product-id"));
  });
});

document.querySelectorAll(".quick__view").forEach(btn => {
  btn.addEventListener("click", event => {
    detailsProduct(event.target.getAttribute("product-id"))
  })
})