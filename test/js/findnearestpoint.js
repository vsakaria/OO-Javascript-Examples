function FindNearestPoint(actors, mainPoint) {
  //Assign the mainPoints co-ord to mainPoint
  this.mainPoint = actors[mainPoint];
  
  //Remove the mainPoint from the actors hash
  delete actors[mainPoint];
  this.actors = actors

  //Get the distance from the mainPoint for each actor.
  this.actorsDistance = getActorsDistance();
}

function getActorsDistance(){
  [8,8]
  {D: [1,2], D2: [2,3]}

  _.map(this.actor)
};

function getClosestPoint(){
  _.each(this.actorsDistance, function(el, key, value) {
    if(el == _.min(this.actorsDistance) ) {
      this.closestPoint = key;
    } 
  });
  return this.closestPoint;
};

// this.actors = {D: [6,5],D2: [5,5]}
// this.mainPoint = [8,8]

// Need to sort into a new hash

// 2 + 3 = 5
// 3 + 3 = 6

// this.actors = {D: 5, D2: 6}

// _.each({one: 1, two: 2, three: 3}, function(el, key, value){if(el == 1){console.log(key + " " + el)} });


// get all the actors grid point
// D = 6,4
// D2 = 8,2
// JEB = 6,5

// get the difference
// Diff1 = JEB - D2 = 2,3
// Diff2  = JEB - D = 0, 1

// Which differnce is the smallest.

// grid - array of co-ord
// actors - hash of key value pairs
// mainPoint which is a reference to mainPoint

// 1. create hash 