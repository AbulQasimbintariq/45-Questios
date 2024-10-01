// **Question 21 information about any thing that include name and year Or Number and string**
var Personal = {
    namE: "Abul Qasim Bin Tariq",
    Bornplace: "Sialkot, Pakistan",
    Year: 2000
};
console.log("His name is ".concat(Personal.namE, " and born at ").concat(Personal.Bornplace, "  in ").concat(Personal.Year, " ."));
// **Question 22 out of array (undefined)**
var friende = ["Akbar", "Asghar", "Akhtar"];
console.log(friende[3]);
console.log(friende.length);
// **Question 23  comparision operator**
for (var _i = 0, friende_1 = friende; _i < friende_1.length; _i++) {
    var friend = friende_1[_i];
    console.log(friend == "Asghar");
}
// console.log(friend=="Ashraf"),
// console.log(friend=="Akhtar")
// for one variable
var frnd = "Saif";
console.log(frnd == "Anas");
console.log(frnd == "Saif");
// **Question 24 test in form of true and false ,,taking check of presence and absence**
console.log("Is 'Akbar' in friende list");
console.log("Akbar".toLowerCase() == "akbar");
console.log(10 > 9);
// **Question 25 an output is making to be giving a condition**
var homeland = "Pakistan";
if (homeland == "Pakistan") {
    console.log("I live in this country");
}
else
    (homeland !== "India");
{
    console.log("It is proving my homeland");
}
if (homeland == "Turkiya") {
    console.log("it is not my homeland");
}
homeland = "india";
if (homeland == "india") {
    console.log("i do not live in this country");
}
// **Question 26  an output is making to be giving a condition**
var color = "black";
color = "green";
if (color == "black") {
    console.log("5 points");
}
else
    (color == "green");
{
    console.log("10 points");
}
color = "red";
if (color == "green") {
    console.log("No Point");
}
else
    (color == "red");
{
    console.log("15 points");
}
// **Question 27  an output is making to be giving a condition**
var shape = "round";
if (shape == "squere") {
    console.log("5 points");
}
else if (shape == "arc") {
    console.log("10 points");
}
else if (shape == "round") {
    console.log("15 points");
}
shape = "circle";
if (shape == "rectanular") {
    console.log("0 points");
}
else if (shape == "arc") {
    console.log("10 points");
}
else if (shape == "circle") {
    console.log("15 points");
}
// **Question 28 an output is making to be giving a condition**
var marks = 75;
if (marks >= 90) {
    console.log("A+ Grade");
}
else if (marks >= 80) {
    console.log("A Grade");
}
else if (marks >= 70) {
    console.log('B Grade');
}
else if (marks >= 60) {
    console.log("C Grade");
}
else if (marks >= 50) {
    console.log("D Grade");
}
else if (marks >= 40) {
    console.log("E Grade");
}
else {
    console.log("Fail");
}
// **Question 29 an output is making to be giving a condition /////includes function is using in VS code**
var wood = ["Oak", "Beach", "Shisham"];
if (wood[1] == "Beach") {
    console.log("I have worked on this wood.");
}
// **Question 30 foreach function use and conditional answer**
wood.forEach(function (wood) {
    if (wood === "Oak") {
        console.log("I have not worked on this wood.");
    }
    else {
        console.log("I have well knowledge about this wood.");
    }
});
