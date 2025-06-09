"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateDiscount = calculateDiscount;
function calculateDiscount(price, discountRate) {
    return parseFloat(((price * discountRate) / 100).toFixed(2));
}
