export function calculateTax(price: number, category: string): number {
    let taxRate = 4.75;

    if (category === "groceries") {
        taxRate = 3;
    }

    return parseFloat(((price * taxRate) / 100).toFixed(2));
}
