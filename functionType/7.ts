export { }

//add 함수 작성하기 

// 두 매개변수가 모두 문자열이면 문자열을 반환한다. 
// 두 매개변수가 모두 숫자이면 수자를 반환한다. 
// 두 매개 변수를 서로 다른 타입으로 입력하면 안된다. 

// 함수 오버라이딩 
function add(x:number, y: number) : number;
function add(x:string, y: string) : string;
function add(x: number | string, y: number | string): number | string {
    if (typeof x === 'number' && typeof y === 'number') {
        return x + y;
    } else {
        const result = Number(x) + Number(y);
        return result;
    }
};

const v1: number = add(1,2);
console.log(v1)
console.log(add('1', '2'));
