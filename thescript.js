/* Same keys and Values */
const createInstructor = function(firstName, lastName) {
    return {
        firstName, 
        lastName
    }
}

/* Object methods */
const instructor = {
    firstName: "Juan",
    /* Computed property names */
    [6 * 7]: "That is my favorite",
    sayHi() {
        return "Hi!";
    },
    sayBye() {
        return this.firstName + " says bye!";
    }
}


/* createAnimal */
const createAnimal = (species, verb, noise) => {
    return {
        species,
        [verb]() {
            return noise;
        }
    }
}