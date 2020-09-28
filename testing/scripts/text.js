function validationText (text) {
        var regExText = /\D{70,}/;
        return regExText.test(text);
}