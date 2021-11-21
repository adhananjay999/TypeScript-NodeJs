//Object type
const person:object={
name:"Dhananjay",
age:23
};
console.log(person);
// console.log(person.name);//compile error Property 'name' does not exist on type 'object'.ts(2339)

const student:{
    name:string;
    age:number;
}={
    name:"John",
    age:24
    };
console.log(student.name);
