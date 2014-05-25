function Actors(grid, points, actors){
  this.grid = grid;
  this.points = points;
  this.actors = actors;
}

Actors.prototype.getActorsGridReference = function() {
  var actorsHash = {};
  for(i=0; i < this.actors.length; i++){
    actorsHash[this.actors[i]] = this.points[i];
  };
  return actorsHash; 
};

Actors.prototype.getActors = function() {
  var actorsHash =  {}
  for(i=0; i < this.actors.length; i++){
    actorsHash[this.actors[i]] = this.grid[this.points[i]];
  };
  return actorsHash; 
};


