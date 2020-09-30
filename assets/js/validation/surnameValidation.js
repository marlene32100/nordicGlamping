function surnameValidation(inputtxt) {

   var regex = /^[\D]+$/;  

   if (regex.test(document.contactForm.lName.value) == false){
   alert("Please check your surname - no numbers -");
   document.contactForm.lName.focus();
   return false;
    }
    if(document.contactForm.lName.value == " "){
      alert("Please enter your surname");
     document.contactForm.lName.focus();
      return false;
    }

    return true;

      };