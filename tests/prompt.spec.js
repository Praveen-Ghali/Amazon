import Prompt from "prompt-sync";
//import prompt from "prompt-sync";
const prompt = Prompt();
let userInput = prompt("Enter your name:");
const promptInstance = Prompt();
let anotherInput = promptInstance("Enter your age:");
console.log("You entered age:", anotherInput);
