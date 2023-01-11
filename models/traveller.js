const Journey = require("./journey");

const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  const startLocations = []
  this.journeys.forEach((Journey) => {
    startLocations.push(Journey.startLocation)
  })
  return startLocations
};


Traveller.prototype.getJourneyEndLocations = function () {
  const endLocations = []
  this.journeys.forEach((Journey) => {
    endLocations.push(Journey.endLocation)
  })
  return endLocations
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  const journeyTransport = this.journeys.filter((journey) => {
    return journey.transport === transport
  })
  return journeyTransport
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  const journeysMinDistance=  this.journeys.filter((journey) => {
    return journey.distance >= minDistance
  })
  return journeysMinDistance
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  return this.journeys.reduce((total, journey) => {
    return total +=  journey.distance
  }, 0)
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  const modesOfTransport = []
  this.journeys.forEach((journey) => {
     if (!modesOfTransport.includes(journey.transport)) {
      modesOfTransport.push(journey.transport)
     }
  })
  return modesOfTransport
};


module.exports = Traveller;


// should have a collection of journeys
// should be able to get the journeys start locations
// should be able to get the journeys end locations
// should be able to get journeys by transport
// should be able to get journeys over a certain distance