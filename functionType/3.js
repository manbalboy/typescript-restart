"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//? 옵셔널 파라미터 문자도 가능하고 undefinde도 가능
function getText(name, age, language) {
    var nameText = name.substr(0, 10);
    var ageText = age >= 35 ? 'senior' : 'junior';
    var languageTxt = language ? language.substr(0, 10) : '';
    return "name : " + nameText + ", age: " + ageText + " , language : " + languageTxt;
}
