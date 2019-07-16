module.exports = {
    takeoff: function (client, data) {
        var landed = data.droneState.flying == 2 || data.droneState.flying == 0;
        if (landed) client.takeoff();
        else client.land();
    },
    estop: function (client, data) {
        client.stop()
        client.land()
    }
}