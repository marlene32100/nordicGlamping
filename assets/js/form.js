//This function is going to validate the contact form. 
//I decided not to validate the checkbox "Mr" or "Mrs" since gender is a very sensitive topic.


function validationForm(){
/*
    //var referred to name and surname validation
  var regExpDigit = /\d/g;
      var regExpChar = /^[^±@£$%^&*_+§¡€#¢§¶•ªº«\\/<>?!:;|=.,]$/g;
      var regExpName = /[a-zA-Z]/gi;
      //var referred to phone number validation
      var regExpNumber = /[\d]{10,}/; 
    var regExpOther = /\D/;
    //var referred to email validation (regex taken from https://regexr.com/3e48o)
    var regExpEmail= /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    //var referred to text message validation
    var regExText = /\D{70,}/;
^*/

      
      function nameValidation(inputtxt)
      { 
      var regExpDigit = /\d/g;
      var regExpChar = /^[^±@£$%^&*_+§¡€#¢§¶•ªº«\\/<>?!:;|=.,]$/g;
      var regExpName = /[a-zA-Z]/gi;

      if (inputtxt.match(regExpDigit)){
          alert("Please use letters to enter your name");
          return false;
        }
      else if (inputtxt.match(regExpChar)){
          alert("Please use letters to enter your name");
        return false;}
      else{
      return regExpName.test(inputtxt);
      };
    };
    

    function phoneNumber(phonenumber) {
    var regExpNumber = /[\d]{10,}/; 
    var regExpOther = /\D/;

    if (phonenumber.match(regExpOther)){
        return false;
    }
    else {return regExpNumber.test(phonenumber);}
}

function validatingEmail(email){

    //regex taken from https://regexr.com/3e48o

    var regExpEmail= /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    return email.match(regExpEmail)? true:false;
    
}

function validationText (text) {
        var regExText = /\D{70,}/;
        return regExText.test(text);
}

var arrayOfFunctions = [nameValidation, phoneNumber, validatingEmail, validationText];
console.log(arrayOfFunctions==1?true:false);


};