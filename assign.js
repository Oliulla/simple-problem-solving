// Problem 5: isBestFriend
// Check 2 friend either best friend or not
// { name: "abul", friend: "babul" },
// { name: "babul", friend: "abul" }

// const firstPerson = { name: "dabul", friend: "kabul" };
// const secondPerson = { name: "kabul", friend: "sabul" };

const firstPerson = { name: "abul", friend: "babul" };
const secondPerson = { name: "da", friend: "abul" };
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
console.log(isBestFriend('firstPerson, secondPerson'));












// Problem 4: publicBusFare
// Each reserved Bus contain max ---> 50
// Each Microbus conatain max ---> 11
// For local bus, each person have to pay 250 taka
// function publicBusFare(person) {
//     if ((person < 50) && (person % 11 === 0)) {
//         return 0;

//     } else if (((person > 50) && ((person-50) % 11 === 0)) || (person % 50 === 0)) {
//         return 0;

//     } else  {
//         const restPerson = person % 50;
//         const payTaka = (restPerson % 11) * 250;
//         return payTaka;
//     }
// }
// console.log(publicBusFare(50));









// // Problem 3: oilPrice
// // Count three types of oil price
// /** প্রতি লিটার ডিজেলের এর দাম – 114 টাকা
// প্রতি লিটার পেট্রোল এর দাম – 130 টাকা
// প্রতি লিটার অকটেনের এর দাম – 135 টাকা

// এখন সে যদি বিভিন্ন লিটারের ডিজেল,পেট্রোল,
// অকটেনের অর্ডার দেয় তাহলে টোটাল কত টাকা 
// খরচ হবে হলো সেই সংখ্যা রিটার্ন করতে হবে। **/
// function oilPrice(diesel, petrol, octane) {

//     // Error handling
//     const checkDataTypeDiesel = typeof diesel;
//     const checkDataTypePetrol = typeof petrol;
//     const checkDataTypeOctane = typeof octane;

//     if (diesel < 0 || petrol < 0 || octane < 0) {
//         return `Please, enter valid input. Ex: 1, 1, 1`;

//     } else if ((checkDataTypeDiesel !== 'number') || (checkDataTypePetrol !== 'number') || (checkDataTypeOctane !== 'number')){
//         return `Please, enter valid input. Ex: 1, 1, 1`;
//     }
//     //else if ((checkDataTypeDiesel !== 'number') && (checkDataTypePetrol !== 'number') && (checkDataTypeOctane !== 'number')) {
//     //     return `Please, enter valid input. Ex: 1, 1, 1`;

//     // } else if ((checkDataTypeDiesel === 'number') && ((checkDataTypePetrol !== 'number') || (checkDataTypeOctane !== 'number'))) {
//     //     return `Please, enter valid input. Ex: 1, 1, 1`;

//     // } else if ((checkDataTypeDiesel !== 'number') && ((checkDataTypePetrol === 'number') || (checkDataTypeOctane === 'number'))) {
//     //     return `Please, enter valid input. Ex: 1, 1, 1`;

//     //} 
//     else {
//         const totalPrice = (diesel * 114) + (petrol * 130) + (octane * 135);
//         return totalPrice;
//     }
// }
// // console.log(oilPrice(7, 3, "-9"))





// function isJavascriptFile(file) {

//     const fileLowerCase = file.toLowerCase()
//     console.log(fileLowerCase)
//     if (typeof(fileLowerCase) !== 'string') {
//         return `Please! input valid data`
//     } else {
//         if (fileLowerCase.endsWith('.js') === true){
//             return true;
//         } else {
//             return false;
//         }
//     }
// }
// console.log(isJavascriptFile('INDEX.JS'))
