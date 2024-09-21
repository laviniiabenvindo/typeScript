"use strict";
// Tipos básicos
let age = 5;
const firstNome = "Lavinia";
const isValid = true;
const ids = [1, 2, 3, 4, 5];
// Tupla //Garantir a ordem
const person = [1, "qa"];
// Lista de Tuplas
const people = [[1, ""], [2, ""]];
// Intersections
const productId = "1";
// Enum 
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
})(Direction || (Direction = {}));
const direction = Direction.Up;
console.log(direction);
