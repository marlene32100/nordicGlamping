function phoneValidation(phonenumber) {

   var regExpOther = /[\d]{9,}/;

    if (regExpOther.test(document.contactForm.phone.value) == false){
        alert("Please check your phone number - at least 9 digits -");
        document.contactForm.phone.focus();
        return false;
    }

    if (document.contactForm.phone.value == " "){
        alert("Please enter your phone number");
        document.contactForm.phone.focus();
        return false;
    }

    return true;

      };