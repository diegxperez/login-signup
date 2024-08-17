export function button({ id, content, type, value }) {
  return `
  <button
    class="mb-6 w-full rounded-lg bg-gradient-to-b from-brandprimary to-brandsecondary py-3 font-medium text-blacksoft"
    type="${type}"
    value="${value}"
    id="${id}"
  >
    ${content}
  </button>
`;
}
