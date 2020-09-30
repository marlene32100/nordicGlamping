
function nameValidation(inputtxt) {

   var regex = /^[\D]+$/;  

   if (regex.test(document.contactForm.fName.value) == false){
   alert("Please check your name - no numbers -");
   document.contactForm.fName.focus();
   return false;
    }
    if(document.contactForm.fName.value == " "){
      alert("Please enter your name");
     document.contactForm.fName.focus();
      return false;
    }

    return true;

      };
