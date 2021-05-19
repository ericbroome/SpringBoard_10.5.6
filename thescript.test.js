
describe("createInstructor", () => {
    it("Takes a first name and a last name and returns an object {firstName: firstName, lastName: lastName", () => {
        let instructor = {firstName: "David", lastName: "Williams"};
        expect(createInstructor("David", "Williams")).toEqual(instructor);
    })
});

describe("computePropertyNames", () => {
    it("Compute the property name in an object literal", () => {
        let value = "That is my favorite";
        let key = 42;
        expect(instructor[key]).toEqual(value);
    })
});

describe("objectMethods", () => {
    it("Use object method shorthand to declare/define a member method in an object literal", () => {
        let firstName = "Felicia";
        instructor.firstName = firstName;
        let result = instructor.sayBye();  //Do it this way for debugging, since breakpoints in the literal object aren't working for some reason
        expect(result).toEqual(firstName + " says bye!");
    })
});

describe("create animal", () => {
    it("Accepts a species, a verb, and a noise which is returned when the verb is invoked", () => {
        let species = "snake";
        let verb = "warn";
        let noise = "rattle";
        let animal = createAnimal(species, verb, noise);
        expect(animal.warn()).toEqual("rattle");
    })
});