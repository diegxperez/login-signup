// Index
const root = document.getElementById("root");

// UI
const signUpUI = `<div class="my-5">
        <p class="mb-2 text-xl font-semibold">Create an account</p>
        <p class="text-xs opacity-60">
          Welcome back! Please enter your details
        </p>
      </div>

      <form class="flex flex-col gap-y-5">
        <div class="flex w-full gap-x-3">
          <div class="flex w-1/2 flex-col">
            <label for="first-name-signup" class="mb-2 font-normal"
              >First Name</label
            >

            <div
              class="flex items-center gap-x-2 rounded-lg bg-neutral-900 px-3 py-3"
            >
              <svg
                class="h-4 w-4 text-white"
                width="100%"
                height="100%"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 21L16 18M16 18L19 15M16 18H22M12 15.5H7.5C6.10444 15.5 5.40665 15.5 4.83886 15.6722C3.56045 16.06 2.56004 17.0605 2.17224 18.3389C2 18.9067 2 19.6044 2 21M14.5 7.5C14.5 9.98528 12.4853 12 10 12C7.51472 12 5.5 9.98528 5.5 7.5C5.5 5.01472 7.51472 3 10 3C12.4853 3 14.5 5.01472 14.5 7.5Z"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <input
                id="first-name-signup"
                class="h-5 w-full bg-transparent text-sm opacity-60 outline-none placeholder:text-sm"
                type="text"
                placeholder="First Name"
                name="firstname"
              />
            </div>
          </div>
          <div class="flex w-1/2 flex-col">
            <label for="last-name-signup" class="mb-2 font-normal"
              >Last Name</label
            >
            <div
              class="flex items-center gap-x-2 rounded-lg bg-neutral-900 px-3 py-3"
            >
              <svg
                class="h-4 w-4 text-white"
                width="100%"
                height="100%"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 9L22 6M22 6L19 3M22 6L16 6M16 21V19.8C16 18.1198 16 17.2798 15.673 16.638C15.3854 16.0735 14.9265 15.6146 14.362 15.327C13.7202 15 12.8802 15 11.2 15H6.8C5.11984 15 4.27976 15 3.63803 15.327C3.07354 15.6146 2.6146 16.0735 2.32698 16.638C2 17.2798 2 18.1198 2 19.8V21M12.5 7.5C12.5 9.433 10.933 11 9 11C7.067 11 5.5 9.433 5.5 7.5C5.5 5.567 7.067 4 9 4C10.933 4 12.5 5.567 12.5 7.5Z"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <input
                id="last-name-signup"
                class="h-5 w-full appearance-none bg-transparent text-sm opacity-60 outline-none placeholder:text-sm"
                type="text"
                placeholder="Last Name"
                name="lastname"
              />
            </div>
          </div>
        </div>
        <div class="flex flex-col">
          <label for="email-signup" class="mb-2 font-normal">Email</label>

          <div
            class="flex items-center gap-x-2 rounded-lg bg-neutral-900 px-3 py-3"
          >
            <svg
              class="h-4 w-4 text-white"
              width="100%"
              height="100%"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 7L10.1649 12.7154C10.8261 13.1783 11.1567 13.4097 11.5163 13.4993C11.8339 13.5785 12.1661 13.5785 12.4837 13.4993C12.8433 13.4097 13.1739 13.1783 13.8351 12.7154L22 7M6.8 20H17.2C18.8802 20 19.7202 20 20.362 19.673C20.9265 19.3854 21.3854 18.9265 21.673 18.362C22 17.7202 22 16.8802 22 15.2V8.8C22 7.11984 22 6.27976 21.673 5.63803C21.3854 5.07354 20.9265 4.6146 20.362 4.32698C19.7202 4 18.8802 4 17.2 4H6.8C5.11984 4 4.27976 4 3.63803 4.32698C3.07354 4.6146 2.6146 5.07354 2.32698 5.63803C2 6.27976 2 7.11984 2 8.8V15.2C2 16.8802 2 17.7202 2.32698 18.362C2.6146 18.9265 3.07354 19.3854 3.63803 19.673C4.27976 20 5.11984 20 6.8 20Z"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <input
              id="email-signup"
              class="h-5 w-full flex-1 appearance-none bg-transparent text-sm opacity-60 outline-none placeholder:text-sm"
              type="email"
              placeholder="Email"
              name="email"
            />
          </div>
        </div>

        <div id="container-password" class="mb-6 flex flex-col">
          <label for="password-signup" class="mb-2 font-normal">Password</label>

          <div
            class="mb-2 flex items-center gap-x-2 rounded-lg bg-neutral-900 px-3 py-3"
          >
            <svg
              class="h-4 w-4 text-white"
              width="100%"
              height="100%"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17 10V8C17 5.23858 14.7614 3 12 3C9.23858 3 7 5.23858 7 8V10M12 14.5V16.5M8.8 21H15.2C16.8802 21 17.7202 21 18.362 20.673C18.9265 20.3854 19.3854 19.9265 19.673 19.362C20 18.7202 20 17.8802 20 16.2V14.8C20 13.1198 20 12.2798 19.673 11.638C19.3854 11.0735 18.9265 10.6146 18.362 10.327C17.7202 10 16.8802 10 15.2 10H8.8C7.11984 10 6.27976 10 5.63803 10.327C5.07354 10.6146 4.6146 11.0735 4.32698 11.638C4 12.2798 4 13.1198 4 14.8V16.2C4 17.8802 4 18.7202 4.32698 19.362C4.6146 19.9265 5.07354 20.3854 5.63803 20.673C6.27976 21 7.11984 21 8.8 21Z"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <input
              id="password-signup"
              class="h-5 w-full flex-1 appearance-none bg-transparent text-sm opacity-60 outline-none placeholder:text-sm"
              type="password"
              placeholder="Password"
              name="password"
            />
            <button id="togglePassword" type="button">
              <svg
                id="hide-password"
                class="h-4 w-4 text-white"
                width="100%"
                height="100%"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.42012 12.7132C2.28394 12.4975 2.21584 12.3897 2.17772 12.2234C2.14909 12.0985 2.14909 11.9015 2.17772 11.7766C2.21584 11.6103 2.28394 11.5025 2.42012 11.2868C3.54553 9.50484 6.8954 5 12.0004 5C17.1054 5 20.4553 9.50484 21.5807 11.2868C21.7169 11.5025 21.785 11.6103 21.8231 11.7766C21.8517 11.9015 21.8517 12.0985 21.8231 12.2234C21.785 12.3897 21.7169 12.4975 21.5807 12.7132C20.4553 14.4952 17.1054 19 12.0004 19C6.8954 19 3.54553 14.4952 2.42012 12.7132Z"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12.0004 15C13.6573 15 15.0004 13.6569 15.0004 12C15.0004 10.3431 13.6573 9 12.0004 9C10.3435 9 9.0004 10.3431 9.0004 12C9.0004 13.6569 10.3435 15 12.0004 15Z"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <svg
                id="show-password"
                class="hidden h-4 w-4 text-white"
                width="100%"
                height="100%"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.7429 5.09232C11.1494 5.03223 11.5686 5 12.0004 5C17.1054 5 20.4553 9.50484 21.5807 11.2868C21.7169 11.5025 21.785 11.6103 21.8231 11.7767C21.8518 11.9016 21.8517 12.0987 21.8231 12.2236C21.7849 12.3899 21.7164 12.4985 21.5792 12.7156C21.2793 13.1901 20.8222 13.8571 20.2165 14.5805M6.72432 6.71504C4.56225 8.1817 3.09445 10.2194 2.42111 11.2853C2.28428 11.5019 2.21587 11.6102 2.17774 11.7765C2.1491 11.9014 2.14909 12.0984 2.17771 12.2234C2.21583 12.3897 2.28393 12.4975 2.42013 12.7132C3.54554 14.4952 6.89541 19 12.0004 19C14.0588 19 15.8319 18.2676 17.2888 17.2766M3.00042 3L21.0004 21M9.8791 9.87868C9.3362 10.4216 9.00042 11.1716 9.00042 12C9.00042 13.6569 10.3436 15 12.0004 15C12.8288 15 13.5788 14.6642 14.1217 14.1213"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </form>
      <div>
        <button
          class="mb-6 w-full rounded-lg bg-gradient-to-b from-brandprimary to-brandsecondary py-3 font-medium text-blacksoft"
          type="submit"
          value="enviar"
          id="btn-submit-signup"
        >
          Sign Up
        </button>
      </div>
      <div>
        <p class="text-sm font-light text-[#8996A9]">
          By creating an account, you agree to the
          <a href="#" class="border-b border-white text-white"
            >Terms of Service.</a
          >
          We'll occasionally send you account-related emails.
        </p></div>`;
