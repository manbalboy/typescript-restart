export {};

// const v2 = () => console.log('1234312321');


const size: number = 123;
const isBig: boolean = size >= 100;
const msg: string = isBig ? '크다' : '작다';

// const v1: undefined = undefined;
// const v2: null = null;
function test (): void {

}



enum Fruit {
    Apple,
    Banana =5,
    Orange,
}
// 0, 5 , 6 
console.log(Fruit.Apple, Fruit.Banana, Fruit.Orange);


console.log(123);

// isEqual()