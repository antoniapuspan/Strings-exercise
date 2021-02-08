document.getElementById("button").addEventListener("click", generateOutput);


function generateOutput() {
    let name = "antonia";
    let name2 = "costi";
    let capName = capitalizeFirstLetter(name);
    let capName2 = capitalizeFirstLetter(name2);
    console.log(capName, capName2);
}


function capitalizeFirstLetter(x) {
    return x[0].toUpperCase() + x.slice(1);
}