const inputValue = document.getElementById("input")
const convertBtn = document.getElementById("convert-btn")
const lentghOutput = document.getElementById("length-output")
const volumeOutput = document.getElementById("volume-output")
const massOutput = document.getElementById("mass-output")
let inputNum
let myConversions = [] // to store our conversions in local storage
const conversionsFromLocalStorage = JSON.parse( localStorage.getItem("myConversions") ) // gets conversions from local storage and makes it an array

if (conversionsFromLocalStorage) { // checks the localStorage if there is an element or not and renders them into the page
    myConversions = conversionsFromLocalStorage // gets the items from local storage and store them inside of array
    let latestConversion = myConversions[myConversions.length - 1] // gets the latest conversion from the local storage
    convert(latestConversion) //converts the latest conversion and renders it 
}


convertBtn.addEventListener("click", function(){ // when clicked calls the function and gets the input as a inputNum
    getNum(inputValue), convert(inputNum)
    myConversions.push(inputValue.value) // pushes every input to the array
    inputValue.value = ""
    localStorage.setItem("myConversions", JSON.stringify(myConversions) ) // stores elements as myConversions and its values
    
})
    
function getNum(num) { // gets the input as a number and checks whether integer or string
    let input = parseFloat(num.value) // converts the input an integer
    if(!isNaN(input)){ // if input is not a NAN 
        inputNum = input // stores the input to the inputNum to work with in other functions.
    } else {
        alert("Please enter only numbers.") // gives an alert when user inputs non-integer elements
}}
 


function convert(value) { //conversion
    
    lentghOutput.innerHTML = `${value} meters = ${(value * 3.281).toFixed(3)} feet | ${value} feet ${(value / 3.281).toFixed(3)} meters` // writes the conversions as a output
        
    volumeOutput.innerHTML = `${value} liters = ${(value * 0.264).toFixed(3)} gallons | ${value} gallons = ${(value / 0.264).toFixed(3)} liters` // writes the conversions as a output
        
    massOutput.innerHTML = `${value} kilograms = ${(value * 2.204).toFixed(3)} pounds | ${value} pounds = ${(value / 2.204).toFixed(3)} kilograms` // writes the conversions as a output
    
}
