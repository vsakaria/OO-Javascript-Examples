$(function() {

    var x, y, numOfActors;
    var actorsArray = [];

    $('#button').click(function(e) {
        actorsArray = [];
        $('#grid-container').empty();
        $('.message').remove();

        x = $('#gridX').val();
        y = $('#gridY').val();
        numOfActors = $('#numOfActors').val();

        //Setup the names for the actors
        for (i = 1; i < numOfActors; i++) {
            actorsArray.push('D' + i);
            if (i == numOfActors - 1) {
                actorsArray.push('JEB');
            }
        }

        var testTown = new TakeAwayTown(x, y);
        var grid = testTown.createTakeAwayTown();

        points = new Points(grid.length, numOfActors);

        var pointsArray = points.createPoints();
        var townActors = new Actors(grid, pointsArray, actorsArray);

        var actorsCoOrdinates = townActors.getActors();
        var actors = townActors.getActorsGridReference();

        var nearestDelivery = new FindNearestPoint(actorsCoOrdinates, 'JEB');
        nearestDelivery.getActorsDistance();
        var nearestDeliveryPoint = nearestDelivery.getClosestPoint();


        //Create the grid with clearfixes
        $.each(grid, function(idx, val) {
            $('#grid-container').append("<div id=" + idx + " class='gridImage'></div>");
            if (grid[idx][1] == testTown.gridY) {
                $('#grid-container').append("<div class='clearboth'></div>");
            }
        });

        $('#grid-container').css('width', 42 * testTown.gridY);

        //Add class for each of the actors
        $.each(actors, function(key, value) {
            $('#' + value).addClass(key);
            $('#' + value).append(key);
        });

        //Add nearest Deleivery Message
        $.each(nearestDeliveryPoint, function(key, value) {
            $('#container').prepend(
                "<div class='message'> The shortest delivery point is: " + key +
                " and the number of miles is: " + value + "</div>");
        });
    });
});