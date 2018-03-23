let Add = function () {

    let name = document.getElementById("usr").value;
    let roll = document.getElementById("roll").value;
    let pass = document.getElementById("pass_out").value;
    let stream = document.getElementById("stream").value;


    let main = document.getElementById("tab");

    let main_add = document.createElement("tr");

    let n = document.createElement("td");
    let r = document.createElement("td");
    let p = document.createElement("td");
    let s = document.createElement("td");
    let del = document.createElement("td");

    n.setAttribute('contentEditable', 'true');
    r.setAttribute('contentEditable', 'true');
    p.setAttribute('contentEditable', 'true');
    s.setAttribute('contentEditable', 'true');

    let n_text = document.createTextNode(name);
    let r_text = document.createTextNode(roll);
    let p_text = document.createTextNode(pass);
    let s_text = document.createTextNode(stream);

    let del_button = document.createElement("button");
    del_button.setAttribute('class', 'btn btn-default');
    let icon = document.createElement("span");
    icon.className = "glyphicon glyphicon-trash";
    del_button.appendChild(icon);
    del_button.addEventListener("click", function () {
        delete_row(this);
    });


    n.appendChild(n_text);
    r.appendChild(r_text);
    p.appendChild(p_text);
    s.appendChild(s_text);
    del.appendChild(del_button);

    main_add.appendChild(n);
    main_add.appendChild(r);
    main_add.appendChild(p);
    main_add.appendChild(s);
    main_add.appendChild(del);
    $("<td>").html('<input type = "checkbox">').appendTo(main_add);
    main.appendChild(main_add);



}

let delete_row = (element) => {
    var p = element.parentNode.parentNode;
    p.parentNode.removeChild(p);
}

let remove_selected = function () {
    var aObj = document.getElementsByTagName('tbody')[0].getElementsByTagName('tr');
    var i = aObj.length;
    var unchecked = [];
    while (i--) {
        var box = aObj[i].getElementsByTagName('input')[0];
        if (box.checked) {
            aObj[i].parentNode.removeChild(aObj[i]);
        }
        else {
            unchecked.push(box.value);
        }
    }
}
