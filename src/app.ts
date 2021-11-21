//Object type
const person:object={
name:"Dhananjay",
age:23,
};
console.log(person);
// console.log(person.name);//compile error Property 'name' does not exist on type 'object'.ts(2339)



//array type
let favouriteActivities:string[];
favouriteActivities=["Sports"];
console.log(favouriteActivities[0]);

//tuple type
let book:[number,string];
book=[150,"Type-Script"];
console.log(book);
// book[1]=10;// !!!Error Type 'number' is not assignable to type 'string'.ts(2322)

//enum type
enum Role {ADMIN,READ_ONLY,AUTHOR};

const student:{
    name:string;
    age:number;
    hobbies:string[];
    contact:[number,string];
    role:Role;
}={
    name:"John",
    age:24,
    hobbies:["Sports","Reading"],
    contact:[1234567890,"john@gmail.com"],
    role:Role.ADMIN
    };
console.log(student.name);
for(const hobby of student.hobbies){
    console.log(hobby);
    // console.log(hobby.map());//!!! Error Property 'map' does not exist on type 'string'.ts(2339)
}

if(student.role==Role.ADMIN){
    console.log("is admin");
}