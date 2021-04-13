export {}

//인덱스 타입
interface Person {
    readonly name : string;
    age: number;
    [key: string]: string | number;
}


const p1 :Person = {
    name : 'jh',
    birthday : "fdsa",
    age : 1
}