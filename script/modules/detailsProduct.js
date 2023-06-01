import allProduct from "../../data/allData.js";
import { addProductToCart } from "./addProductToCart.js";
const modalContainer = document.getElementById("quick_view"),
  productDetailsTitle = document.getElementById("product-details__title"),
  productDetailImage = document.getElementById("product-details__image"),
  productDetailsOriginalPrice = document.getElementById("product-details__original-price"),
  productDetailsDiscountPrice = document.getElementById("product-details__discount-price"),
  addBasket = document.querySelector(".add__basket"),
  modalQuickCloseBtn = document.querySelector(".modal-quick-close__btn");
let searchParameter = new URLSearchParams(location.search);
let searchPageProducts = searchParameter.get("page");
let mainProductId;

export default function detailsProduct(productId) {

  const mainProductDetails = allProduct.find(
    (product) => +productId === product.id
  );

  mainProductId = +productId

  if (mainProductDetails) {
    productDetailsTitle.textContent = mainProductDetails.name;
    productDetailImage.setAttribute(
      "src",
      searchPageProducts === "products"
        ? "../" + mainProductDetails.img
        : mainProductDetails.img
    );

    productDetailsOriginalPrice.textContent =
      mainProductDetails.originalPrice + "تومان";
    productDetailsDiscountPrice.textContent =
      mainProductDetails.discountPrice + "تومان";


    // click add shopping cart in product details
    if (document.querySelector(".modal-shadow")) {
      document.querySelector(".modal-shadow").className ="modal-backdrop show";
    }
    
  }
  
}

// click btn add to cart modal quick view
addBasket.addEventListener("click", () => {

  const mainProduct = allProduct.find(
    (product) => mainProductId === product.id
  );
  
    modalContainer.style.display = "modal-backdrop show";
    addProductToCart(null, mainProduct);
    const modalBackdrop = document.querySelector(".modal-backdrop");
    modalContainer.style.display = "none";
    document.body.style.cssText = "overflow: auto; padding-right: 0;";
    modalBackdrop.className = "modal-shadow";
    console.log("click product details :))",mainProduct)
});

modalQuickCloseBtn.addEventListener("click",() => (modalContainer.style.display = "none"));
