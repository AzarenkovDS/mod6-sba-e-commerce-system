"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateTax = calculateTax;
function calculateTax(price, category) {
    let taxRate = 4.75;
    if (category === "groceries") {
        taxRate = 3;
    }
    return parseFloat(((price * taxRate) / 100).toFixed(2));
}
