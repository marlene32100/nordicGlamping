describe ("Validating text message", function(){
   it ("should not be a text message because string is empty", function(){
      expect(validationText("")).toBe(false);
   }) ;
   it ("should not be a text message because has only numbers", function(){
      expect(validationText("0123456789")).toBe(false);
   }) ;
   it ("should not be a text message because string is too short", function(){
      expect(validationText("Hi my name is John")).toBe(false);
   }) ;
   it ("should be a text message", function(){
      expect(validationText("Hi my name is John, I would like to book a holiday in Norway to see the Northern Lights")).toBeTrue();
   }) ;
});