function edit1(x){
    document.getElementById('com-title'+x).contentEditable = true;
    document.getElementById('com-description'+x).contentEditable = true;
    document.getElementById('com-title'+x).style.border = "1px solid black";
    document.getElementById('com-description'+x).style.border = "1px solid black";
    document.getElementById('com-form'+x).innerHTML = "<input type='button' onclick='done1("+x+")' value='DONE' name='done' id='done'>";
}

function done1(x){
    document.getElementById('com-title'+x).contentEditable = false;
    document.getElementById('com-description'+x).contentEditable = false;
    document.getElementById('com-title'+x).style.border = "0px solid black";
    document.getElementById('com-description'+x).style.border = "0px solid black";
    document.getElementById('com-form'+x).innerHTML = "<input type='button' onclick='edit1(" + x + ")' value='EDIT' name='edit' id='edit'><input type='button' onclick='delete1(" + x + ")' value='DELETE' name='delete' id='delete'>";
}


function delete1(x){
    document.getElementById("col-2" + x).style.display = 'none';
}

