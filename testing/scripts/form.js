function nameValidation(inputtxt)
      { 
      var regExpDigit = /\d/g;
      var regExpChar = /^[^±@£$%^&*_+§¡€#¢§¶•ªº«\\/<>?!:;|=.,]$/;
      var regExpName = /[a-zA-Z]/gi;

      /*if(inputtxt.value == (regExpName).value)
      {
      return true;
      }
      else {return false};*/

      if (inputtxt.match(regExpDigit)){return false;}
      else if (inputtxt.match(regExpChar)){return false;}
      else{
      return regExpName.test(inputtxt);
      };
    };