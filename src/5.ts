function getIsValidEnumValue(enumObject:any, value: number| string) {
    return Object.keys(enumObject)
    .filter(key => isNaN(Number(key)))
    .some(key => enumObject[key] === value);
}
enum Some {
    Key1 = 1
}


//enum 은 컴파일 이후에도 계속 남아 있음 
// 그렇기 때문에 const enum 을 사용함 
const enum Test {
    Test = 3
}