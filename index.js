const app = "I don't do much."

const items = [
  { name: "iPhone X", amount: 10 },
  { name: "Macbook Pro 2017 13", amount: 1 },
  { name: "The Elder Wand", amount: 3 },
  { name: "iPhone 8", amount: 5 }
]

function reduce(collection, callback, initialValue) {
  let result = initialValue;

  collection.forEach((item, index) => {
    result = callback(result, item, index, collection);
  });

  return result;
}

function callback(result, item) {
  if (item.amount < 5) {
    return result + item.amount;
  }
  return result;
}

console.log(reduce(items, callback, 0));

// OR...

console.log(items.reduce(callback, 0));
