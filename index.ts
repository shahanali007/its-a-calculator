#!/usr/bin/env node
import inquirer from "inquirer";

let answers = await inquirer.prompt([
    {message : "Enter first Number" , type : "number" , name : "firstNumber"},
    {message : "Enter second Number" , type : "number" ,name : "secondNumber"},

    {
        message : "select one  Operator to perform Operation",
        type : "list",
        name : "operator",
        choices : ["Addition", "Subtraction", "Multiplication", "Division"],
    },

]);

if(answers.operator==="Addition"){
    console.log(answers.firstNumber+answers.secondNumber)
}
else if (answers.operator === "Subtraction"){
    console.log(answers.firstNumber -  answers.secondNumber)
}
else if (answers.operator === "Multiplication"){
    console.log(answers.firstNumber *  answers.secondNumber)
}
else if (answers.operator === "Division"){
    console.log(answers.firstNumber /  answers.secondNumber)
}