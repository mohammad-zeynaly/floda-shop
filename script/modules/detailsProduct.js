import allProduct from "../../data/allData.js"
const productDetailsTitle = document.getElementById("product-details__title"),
productDetailImage = document.getElementById("product-details__image"),
productDetailsOriginalPrice = document.getElementById("product-details__original-price"),
productDetailsDiscountPrice = document.getElementById("product-details__discount-price");
let searchParameter = new URLSearchParams(location.search)
let searchPageProducts = searchParameter.get("page")

export default function detailsProduct (productId) {

    console.log("quick view product details=> ",productId)

    const mainProductDetails =  allProduct.find(product => +productId === product.id)

    if(mainProductDetails){

    productDetailsTitle.textContent = mainProductDetails.name
    productDetailImage.setAttribute("src",searchPageProducts === "products" ? "../"+ mainProductDetails.img : mainProductDetails.img)
    productDetailsOriginalPrice.textContent = mainProductDetails.originalPrice + "تومان"
    productDetailsDiscountPrice.textContent = mainProductDetails.discountPrice + "تومان"

    }
}
