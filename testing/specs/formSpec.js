describe("validation", function() {

  it("is a string with only letters", function() {
    expect(nameValidation("John")).toBeTrue()
  });
  it("is a string with non latin letters", function() {
    expect(nameValidation("Åsa")).toBeTrue()
  });
  it("is not valid because it is a string with only numbers", function() {
    expect(nameValidation("123")).toBe(false)
  });
  it("is not valid because it is a string with only special characters", function() {
    expect(nameValidation("@_:")).toBe(false)
  });
  it("is not valid because it is a string with both letters and numbers", function() {
    expect(nameValidation("123John")).toBe(false)
  });
  it("is not valid because it is a string with both numbers and special characters", function() {
    expect(nameValidation("123@{?")).toBe(false)
  });
  it("it is a string with only lowcase letters", function() {
    expect(nameValidation("john")).toBe(true)
  });
  it("it is a string with only uppercase letters", function() {
    expect(nameValidation("JOHN")).toBe(true)
  });
  it("is not valid because it is an empty string", function() {
    expect(nameValidation("")).toBe(false)
  });
  it("is not valid because it is a string with both letters and special characters", function() {
    expect(nameValidation("John@!")).toBe(false)
  });
});