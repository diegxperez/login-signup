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
// Container Password
const containerPassword = document.getElementById("container-password");

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

// const validateEmptyField = (e) => {
//   const field = e.target;
//   const fieldValue = e.target.value;

//   const parentField = field.parentElement;

//   if (fieldValue.trim().length === 0) {
//     parentField.classList.add("outline", "outline-1", "outline-red-600");
//     console.log(parentField);
//   } else {
//     parentField.classList.remove("outline", "outline-1", "outline-red-600");
//   }
// };

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
    console.log("registrado con exito");
  }
  // const firstname = inputFirstName.value.trim();
  // const lastname = inputLastName.value.trim();
  // const email = inputEmail.value.trim();
  // const password = inputPassword.value;
  // console.log(firstname);
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
