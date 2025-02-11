// // // // //1-Arrow Function 
// // // // function addNumber(x,y){
// // // //     return x+y;
// // // // }
// // // // console.log(addNumber(5,6))
// // // // // the new declaration 
// // // // //🥷 how to declare it ? 
// // // // const addNumber2 =(a,b)=>a+b;
// // // // console.log(addNumber2(9,5))

// // // // // make a square function 
// // // // const square = x=>x*x
// // // // console.log(square(5))

// // // // // 2-Concatinating in ES6
// // // // //In Vanilla js
// // // // const first = "Hello";
// // // // const second = "World !!!";
// // // // const number =6
// // // // const message = first + " "+ second ;
// // // // console.log(message)
// // // // // es6 
// // // // const message1=`This is the new way to concatinate in es${number}  ${first} ${second}`
// // // // console.log(message1)

// // // // //Spread Operator 
// // //  const array =[1,2,3]

// // // const array3 =[4,5,6]


// // // console.log(array3)


// // // const array4=[...array,...array3]
// // // console.log(array4)

// // // // //  spread witrh object
// // // // const obj2={a:54215,b:2,c:3,d:4}
// // // // const obj1={a:1,b:2,c:3}

// // // // const objT={...obj1,obj2}
// // // // const objT1={...obj2,...obj1}
// // // // console.log(objT)
// // // // console.log(objT1)


// // // // destructuring in es6
// // // //🥷in js vanilla
// // // const person ={}
// // // // var name = person.name;
// // // // var age = person.age;

// // // //🥷 in es6 
// // // const {name,age=20}=person

// // // console.log(age)
// // // console.log(name)

// // //🥷Array example 


// // //🥷 skip an element in the array 
// // // console.log(first)
// // // // console.log([first],)
// // // // console.log(second)
// // // console.log(third)

// // //🥷get nested object 
// // const getCity=({adress:{city}})=>city

// // const informations ={name:"Alien",
// //     adress:{
// //         zipCode:90,
// //         city:"Mars"
// //     }
// // }


// // console.log(getCity(informations))
// // const {find,adress,name}=informations
// // console.log(name)


// // // const array = [10,20,30,40]
// // // // const [first,second,third]=array
// // // const [first,third]=array


// // const getLocation=()=>[244,66416]
// // const [first1,lat]=getLocation() // [244,66416]
// // console.log(first1)


// const person = {
//     name: "John",
//     address: {
//         city: "New York",
//         zip: "10001"
//     }
// };
// const { name, address: { city, zip } } = person;
// console.log(name);  // John
// console.log(city);  // New York
// console.log(zip);   // 10001

// //🥷 ternary  : a way to make condition 

// const age = 21 

// // if(age<18){
// //     console.log("You are not allowed to Party !!")
// // } else {
// //     console.log("Welcome to Alien Party !! ")
// // }
// //🥷 Es6 ternary 
// // condition ? if yes do : else do 
// const loading = false;

// const message=age <18 ? "You are not allowed to Party !!":"Welcome to Alien Party !! "
// console.log(message)

//🥷Destructring with array of function 
let firstName="Alien"
const name=[
 ()=>{
    console.log(firstName);
    return firstName
 },
 (newName)=>{
  
    //🥷we will set the new value to our firstName
    firstName=newName
    return firstName
 }
]

const [getter,setter]=name

//🥷 lets get and show our first name 
getter()
//🥷lets' set or change the value of our firstName
setter("Bali")
//🥷how to check if the value has changes 
getter()

//🥷in react we will use this a lot  : const [getter,setter]=useState()
// // // //1-Arrow Function 
// // // function addNumber(x,y){
// // //     return x+y;
// // // }
// // // console.log(addNumber(5,6))
// // // // the new declaration 
// // // //🥷 how to declare it ? 
// // // const addNumber2 =(a,b)=>a+b;
// // // console.log(addNumber2(9,5))

// // // // make a square function 
// // // const square = x=>x*x
// // // console.log(square(5))

// // // // 2-Concatinating in ES6
// // // //In Vanilla js
// // // const first = "Hello";
// // // const second = "World !!!";
// // // const number =6
// // // const message = first + " "+ second ;
// // // console.log(message)
// // // // es6 
// // // const message1=`This is the new way to concatinate in es${number}  ${first} ${second}`
// // // console.log(message1)

// // // //Spread Operator 
// //  const array =[1,2,3]

// // const array3 =[4,5,6]


// // console.log(array3)


// // const array4=[...array,...array3]
// // console.log(array4)

// // // //  spread witrh object
// // // const obj2={a:54215,b:2,c:3,d:4}
// // // const obj1={a:1,b:2,c:3}

// // // const objT={...obj1,obj2}
// // // const objT1={...obj2,...obj1}
// // // console.log(objT)
// // // console.log(objT1)


// // // destructuring in es6
// // //🥷in js vanilla
// // const person ={}
// // // var name = person.name;
// // // var age = person.age;

// // //🥷 in es6 
// // const {name,age=20}=person

// // console.log(age)
// // console.log(name)

// //🥷Array example 


// //🥷 skip an element in the array 
// // console.log(first)
// // // console.log([first],)
// // // console.log(second)
// // console.log(third)

// //🥷get nested object 
// const getCity=({adress:{city}})=>city

// const informations ={name:"Alien",
//     adress:{
//         zipCode:90,
//         city:"Mars"
//     }
// }


// console.log(getCity(informations))
// const {find,adress,name}=informations
// console.log(name)


// // const array = [10,20,30,40]
// // // const [first,second,third]=array
// // const [first,third]=array


// const getLocation=()=>[244,66416]
// const [first1,lat]=getLocation() // [244,66416]
// console.log(first1)


const person = {
    name: "John",
    address: {
        city: "New York",
        zip: "10001"
    }
};
const { test, address: { city, zip } } = person;
console.log(test);  // John
console.log(city);  // New York
console.log(zip);   // 10001

//🥷 ternary  : a way to make condition 

const age = 21 

// if(age<18){
//     console.log("You are not allowed to Party !!")
// } else {
//     console.log("Welcome to Alien Party !! ")
// }
//🥷 Es6 ternary 
// condition ? if yes do : else do 
const loading = false;

const message=age <18 ? "You are not allowed to Party !!":"Welcome to Alien Party !! "
console.log(message)
