export {};

//? 옵셔널 파라미터 문자도 가능하고 undefinde도 가능
function getText(name: string, age:number, language? :string) :string {
    const nameText = name.substr(0,10);
    const ageText = age >= 35 ? 'senior' : 'junior';
    const languageTxt = language ? language.substr(0,10) :'';
    return `name : ${nameText}, age: ${ageText} , language : ${languageTxt}`;
}