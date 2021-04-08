"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getText(name, age, language) {
    var nameText = name.substr(0, 10);
    var ageText = age >= 35 ? 'senior' : 'junior';
    var languageTxt = language ? language.substr(0, 10) : '';
    return "name : " + nameText + ", age: " + ageText + " , language : " + languageTxt;
}
