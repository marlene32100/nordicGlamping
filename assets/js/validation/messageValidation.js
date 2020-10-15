function messageValidation(inputtxt) {

   var regExText = /\D{40,}/;

   if (regExText.test(document.contactForm.message.value) == false){
   alert("Please add more details to your message: we will help you better");
   document.contactForm.message.focus();
   return false;
    }
    if(document.contactForm.message.value == " "){
      alert("Please write a message");
     document.contactForm.message.focus();
      return false;
    }

    return true;

      };