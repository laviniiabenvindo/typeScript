const returnValue = <T>(value: T) => value;

const messege = returnValue<string>("Hello word");
const count = returnValue<number>(5);

function getFirstValueFromArray<Type>(array: Type[]) {
 return array[0];
}

const firtsValueFromStringArray = getFirstValueFromArray<string>(["1", "2"]);
const firstValueFromNumber = getFirstValueFromArray<number>([10, 20])

// Promises

const returnPromises = async (): Promise<number> => {
 return 5
}

// classes

class genericNumber<T> {
 zeroValue: T;
 sun: (x: T, y: T) => T;

 constructor(zeroValue: T, sun:(x: T, y: T) => T){
  this.zeroValue = zeroValue
  this.sun = sun
 }
}

const myGenericNumber = new genericNumber<number>(0, (x: number, y: number)=>{
 return x+ y;
})