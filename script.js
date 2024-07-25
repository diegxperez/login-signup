// TooglePassword
const showPassword = document.getElementById("show-password");
const hidePassword = document.getElementById("hide-password");
const tooglePassword = document.getElementById("tooglePassword");

// Form
const signUpForm = document.getElementById("sign-form");
const inputFirstName = document.getElementById("first-name-signup");
const inputLastName = document.getElementById("last-name-signup");
const inputEmail = document.getElementById("email-signup");
const inputPassword = document.getElementById("password-signup");
const btnSubmitSignUp = document.getElementById("btn-submit-signup");
//
const containerPassword = document.getElementById("container-password");

tooglePassword.addEventListener("click", () => {
  if (inputPassword.getAttribute("type") === "password") {
    inputPassword.setAttribute("type", "text");
  } else {
    inputPassword.setAttribute("type", "password");
  }

  toogleVisibility(showPassword);
  toogleVisibility(hidePassword);
});

function toogleVisibility(element) {
  if (element.classList.contains("hidden")) {
    element.classList.replace("hidden", "block");
  } else {
    element.classList.add("hidden");
  }
}

// btnSubmit.addEventListener("click", () => {
//   signUpForm.submit();
// });

inputFirstName.addEventListener("blur", function (e) {
  const field = e.target;
  const fieldValue = e.target.value;

  const existingErrorName = document.querySelector(".error-name");

  if (fieldValue.length === 0) {
    if (!existingErrorName) {
      const errorName = document.createElement("p");
      errorName.innerText = "Ingrese un nombre valido";
      errorName.classList.add(
        "text-xs",
        "font-light",
        "opacity-60",
        "text-brandprimary",
        "error-name",
      );
      containerPassword.appendChild(errorName);
    }
  } else {
    if (existingErrorName) {
      containerPassword.removeChild(existingErrorName);
    }
  }
});
