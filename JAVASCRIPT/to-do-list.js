let toDoListArray = []
let separator = "<br>"
let forminput

function toDoList() {
    forminput = document.getElementById("listinput").value;
    toDoListArray = [];
    
    if (forminput !== "") {
        localStorage.setItem(`${forminput}`, `${forminput}`);
        let i = 0;
        while (i < localStorage.length) {
                toDoListArray.push(localStorage.key(i));
                i++;
        }

        function separate(toDoListArray, separator) {
            let output = toDoListArray.join(separator)
            document.getElementById("output").innerHTML = output;
        }
    console.log("hei")
    separate(toDoListArray, separator);
    }
    document.getElementById("listinput").value = "";
}

function lastinn() {
        let i = 0;
        while (i < localStorage.length) {
            toDoListArray.push(localStorage.key(i));
            i++;
        }

        function separate(toDoListArray, separator) {
            let output = toDoListArray.join(separator)
            document.getElementById("output").innerHTML = output;
        }
    separate(toDoListArray, separator);
}


function slett() {
    localStorage.clear();
    document.getElementById("output").innerHTML = "";
    toDoListArray = [];
}









