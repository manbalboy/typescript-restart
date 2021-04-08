"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// const v2 = () => console.log('1234312321');
var size = 123;
var isBig = size >= 100;
var msg = isBig ? '크다' : '작다';
// const v1: undefined = undefined;
// const v2: null = null;
function test() {
}
var Fruit;
(function (Fruit) {
    Fruit[Fruit["Apple"] = 0] = "Apple";
    Fruit[Fruit["Banana"] = 5] = "Banana";
    Fruit[Fruit["Orange"] = 6] = "Orange";
})(Fruit || (Fruit = {}));
// 0, 5 , 6 
console.log(Fruit.Apple, Fruit.Banana, Fruit.Orange);
console.log(123);
// isEqual()
