const assert = require('assert')
const Park = require("../park.js")
const Dinosaur = require("../dinosaur.js")

describe("Park", function(){

  let park;

  beforeEach(function(){
    park = new Park("Jurassic Park",30,[])
    dinosaur1 = new Dinosaur("trex", "carnivore", 1000)
    dinosaur2 = new Dinosaur("stegosaurus","herbivore", 500)
    dinosaur3 = new Dinosaur("diplodocus","herbivore",1500)
    dinosaur4 = new Dinosaur("diplodocus","herbivore",1500)
  });

    it("should have a name", function(){
      const actual = park.name;
      assert.strictEqual(actual,"Jurassic Park")
    });

    it("should have a ticket price", function(){
      const actual = park.ticketPrice;
      assert.strictEqual(actual,30)
    });

    it("should have a collection of dinosaurs",function(){
      const actual = park.dinosaurs;
      assert.deepStrictEqual(actual, [])
    });

    it("should be able to add a dinosaur to its collection of dinosaurs", function(){
      park.addDinosaur(dinosaur1);
      const actual = park.numberOfDinosaurs();
      assert.deepStrictEqual(actual,1)
    });

    it("should be able to remove a dinosaur from its collection of dinosaurs", function(){
      park.addDinosaur(dinosaur1);
      park.addDinosaur(dinosaur2);
      park.removeDinosaur(dinosaur1);
      const actual = [dinosaur2];
      const expected = park.dinosaurs
      assert.deepStrictEqual(actual,expected)
    });

    it("should be able to find the dinosaur that attracts the most visitors", function(){
      park.addDinosaur(dinosaur1);
      park.addDinosaur(dinosaur2);
      park.addDinosaur(dinosaur3);
      const actual = park.mostVisitedDinosaur();
      const result = dinosaur3
      assert.deepStrictEqual(actual, result)
    });

    it("should be able to find all dinosaurs of a particular species", function(){
      park.addDinosaur(dinosaur1);
      park.addDinosaur(dinosaur2);
      const actual = [dinosaur2];
      const expected = park.findSpecies("stegosaurus")
      assert.deepStrictEqual(actual,expected)
    });

    it("should be able to calculate the total number of visitors per day", function(){
      park.addDinosaur(dinosaur1);
      park.addDinosaur(dinosaur2);
      park.addDinosaur(dinosaur3);
      const actual = park.visitorsPerDay();
      assert.strictEqual(actual,3000)
    });

    it("should be able to calculate the total number of visitors per year", function(){
      park.addDinosaur(dinosaur1);
      park.addDinosaur(dinosaur2);
      park.addDinosaur(dinosaur3);
      const actual = park.visitorsPerYear();
      assert.strictEqual(actual,1095000)
    });

    it("should be able to calculate the total revenue from ticket sales for one year", function(){
      park.addDinosaur(dinosaur1);
      park.addDinosaur(dinosaur2);
      park.addDinosaur(dinosaur3);
      const actual = park.annualRevenue();
      assert.strictEqual(actual,32850000)
    });

    it("should be able to remove all dinosaurs of a particular species",function(){
      park.addDinosaur(dinosaur1);
      park.addDinosaur(dinosaur2);
      park.addDinosaur(dinosaur3);
      park.addDinosaur(dinosaur4);
      park.removeSpecies("diplodocus")
      const actual = park.numberOfDinosaurs();
      assert.strictEqual(actual,2)
    });

    // it("should be able to provide an object containing each of the diet types and the number of dinosaurs in the park of that diet type",function(){
    //   park.addDinosaur(dinosaur1);
    //   park.addDinosaur(dinosaur2);
    //   park.addDinosaur(dinosaur3);
    //   park.addDinosaur(dinosaur4);
    //   const actual = {"carnivore":1,"herbivore":3};
    //   const expected = park.numberOfDietTypes()
    //   assert.deepStrictEqual(actual,expected)
    // });

});