const signInUI = `<div class="my-5">
<p class="mb-1 text-xl font-semibold">Sign in</p>
<p class="text-xs opacity-60">Enter your email and password</p>
</div>

<form class="flex flex-col gap-y-4">
<div class="flex flex-col">
  <label for="email-signin" class="mb-2 font-normal">Email</label>

  <div
    class="flex items-center gap-x-2 rounded-lg bg-neutral-900 px-3 py-3"
  >
    <svg
      class="h-4 w-4 text-white"
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 7L10.1649 12.7154C10.8261 13.1783 11.1567 13.4097 11.5163 13.4993C11.8339 13.5785 12.1661 13.5785 12.4837 13.4993C12.8433 13.4097 13.1739 13.1783 13.8351 12.7154L22 7M6.8 20H17.2C18.8802 20 19.7202 20 20.362 19.673C20.9265 19.3854 21.3854 18.9265 21.673 18.362C22 17.7202 22 16.8802 22 15.2V8.8C22 7.11984 22 6.27976 21.673 5.63803C21.3854 5.07354 20.9265 4.6146 20.362 4.32698C19.7202 4 18.8802 4 17.2 4H6.8C5.11984 4 4.27976 4 3.63803 4.32698C3.07354 4.6146 2.6146 5.07354 2.32698 5.63803C2 6.27976 2 7.11984 2 8.8V15.2C2 16.8802 2 17.7202 2.32698 18.362C2.6146 18.9265 3.07354 19.3854 3.63803 19.673C4.27976 20 5.11984 20 6.8 20Z"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
    <input
      id="email-signin"
      class="h-5 w-full flex-1 appearance-none bg-transparent text-sm opacity-60 outline-none placeholder:text-sm"
      type="email"
      placeholder="Email"
      name="email"
    />
  </div>
</div>

<div id="container-password" class="mb-6 flex flex-col">
  <label for="password-signin" class="mb-2 font-normal">Password</label>

  <div
    class="mb-2 flex items-center gap-x-2 rounded-lg bg-neutral-900 px-3 py-3"
  >
    <svg
      class="h-4 w-4 text-white"
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17 10V8C17 5.23858 14.7614 3 12 3C9.23858 3 7 5.23858 7 8V10M12 14.5V16.5M8.8 21H15.2C16.8802 21 17.7202 21 18.362 20.673C18.9265 20.3854 19.3854 19.9265 19.673 19.362C20 18.7202 20 17.8802 20 16.2V14.8C20 13.1198 20 12.2798 19.673 11.638C19.3854 11.0735 18.9265 10.6146 18.362 10.327C17.7202 10 16.8802 10 15.2 10H8.8C7.11984 10 6.27976 10 5.63803 10.327C5.07354 10.6146 4.6146 11.0735 4.32698 11.638C4 12.2798 4 13.1198 4 14.8V16.2C4 17.8802 4 18.7202 4.32698 19.362C4.6146 19.9265 5.07354 20.3854 5.63803 20.673C6.27976 21 7.11984 21 8.8 21Z"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
    <input
      id="password-signin"
      class="h-5 w-full flex-1 appearance-none bg-transparent text-sm opacity-60 outline-none placeholder:text-sm"
      type="password"
      placeholder="Password"
      name="password"
    />
    <button id="togglePasswordSign" type="button">
      <svg
        id="hide-passwordSign"
        class="h-4 w-4 text-white"
        width="100%"
        height="100%"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.42012 12.7132C2.28394 12.4975 2.21584 12.3897 2.17772 12.2234C2.14909 12.0985 2.14909 11.9015 2.17772 11.7766C2.21584 11.6103 2.28394 11.5025 2.42012 11.2868C3.54553 9.50484 6.8954 5 12.0004 5C17.1054 5 20.4553 9.50484 21.5807 11.2868C21.7169 11.5025 21.785 11.6103 21.8231 11.7766C21.8517 11.9015 21.8517 12.0985 21.8231 12.2234C21.785 12.3897 21.7169 12.4975 21.5807 12.7132C20.4553 14.4952 17.1054 19 12.0004 19C6.8954 19 3.54553 14.4952 2.42012 12.7132Z"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M12.0004 15C13.6573 15 15.0004 13.6569 15.0004 12C15.0004 10.3431 13.6573 9 12.0004 9C10.3435 9 9.0004 10.3431 9.0004 12C9.0004 13.6569 10.3435 15 12.0004 15Z"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>

      <svg
        id="show-passwordSign"
        class="hidden h-4 w-4 text-white"
        width="100%"
        height="100%"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.7429 5.09232C11.1494 5.03223 11.5686 5 12.0004 5C17.1054 5 20.4553 9.50484 21.5807 11.2868C21.7169 11.5025 21.785 11.6103 21.8231 11.7767C21.8518 11.9016 21.8517 12.0987 21.8231 12.2236C21.7849 12.3899 21.7164 12.4985 21.5792 12.7156C21.2793 13.1901 20.8222 13.8571 20.2165 14.5805M6.72432 6.71504C4.56225 8.1817 3.09445 10.2194 2.42111 11.2853C2.28428 11.5019 2.21587 11.6102 2.17774 11.7765C2.1491 11.9014 2.14909 12.0984 2.17771 12.2234C2.21583 12.3897 2.28393 12.4975 2.42013 12.7132C3.54554 14.4952 6.89541 19 12.0004 19C14.0588 19 15.8319 18.2676 17.2888 17.2766M3.00042 3L21.0004 21M9.8791 9.87868C9.3362 10.4216 9.00042 11.1716 9.00042 12C9.00042 13.6569 10.3436 15 12.0004 15C12.8288 15 13.5788 14.6642 14.1217 14.1213"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>
  </div>
</div>
</form>
<div>
<button
  class="mb-6 w-full rounded-lg bg-gradient-to-b from-brandprimary to-brandsecondary py-3 font-medium text-blacksoft"
  type="submit"
  value="enviar"
  id="btn-submit-signin"
>
  Log in
</button>
</div>`;
const panelUI = `<div class="my-5">
<p class="mb-1 text-xl font-semibold">Welcome</p>
<p id="user-login" class="mb-1 text-xl font-semibold">User</p>
<button
  class="mb-6 w-full rounded-lg bg-gradient-to-b from-brandprimary to-brandsecondary py-3 font-medium text-blacksoft"
  type="submit"
  value="enviar"
  id="btn-logout"
>
  Log out
</button>
</div>`;

