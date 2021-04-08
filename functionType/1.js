"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getText(name, age) {
    var nameText = name.substr(0, 10);
    var ageText = age >= 35 ? 'senior' : 'junior';
    return "name : " + nameText + ", age: " + ageText;
}
