function TakeAwayTown(x,y) {
  this.gridX = x;
  this.gridY = y;
}

TakeAwayTown.prototype.createTakeAwayTown = function() {
  var grid = [];
  var setX = 1;
  var setY = 1;

  for(i = 0; i < this.gridX*this.gridY; i++)
  {  
    grid[i] = [setX,setY]; 
    setY++;

    if(this.gridY < setY) {
      setX += 1; setY = 1;
    }
  }
  return grid;
};

// function makeArray(gX, gY){
//   var grid = [];
//   var setX = 1;
//   var setY = 1;

//   for(i = 0; i < gX*gY; i++)
//   {  
//     grid[i] = [setX,setY]; 
//     setY++;

//     if(gY < setY) {
//       setX += 1; setY = 1;
//     }
//   }
//   return grid;
// } 