export {}


//readonly 속성
interface Person {
    readonly name :  string;
    age?: number;
}
const p1: Person = {name :'mike'};

// p1.name = "fsda"; 변경안됨