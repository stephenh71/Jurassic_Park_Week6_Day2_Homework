const assert = require('assert')
const Dinosaur = require("../dinosaur.js")

describe("Dinosaur", function(){
  let dinosaur;

  beforeEach(function(){
    dinosaur1 = new Dinosaur("trex", "carnivore", 1000)
    dinosaur2 = new Dinosaur("stegosaurus","herbivore", 500)
  })

  it("should have a species", function(){
    const actual = dinosaur1.species;
    assert.strictEqual(actual,"trex");
  });

  it("should have a diet", function(){
    const actual = dinosaur1.diet;
    assert.strictEqual(actual,"carnivore");
  });

  it("should have visitor numbers", function(){
    const actual = dinosaur1.visitorNumbers;
    assert.strictEqual(actual,1000);
  });

});
