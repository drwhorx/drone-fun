module.exports = {
    takeoff: function (client, data) {
        var landed = data.droneState.flying == 2 || data.droneState.flying == 0;
        console.log(landed)
        console.log(data.droneState.flying)
        if (landed) client.takeoff();
        else client.land();
    },
    estop: function (client, data) {
        client.stop()
        client.land()
    }
}