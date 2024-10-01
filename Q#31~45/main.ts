// **Question 31 comparision operator use to check arry length empty**

let Electric:string[]=[]
if(Electric.length===0){
    console.log("we need items")
}

// **Question 33 checking whether we have something already or it is new one**

let equipment:string[]=["printer","mouse","tom","scaner"]
let New_equipment:string[]=["Keyboard","mouse","tom","note detector"]
New_equipment.forEach(New_one_equipment=>{
    if(equipment.some(equipment_one=>equipment_one===New_one_equipment)){
        console.log(`${New_one_equipment} is already`)
    }
     else{
        console.log(`${New_one_equipment} is taken`)
     }
})


// **Question 34  say same thing for each element of array**

for(let i=0;i<equipment.length;i++){
    console.log("I have ",equipment[i] )
}
equipment.forEach(equipmen=>{
    console.log(`i do not have ${equipmen}`)
})


// **Question 35 same for each element of array**

for(let equip of equipment){
    console.log(`${equip} is made by china company`)
}


// **Question 36 describe 2 diferent things at a time && use of interface**

interface Med{
    name:string
    nick:string
    age:number
}
let Med_physial:Med={
    name:"Qasim",
    nick:"Bhalli",
    age : 24
}
const about=(Med_physial:Med)=>{
    return `Anout; ${Med_physial.nick} , ${Med_physial.age}`
}
console.log(about(Med_physial))
console.log("Name and Age " ,Med_physial)
console.log(`Qasim is of ${Med_physial.age} years old.`)
// another method
function med_phy(Name:string,Age:number){          // assign
    console.log(`Name and Age = ${Name};${Age}`)
}
med_phy("Anas",22)          //call

// **Question 37  describe 2 or more diferent things at a time && use of interface**

function intro(NAme:string,Nick:string,AGe:number){
 console.log(NAme,Nick,AGe)
}
console.log("qasim","bhalli",24)
console.log("AbuBakar","Mani",14)

// **Question 38 describe 2 or more diferent things at a time && use of interface**

interface location{
    City:string
    city:string
}
let Visit:location={
    City:"Sialkot",
    city:"karachi"
}
const Province=(Visit:location)=>{
    return `${Visit.City} is in Panjab`
}
const province=(Visit:location)=>{
    return`${Visit.city} is in Sindh`
}
console.log(province(Visit))
console.log(Province(Visit))

// another method
function Locate(c1:string,c2:string) {
    console.log(`${c1} is in ${c2}.`)
}
Locate("Dehli","India")
Locate("Islambad","Pakistan")

// **Question 39 describe 2 or more diferent things at a time && use of interface**

function nature(thing:string,form:string){
    console.log(`${thing};${form}`)
}
nature("metel","solid")
nature("cotton","soft")


// **Question 40 describe 2 or more diferent things at a time && use of interface**

 // some time we wanna few thimgs from parametors
function books(title:string,Author:string,page:number){
    let book={title,Author}
    if(page){
        book["page"]=page;
    }
    return book;
}
console.log(books("Sanam","Qasim",662))
console.log(books("Irshad","anees",212))


// **Question 41  print each element through function**

 // making a arry which is parametor of function
let doost:string[]=["akbar","hassan","haider"]  
function doost_name(doost:string[]){    /// asssign
    doost.forEach(doos=>{                /// for each element print
        console.log(doos)
    }
)}
doost_name(doost)

// also have same result through simple print
doost.forEach(doos=>{                /// for each element print without function
    console.log(doos)
})
console.log(doost.sort())          /// a seprate print

// **Question 42 print each element through function**

 // making a arry which is parametor of function
 function doost_Name(doost:string[]){
for(let i=0;i<doost.length;i++){
    doost[i]=doost[i]+ " is my favorit."
}}
doost_Name(doost)   // it is for prnt
doost_name(doost)   //// it is for prnt



// **Question 43  siple function of printig each arry element and give more information about each element.**

function show_magicians (magicians : string[]){
    magicians.forEach(name => console.log(name));       
}
function make_geat (magicians : string[]){
   return magicians.map(name => `the graet ${name}`);

}

let magician_name = ['alis','david','charis'];

let copy_magician_name = magician_name.slice();

let copy_great_magician = make_geat(copy_magician_name);

show_magicians(magician_name);
show_magicians(copy_great_magician) 


// **Question 44  a function that can be used to made of  ANY thing// ...array is used to represent all elemenrs of array**

function manufacture(...chair:string[]){
    console.log(`Chair is made of ${chair.join(',')}.`)
}
manufacture("nails","wood","polish")
manufacture("plastc","foam")

// **Question 45 we make a function in which we can provide more information about elemment of aarry in different types**

function mine(nam:string,ag:number,...options:[string,any][]){  /// ...option means many more things // asingn
    let me ={nam,ag};
    options.forEach(([key , value])=> me[key]=value)  
    return me                                       
}
console.log(mine("Qasim",55,["height","5.6"],["chest","32"]))
