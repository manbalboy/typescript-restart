"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//rest 파라미터 
function getText(name) {
    var rest = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        rest[_i - 1] = arguments[_i];
    }
    return '';
}
console.log(getText('manbalboy', 1, 2, 3, 4, 4, 5, 6));
