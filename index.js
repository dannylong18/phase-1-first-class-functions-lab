const drivers = ["Antonia", "Nuru", "Amari", "Mo"]
const returnFirstTwoDrivers = function () {
  return drivers.slice(0,2);
}
console.log(returnFirstTwoDrivers(drivers))
  
const returnLastTwoDrivers = function () {
    return drivers.slice (2,4); 
}
console.log (returnLastTwoDrivers(drivers))

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier (int) {
    return function fareMultiplier (fare) {
         return (fare * int)
   }    
 }
 createFareMultiplier(5)(5)

 const fareDoubler = createFareMultiplier(2)

 const fareTripler = createFareMultiplier(3)

 function selectDifferentDrivers (arrayOfDrivers, fx) {
    return fx (arrayOfDrivers)
 }
 selectDifferentDrivers(drivers, returnFirstTwoDrivers)