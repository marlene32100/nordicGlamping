function validationForm() {
  function nameValidation(inputtxt) {
    let regExpDigit = /\d/g;
    // next regex from https://salesforce.stackexchange.com/questions/41153/best-regex-for-first-last-name-validation
    let regExpChar = /^[^±@£$%^&*_+§¡€#¢§¶•ªº«\\/<>?!:;|=.,]$/g;
    let regExpName = /[a-zA-Z]/gi;

    if (inputtxt.match(regExpDigit)) {
      alert("Please check your name: no numbers");
      return false;
    } else if (inputtxt.match(regExpChar)) {
      alert("Please use letters to enter your name");
      return false;
    } else {
      return regExpName.test(inputtxt);
    }
  }

  function phoneNumber(phonenumber) {
    let regExpNumber = /[\d]{9,}/;
    let regExpOther = /\D/;

    if (phonenumber.match(regExpOther)) {
      return false;
    } else {
      return regExpNumber.test(phonenumber);
    }
  }

  function validatingEmail(email) {
    //regex taken from https://regexr.com/3e48o

    let regExpEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    return email.match(regExpEmail) ? true : false;
  }

  function validationText(text) {
    let regExText = /\D{40,}/;
    return regExText.test(text);
  }

  let arrayOfFunctions = [
    nameValidation,
    phoneNumber,
    validatingEmail,
    validationText,
  ];
  console.log(arrayOfFunctions == 1 ? true : false);
}
