/**
 * Formats a unit price and quantity into a readable string.
 * Example: unitPriceFormatStr(10, 2) => "10.00 x 2"
 */
export function unitPriceFormatStr(unitPrice: number, unitsNumber: number): string {
  return `${unitPrice.toFixed(2)} x ${unitsNumber}`;
}

export function priceFormatStr(unitPrice: number, unitsNumber?: number): string {
  const total = unitsNumber ? unitPrice * unitsNumber : unitPrice;
  return `$${total.toFixed(2)}`;
}

/**
 * Formats the total price into a readable string.
 * Example: totalPriceFormatStr(10, 2) => "Total: $20.00"
 */
export function totalPriceFormatStr(unitPrice: number, unitsNumber: number): string {
  const total = unitPrice * unitsNumber;
  return `Total: $${total.toFixed(2)}`;
}
