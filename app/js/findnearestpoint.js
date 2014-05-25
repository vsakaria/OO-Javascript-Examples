function FindNearestPoint(actors, mainPoint) {
    //Assign the mainPoints co-ord to mainPoint
    this.mainPoint = actors[mainPoint];

    //Remove the mainPoint from the actors hash
    delete actors[mainPoint];
    this.actors = actors;

    this.actorsDistance = {};
}

FindNearestPoint.prototype.getActorsDistance = function() {

    var that = this;

    _.each(that.actors, function(el, key) {
        that.actorsDistance[key] =
            Math.abs((that.actors[key][0] - that.mainPoint[0])) +
            Math.abs((that.actors[key][1] - that.mainPoint[1]))
    });

    return that.actorsDistance;
};

FindNearestPoint.prototype.getClosestPoint = function() {

    var that = this;
    var closestPoint = {};

    _.each(that.actorsDistance, function(el, key) {
        if (el == _.min(that.actorsDistance)) {
            closestPoint[key] = el;
        }
    });
    return closestPoint;
};