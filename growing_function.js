function printZeroPaddedWithLabel(number, label) {
let numberString = String(number);
while (numberString.length < ) {
numberString = "0" + numberString;
}
console.log(`${numberString} ${label}`);
}
function printFarmInventory(cows, chickens, pigs) {
printZeroPaddedWithLabel(cows, "Cows");
printZeroPaddedWithLabel(chickens, "Chickens");
printZeroPaddedWithLabel(pigs, "Pigs");
}
printFarmInventory(7, 11, 3);
