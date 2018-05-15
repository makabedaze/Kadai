{
    init: function(elevators, floors) {
        var elevator = elevators[0];

        for (i = 0; i < floors.length; i++) {
            var floor = floors[i];

            floor.on("up_button_pressed", function () {
                elevator.goToFloor(i);
            });

            floor.on("down_button_pressed", function () {
                elevator.goToFloor(i);
            });
        }

        elevator.on("idle", function () {

        });

        elevator.on("floor_button_pressed", function (floorNum) {
            elevator.goToFloor(floorNum);
        });
    },
    update: function(dt, elevators, floors) {
        // We normally don't need to do anything here
    }
}