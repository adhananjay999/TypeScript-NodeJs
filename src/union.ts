enum ResultConversion {As_Number="as-number",As_Text="as-text"}

//Alias
type Combinable=number|string;
type ConversionDescriptor=ResultConversion.As_Number|ResultConversion.As_Text;

//union type and literal type
function combine(
    input1:Combinable,
    input2:Combinable,
    resultConversion:ConversionDescriptor,
    ){
    let result;
    // result= input1+input2;//!!!Error Operator '+' cannot be applied to types 'string | number' and 'string | number'.ts(2365)
    if(typeof input1=="number"&&typeof input2=="number" ||resultConversion==ResultConversion.As_Number){
        result= +input1 + +input2;
    }
    else{
        result=input1.toString()+input2.toString();
    }
    return result;
}

const combinedAges=combine(30,26,ResultConversion.As_Number);
console.log(combinedAges);

const combinedName=combine("Dhananjay ","Adhao",ResultConversion.As_Text);
console.log(combinedName);