export {};

function getText(name: string, age:number): string {
    const nameText = name.substr(0,10);
    const ageText = age >= 35 ? 'senior' : 'junior';
    return `name : ${nameText}, age: ${ageText}`;
}
