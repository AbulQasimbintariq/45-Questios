# 45 Questions
**Question 2**

let Name:string="Qasim Bhalli"
console.log(`Hello ${Name},would you like to learn about Ai.?`)

**Question 3**

let Case: string="hello Anas"
console.log("Uppercase:",Case.toUpperCase())
let CaSe: string="hello Anas"
console.log("LowerCase",Case.toLowerCase())
let CAse: string="hello Anas"
console.log("Titlecase:", CAse.replace(/\h/g,c=>c.toUpperCase())) 

**Question 4**

let famous_Author:string="Ilyas Qadri"
const Moto:string="I have to strive to reform myself and entire world"
console.log(`${famous_Author} once said ; ${Moto}`)

**Question 5**

let messege:string=`${famous_Author} once said ; i have to strive to reform muself and the entire world.`
console.log(messege)

**Question 6**

let Person:string="\t\n Tariq \t\n"
console.log(Person)
console.log(Person.trim())  //trim is usee to end stripping
// another Example
let Any_Statment:string="'Pakistan Zindabad'\n 'I love Pakistan'\t 'It is my homeland'"
console.log(Any_Statment)

**Question 7**

console.log("Add ;", 5+3)
console.log("Substraction ;", 10-2)
console.log("Multiply ;", 2*4)
console.log("Division ;", 16/2)

**Question 8**

console.log(5+3)
console.log(5+3)
console.log(5+3)
console.log(5+3)

**Question 9**

let Num:number=12
console.log(`My favourite number is ${Num}`)

**Question 10**

// Abul Qasim 14 April 2000
// Following is about myself
let Dish:string="Plaao"
console.log(`I like ${Dish} very much.`)

**Question 11 array making**

let friends =["Saif","kaleem","haider"]
let dishes=["Plaao","Biryani","TIkka",'Chest']
for(let Friends_list of friends){
    console.log(Friends_list)
}
for(let Dishes of dishes){
console.log(Dishes)
}

**Question 12 greeting to multiples poeple seperatly**

for (let Friends_list of friends){
    console.log(`Hello ${Friends_list}; How are you, \n we will meet soon`)
}

**Question 13 making array and print sepertaly**

let transports:string[]=["Bikes","Cars","Buses",'Trains']
for(let favrit_Trans of transports){
    console.log(`I like to travel in ${favrit_Trans}`)
}

**Question 14 array and invitation seperatly**

let Guest:string[]=["Akbar","Danish","Bilal"]
for (let guest_list of Guest){
    console.log(`Salam I would like to invite ${guest_list} at dinner.`)
}

**Question 15 changing list of array**

let new_guest="Kabeer"    ///first tell new name 
Guest[1]=new_guest;        // tell with whose we wanna chang new one 
for(let guest_list of Guest){                            ///just print the array
console.log(`Salam Please come ${guest_list} at dinner`)}
Guest.forEach(Guest=>{                                    // ForEach function use to primt every element
    console.log(`Salam ${Guest} I wana meet you `)
})


**Question 16 Add item in Array**

Guest.push("Zain")       // array.push to add new one
Guest.unshift("Haider")   ///// array.push to add new one same purpose
Guest.splice(Guest.length / 2,0,"Anees")    //// array.push to add new one same purpose
Guest.forEach(Guest=>{
    console.log(`Salam ${Guest} I wana meet you `)
})

**Question 17 how rcan reduce arry memeber**

console.log("UNfortunatly i have arrangment for two guest ")
while(Guest.length >2){    // while and pop is used to give condition or limmit
    let Removedguest=Guest.pop()
        console.log(`Sorry I can not invite ${Removedguest} `)   //tell removed elements of array
}
Guest.forEach(Guest=>
    {console.log(`Hi ${Guest} you are still invited`)}
)
Guest.splice(1,Guest.length)    // tell how many elements we wanna print
console.log(Guest)

**Question 18 Alphabetical Orders and reverse and ist orignal**

let Locations : string[]=["Pakistan","India","England","Russia","Asteria"]
console.log("Orignal Array " ,Locations)
console.log("Alphabetical order " ,[...Locations].sort() )
console.log(`Orignal Array `,Locations)
console.log("Reverse order order " ,[...Locations].sort().reverse() )
console.log(`Orignal Array  ${Locations}`) 
// another method
Locations.sort()
console.log(`Alphabetical order  ;${Locations}`)
Locations.reverse()
    console.log(`Revese Arry; ${Locations} `)
    Locations.reverse()
    console.log(`Revese Arry; ${Locations} `)

**Question 19 for number of array**

console.log(`I am inviting  ${Guest.length} guys at dinner`)   // only use word lenhgt with array name

**Question 20 Making a array and print the list**

console.log("I wanna visit these Places ", Locations)

**Question 21 information about any thing that include name and year Or Number and string**

let Personal:{namE:string; Bornplace:string;Year:number}={    //make variable of mulptiple types
    namE:"Abul Qasim Bin Tariq",
    Bornplace:"Sialkot, Pakistan",
    Year:2000
}
console.log(`His name is ${Personal.namE} and born at ${Personal.Bornplace}  in ${Personal.Year} .`)

