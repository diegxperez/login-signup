export const root = document.getElementById("root");

export function navigateTo(url) {
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
      renderPanel(root);
      break;
  }
}

export const $ = (el) => document.querySelector(el);
