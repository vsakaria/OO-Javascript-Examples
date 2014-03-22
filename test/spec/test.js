/*global describe, it */
'use strict';

(function () {
  describe('Just Eat Robot', function () {
    describe('Creation of a Take Away Town', function () {
      
      it('should create an array for the town map', function () {
        var testTown = new TakeAwayTown(0, 0);
        var grid = testTown.createTakeAwayTown(); 
        expect(grid).toEqual([])          
      });

      it('should create a co-ordinates array according to the map size', function () { 
        var testTown = new TakeAwayTown(2, 2);
        var grid = testTown.createTakeAwayTown(); 
        expect( _.last(grid) ).toEqual([2,2])                    
      });

      it('should create a co-ordinates large array according to the map size', function () { 
        var testTown = new TakeAwayTown(10, 10);
        var grid = testTown.createTakeAwayTown(); 
        expect(grid[20]).toEqual([3,1])                    
      });   
    });
    
    describe('Creation of unqiue random points', function () {
      beforeEach(function() {
        var testTown = new TakeAwayTown(10, 10);
        this.grid = testTown.createTakeAwayTown();
        this.points = new Points(this.grid.length, 3);
        this.points.createPoints();
      });  

      it('should create an array of 3 random points', function() {  
        expect(this.points.getPoints().length).toEqual(3);
      });

      it('should make each point not highier than the size of the map', function () {
        for(i=0; i < (this.grid.length * 3); i++) { 
          expect(this.points.getPoints()[0]).toBeGreaterThan(0);
          expect(this.points.getPoints()[0]).toBeLessThan(this.grid.length + 1);
        }
      });

      it('should create an array of unique points', function() {
        for(i=0; i<this.grid.length; i++) { 
          expect(_.uniq(this.points.getPoints())).toEqual(this.points.getPoints());   
        };
      });
    });

    describe('Creation of TakeAwayTown Actors', function() {
       beforeEach(function() {
        var testTown = new TakeAwayTown(10, 10);
        this.grid = testTown.createTakeAwayTown();
        this.points = new Points(this.grid.length, 3);
        this.points.createPoints();
        this.pointsArray = this.points.getPoints()
      });  

      it('should assign a co-ordin to given actors in a hash', function() {
        var townActors = new Actors(this.grid, this.pointsArray, ['D', 'D2', 'JEB']);
        var actors = townActors.getActors();
        expect(typeof actors['D'][0]).toEqual('number');
      });   
    });

    describe('Calculate the nearest delivery point', function() {
      beforeEach(function() {
        var testTown = new TakeAwayTown(8, 8);
        this.grid = testTown.createTakeAwayTown();
        this.points = new Points(this.grid.length, 3);
        this.points.createPoints();
        this.pointsArray = this.points.getPoints()
      }); 

      it('should find the nearest deliever point to the JEB', function() {
          var townActors = new Actors(this.grid, this.pointsArray, ['D', 'D2', 'JEB']);

          spyOn(townActors, 'getActors').andReturn({D: [2,2], D2: [5,2], JEB: [8,7] });
          var stubbedActors = townActors.getActors();
          
          var nearestDelivery = new FindNearestPoint(stubbedActors, 'JEB'); 
          nearestDelivery.getActorsDistance();
           
          expect(nearestDelivery.getClosestPoint()).toEqual({D2: 8});
      }); 
    });
  });
})();