**Question 22 out of array (undefined)**

let friende:string[]=["Akbar","Asghar","Akhtar"]
console.log(friende[3])
console.log(friende.length)

**Question 23  comparision operator**

for(let friend of friende )
console.log(friend=="Asghar")
// console.log(friend=="Ashraf"),
// console.log(friend=="Akhtar")
// for one variable
let frnd="Saif"
console.log(frnd=="Anas")
console.log(frnd=="Saif")

**Question 24 test in form of true and false ,,taking check of presence and absence**

console.log("Is 'Akbar' in friende list")
console.log("Akbar".toLowerCase()=="akbar")
console.log(10>9)

**Question 25 an output is making to be giving a condition**

let homeland="Pakistan"
if (homeland=="Pakistan"){
    console.log("I live in this country")
}
else(homeland!=="India")
{
    console.log("It is proving my homeland")
}
if (homeland=="Turkiya"){
    console.log("it is not my homeland")
}
homeland="india"
if (homeland=="india"){
    console.log("i do not live in this country")
}

**Question 26  an output is making to be giving a condition**

let color="black"
color="green"
if(color=="black"){
    console.log("5 points")
}
else(color=="green")
{console.log("10 points")
}
color="red"
if(color=="green"){
    console.log("No Point")
}
else(color=="red")
{
    console.log("15 points")
}


**Question 27  an output is making to be giving a condition**

let shape="round"
if(shape=="squere"){
    console.log("5 points")
}
else if (shape=="arc"){
    console.log("10 points")
}
else if (shape=="round"){
    console.log("15 points")
}
shape="circle"
if(shape=="rectanular"){
    console.log("0 points")
}
else if (shape=="arc"){
    console.log("10 points")
}
else if (shape=="circle"){
    console.log("15 points")
}


**Question 28 an output is making to be giving a condition**

let marks=75
if (marks>=90){
    console.log("A+ Grade")
}
else if(marks>=80){
    console.log("A Grade")
}
else if (marks>=70){
    console.log('B Grade')
}
else if (marks>=60){
    console.log("C Grade")
}
else if(marks>=50){
    console.log("D Grade")
}
else if(marks>=40){
    console.log("E Grade");
}
else {
    console.log("Fail");}



**Question 29 an output is making to be giving a condition /////includes function is using in VS code**

let wood=["Oak","Beach","Shisham"]
if(wood[1]=="Beach"){
    console.log("I have worked on this wood.")
}


**Question 30 foreach function use and conditional answer**

wood.forEach(wood=>{
    if (wood==="Oak"){
console.log("I have not worked on this wood.")
    }
    else{
        console.log("I have well knowledge about this wood.")
    }
})

**Question 31 comparision operator use to check arry length empty**

let Electric:string[]=[]
if(Electric.length===0){
    console.log("we need items")
}

**Question 33 checking whether we have something already or it is new one**

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


**Question 34  say same thing for each element of array**

for(let i=0;i<equipment.length;i++){
    console.log("I have ",equipment[i] )
}
equipment.forEach(equipmen=>{
    console.log(`i do not have ${equipmen}`)
})


**Question 35 same for each element of array**

for(let equip of equipment){
    console.log(`${equip} is made by china company`)
}


**Question 36 describe 2 diferent things at a time && use of interface**

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

**Question 37  describe 2 or more diferent things at a time && use of interface**

function intro(NAme:string,Nick:string,AGe:number){
 console.log(NAme,Nick,AGe)
}
console.log("qasim","bhalli",24)
console.log("AbuBakar","Mani",14)

**Question 38 describe 2 or more diferent things at a time && use of interface**

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

**Question 39 describe 2 or more diferent things at a time && use of interface**

function nature(thing:string,form:string){
    console.log(`${thing};${form}`)
}
nature("metel","solid")
nature("cotton","soft")


**Question 40 describe 2 or more diferent things at a time && use of interface**

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


**Question 41  print each element through function**

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

**Question 42 print each element through function**

 // making a arry which is parametor of function
 function doost_Name(doost:string[]){
for(let i=0;i<doost.length;i++){
    doost[i]=doost[i]+ " is my favorit."
}}
doost_Name(doost)   // it is for prnt
doost_name(doost)   //// it is for prnt



**Question 43  siple function of printig each arry element and give more information about each element.**

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


**Question 44  a function that can be used to made of  ANY thing// ...array is used to represent all elemenrs of array**

function manufacture(...chair:string[]){
    console.log(`Chair is made of ${chair.join(',')}.`)
}
manufacture("nails","wood","polish")
manufacture("plastc","foam")

**Question 45 we make a function in which we can provide more information about elemment of aarry in different types**

function mine(nam:string,ag:number,...options:[string,any][]){  /// ...option means many more things // asingn
    let me ={nam,ag};
    options.forEach(([key , value])=> me[key]=value)  
    return me                                       
}
console.log(mine("Qasim",55,["height","5.6"],["chest","32"]))
