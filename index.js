const inputValue = document.getElementById("input")
const convertBtn = document.getElementById("convert-btn")
const lentghOutput = document.getElementById("length-output")
const volumeOutput = document.getElementById("volume-output")
const massOutput = document.getElementById("mass-output")
let inputNum

convertBtn.addEventListener("click", function(){ // when clicked calls the function and gets the input as a inputNum
    get(inputValue), convert(inputNum) 
})
    
function get(num) { // gets the input as a number and checks whether integer or string
    let input = parseInt(num.value) // converts the input an integer
    if(!isNaN(input)){ // if input is not a NAN 
        inputNum = input 
    } else {
        alert("Please enter only numbers.")
}}



function convert(value) { //conversion
    let meterToFeet = value * 3.281
    let feetToMeter = value / 3.281
    
    lentghOutput.innerHTML = `${inputNum} meters = ${meterToFeet.toFixed(3)} feet | ${inputNum} feet ${feetToMeter.toFixed(3)} meters`
    
    let litersToGallons = value * 0.264
    let gallonsToLiters = value / 0.264
    
    volumeOutput.innerHTML = `${inputNum} liters = ${litersToGallons.toFixed(3)} gallons | ${inputNum} gallons = ${gallonsToLiters.toFixed(3)} liters`
    
    let kgToPounds = value * 2.204
    let poundsToKg = value / 2.204
    
    massOutput.innerHTML = `${inputNum} kilograms = ${kgToPounds.toFixed(3)} pounds | ${inputNum} pounds = ${poundsToKg.toFixed(3)} kilograms`
    
}