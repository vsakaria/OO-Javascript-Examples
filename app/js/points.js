function Points(maxRange, numberOfPoints) {
    this.maxRange = maxRange - 1;
    this.numberOfPoints = numberOfPoints;
    this.points = [];
}

Points.prototype.createPoints = function() {
    for (i = 0; this.points.length < this.numberOfPoints; i++) {
        this.points[i] = _.random(0, this.maxRange);
        this.points = _.uniq(this.points);
    }
    return this.points;
};

Points.prototype.getPoints = function() {
    return this.points;
};