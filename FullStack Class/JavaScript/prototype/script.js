// const arr = [1,2,3,4,5];
// console.log(arr);

// let str = "hello";
// console.log(str);

// function createuser(name, age)
// {
//     this.name = name;
//     this.age = age;
// }

// createuser.prototype.printName = function(){
//     return `hi my name is ${this.name} and my age is ${this.age}`
// }

// let person1 = new createuser('lakshay', 20);
// console.log(person1.printName());


// //creating a copy of a map method using protype

// Array.prototype.returnAllElements = function(){
//     for(let i = 0;i<this.length;i++)
//     {
//         console.log(this[i]);
        
//     }
// }

//arr.returnAllElements();


//prototype inheritance

const person1 = {
    name : "Shivam",
    age : "21",
    intro : function(){
        return  `Hi i am ${this.name}`
    }
}

const person2 = {
    name: "tanuj",
    age: "21",
    intro : function(){
        return  `hi i am ${this.name}`
    }
}

Object.setPrototypeOf(person2, person1);

console.log(person1.intro());
console.log(person2.intro());


Object.prototype.returnActualLength = function(){
    let result = "";
    for(let i = 0;i<this.length;i++)
    {
        if(this[i] !== " ")
        {
            result += this[i];
        }
        else
        {
            continue;
        }
    }
    return result.length;
}

console.log(person1.name.returnActualLength());


