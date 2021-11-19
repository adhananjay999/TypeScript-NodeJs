# Learning-NodeJs-TypeScript
Environment Setup
Installation of Node.js on Linux
Step 1: Open your terminal or press Ctrl + Alt + T.
Step 2: To install node.js use the following command:
sudo apt install nodejs
Step 3: Once installed, verify it by checking the installed version using the following command:
node -v or node –version
Note: It is recommended to install Node Package Manager(NPM) with Node.js. NPM is an open source library of Node.js packages.
To install NPM, use the following commands:
sudo apt install npm
npm -v or npm –version
Install the TypeScript compiler#
 Step 4:install TypeScript is through npm
npm install -g typescript
test your install by checking the version.
tsc --version
Accessing typescript compiler
tsc 




# Setup Visual Studio code
In order to manage huge codebase we need to create typescript project
Automate typescript compiler
To initialise typescript project
tsc --init

It will create a new tsconfig.json with:  default configuration 
tsconfig.json defines that current dir contains typescript project which might contain multiple .ts files.
You can learn more at https://aka.ms/tsconfig.json
To initialise node package manager
npm init -y
It will create a package. Json file
Replace script tag with
"scripts": {
   "start": "tsc && node ./dist"
 },

Add  below code to tsconfig.json
   "rootDir": "./src",                                  /* Specify the root folder within your source files. */

   "outDir": "./dist",                                   /* Specify an output folder for all emitted files. */

Add dist to gitIgnore
dist
To auto generate respective .js file execute command
 tsc  
It will  execute default index.ts from dir src and automatically generate a respective .js file into dir dist.
To show result execute
npm start



# Example
Example 1: Hello World!
 
hello.ts
 
// var message='Hello World';
// console.log(message);
 
function greeter(person: string) {
   return "hello " + person;
}
 
var user = "John";
console.log( greeter(user) );


hello.js
 
// var message='Hello World';
// console.log(message);
function greeter(person) {
   return "Hello " + person;
}
var user = "John";
console.log(greeter(user));



 
Executing javascript (.js) file use command
node hello.js
Output:
Hello John
Executing typescript (.ts) file use command
tsc hello.ts
Output:
Generate javascript file hello.js







#Notes
TypeScript - Type Annotations
We can specify the type using :Type after the name of the variable, parameter or property.
Example
var age: number = 32; // number variable
TypeScript - Variable
TypeScript follows the same rules as JavaScript for variable declarations. Variables can be declared using: var, let, and const.

var  :  global
let   :  block specific
