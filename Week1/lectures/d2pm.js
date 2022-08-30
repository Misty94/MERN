// ------- Object.freeze() -------
const shoppingList = Object.freeze([
    { id: 3, itemName: "Dog food", price: 1.29, shops: ["petco", "Trader Joes"] },
    { id: 5, itemName: "red gamer chair", price: 300, shops: ["amazon", "Best Buy"],},
    { id: 9, itemName: "soup dumplings", price: 3.29, shops: ["Trader Joes"] },
    { id: 2, itemName: "Air ticket to Japan", price: 1400, shops: ["expedia"] },
    { id: 10, itemName: "custard tart", price: 3.99, shops: ["Trader Joes"] },
]);

// ------- .map & .filter -------
const prices = shoppingList.map((item) => {
    return item.itemName + ': $' + item.price;
})

const prices2 = shoppingList.map((t, i) => `${i}: id is - ${t.id} - ${t.itemName} - ${t.price}`);

// Not Recommended For Map!
const prices3 = shoppingList.map(function(item){
    return item.price;
})

console.log(prices);
console.log(prices2);
console.log(prices3);

const cheapItems = shoppingList.filter((elijah) => elijah.price < 100);

console.log(cheapItems);

const cheapItemNames = shoppingList.filter((item) => item.price < 100).map( (item) => item.itemName + ' $' + item.price);

console.log(cheapItemNames);