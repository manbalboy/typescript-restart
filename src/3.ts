export {};

enum Fruit {
    Apple,
    Banana = 5,
    Orange,
}


console.log(Fruit.Banana);
console.log(Fruit['Banana']);
console.log(Fruit[5]);

console.log(Fruit.Orange);
console.log(Fruit['Orange']);
console.log(Fruit[6]);