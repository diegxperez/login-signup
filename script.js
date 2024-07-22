const inputPassword = document.getElementById("input-password");
const showPassword = document.getElementById("show-password");
const hidePassword = document.getElementById("hide-password");
const tooglePassword = document.getElementById("tooglePassword");

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
