#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

// Welcome message with chalk styling
console.log(chalk.bold.white.bgMagentaBright("********************************"));
console.log(chalk.bold.white.bgMagentaBright("Welcome to the Word Counter App!"));
console.log(chalk.bold.white.bgMagentaBright("********************************"));

// Prompt the user to enter a sentence
const answers = await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: chalk.bold.white.bgGreenBright("Enter your sentence to count the words: ")
    }
]);

// Trim the sentence and split it into an array of words
const words = answers.Sentence.trim().split(" ");

// Print the array of words to the console with chalk styling
console.log(chalk.bold.white.bgRed("\nWords in your sentence:"));
console.log(chalk.bold.white.bgBlueBright(words.join(", ")));

// Print the word count of the sentence to the console with chalk styling
console.log(chalk.bold.white.bgMagentaBright(`\nYour sentence word count is: ${words.length}\n`));
