"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Fruit;
(function (Fruit) {
    Fruit[Fruit["Apple"] = 0] = "Apple";
    Fruit[Fruit["Banana"] = 5] = "Banana";
    Fruit[Fruit["Orange"] = 6] = "Orange";
})(Fruit || (Fruit = {}));
console.log(Fruit.Banana);
console.log(Fruit['Banana']);
console.log(Fruit[5]);
console.log(Fruit.Orange);
console.log(Fruit['Orange']);
console.log(Fruit[6]);
