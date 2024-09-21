
interface MathFunc {
 (x: number, y: number): number;
}
const sum: MathFunc = (x: number, y: number) => {
 return x + y
}

const value = sum(1, 3);

const log = (message: string): void => {
 console.log(message)
}