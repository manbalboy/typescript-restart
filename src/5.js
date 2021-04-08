"use strict";
function getIsValidEnumValue(enumObject, value) {
    return Object.keys(enumObject)
        .filter(function (key) { return isNaN(Number(key)); })
        .some(function (key) { return enumObject[key] === value; });
}
var Some;
(function (Some) {
    Some[Some["Key1"] = 1] = "Key1";
})(Some || (Some = {}));
