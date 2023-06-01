import removeProductFromCart from "./removeProductFromCart.js";
import changeContentShoppingCart from "./changeContentShoppingCart.js"
import { setInLocalStorage,getInLocalStorage } from "./localStorageProducts.js"
import totalPrice from "./totalPrice.js";
const userCartContainer = document.getElementById("userCart");
const shoppingCardBadge = document.querySelector(".shopping-card__badge")
const searchParameter = new URLSearchParams(location.search);
let searchPageProducts = searchParameter.get("page");

let userBasketCartArray = [];

window.addEventListener("load",() => {
  let getBasketProductInLocalStorage = getInLocalStorage("basket");
  
  if(getBasketProductInLocalStorage){

    userBasketCartArray = getBasketProductInLocalStorage
  }
  
  userBasketCartTemplate(userBasketCartArray)
  totalPrice(userBasketCartArray)

})

function userBasketCartTemplate(basketArray) {
  if (basketArray) {
    userCartContainer.innerHTML = "";
    basketArray.map((cartProduct) => {
      userCartContainer.insertAdjacentHTML(
        "beforeend",
        `<li class="user-basket__list-item">
            <div class="user-basket-item">
                <a href="#" class="user-baket-item__link">
                    <img src="${
                      searchPageProducts === "products"
                      || searchPageProducts === "contact-us" || searchPageProducts === "about-us" || searchPageProducts === "login-form"
                      ? "../" + cartProduct.img
                        : cartProduct.img
                    }" alt="عکس محصول" class="user-basket-item__image">
                </a>
            </div>
                <div class="user-basket-item__desc">
                <h3 class="user-basket-item__name">
                    <a class="user-basket-item__names" href="#">
                        ${cartProduct.name}
                    </a>
                </h3>
                    <p class="user-basket-item-quantity">
                    <span class="user-basket-item__count"> 
                        ${cartProduct.count} 
                      <strong>عدد</strong></span>
                    <span class="user-basket-item__price"> 
                    ${cartProduct.discountPrice} تومان</span>
                    </p>
                </div>
            <button class="user-basket-item__remove" cart-product-id="${
              cartProduct.id
            }"> 
            <i class="fa fa-times" cart-product-id="${cartProduct.id}"></i>
            </button>
        </li>`
      );
    });

    // call in send cart Product Id to module removeProductFromCart
    document.querySelectorAll(".user-basket-item__remove").forEach((exitBtn) => {
        exitBtn.addEventListener("click", (event) => {
          removeProductFromCart(
            event.target.getAttribute("cart-product-id"),
            basketArray
          );
        });
      });

      shoppingCardBadge.textContent = basketArray.length;
      setInLocalStorage("basket",JSON.stringify(basketArray))
    }
    
    changeContentShoppingCart(basketArray);

}
userBasketCartTemplate();

export { userBasketCartArray, userBasketCartTemplate };
