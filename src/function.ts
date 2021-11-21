// const button=document.querySelector("button")!;
// const input1=document.getElementById("num1")! as HTMLInputElement;
// const input2=document.getElementById("num2")! as HTMLInputElement;

function add(num1:number,num2:number):number{
    return num1 + num2;
}

// button.addEventListener("click", function(){
//     console.log(add(+input1.value, +input2.value));
// });


//funtion return| void
function printUndefinedResult(num:number):undefined{
    console.log(`PrintUndefinedResult ${num}`);
    return;
}
function printVoidResult(num:number):void{
    console.log(`PrintVoidResult ${num}`);
}
printUndefinedResult(add(5,6));
printVoidResult(add(5,10));


// let combineValues:Function;
// combineValues=add;
// combineValues=printVoidResult;  //Expected 1 arguments, but got 2.ts(2554)

let combineValues:(a:number,b:number)=>number;
combineValues=add;
// combineValues=printVoidResult;  //!!!Error

// combineValues=5;
console.log(combineValues(5,6));


//function with callback
function addAndHanle(n1:number,n2:number,callBack:(num:number)=>void) {
    const result=n1+n2;
    callBack(result);
}

addAndHanle(5,9,(result)=>{
    console.log(result);
});