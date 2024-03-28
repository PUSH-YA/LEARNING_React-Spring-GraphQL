// needs to be done first
console.log("Hello World!")

// variables :======================================================
// simple variable declare
var name = "Ryan";

// create simple alerts
alert(name)

// var values can change but not const
const names = "Zen & Ryan";

// can also use let, limits the scope
if(true){
    var name1 = "Ryan"
    let name2 = "Zen"
    // name is global but name1 is in if scope
}

// get input in the browser
var input_name = prompt("Guess my name ...")
if (input_name == "Ryan"){
    alert("Correct!")
}else{
    alert("you know what, my name is " + input_name)
}

// also have something like an fstring in js
console.log(`current variables are ${names}, ${name}, ${input_name}`)

//functions :==============================================================
// Default parameters
function welcome(user="Mystery person", message = "good day"){
    console.log(`Hello ${user}, ${message}`)
}
welcome()

// lambda functions
let welcome_arrow = (user, message) => console.log(`Hello ${user}, ${message}`)
welcome_arrow('Mystery person', 'good day')

// throwing erros
let createBlog = (title, body) => {
    if (!title){ throw new Error('Give me your title!')}
    if (!body){ throw new Error('Give me your ...')}
    return `${title} - ${body}`
}
// createBlog() // gets the correct error
// createBlog('nice') // gets the correct error
console.log(createBlog('nice', 'day'))

// objects:============================================================
// `this` -- same in java, refers to window object outside
let nepal = {
    //property
    mountains: ['Everest', 'FishTail', 'Annapurna'],
    //method
    printWithDash: function(){
        
        // invoke in within 3 seconds
        //setTimeout(function(){
        // here `this` refers to the window cuz SetTimeOut running
        //   console.log(this.mountains.join("-"))  
        // }, 3000) 

        // use callback w/ arrow func instead cuz it inherits the context
        setTimeout(() => console.log(this.mountains.join("-")), 3000)
    }
}
console.log(nepal.mountains)
console.log(nepal.printWithDash())

// destructuring an object
let uniStudent = student => {
    console.log(student.name, '-',student.major)
}
uniStudent({name: 'Ryan', major: 'maths'})

//destructuring an array, nth elem
let [firstMountain] = ['Everest', 'FishTail', 'Annapurna']
let [, , thirdMountain] = ['Everest', 'FishTail', 'Annapurna']
console.log(firstMountain, thirdMountain)

// restructuring an object
// firstMountain and thirdMountain are keys
let mountainsList = {firstMountain, thirdMountain}
console.log(mountainsList)

// combining arrays and objects with spread operator `...`
japanMountains = ['Fuji']
console.log([...nepal.mountains, ...japanMountains])
console.log({...nepal, ...mountainsList})

// getting the rest of the arrays
var [firstMountain1, ...remaining] = nepal.mountains
console.log(remaining)

//class :===================================
// functions are just objects that inherit prototype obj
// add methods to a function using prototype
function Holiday(destination, days){
    this.destination = destination
    this.days = days
}
Holiday.prototype.info = function(){
    console.log(this.destination  + " | " + this.days + " days")
}
var nepal_func = new Holiday("Nepal", 30)
nepal_func.info()

// we can create a super class
class Holiday_class  {
    constructor(destination, days){
        this.destination = destination
        this.days = days
    }

    info(){
        console.log(this.destination  + " | " + this.days + " days")
    }
}
const trip = new Holiday_class('Kathmandu, Nepal', 30)
trip.info()

// sub class
class Expedition extends Holiday{
    constructor(destination, days, gear){
        super(destination, days)
        this.gear = gear
    }

    info(){
        super.info()
        console.log(`Bring your ${this.gear.join(', ')}`)
    }
}
const tripWithGear = new Expedition('Another Everest',30,['sunglasses', 'Flags', 'Camera'])
tripWithGear.info()