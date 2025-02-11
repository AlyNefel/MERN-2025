//🥷 we will simulate the example of ordering a pizza with callback
const takeOrder=(order,callback)=>{
    //🥷lets console log the waiter taking the order
    console.log(`Waiter: taking order for ${order}`)
    setTimeout(()=>{
        //🥷the chef simulation 
        console.log(`Chef :${order} is ready !! `)
        callback(order)
    },3000) // simulation of waiting time to prepare the order
}

//🥷let'declare our call back 
const deliverFood=(order)=>console.log(`Waiter : Serving ${order} to the customer`)

//🥷let's invoke our main function
// takeOrder("Pizza",deliverFood)

//🥷 lets see how to change value inside an array without modifing the original


let fruits=["apple","dragon","banana"]
let numbers = [1,5,6,8,36]
let process=(array,callback)=>{
    let newArray =[...fruits]
    for(let i=0;i<array.length;i++){
        newArray[i]=callback(array[i])
    }
    return newArray
}
let capitalize=(item)=>{
    return item.toUpperCase()
}

//🥷let's invoque our main function
//console.log(process(fruits,capitalize))
 //🥷 console.log("original array",fruits)

//🥷 let's use .map
let newFruitsArray=fruits.map(item=> item.toUpperCase())
let newNumber=numbers.map(number=>number*number)

console.log(newFruitsArray)
console.log(newNumber)
console.log(fruits)

//🥷filter
let evenNumbers=numbers.filter(number=>number%2===0)
console.log(evenNumbers)
console.log(numbers)
//🥷 return type of .map and .filter is a new array 

//🥷 class 
class Car{
    constructor(name,lastName){
        this.name=name
        this.lastName=lastName
    }
    infos(){
        return `this is :  ${this.name}, ${this.lastName}`
    }
}

//🥷instance 
const firstCar=new Car("BMW","Bali")
console.log(firstCar.infos())