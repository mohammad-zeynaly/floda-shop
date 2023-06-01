import { userBasketCartArray, userBasketCartTemplate,} from "./userBasketCart.js";
import totalPrice from "./totalPrice.js";

export default function removeProductFromCart(productId, basketArray) {
  const removeMainProduct = basketArray.filter(
    (cartProduct) => +productId !== cartProduct.id
  );

  console.log(removeMainProduct)
  userBasketCartArray.length = 0;
  userBasketCartArray.push(removeMainProduct);
  localStorage.setItem("basket",JSON.stringify(removeMainProduct))
  userBasketCartTemplate(removeMainProduct);
  totalPrice(removeMainProduct)
  
}






