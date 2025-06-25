// validateFormName("")
// validateFormEmail()
// validateFormPassword()
// validateFormAge()

function validateFormName(nameStr, errorElementId) {
    var errorElement = document.getElementById(errorElementId);
    if(isNullOrEmpty(nameStr)) {
        errorElement.textContent = "It is required";
    }
    else if(!validateLength(nameStr, 3)) {
        errorElement.textContent = "Length must be greater than 2";
    }

    if(errorElement.textContent.length > 0) {
        errorElement.style.display = "block";
    }
}
