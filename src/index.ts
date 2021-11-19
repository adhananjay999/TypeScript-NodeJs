//Example 1: Hello World
var message='Hello World';
console.log(message);

//Example 2 : Function
function sayHello(name: string): void {
  console.log('Welcome '+ name);
}
sayHello("John");

//Example 3: class and object
class Person{
    name: string;
    constructor(name: string) {
      this.name = name;
    }
}

let user = new Person("Ram");
sayHello(user.name)
//Example 4: function with return type
function greeter(personName: string):string {
    return "Hello " + personName;
}
console.log(greeter(user.name));


//Example 5 :
class Greeter{
    personName:string;
    constructor(personName:string){
        this.personName= personName;
    }
    sayHello():string{
        return `Hello ${this.personName}, How are You?`;
    }
}

let greet=new Greeter(user.name);
console.log(greet.sayHello());

//Example 6: Inheritance
class Animal {
    name: string;
    constructor(theName: string) {
      this.name = theName;
    }
    move(distanceInMeters: number = 0) {
      console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
  }
   
  class Snake extends Animal {
    constructor(name?: string) {
        if(name){
            super(name);
        }else{
            super("Sammy the Python");

        }
    }
    move(distanceInMeters = 5) {

      console.log("Slithering...");
      super.move(distanceInMeters);
    }
  }
   
  class Horse extends Animal {
    constructor(name?: string) {
        if(name){
            super(name);
        }else{
            super("Tommy the Palomino");

        }
    }
    move(distanceInMeters = 45) {
      console.log("Galloping...");
      super.move(distanceInMeters);
    }
  }
   

  let sammy = new Snake();
  let tommy: Animal = new Horse();
  sammy.move();
  tommy.move(34);

   let snake = new Snake("Johny the Black mamba");
   let horse: Animal = new Horse("Romy the Thoroughbred");
  snake.move(10);
  horse.move();