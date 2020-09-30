function emailValidation(inputtxt) {

   var regExpEmail= /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

   if (regExpEmail.test(document.contactForm.email.value) == false){
   alert("Please write your email in the right format: name@example.com");
   document.contactForm.email.focus();
   return false;
    }
    if(document.contactForm.email.value == " "){
      alert("Please enter your email");
     document.contactForm.email.value();
      return false;
    }

    return true;

      };