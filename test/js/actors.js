function Actors(grid, points, actors){
  this.grid = grid;
  this.points = points;
  this.actors = actors;
  this.actorsHash = {};
}

Actors.prototype.getActors = function() {
  for(i=0; i < this.actors.length; i++){
    this.actorsHash[this.actors[i]] = this.grid[this.points[i]];

  };
  return this.actorsHash; 
};
