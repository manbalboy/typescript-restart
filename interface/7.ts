export { }

interface GetText {
    (name: string, age: number): string;

    totalCall? : number; //속성값을 정의할수 있다. 
}

const getText: GetText = function (name, age) {
    getText.totalCall = 1;
    const nameText = name.substr(0,10);
    const ageText = age >=35 ? 'senior' : 'junior';
    return `name: ${nameText}, age: ${ageText}`;
}

getText.totalCall = 0;