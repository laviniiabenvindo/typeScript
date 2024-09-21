interface Iperson {
 id: number;
 name: string;
 age: number;
 sayMyName(): string;
}

class Person implements Iperson{
 readonly id: number;
 name: string; // O protected é acessivel pela class mãe e subClass
 age: number; // Private Somente na class mãe

 constructor(id: number, name: string, age: number){
  this.id = id;
  this.name = name;
  this.age = age;
 }

 sayMyName(): string {
  return this.name
 }
}
// Mesma coisa de acima
class PersonRefect {
 constructor(
  readonly id: number,
  protected name: string,
  private age: number
 ){}
}

class Employee extends Person {
 constructor(id: number, name: string, age: number){
  super(id, name, age)
 }
}

const personNew = new Person(1, "Lala", 13);
