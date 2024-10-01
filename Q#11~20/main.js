// **Question 11 array making**
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var friends = ["Saif", "kaleem", "haider"];
var dishes = ["Plaao", "Biryani", "TIkka", 'Chest'];
for (var _i = 0, friends_1 = friends; _i < friends_1.length; _i++) {
    var Friends_list = friends_1[_i];
    console.log(Friends_list);
}
for (var _a = 0, dishes_1 = dishes; _a < dishes_1.length; _a++) {
    var Dishes = dishes_1[_a];
    console.log(Dishes);
}
// **Question 12 greeting to multiples poeple seperatly**
for (var _b = 0, friends_2 = friends; _b < friends_2.length; _b++) {
    var Friends_list = friends_2[_b];
    console.log("Hello ".concat(Friends_list, "; How are you, \n we will meet soon"));
}
// **Question 13 making array and print sepertaly**
var transports = ["Bikes", "Cars", "Buses", 'Trains'];
for (var _c = 0, transports_1 = transports; _c < transports_1.length; _c++) {
    var favrit_Trans = transports_1[_c];
    console.log("I like to travel in ".concat(favrit_Trans));
}
// **Question 14 array and invitation seperatly**
var Guest = ["Akbar", "Danish", "Bilal"];
for (var _d = 0, Guest_1 = Guest; _d < Guest_1.length; _d++) {
    var guest_list = Guest_1[_d];
    console.log("Salam I would like to invite ".concat(guest_list, " at dinner."));
}
// **Question 15 changing list of array**
var new_guest = "Kabeer"; ///first tell new name 
Guest[1] = new_guest; // tell with whose we wanna chang new one 
for (var _e = 0, Guest_2 = Guest; _e < Guest_2.length; _e++) { ///just print the array
    var guest_list = Guest_2[_e];
    console.log("Salam Please come ".concat(guest_list, " at dinner"));
}
Guest.forEach(function (Guest) {
    console.log("Salam ".concat(Guest, " I wana meet you "));
});
// **Question 16 Add item in Array**
Guest.push("Zain"); // array.push to add new one
Guest.unshift("Haider"); ///// array.push to add new one same purpose
Guest.splice(Guest.length / 2, 0, "Anees"); //// array.push to add new one same purpose
Guest.forEach(function (Guest) {
    console.log("Salam ".concat(Guest, " I wana meet you "));
});
// **Question 17 how rcan reduce arry memeber**
console.log("UNfortunatly i have arrangment for two guest ");
while (Guest.length > 2) { // while and pop is used to give condition or limmit
    var Removedguest = Guest.pop();
    console.log("Sorry I can not invite ".concat(Removedguest, " ")); //tell removed elements of array
}
Guest.forEach(function (Guest) { console.log("Hi ".concat(Guest, " you are still invited")); });
Guest.splice(1, Guest.length); // tell how many elements we wanna print
console.log(Guest);
// **Question 18 Alphabetical Orders and reverse and ist orignal**
var Locations = ["Pakistan", "India", "England", "Russia", "Asteria"];
console.log("Orignal Array ", Locations);
console.log("Alphabetical order ", __spreadArray([], Locations, true).sort());
console.log("Orignal Array ", Locations);
console.log("Reverse order order ", __spreadArray([], Locations, true).sort().reverse());
console.log("Orignal Array  ".concat(Locations));
// another method
Locations.sort();
console.log("Alphabetical order  ;".concat(Locations));
Locations.reverse();
console.log("Revese Arry; ".concat(Locations, " "));
Locations.reverse();
console.log("Revese Arry; ".concat(Locations, " "));
// **Question 19 for number of array**
console.log("I am inviting  ".concat(Guest.length, " guys at dinner")); // only use word lenhgt with array name
// **Question 20 Making a array and print the list**
console.log("I wanna visit these Places ", Locations);
