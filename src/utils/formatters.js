/**
 * @param {number} value
 * @returns {string}
 */
export function formatPrice(value) {
  if (typeof value !== "number") {
    value = 0;
  }

  const formatted = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(value);

  return formatted.replace("Rp", "Rp.");
}
