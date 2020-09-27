describe ("Validating email field", function() {
    it ("should be an email", function(){
        expect(validatingEmail("name@mail.com")).toBeTrue();
    });
    it ("should be an email", function(){
        expect(validatingEmail("123@mail.com")).toBeTrue();
    });
    it ("should be an email", function(){
        expect(validatingEmail("123name@mail.com")).toBeTrue();
    });
    it ("should not be an email because @ is missing", function(){
        expect(validatingEmail("name.mail.com")).toBe(false);
    });
    it ("should not be an email because end of string is a number", function(){
        expect(validatingEmail("name@123")).toBe(false);
    });
    it ("should be an email", function(){
        expect(validatingEmail("name.wow@mail.com")).toBeTrue();
    });
    it ("should not be an email because there is a white space", function(){
        expect(validatingEmail("name wow@mail.com")).toBe(false);
    });
    it ("should not be an email because last part is only one letter", function(){
        expect(validatingEmail("name@mail.c")).toBe(false);
    });
    it ("should not be an email because domain has two ..", function(){
        expect(validatingEmail("name@mail..com")).toBe(false);
    });
    it ("should not be an email because domain is not complete", function(){
        expect(validatingEmail("name@mail.")).toBe(false);
    });
    it ("should not be an email because it is an empty string", function(){
        expect(validatingEmail("")).toBe(false);
    });
});