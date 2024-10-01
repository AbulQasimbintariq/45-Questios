// **Question 31 comparision operator use to check arry length empty**
var Electric = [];
if (Electric.length === 0) {
    console.log("we need items");
}
// **Question 33 checking whether we have something already or it is new one**
var equipment = ["printer", "mouse", "tom", "scaner"];
var New_equipment = ["Keyboard", "mouse", "tom", "note detector"];
New_equipment.forEach(function (New_one_equipment) {
    if (equipment.some(function (equipment_one) { return equipment_one === New_one_equipment; })) {
        console.log("".concat(New_one_equipment, " is already"));
    }
    else {
        console.log("".concat(New_one_equipment, " is taken"));
    }
});
// **Question 34  say same thing for each element of array**
for (var i = 0; i < equipment.length; i++) {
    console.log("I have ", equipment[i]);
}
equipment.forEach(function (equipmen) {
    console.log("i do not have ".concat(equipmen));
});
// **Question 35 same for each element of array**
for (var _i = 0, equipment_1 = equipment; _i < equipment_1.length; _i++) {
    var equip = equipment_1[_i];
    console.log("".concat(equip, " is made by china company"));
}
var Med_physial = {
    name: "Qasim",
    nick: "Bhalli",
    age: 24
};
var about = function (Med_physial) {
    return "Anout; ".concat(Med_physial.nick, " , ").concat(Med_physial.age);
};
console.log(about(Med_physial));
console.log("Name and Age ", Med_physial);
console.log("Qasim is of ".concat(Med_physial.age, " years old."));
// another method
function med_phy(Name, Age) {
    console.log("Name and Age = ".concat(Name, ";").concat(Age));
}
med_phy("Anas", 22); //call
// **Question 37  describe 2 or more diferent things at a time && use of interface**
function intro(NAme, Nick, AGe) {
    console.log(NAme, Nick, AGe);
}
console.log("qasim", "bhalli", 24);
console.log("AbuBakar", "Mani", 14);
var Visit = {
    City: "Sialkot",
    city: "karachi"
};
var Province = function (Visit) {
    return "".concat(Visit.City, " is in Panjab");
};
var province = function (Visit) {
    return "".concat(Visit.city, " is in Sindh");
};
console.log(province(Visit));
console.log(Province(Visit));
// another method
function Locate(c1, c2) {
    console.log("".concat(c1, " is in ").concat(c2, "."));
}
Locate("Dehli", "India");
Locate("Islambad", "Pakistan");
// **Question 39 describe 2 or more diferent things at a time && use of interface**
function nature(thing, form) {
    console.log("".concat(thing, ";").concat(form));
}
nature("metel", "solid");
nature("cotton", "soft");
// **Question 40 describe 2 or more diferent things at a time && use of interface**
// some time we wanna few thimgs from parametors
function books(title, Author, page) {
    var book = { title: title, Author: Author };
    if (page) {
        book["page"] = page;
    }
    return book;
}
console.log(books("Sanam", "Qasim", 662));
console.log(books("Irshad", "anees", 212));
// **Question 41  print each element through function**
// making a arry which is parametor of function
var doost = ["akbar", "hassan", "haider"];
function doost_name(doost) {
    doost.forEach(function (doos) {
        console.log(doos);
    });
}
doost_name(doost);
// also have same result through simple print
doost.forEach(function (doos) {
    console.log(doos);
});
console.log(doost.sort()); /// a seprate print
// **Question 42 print each element through function**
// making a arry which is parametor of function
function doost_Name(doost) {
    for (var i = 0; i < doost.length; i++) {
        doost[i] = doost[i] + " is my favorit.";
    }
}
doost_Name(doost); // it is for prnt
doost_name(doost); //// it is for prnt
// **Question 43  siple function of printig each arry element and give more information about each element.**
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
function make_geat(magicians) {
    return magicians.map(function (name) { return "the graet ".concat(name); });
}
var magician_name = ['alis', 'david', 'charis'];
var copy_magician_name = magician_name.slice();
var copy_great_magician = make_geat(copy_magician_name);
show_magicians(magician_name);
show_magicians(copy_great_magician);
// **Question 44  a function that can be used to made of  ANY thing// ...array is used to represent all elemenrs of array**
function manufacture() {
    var chair = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        chair[_i] = arguments[_i];
    }
    console.log("Chair is made of ".concat(chair.join(','), "."));
}
manufacture("nails", "wood", "polish");
manufacture("plastc", "foam");
// **Question 45 we make a function in which we can provide more information about elemment of aarry in different types**
function mine(nam, ag) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var me = { nam: nam, ag: ag };
    options.forEach(function (_a) {
        var key = _a[0], value = _a[1];
        return me[key] = value;
    });
    return me;
}
console.log(mine("Qasim", 55, ["height", "5.6"], ["chest", "32"]));
