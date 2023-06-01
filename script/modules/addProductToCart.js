import allProduct from "../../data/allData.js";
import {
  userBasketCartArray,
  userBasketCartTemplate,
} from "./userBasketCart.js";
import totalPrice from "./totalPrice.js";
import toastContainer from "./toastContainer.js";

export function addProductToCart(productId, mainProductDetails) {


  if (userBasketCartArray) {
    let isProductBasket = userBasketCartArray.some(
      (cartProduct) => +productId === cartProduct.id
    );
      console.log("mainProductDetails=> ",mainProductDetails)
    if (mainProductDetails) {
      console.log(mainProductDetails);

      let isMainProductDetails = userBasketCartArray.some(
        (cartProduct) => +mainProductDetails.id === cartProduct.id
      );

      if (!isMainProductDetails) {
        console.log("محصول از جزئیات اضافه شد ");
        userBasketCartArray.push(mainProductDetails);
        totalPrice(userBasketCartArray);
        toastContainer("success", "محصول با موفقیت اضافه شد");
        userBasketCartTemplate(userBasketCartArray);
      }
      
    } else {
      if (!isProductBasket) {
        let mainProduct = allProduct.find(
          (product) => +productId === product.id
        );
        console.log("محصول از فروشگاه اضافه شد ");
        userBasketCartArray.push(mainProduct);
        totalPrice(userBasketCartArray);
        toastContainer("success", "محصول با موفقیت اضافه شد");
        userBasketCartTemplate(userBasketCartArray);
      }
    }
    
  }
}
