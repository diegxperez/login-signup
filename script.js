// Utility
const $ = (el) => document.querySelector(el);

// TooglePassword
const showPassword = $("#show-password");
const hidePassword = $("#hide-password");
const tooglePassword = $("#tooglePassword");

// Form
const signUpForm = $("#sign-form");
const inputFirstName = $("#first-name-signup");
const inputLastName = $("#last-name-signup");
const inputEmail = $("#email-signup");
const inputPassword = $("#password-signup");
const btnSubmitSignUp = $("#btn-submit-signup");

// Container Password
const containerPassword = $("#container-password");

const validateTooglePassword = () => {
  if (inputPassword.getAttribute("type") === "password") {
    inputPassword.setAttribute("type", "text");
  } else {
    inputPassword.setAttribute("type", "password");
  }

  toogleVisibility(showPassword);
  toogleVisibility(hidePassword);

  function toogleVisibility(element) {
    if (element.classList.contains("hidden")) {
      element.classList.replace("hidden", "block");
    } else {
      element.classList.add("hidden");
    }
  }
};

tooglePassword.addEventListener("click", validateTooglePassword);

const regexEmail = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
const regexPassword = new RegExp(
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}/,
);
const regexName = new RegExp(
  /^([A-Za-zÑñÁáÉéÍíÓóÚú]+['\-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+)(\s+([A-Za-zÑñÁáÉéÍíÓóÚú]+['\-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+))*$/,
);

const validateFormat = (regex, e) => {
  const field = e.target;
  const fieldValue = e.target.value;
  const parentField = field.parentElement;

  if (fieldValue.trim().length > 5 && !regex.test(fieldValue)) {
    parentField.classList.add("outline", "outline-1", "outline-red-600");
  } else {
    parentField.classList.remove("outline", "outline-1", "outline-red-600");
    parentField.classList.add("outline", "outline-1", "outline-brandprimary");
  }
};

inputFirstName.addEventListener("input", (e) => validateFormat(regexName, e));
inputLastName.addEventListener("input", (e) => validateFormat(regexName, e));
inputEmail.addEventListener("input", (e) => validateFormat(regexEmail, e));
inputPassword.addEventListener("input", (e) =>
  validateFormat(regexPassword, e),
);

btnSubmitSignUp.addEventListener("click", (e) => {
  e.preventDefault();

  if (validateForm()) {
    const firstname = inputFirstName.value;
    const lastname = inputLastName.value;
    const email = inputEmail.value;
    const password = inputPassword.value;

    let users = JSON.parse(localStorage.getItem("users")) || [];
    if (users.find((item) => item.email == email)) {
      return alert("User is already registered");
    }
    users.push({ firstname, lastname, email, password });

    localStorage.setItem("users", JSON.stringify(users));
    alert("Successful registration");
    // Redirrecionar a /login
  } else {
    alert("Registration invalid");
  }
});

const validateForm = () => {
  let isValid = true;

  const fields = [inputFirstName, inputLastName, inputEmail, inputPassword];

  fields.forEach((field) => {
    const fieldValue = field.value.trim();
    const parentField = field.parentElement;

    if (fieldValue.length === 0) {
      parentField.classList.add("outline", "outline-1", "outline-red-600");
      isValid = false;
    } else {
      parentField.classList.remove("outline", "outline-1", "outline-red-600");
    }

    if (field === inputFirstName && !regexName.test(fieldValue)) {
      parentField.classList.add("outline", "outline-1", "outline-red-600");
      isValid = false;
    }

    if (field === inputLastName && !regexName.test(fieldValue)) {
      parentField.classList.add("outline", "outline-1", "outline-red-600");
      isValid = false;
    }

    if (field === inputEmail && !regexEmail.test(fieldValue)) {
      parentField.classList.add("outline", "outline-1", "outline-red-600");
      isValid = false;
    }

    if (field === inputPassword && !regexPassword.test(fieldValue)) {
      parentField.classList.add("outline", "outline-1", "outline-red-600");
      isValid = false;
    }
  });

  return isValid;
};
