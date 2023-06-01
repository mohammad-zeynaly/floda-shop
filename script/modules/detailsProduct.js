import allProduct from "../../data/allData.js";
import { addProductToCart } from "./addProductToCart.js";
const modalContainer = document.getElementById("quick_view"),
  productDetailsTitle = document.getElementById("product-details__title"),
  productDetailImage = document.getElementById("product-details__image"),
  productDetailsOriginalPrice = document.getElementById(
    "product-details__original-price"
  ),
  productDetailsDiscountPrice = document.getElementById(
    "product-details__discount-price"
  ),
  addBasket = document.querySelector(".add__basket"),
  modalQuickCloseBtn = document.querySelector(".modal-quick-close__btn");
let searchParameter = new URLSearchParams(location.search);
let searchPageProducts = searchParameter.get("page");

export default function detailsProduct(productId) {
  console.log("quick view product details=> ", productId);

  const mainProductDetails = allProduct.find(
    (product) => +productId === product.id
  );

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

    addBasket.addEventListener("click", () => {
      modalContainer.style.display = "modal-backdrop show";
      addProductToCart(null, mainProductDetails);
      const modalBackdrop = document.querySelector(".modal-backdrop");
      modalContainer.style.display = "none";
      document.body.style.cssText = "overflow: auto; padding-right: 0;";
      modalBackdrop.className = "modal-shadow";
    });

  }
}
modalQuickCloseBtn.addEventListener(
  "click",
  () => (modalContainer.style.display = "none")
);
