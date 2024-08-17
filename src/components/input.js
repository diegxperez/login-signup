// other file
const ICONS = {
  email: `
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
`,
}

// HIPER WIP
function input({icons}) {
  return `
        <div class="flex flex-col">
          <label for="email-signup" class="mb-2 font-normal">Email</label>

          <div
            class="flex items-center gap-x-2 rounded-lg bg-neutral-900 px-3 py-3"
          >
            <input
              id="email-signup"
              class="h-5 w-full flex-1 appearance-none bg-transparent text-sm opacity-60 outline-none placeholder:text-sm"
              type="email"
              placeholder="Email"
              name="email"
            />

            ${icons}
          </div>
        </div>
`
}
