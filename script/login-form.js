"use strict";

// Select Elements form Register
const userNameInput = document.querySelector("#user-name");
const userPassword = document.querySelectorAll(".user-password");
const userPasswordContainer = document.querySelector("#user-password");
const userPasswordWrapper = document.querySelector("#user-password-again");
const userEmail = document.querySelector("#user-email");
const userNameMessage = document.querySelector("#user-name-message");
const userEmailMessage = document.querySelector("#user-email-message");
const btnFormRegisterSubmit = document.querySelector("#submit-register");

// Select Element Form Login
const userLoginNameContainer = document.querySelector("#user-login-name");
const userLoginPasswordContainer = document.querySelector(
  "#user-login-password"
);
const userLoginNameInput = document.querySelector("#user-input__name");
const userLoginPasswordInput = document.querySelector("#user-input__password");
const btnFormLoginSubmit = document.querySelector("#submit-login");

// user Name Input Validation Register
function userNameValidation() {
  let userNameInputValue = userNameInput.value;
  if (Number(userNameInputValue)) {
    userNameMessage.innerHTML = "لطفا نام خود را به انگلیسی وارد نمایید";
    userNameMessage.className = "color-red d-block";
  } else if (userNameInputValue === "") {
    userNameMessage.innerHTML = "این فیلد الزامی می باشد";
    userNameMessage.className = "color-red d-block";
  }

  setInterval(() => {
    userNameMessage.className = "color-red d-none";
  }, 5000);
}

// user Password Input Validation Register
function UserPasswordValidation() {
  let userPasswordValue = userPassword[0].value;

  userPasswordContainer.insertAdjacentHTML(
    "beforeend",
    '<small  class="color-red user-password-message d-none"> </small>'
  );
  userPasswordWrapper.insertAdjacentHTML(
    "beforeend",
    '<small  class="color-red user-password-message__again d-none">   این فیلد الزامی می باشد  </small>'
  );

  let userPasswordMessage = document.querySelector(".user-password-message");
  let userPasswordMessageAgin = document.querySelector(
    ".user-password-message__again"
  );

  if (userPasswordValue.length >= 1 && userPasswordValue.length <= 7) {
    userPasswordMessage.innerHTML = "رمز عبور حداقل باید 8 کاراکتر باشد";
    userPasswordMessage.className = "color-red user-password-message d-block";
  } else if (userPasswordValue === "") {
    userPasswordMessage.innerHTML = "این فیلد الزامی می باشد";
    userPasswordMessage.className = "color-red user-password-message d-block";
    userPasswordMessageAgin.className =
      "color-red user-password-message__again d-block";
  } else {
  }

  setInterval(() => {
    userPasswordMessage.className = "color-red user-password-message d-none";
    userPasswordMessageAgin.className =
      "color-red user-password-message__again d-none";
  }, 5000);
}

// user email Validation Register
function userEmailValidation() {
  let userEmailValue = userEmail.value;

  if (userEmailValue === "") {
    userEmailMessage.innerHTML = "این فیلد الزامی می باشد";
    userEmailMessage.className = "color-red d-block";
  } else {
    userEmailMessage.className = "color-red d-none";
    userEmailMessage.innerHTML = "";
  }

  setInterval(() => {
    userEmailMessage.className = "color-red d-none";
  }, 5000);
}

// form Validation Register
function formRegisterValidation(event) {
  event.preventDefault();
  userNameValidation();
  UserPasswordValidation();
  userEmailValidation();
}

function loginUserNameAndPasswordValidation() {
  userLoginNameContainer.insertAdjacentHTML(
    "beforeend",
    '<small  class="color-red user-Name__Login  d-none"> این فیلد الزامی می باشد</small>'
  );
  userLoginPasswordContainer.insertAdjacentHTML(
    "beforeend",
    '<small  class="color-red user-password__Login d-none">  این فیلد الزامی می باشد</small>'
  );

  let UserNameLoginMessage = document.querySelector(".user-Name__Login");
  let userPasswordLoinMessage = document.querySelector(".user-password__Login");

  if (userLoginNameInput.value === "" || userLoginPasswordInput.value === "") {
    UserNameLoginMessage.className = "color-red user-Name__Login d-block";
    userPasswordLoinMessage.className =
      "color-red user-password__Login d-block";
  }
  setInterval(() => {
    UserNameLoginMessage.className = "color-red user-Name__Login d-none";
    userPasswordLoinMessage.className = "color-red user-password__Login d-none";
  }, 5000);

  console.log(UserNameLoginMessage, userPasswordLoinMessage);
}

// form Validation Login
function formLoginValidation(event) {
  event.preventDefault();

  loginUserNameAndPasswordValidation();
}

btnFormRegisterSubmit.addEventListener("click", formRegisterValidation);
btnFormLoginSubmit.addEventListener("click", formLoginValidation);
