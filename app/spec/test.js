/*global describe, it */
'use strict';

(function () {
  describe('Delivery Man Robot Delivery System', function () {
    describe('Creation of a Take Away Town Map', function () {

      it('should create an array for the town map co-ordinates', function () {
        var testTown = new TakeAwayTown(0, 0);

        var grid = testTown.createTakeAwayTown();

        expect(grid).toEqual([])
      });

      it('should create an array according to the size of the town map', function () {
        var testTown = new TakeAwayTown(2, 2);

        var grid = testTown.createTakeAwayTown();

        expect( _.last(grid) ).toEqual([2,2])
      });

      it('should be able to create a large array for a large town map', function () {
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

      it('should create an array of random points', function() {
        expect(this.points.getPoints().length).toEqual(3);
      });

      it('should make each point not highier than the size of the town map', function () {
        for(i=0; i < (this.grid.length * 5); i++) {

          expect(this.points.getPoints()[0]).toBeGreaterThan(-1);
          expect(this.points.getPoints()[0]).toBeLessThan(this.grid.length );

        };
      });

      it('should make each point absolutely unique', function() {
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
        this.pointsArray = this.points.getPoints();
        this.townActors = new Actors(this.grid, this.pointsArray, ['D', 'D2', 'JEB']);
      });


      it('should create a hash of keys: actors and value: unquie points', function() {
        var actors = this.townActors.getActors();
        expect(typeof actors['D'][0]).toEqual('number');
      });

      describe('Calculate the nearest delivery point', function() {

        it('should find the nearest deliever point and the number of miles to the JEB ', function() {
            spyOn(this.townActors, 'getActors').andReturn({D: [2,2], D2: [5,2], JEB: [8,7] });
            var stubbedActors = this.townActors.getActors();

            var nearestDelivery = new FindNearestPoint(stubbedActors, 'JEB');
            nearestDelivery.getActorsDistance();

            expect(nearestDelivery.getClosestPoint()).toEqual({D2: 8});
        });
      });
    });

  });
})();
