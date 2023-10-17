import "./index.ts";

//JavaScript example that type checking is usefull
const age = document.getElementById("age");
age.onchange = (event) => event.target.value.toFixed(2);

const numbers = [1, 2, 3];
numbers.forEach((num) => console.log(num.toFixed(2)));
