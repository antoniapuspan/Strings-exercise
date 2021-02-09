document.getElementById("button").addEventListener("click", generateOutput);

function generateOutput() {
    //get the name from input field
    let name = document.getElementById("input-field").value;

    //capitalize first letter in name
    let capName = capitalizeFirstLetter(name);
    console.log("capitalize name: ", capName);
    //find first name
    let firstName = findFirstName(name);
    console.log("first name: ", firstName);


    //first name length
    const nameLen = firstName.length;
    console.log("first name length: ", nameLen);


    //find middle name
    const middleName = findMiddleName(name);
    console.log("middle name: ", middleName);

    //filename
    const fileName = checkFileExtension(name);
    console.log("file name: ", fileName);

    //capitalize third letter
    const thirdLetter = thirdLetterUppercase(name);
    console.log(thirdLetter);

    //make character uppercase
    const charUppercase = spaceBeforeUppercase(name);
    console.log(charUppercase);

    let opt = document.getElementById("choice").value;
    console.log(opt);
    let output = document.getElementById("output");
    let myInput = document.getElementById("input-field");

    myInput.type = "text";
    if(opt == 0) {
        output.value = capName;
    } else if (opt == 1) {
        output.value = fileName;
    } else if (opt == 2) {
        output.value = nameLen;
    } else if (opt == 3) {
        output.value = middleName;
    } else if (opt == 4) {
        output.value = fileName;
    } else if (opt == 5) {
        myInput.type = 'password';
    } else if (opt == 6) {
        output.value = thirdLetter;
    } else if (opt == 7) {
        output.value = charUppercase;
    }
}
// capitalize first letter
function capitalizeFirstLetter(x) {
    return x[0].toUpperCase() + x.slice(1);
}

//first name
function findFirstName(x) {
    let fullName = x.split(' ');
    firstName = fullName[0];
    return firstName;
}
//middle name
function findMiddleName(x) {
    let fullName = x.split(' ');
    let middleName;
    //check if the array of names has middle names or not
    if (fullName.length > 2) {
        //remove last name
        fullName.pop();
        //remove first name
        fullName.shift();

        middleName = fullName;

        return middleName;
    } else {
        return null;
    }
}
//file name 
function checkFileExtension(x) {
    let fileName = document.querySelector('#input-field').value;
    let extension = fileName.split('.').pop();
    document.textContent = extension;
    return extension;
}
//make third character uppercase
function thirdLetterUppercase(x) {
    return x.substring(0, 2) + x[2].toUpperCase() + x.substring(3);
}

function spaceBeforeUppercase(x) {
    if (x.indexOf(' ') >= 0) {
        let n = x.indexOf(' ');
        x = x.substring(0, n+1) + x[n + 1].toUpperCase() + x.substring(n + 2);
    }
    return x;
}