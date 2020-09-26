function validatingEmail(email){

    //regex taken from https://regexr.com/3e48o
    var regExpEmail= /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    return email.match(regExpEmail);
    
}