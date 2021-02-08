document.getElementById("button").addEventListener("click", generateOutput);
function generateOutput() {
    let name = "costi forza";
    let capName = capitalizeFirstLetter(name);
    //find first name
    var fullName = "Paul Steve Panakkal".split(' '),
    firstName = fullName[0],
    lastName = fullName[fullName.length - 1];
    console.log(firstName);


}
// capitalize first letter
function capitalizeFirstLetter(x) {
    return x[0].toUpperCase() + x.slice(1);
}



