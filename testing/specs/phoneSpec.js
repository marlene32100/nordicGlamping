describe ("Validate phone number", function() {

    it ("should be a phone number", function(){
      expect(phoneNumber("0720096128")).toBeTrue()
    });
    it ("should not be a phone number because too short", function(){
      expect(phoneNumber("072")).toBe(false)
    });
    it ("should be a phone number", function(){
      expect(phoneNumber("00460720096128")).toBeTrue()
    });
    it ("should not be a phone number because has other char", function(){
      expect(phoneNumber("0720:096128")).toBe(false)
    });
    it ("should not be a phone number because has letters", function(){
      expect(phoneNumber("A0720096128")).toBe(false)
    });
    it ("should not be a number because string is empty", function(){
      expect(phoneNumber("")).toBe(false)
    });
});