function calculateTax(income) {
    return (function() {
        if (income <= 50000) return income * 0.1; // 10% tax
        if (income <= 100000) return income * 0.2; // 20% tax
        return income * 0.3; // 30% tax for income above 100000
    })();
}

// Test cases
console.log(calculateTax(40000));  // Output: 4000
console.log(calculateTax(80000));  // Output: 16000
console.log(calculateTax(150000)); // Output: 45000