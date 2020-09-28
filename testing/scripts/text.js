function validationText (inputtxt) {
        var regExText = /\D{70,}/;
        return regExText.test(inputtxt);
}