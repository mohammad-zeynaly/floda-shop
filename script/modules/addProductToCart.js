import allProduct from "../../data/allData.js";
import { userBasketCartArray, userBasketCartTemplate,} from "./userBasketCart.js";
import totalPrice from "./totalPrice.js"
import toastContainer from "./toastContainer.js"

export function addProductToCart(productId) {
  if (userBasketCartArray) {
    let isProductBasket = userBasketCartArray.some(
      (cartProduct) => +productId === cartProduct.id
    );
    if (!isProductBasket) {
      let mainProduct = allProduct.find((product) => +productId === product.id);

      userBasketCartArray.push(mainProduct);
      userBasketCartTemplate(userBasketCartArray);
      totalPrice(userBasketCartArray)

      toastContainer("success","محصول با موفقیت اضافه شد")
    }
  }
}
