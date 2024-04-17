import inquirer from "inquirer";
let mybalance = 10000;
let myPin = 1234;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter your pin",
        type: "number"
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("correct pin code!!!");
}
else {
    console.log("Incorrect pin code");
}
let oprator = await inquirer.prompt([
    {
        name: "operation",
        message: "please select option",
        type: "list",
        choices: ["widthdraw", "checkbalance", "Fast cash", "Exit"],
    }
]);
if (oprator.operation === "widthdraw") {
    console.log("your widthraw is" + mybalance);
}
let amountAns = await inquirer.prompt([
    {
        name: "amount",
        message: "enter your widthraw amount",
        type: "number",
    }
]);
if (mybalance >= amountAns.amount) {
    mybalance -= amountAns.amount;
    console.log("your remaining balance is:" + mybalance);
}
if (oprator.operation === "checkbalance") {
    console.log("your balance is:" + mybalance);
}
else if (mybalance < amountAns.amount) {
    console.log("insufficient balance");
}
if (oprator.operation === "Fast cash") {
    console.log("your cash is " + mybalance);
}
let selectAmount = await inquirer.prompt([
    {
        name: "select",
        message: "please select amount",
        type: "rawlist",
        choices: [1000, 2000, 5000, 8000],
    }
]);
//if(mybalance -= selectAmount.select){ 
//console.log("your remaing balance is " + mybalance)
//}
if (oprator.operation === "Exit") {
    console.log("ok Allah Hafiz");
}
