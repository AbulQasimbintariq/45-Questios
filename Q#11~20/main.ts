// **Question 11 array making**

let friends =["Saif","kaleem","haider"]
let dishes=["Plaao","Biryani","TIkka",'Chest']
for(let Friends_list of friends){
    console.log(Friends_list)
}
for(let Dishes of dishes){
console.log(Dishes)
}

// **Question 12 greeting to multiples poeple seperatly**

for (let Friends_list of friends){
    console.log(`Hello ${Friends_list}; How are you, \n we will meet soon`)
}

// **Question 13 making array and print sepertaly**

let transports:string[]=["Bikes","Cars","Buses",'Trains']
for(let favrit_Trans of transports){
    console.log(`I like to travel in ${favrit_Trans}`)
}

// **Question 14 array and invitation seperatly**

let Guest:string[]=["Akbar","Danish","Bilal"]
for (let guest_list of Guest){
    console.log(`Salam I would like to invite ${guest_list} at dinner.`)
}

// **Question 15 changing list of array**

let new_guest="Kabeer"    ///first tell new name 
Guest[1]=new_guest;        // tell with whose we wanna chang new one 
for(let guest_list of Guest){                            ///just print the array
console.log(`Salam Please come ${guest_list} at dinner`)}
Guest.forEach(Guest=>{                                    // ForEach function use to primt every element
    console.log(`Salam ${Guest} I wana meet you `)
})


// **Question 16 Add item in Array**

Guest.push("Zain")       // array.push to add new one
Guest.unshift("Haider")   ///// array.push to add new one same purpose
Guest.splice(Guest.length / 2,0,"Anees")    //// array.push to add new one same purpose
Guest.forEach(Guest=>{
    console.log(`Salam ${Guest} I wana meet you `)
})

// **Question 17 how rcan reduce arry memeber**

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

// **Question 18 Alphabetical Orders and reverse and ist orignal**

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

// **Question 19 for number of array**

console.log(`I am inviting  ${Guest.length} guys at dinner`)   // only use word lenhgt with array name

// **Question 20 Making a array and print the list**

console.log("I wanna visit these Places ", Locations)
