// select Element user basket To Dom
const overlayContainer = document.querySelector("#overlay");
const shoppingCardBtn = document.querySelector("#shopping-card");
const userBasketCard = document.querySelector(".user-basket");
const userBasketCloseBtn = document.querySelector(".user-basket__close");



// show Shopping Card
function shoppingCardShow() {
  if (userBasketCard.classList.contains("user-basket-disable")) {
    userBasketCard.className = "user-basket user-basket__active";
    overlayContainer.classList.add("overlay");
  } else {
    userBasketCard.className = "user-basket user-basket-disable";
    overlayContainer.classList.remove("overlay");
  }
}

// close user Basket
function closeShoppingCard() {
  userBasketCard.className = "user-basket user-basket-disable";
  overlayContainer.classList.remove("overlay");
}

// close all form
function closeAllCards() {
  // close shopping card
  userBasketCard.className = "user-basket user-basket-disable";
  overlayContainer.classList.remove("overlay");
}



userBasketCloseBtn.addEventListener("click", closeShoppingCard);
shoppingCardBtn.addEventListener("click", shoppingCardShow);
overlayContainer.addEventListener("click", closeAllCards);

// setting slider image
$(document).ready(function () {
  $(".slider-image").slick({
    rtl: true,
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    autoplaySpeed: 2000,
    autoplay: true,
  });
});

// setting gallery
$(document).ready(function () {
  $(".gallery-slider").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    speed: 300,
    infinite: true,
    autoplaySpeed: 2000,
    autoplay: true,
    rtl: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
        },
      },

      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});
