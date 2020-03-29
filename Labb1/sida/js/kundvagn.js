const   elForm = document.getElementById("formReg");
const elName = document.getElementById("txtName");
const elOutput = document.getElementById("output");

function showName(event) {

    let name = elName.value;

    console.log("Textfält i funktion" + name);

    elOutput.textContent = "Hej " + name;

    event.preventDefault();

}

elForm.addEventListener( "submit", showName, false);