root.innerHTML = signUpUI;

// Event Popstate
window.addEventListener("popstate", () => {
  if (window.location.pathname === "/") {
    root.innerHTML = signUpUI;
  }

  if (window.location.pathname === "/signin") {
    root.innerHTML = signInUI;
    hidrateTogglePassword();
    cancelReLogin();
  }

  if (window.location.pathname === "/panelui") {
    root.innerHTML = panelUI;
    hidrateLogin();
  }
});

function navigateTo(url) {
  window.history.pushState(null, null, url);

  switch (window.location.pathname) {
    case "/":
      root.innerHTML = signUpUI;
      break;
    case "/signin":
      root.innerHTML = signInUI;
      hidrateTogglePassword();
      cancelReLogin();
      break;
    case "/panelui":
      root.innerHTML = panelUI;
      hidrateLogin();
      break;
  }
}

// Utility
const $ = (el) => document.querySelector(el);

// Regex
const regexEmail = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
const regexPassword = new RegExp(
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}/,
);
const regexName = new RegExp(
  /^([A-Za-zÑñÁáÉéÍíÓóÚú]+['\-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+)(\s+([A-Za-zÑñÁáÉéÍíÓóÚú]+['\-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+))*$/,
);

// Panel
const btnLogOut = $("#btn-logout");
const userLogin = $("#user-login");

