const userBasketTotalPrice = document.querySelector(".user-basket-total__price")

export default function totalPrice (userBasketArray) {
    let totalPriceValue = 0;
   
    userBasketArray.forEach( product => {
        totalPriceValue += +product.count * +product.discountPrice
        
        userBasketTotalPrice.textContent = totalPriceValue + "تومان"
    })
}