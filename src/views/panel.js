import { button } from "../components/button.js";
import { $ } from "../utils.js";

const panelUI = `<div class="my-5">
	<p class="mb-1 text-xl font-semibold">Welcome</p>
	<p id="user-login" class="mb-1 text-xl font-semibold">User</p>

	${button({ id: "btn-logout", content: "Log out", type: "button", value: "enviar" })}
</div>`;

function panelHidrate(navigateTo) {
	const user = JSON.parse(localStorage.getItem("login")) || false;

	if (!user) {
		return navigateTo("/signin");
	}

	$("#user-login").textContent = `${user.firstname} ${user.lastname}`;

	$("#btn-logout").addEventListener("click", () => {
		localStorage.removeItem("login");
		window.location.href = "/";
	});
}

export function renderPanel(rootElement, navigateTo) {
	rootElement.innerHTML = panelUI;
	panelHidrate(navigateTo);
}