const validateTogglePassword = (input, show, hide) => {
  if (input.getAttribute("type") === "password") {
    input.setAttribute("type", "text");
  } else {
    input.setAttribute("type", "password");
  }

  toogleVisibility(show);
  toogleVisibility(hide);
  function toogleVisibility(element) {
    if (element.classList.contains("hidden")) {
      element.classList.replace("hidden", "block");
    } else {
      element.classList.add("hidden");
    }
  }
};

function hidrateTogglePassword() {
  if (window.location.pathname === "/") {
    $("#togglePassword").addEventListener("click", () => {
      validateTogglePassword(
        $("#password-signup"),
        $("#show-password"),
        $("#hide-password"),
      );
    });
  }

  if (window.location.pathname === "/signin") {
    $("#togglePasswordSign").addEventListener("click", () => {
      validateTogglePassword(
        $("#password-signin"),
        $("#show-passwordSign"),
        $("#hide-passwordSign"),
      );
    });
  }
}

const validateForm = () => {
  let isValid = true;

  const fields = [
    $("#first-name-signup"),
    $("#last-name-signup"),
    $("#email-signup"),
    $("#password-signup"),
  ];

  fields.forEach((field) => {
    const fieldValue = field.value.trim();
    const parentField = field.parentElement;

    if (fieldValue.length === 0) {
      parentField.classList.add("outline", "outline-1", "outline-red-600");
      isValid = false;
    } else {
      parentField.classList.remove("outline", "outline-1", "outline-red-600");
    }

    if (field === fields[0] && !regexName.test(fieldValue)) {
      parentField.classList.add("outline", "outline-1", "outline-red-600");
      isValid = false;
    }

    if (field === fields[1] && !regexName.test(fieldValue)) {
      parentField.classList.add("outline", "outline-1", "outline-red-600");
      isValid = false;
    }

    if (field === fields[2] && !regexEmail.test(fieldValue)) {
      parentField.classList.add("outline", "outline-1", "outline-red-600");
      isValid = false;
    }

    if (field === fields[3] && !regexPassword.test(fieldValue)) {
      parentField.classList.add("outline", "outline-1", "outline-red-600");
      isValid = false;
    }
  });

  return isValid;
};

