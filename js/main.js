let Add = () => {

	let name = document.getElementById("usr").value;
	let roll = document.getElementById("roll").value;
	let pass = document.getElementById("pass_out").value;
	let stream = document.getElementById("stream").value;


	if (roll.length != 10)
		alert("Enter valid roll no. {length 10}");
	else if (pass.length != 4)
		alert("Enter valid passout yr {length 4}");
	else {
		let chk = 0;
		let aObj = document.getElementsByTagName('tbody')[0].getElementsByTagName('tr');
		for (const ar of aObj) {
			if (ar.childNodes[1].firstChild.nodeValue == roll) {
				chk = 1;
				alert("Roll no. already exists");
			}
		}
		if (chk == 0) {
			let main = document.getElementById("tab");

			let main_add = document.createElement("tr");

			let n = document.createElement("td");
			let r = document.createElement("td");
			let p = document.createElement("td");
			let s = document.createElement("td");
			let del = document.createElement("td");

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
			$(`<td>`).html(`<input type = "checkbox">`).appendTo(main_add);
			main.appendChild(main_add);

			let frm = document.getElementsByTagName("form")[0];
			frm.reset();
		}
	}


}

let delete_row = (element) => {
	let p = element.parentNode.parentNode;
	p.parentNode.removeChild(p);
}

let Edit = () => {
	let roll = document.getElementById("roll2");
	let chk = 0;
	let aObj = document.getElementsByTagName('tbody')[0].getElementsByTagName('tr');
	for (const ar of aObj) {
		if (ar.childNodes[1].firstChild.nodeValue == roll.value) {
			chk = 1;
			document.getElementById("editdiv").style.display = "block";
			roll.disabled = true;
		}
	}
	if (chk == 0)
		alert("Roll No. does not exist in database. Please Enter a valid Roll No.");

}

let Submit = () => {
	let name = document.getElementById("usr2");
	let roll = document.getElementById("roll2");
	let pass = document.getElementById("pass_out2");
	if (pass.value.length != 4) {
		alert("Enter valid Passout yr {Length-4}");
	}
	else {
		let stream = document.getElementById("stream2");
		let aObj = document.getElementsByTagName('tbody')[0].getElementsByTagName('tr');
		for (const ar of aObj) {
			if (ar.childNodes[1].firstChild.nodeValue == roll.value) {
				ar.childNodes[0].firstChild.nodeValue = name.value;
				ar.childNodes[2].firstChild.nodeValue = pass.value;
				ar.childNodes[3].firstChild.nodeValue = stream.value;

			}
		}
		roll.disabled = false;
		document.getElementsByTagName("form")[1].reset();
		document.getElementsByTagName("form")[2].reset();
		document.getElementById("editdiv").style.display = "none";
	}
}

let remove_selected = () => {
	let aObj = document.getElementsByTagName('tbody')[0].getElementsByTagName('tr');
	let i = aObj.length;
	let unchecked = [];
	while (i--) {
		let box = aObj[i].getElementsByTagName('input')[0];
		if (box.checked) {
			aObj[i].parentNode.removeChild(aObj[i]);
		}
		else {
			unchecked.push(box.value);
		}
	}
}
