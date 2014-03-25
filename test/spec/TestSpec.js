// Suite
describe("Hello Jasmine!!", function() {

// Spec (or test)
    it("says hello", function() {

        // what is being tested
        function helloWorld() {
            return "Hello world!";
        }

// Expectation, how we express what we expect should happen.

        // Our Matcher which expects the result of our function 
        // to equal "Hello world!"
        expect(helloWorld()).toEqual("Hello world!");

    });

});

// Suite
describe("Person", function() {

    // instance of Person, the object we are testing is now
    // in shared scope
    var johnDoe = new Person("John", "Doe", 40);

// Spec
    it("should be defined when created", function() {
// Expectation
        expect(johnDoe).toBeDefined();
    });

    it("should have the correct first name", function() {
        expect(johnDoe.firstName).toBe("John");
    });

    it("should have the correct last name", function() {
        var johnDoe = new Person("John", "Doe", 40);
        expect(johnDoe.lastName).toBe("Doe");
    });

    it("should have the correct age", function() {
        var johnDoe = new Person("John", "Doe", 40);
        expect(johnDoe.age).toBe(40);
    });
});


// Suite
describe("Animal", function() {
    it("should have 6 legs if it is an insect", function() {
    var insect = new Animal();
    insect.kind = "insect";
    expect(insect.numLegs()).toBe(6);
    });

    it("should have 8 legs if it is a spider", function() {
        var spider = new Animal();
        spider.kind = "spider";
        expect(spider.numLegs()).toBe(8);
    });
});