const sendForm = (e) => {
  e.preventDefault();

  if (validateForm()) {
    const firstname = $("#first-name-signup").value;
    const lastname = $("#last-name-signup").value;
    const email = $("#email-signup").value;
    const password = $("#password-signup").value;

    let users = JSON.parse(localStorage.getItem("users")) || [];
    if (users.find((item) => item.email == email)) {
      return alert("User is already registered");
    }
    users.push({ firstname, lastname, email, password });

    localStorage.setItem("users", JSON.stringify(users));
    alert("Successful registration");
    navigateTo("/signin");
    // Redirrecionar a /login
  } else {
    alert("Registration invalid");
  }
};

const signin = (e) => {
  e.preventDefault();
  let users = JSON.parse(localStorage.getItem("users")) || [];

  let validUser = users.find(
    (user) =>
      user.email === $("#email-signin").value &&
      user.password === $("#password-signin").value,
  );

  if (!validUser) {
    return alert("User invalid");
  }

  localStorage.setItem("login", JSON.stringify(validUser));
  alert(`Welcome ${validUser.firstname}`);
  navigateTo("/panelui");
  hidrateLogin();
};

document.addEventListener("click", (e) => {
  let target = e.target;

  if (target.matches("#btn-submit-signup")) {
    sendForm(e);
  }

  if (target.matches("#btn-submit-signin")) {
    signin(e);
  }

  if (target.tagName === "A") {
    e.preventDefault();
    const href = target.getAttribute("href");
    navigateTo(href);
  }
});

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

document.addEventListener("input", (e) => {
  const target = e.target;

  if (target.matches("#first-name-signup")) {
    validateFormat(regexName, e);
  } else if (target.matches("#last-name-signup")) {
    validateFormat(regexName, e);
  } else if (target.matches("#email-signup")) {
    validateFormat(regexEmail, e);
  } else if (target.matches("#password-signup")) {
    validateFormat(regexPassword, e);
  }
});

function cancelReLogin() {
  const user = JSON.parse(localStorage.getItem("login"));
  if (user) {
    navigateTo("/panelui");
  }
}

function hidrateLogin() {
  const user = JSON.parse(localStorage.getItem("login")) || false;
  if (!user) {
    navigateTo("/signin");
  }
  $("#user-login").textContent = `${user.lastname}`;

  $("#btn-logout").addEventListener("click", () => {
    localStorage.removeItem("login");
    navigateTo("/signin");
  });
}
