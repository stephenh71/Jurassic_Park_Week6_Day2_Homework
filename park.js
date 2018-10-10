const Park = function (name, ticketPrice, collection) {
  this.name = name
  this.ticketPrice = ticketPrice
  this.dinosaurs = [ ]
}

  Park.prototype.numberOfDinosaurs = function () {
  return this.dinosaurs.length
  };

  Park.prototype.addDinosaur = function (dinosaur) {
  return this.dinosaurs.push(dinosaur)
  };

  Park.prototype.removeDinosaur = function (dinosaur) {
  let position = this.dinosaurs.indexOf(dinosaur);
  this.dinosaurs.splice(position,1)
  };

  Park.prototype.mostVisitedDinosaur = function () {
    let mostVisited = this.dinosaurs[0];
    for(let dinosaur of this.dinosaurs){
      if(dinosaur.visitorNumbers > mostVisited.visitorNumbers){
        mostVisited = dinosaur;
      }
    }
    return mostVisited
  };

  Park.prototype.findSpecies = function (species) {
    let foundSpecies = []
    for(let dinosaur of this.dinosaurs){
      if(dinosaur.species === species){
        foundSpecies.push(dinosaur)
      }
    }
    return foundSpecies
  };

  Park.prototype.visitorsPerDay = function () {
    let totalVisitorsPerDay = 0
    for(let dinosaur of this.dinosaurs){
      totalVisitorsPerDay += dinosaur.visitorNumbers
    }
    return totalVisitorsPerDay
  };

  Park.prototype.visitorsPerYear = function () {
    return totalVisitorsPerYear = this.visitorsPerDay() * 365
  };

  Park.prototype.annualRevenue = function () {
    return totalAnnualRevenue = this.visitorsPerYear() * this.ticketPrice
  };

  Park.prototype.removeSpecies = function (species) {
    let remainingSpecies = []
    for(let dinosaur of this.dinosaurs){
      if(dinosaur.species !== species){
        remainingSpecies.push(dinosaur)
      }
    }
    return this.dinosaurs = remainingSpecies
  };

  // Park.prototype.numberOfDietTypes = function () {
  //   let keys = [];
  //   for(let dinosaur in this.dinosaurs){
  //     keys.push(dinosaur.diet[key]);
  //
  //   };
  // };

module.exports = Park
