// Problem 1: Convert radian to degree
// Formula: degree = (180 / Math.PI) * radian
// Both radian and degree could be negative

function radianToDegree(radian) {
    // Error handling
    if (typeof(radian) !== 'number') {
        return "Please, enter a valid data. Example: 11";

    } else {
        const degree = (180 / Math.PI) * radian;
        const decimal = degree.toFixed(2);
        return parseFloat(decimal)
    }
}





// Problem 2: isJavaScriptFile
// Check user file type either JavaScript or not

function isJavaScriptFile(file) {
    // Error handling
    if (typeof(file) !== 'string') {
        return "Please, enter a valid data. Example: 'index.js'"  

    } else {
        const fileLowerCase = file.toLowerCase()
        if (fileLowerCase.includes('.') === false) {
            return "Please, enter a file name. Example: 'index.js'";

        } else if (fileLowerCase.endsWith('.js') === true){
            return true;

        } else {
            return false;
        }
    }
}






// Problem 3: oilPrice
// Count three types of oil price

function oilPrice(diesel, petrol, octane) {
    // Error handling
    if (diesel < 0 || petrol < 0 || octane < 0) {
        return "Please, enter positive number. Example: 1, 1, 1";

    } else if ((typeof(diesel) !== 'number') || (typeof(petrol) !== 'number') || (typeof(octane) !== 'number')){
        return "Please, enter a valid input. Example: 1, 1, 1";

    } else {
        const totalPrice = (diesel * 114) + (petrol * 130) + (octane * 135);
        return totalPrice;
    }
}





// Problem 4: publicBusFare
// Count local bus person cost for picnic

function publicBusFare(person) {

    // Handling error
    if ((typeof(person) !== 'number') || (person < 0)) {
        return "Please, enter a valid data. Example: 111";

    } else {
        if ((person < 50) && (person % 11 === 0)) {
            return 0;
    
        } else if (((person > 50) && ((person - 50) % 11 === 0)) || (person % 50 === 0)) {
            return 0;
    
        } else {
            const restPerson = person % 50;
            const payTaka = (restPerson % 11) * 250;
            return payTaka;
        }
    }
}






// Problem 5: isBestFriend
// Check 2 friend either best friend or not

function isBestFriend(firstPerson, secondPerson) {

    if ((typeof(firstPerson) !== 'object') || (typeof(secondPerson) !== 'object')) {
        return "Please, enter valid value."

    } else if ((typeof(firstPerson.name) !== 'string') || (typeof(secondPerson.name) !== 'string') || (typeof(firstPerson.friend) !== 'string') || (typeof(secondPerson.friend) !== 'string')) {
        return "Please, enter valid value";

    } else {
        if ((firstPerson.name.toLowerCase() === secondPerson.friend.toLowerCase()) && (firstPerson.friend.toLowerCase() === secondPerson.name.toLowerCase())){
            return true;
    
        } else {
            return false;
        }
    }
}
const p1 = {name: 9696, friend: 'kabul'};
const p2 = {name: 45, friend: 'abul'};
console.log(isBestFriend(p1, p2));