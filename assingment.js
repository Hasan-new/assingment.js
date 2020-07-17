// feetToMile
function feetToMile(feet){
    var mile = feet / 5280;
    return mile;
}
var result = feetToMile(5280);
console.log(result);
// This is complete.


// woodCalculator
function woodCalculatro(chair,  table, bed){
    var chairMeasure = chair * 1;
    var tableMeasure = table * 3;
    var bedMeasure = bed * 5;
    var totalMeasure = chairMeasure + tableMeasure + bedMeasure;
    return totalMeasure;
}
var result = woodCalculatro(1, 3, 5);
console.log(result);
// This is complete too.


// brickCalculator
function brickCalculator(params) {
    
}
// brickCalculator



function tinyFriend(name) {
    let smallerName = name [0];
    for (let i = 0; i < name.length; i++) {
        let currentName = name[i];
        if(currentName.length < smallerName.length) {
            smallerName = currentName;
        }
    }
    return smallerName;
}

let name =  ['abdullah', 'fahad', 'onu', 'Jawad', 'tabassum']

console.log(tinyFriend(name));


