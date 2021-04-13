export {}


//선택속성 
interface Person {
    name :  string;
    age?: number;
    // age: number | undefined;
}
const p1: Person = {name :'mike'};