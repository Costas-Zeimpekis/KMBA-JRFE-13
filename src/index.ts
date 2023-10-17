//Use of static checking
let age: number = 42;
console.log("TypeScript:", age.toFixed(2));
age = "42";

//Primitive types
let weight: number = 105;
let firstName: string = "Costas";
let isPublished: boolean = true;

//infer
let height = 1.9;
let lastName = "Zeimpekis";
let isAdmin = false;

//Any type
function render(document: any) {
  console.log(document);
}

//Arrays
const numbers = [1, 2, "3"];
const ages: number[] = [23, 32, 40];
ages.push(2);
//Readonly
const weights: readonly number[] = [66, 89, 105];
weights.push(90);

//Functions
//void
function calculatePrice(price: number) {}

//Infer return
function callculateIncome(income: number) {
  return income;
}

//Annotate return
function calclulateTax(
  income: number,
  taxYear: number = 2016,
  taxType?: number
): number {
  if (taxYear >= 2016) {
    if (income >= 100000) {
      return income * 2;
    }

    if (income >= 50000) {
      return income * 1.5;
    }
  }
  //   return tax * 1.2;
}

console.log(calclulateTax(30000, 2015));

//Arrow function
const sum = (num1: number, num2: number): number => num1 + num2;

//Objects
const employee: {
  readonly id: number;
  name?: string;
  retire?: (date: Date) => void;
} = { id: 1 };
employee.name = "Cotas";

//Index signatures
const staff: { [index: string]: any } = {};
staff.name = "Costas";

//Type Aliasses
type Employee = {
  readonly id: number;
  name?: string;
  retire?: (date: Date) => void;
};

const administrators: Employee = {
  id: 2,
};

//Interfaces
interface ClientMethods {
  buy?: (product: string) => void;
  returnProduct?: (product: string) => void;
}

//Extend interfaces`
interface Clients extends ClientMethods {
  readonly id: number;
  name?: string;
}

const newClient: Clients = {
  id: 1,
};
