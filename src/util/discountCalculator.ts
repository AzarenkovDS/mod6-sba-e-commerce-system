export function calculateDiscount(price: number, discountRate: number): number {
    return parseFloat(((price * discountRate) / 100).toFixed(2));
}