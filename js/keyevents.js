window.onkeydown = function (e) {
    if (!document.getElementById("enabled").checked) return;
    var code = e.keyCode;
    var obj = enums[code + "_CODE"];
    if (obj == undefined) return;
    if (obj.TYPE != ACTION) return;
    if (sessionStorage.getItem(obj.NAME + "_DOWN") == "true") return;
    sessionStorage.setItem(obj.NAME + "_DOWN", "true");
    document.getElementById(obj.NAME + "_KEY").style = "background-color: #00b400"
    $(`#${obj.NAME}_KEY`).text("DOWN")
    var temp = document.getElementById(obj.NAME + "_VAL").value;
    var param = temp.trim() == "" ? undefined : temp;
    socket.emit("comm", {
        comm: obj.COMMAND,
        params: [param]
    })
}
window.onkeyup = function (e) {
    if (!document.getElementById("enabled").checked) return;
    var code = e.keyCode;
    var obj = enums[code + "_CODE"];
    if (obj == undefined) return;
    document.getElementById(obj.NAME + "_KEY").style = "background-color: #00b400"
    switch (obj.TYPE) {
        case ACTION:
            sessionStorage.removeItem(obj.NAME + "_DOWN")
            socket.emit("comm", {
                comm: obj.COMMAND,
                params: [0]
            })
            $(`#${obj.NAME}_KEY`).text("FALSE")
            document.getElementById(obj.NAME + "_KEY").style = ""
            break;
        case PRESS:
            if (document.getElementById(obj.NAME + "_KEY").innerText == "PRESSED") return;
            var params = obj.PARAMS;
            socket.emit("comm", {
                comm: obj.COMMAND,
                params: params
            })
            document.getElementById(obj.NAME + "_KEY").innerText = "PRESSED"
            setTimeout(function wait() {
                document.getElementById(obj.NAME + "_KEY").innerText = "FALSE"
                document.getElementById(obj.NAME + "_KEY").style = ""
            }, 3000)
            break;
        case TOGGLE:
            var temp = document.getElementById(obj.NAME + "_KEY").innerText;
            var val = temp.trim() == "" ? "TRUE" : temp;
            val = val == "TRUE" ? "FALSE" : "TRUE";
            var comm = obj.COMMAND[val];

            temp = document.getElementById(obj.NAME + "_VAL").value;
            var param = temp.trim() == "" ? undefined : temp;
            socket.emit("comm", {
                comm: comm,
                params: [param]
            })

            document.getElementById(obj.NAME + "_KEY").innerText = val
            document.getElementById(obj.NAME + "_KEY").style = ""
            break;
        case CUSTOM:
            if (document.getElementById(obj.NAME + "_KEY").innerText == "PRESSED") return;
            temp = document.getElementById(obj.NAME + "_VAL").value;
            var param = temp.trim() == "" ? undefined : temp;
            var params = obj.PARAMS == undefined ? [param] : obj.PARAMS;
            socket.emit("custom", {
                comm: obj.COMMAND,
                params: params
            })
            document.getElementById(obj.NAME + "_KEY").innerText = "PRESSED"
            setTimeout(function wait() {
                document.getElementById(obj.NAME + "_KEY").innerText = "FALSE"
                document.getElementById(obj.NAME + "_KEY").style = ""
            }, 3000)
            break;
    }
}