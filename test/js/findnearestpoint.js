function FindNearestPoint(actors, mainPoint) {
  this.mainPoint = actors[mainPoint];
  delete actors[mainPoint];
  this.actors = actors
}



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