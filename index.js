// index.js
function distanceFromHqInBlocks(someValue) {
  const hqLocation = 42; // Headquarters is at block 42
  return Math.abs(someValue - hqLocation); // Calculate the absolute distance
}
// function distanceTravelledInFeet
function distanceFromHqInFeet(someValue) {
  const blocks = distanceFromHqInBlocks(someValue);
  const feetPerBlock = 264;
  return blocks * feetPerBlock;              
}
function distanceTravelledInFeet(start, destination) {
const blocksTravel = Math.abs(start - destination);
const feetPerBlock = 264;
return blocksTravel * feetPerBlock;

}
//function calcu;atesFarePrice(start, destination)
function  calculatesFarePrice(start, destination){
  const feet = distanceTravelledInFeet(start, destination);
  if (feet <= 400){
  return 0;}
  else if (feet > 400 && feet <= 2000){
    return (feet - 400) * 0.02;
  }
  else if (feet > 2000 && feet <= 2500){
    return 25;
  }
  else{
    return "cannot travel that far";
  }
}

