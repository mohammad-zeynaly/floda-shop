const userBasketEmptyMessage = document.querySelector(".user-basket__empty");
const userBasketContent = document.querySelector(".user-basket__content");

export default function changeContentShoppingCart(userBasketCartArray) {
 

  if (userBasketCartArray === undefined || userBasketCartArray === null || userBasketCartArray.length < 1) {
    userBasketEmptyMessage.textContent = " محصولی در سبد خرید یافت نشد ";
    userBasketContent.style.display = "none";
    console.log("non products");
  } else if (userBasketCartArray.length ) {
    userBasketEmptyMessage.textContent = "";
    userBasketContent.style.display = "block";
    console.log("yes products");
  }
}
