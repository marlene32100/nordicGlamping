function nameValidation(inputtxt)
      { 
      var regExpDigit = /\d/g;
      var regExpChar = /^[^±@£$%^&*_+§¡€#¢§¶•ªº«\\/<>?!:;|=.,]$/g;
      var regExpName = /[a-zA-Z]/gi;

      if (inputtxt.match(regExpDigit)){return false;}
      else if (inputtxt.match(regExpChar)){return false;}
      else{
      return regExpName.test(inputtxt);
      };
    };