//Type
type Order = {
 productId: string
 price?: number
}

type User = {
 firstName: string
 age: number
 email: string
 password: string
 orders: Order[]
 register(): string;
}

const user: User = {
 firstName: "Lavinia",
 age: 18,
 email: "lala@lala.com",
 password: "lala123",
 orders: [{ productId: "1122", price: 300 }],
 register() {
     return ""
 },
}

// Unions 

type Author = {
 books: string[]
}

const author: Author & User = {
 age: 23,
 books: [""],
 firstName: "Seu tonho",
 email: "tonho@tonho.com",
 password: "toinho123",
 orders:[],
 register() {
     return "j";
 },
}

// Interface 

interface UserIterface  {
 readonly firstName: string, 
 email: string
 login(): string
}

const emailUser: UserIterface = {
 firstName:"Felipinho",
 email: "felipe@felipe.com",
 login() {
     return ""
 },
}
