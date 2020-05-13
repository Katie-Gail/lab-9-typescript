"use strict";
//Tallest Mountain
let mountains = [
    { name: "Kilimanjaro", height: 19341 },
    { name: "Everest", height: 29029 },
    { name: "Denali", height: 20310 },
];
const findNameOfTallestMountain = (array) => {
    let tallestMountain = 0;
    let nameOfTallest = "";
    array.forEach((element) => {
        if (tallestMountain < element.height) {
            tallestMountain = element.height;
            nameOfTallest = element.name;
        }
    });
    return nameOfTallest;
};
let callTallest = findNameOfTallestMountain(mountains);
console.log(callTallest);
let products = [
    { name: "toothpaste", price: 2.0 },
    { name: "shampoo", price: 5.0 },
    { name: "deoderant", price: 3.5 },
];
const calcAverageProductPrice = (array) => {
    let total = 0;
    array.forEach((element) => {
        total += element.price;
    });
    return total / array.length;
};
let average = calcAverageProductPrice(products);
console.log(average);
let inventory = [
    { product: { name: "motor", price: 10.0 }, quantity: 10 },
    { product: { name: "sensor", price: 12.5 }, quantity: 4 },
    { product: { name: "LED", price: 1.0 }, quantity: 20 },
];
const calcInventoryValue = (array) => {
    let total = 0;
    array.forEach((item) => {
        total += item.product.price * item.quantity;
    });
    return total;
};
let inventoryValue = calcInventoryValue(inventory);
console.log(inventoryValue);
