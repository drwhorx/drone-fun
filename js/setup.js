for (i in enums) {
    var code = i.replace("_CODE", "")
    var name = enums[i].KEY
    var table = document.getElementById("table")
    var row = table.insertRow()
    row.insertCell().innerText = name;
    row.insertCell().innerText = enums[i].NAME;
    var td = document.createElement("td");
    td.setAttribute("id", enums[i].NAME + "_KEY");
    td.innerText = "FALSE";
    row.appendChild(td)
    var child = document.createElement("input");
    child.type = "text";
    child.id = `${enums[i].NAME}_VAL`;
    child.placeholder = "parameters";
    child.className = "parameter"

    if (enums[i].PARAMS != undefined && enums[i].PARAMS.length > 0) {
        child.defaultValue = enums[i].PARAMS.join(",")
    }
    if (enums[i].NON_EDITABLE) {
        child.disabled = true;
    }
    td = document.createElement("td")
    td.style = "padding: 0px"
    td.innerHTML = child.outerHTML
    row.appendChild(td)
}