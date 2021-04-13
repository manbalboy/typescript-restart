export {}


//선택속성 
interface Person {
    name :  string;
    age?: number;
    // age: number | undefined;
}
const p1: Person = {name :'mike'};

const p2 = {
    name :'mike',
    birthday : '19890217'
}

//타입호환성
const p3: Person = p2;