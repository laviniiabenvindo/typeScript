// Tipos básicos
let age: number = 5;
const firstNome: string = "Lavinia";
const isValid: boolean = true;

const ids: number[] = [1, 2, 3, 4, 5];

// Tupla //Garantir a ordem
const person: [number, string] = [1, "qa"];

// Lista de Tuplas
const people: [number, string] [] = [[1, ""], [2,""]]

// Intersections

const productId: string | number = "1";

// Enum 
enum Direction {
 Up =1,
 Down = 2
}

// Type Assertions 
const productName: any = "Boné";

// let itemId = productId as string;
let itemId = <string>productName;

const direction = Direction.Up;
console.log(direction);