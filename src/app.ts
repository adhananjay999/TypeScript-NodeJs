const button=document.querySelector("button")!;
const input1=document.getElementById("num1")! as HTMLInputElement;
const input2=document.getElementById("num2")! as HTMLInputElement;
//Example of Typescript types: number,boolean,string
function add(num1:number,num2:number,showResult:boolean,phrse:string){
    const result=num1+num2;
    if(showResult){
        console.log(phrse+result);
    }else{
        return result;
    }
}
let number1:number;
number1=5;
const number2=2.8;
const printResult=true;
let resultPhrase='Result is: ';

// button.addEventListener("click", function(){
// console.log();
// });

add(number1,number2,printResult,resultPhrase);