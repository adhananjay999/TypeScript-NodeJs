let userType:unknown;
let userName:string;
userType=5;
userType="Max";

// userName=userType;//!!error
if(typeof userType=="string"){
    userName=userType;
}