#! /usr/bin/env node
import inquirer from "inquirer";
const currency:any = {
  USD: 1,
  EURO: 0.93,
  GBP: 0.8,
  INR: 83.38,
  RIYAL: 3.75,
  PKR: 277.42,
};
let userAnswer = await inquirer.prompt([
  {
    name: "From",
    message: "Enter from currency",
    type: "list",
    choices: ["USD", "PKR", "RIYAL", "EURO", "INR", "GBP"],
  },
  {
    name: "To",
    message: "Enter To currency",
    type: "list",
    choices: ["USD", "PKR", "RIYAL", "EURO", "INR", "GBP"],
  },
  {
    name: "Amount",
    message: "Enter amount",
    type: "number"
  }
]);
let fromAmount = currency[userAnswer.From]
let toAmount = currency[userAnswer.To]
let Amount = userAnswer.Amount

let baseAmount = Amount / fromAmount  //inr 30000 / 280
let convertedAmount = baseAmount * toAmount
console.log(convertedAmount)


// if (userAnswer.From === "USD") {
// } else if (userAnswer.From === "PKR") {

// } else if (userAnswer.From === "RIYAL") {

// } else if (userAnswer.From === "EURO") {

// } else if (userAnswer.From === "INR") {

// } else if (userAnswer.From === "GBP") {
    
// } else {
//   console.log("Enter valid currency above and try again.");
// }
// console.log(userAnswer)