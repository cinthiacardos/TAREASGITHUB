
// EXERCISE 5

let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];
console.log ("Prints out all of the people in the list")

for (let i=0; i< people.length; i++) {
    console.log(" " + " " + people [i]);
}

//Write the command to remove "Dani" from the array.

const indexToRemove = people.indexOf("Dani");
if (indexToRemove !== -1) {
    people.splice(indexToRemove, 1);
}

console.log ("Name DANI remove of list");
console.log(people); 

// Write the command to remove "Juan" from the array.

const indexRemove = people.indexOf("Juan");
if (indexRemove !== -1) {
    people.splice(indexRemove, 1);
}

console.log ("Name JUAN remove of list");
console.log(people);
//Write the command to move "Luis" to the front of the array.

const indexMoveluis = people.indexOf("Luis");
if (indexMoveluis !== -1) {
    const luis = people.splice(indexMoveluis, 1); 
    people.unshift(luis[0]); 
}
console.log ("Name LUIS front of list");
console.log(people);

//Add my name to the end of the array

people.push("Cinthiac2");

console.log ("Name Cinthiac2 end of list");
console.log(people);

//Using a loop, iterate through this array and after console.log "Maria", exit from the loop.

console.log("Cuando llegue a maria se detendra el bucle");
for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
    if (people[i] === "Maria") {
        break; 
    }
console.log("Termino el bucle ");
}

//Write the command that gives the indexOf where "Maria" is located.

const indexMaria = people.indexOf("Maria");
console.log("Maria se encuentra en el indice:  " + indexMaria);

//At the end of the exercise, there should be 4 people in the array.
console.log("Al final quedan cuatro personas en el array");
console.log(people);

