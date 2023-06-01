import { userBasketCartArray, userBasketCartTemplate,} from "./userBasketCart.js";
import totalPrice from "./totalPrice.js";
import toastContainer from "./toastContainer.js";

export default function removeProductFromCart(productId, basketArray) {
  const removeMainProduct = basketArray.filter(
    (cartProduct) => +productId !== cartProduct.id
  );

  
  userBasketCartArray.length = 0;
  userBasketCartArray.push(removeMainProduct);

  localStorage.setItem("basket",JSON.stringify(removeMainProduct))

  userBasketCartTemplate(removeMainProduct);
  totalPrice(removeMainProduct)

  console.log("remove Product => ",userBasketCartArray)

  toastContainer("error","محصول با موفقیت حذف شد")
  
}






