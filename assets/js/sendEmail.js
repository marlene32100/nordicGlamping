function sendEmail(contactForm) {
  emailjs
    .send("gmail", "katia", {
      from_name: contactForm.fName.value,
      from_surname: contactForm.lName.value,
      from_phone: contactForm.phone.value,
      from_email: contactForm.email.value,
      from_message: contactForm.message.value,
      from_chef: contactForm.chef.value,
    })
    .then(
      function (response) {
        document.getElementById("name").value = "";
        document.getElementById("surname").value = "";
        document.getElementById("email").value = "";
        document.getElementById("phone").value = "";
        document.getElementById("message").value = "";
        document.getElementById("chef").checked = false;
        document.getElementById("submit").style.backgroundColor = "#F8F9FA";
        document.getElementById("successfully-submitted").style.display =
          "block";
        console.log("SUCCESS", response);
      },
      function (error) {
        alert("Something went wrong with your request. Please try again");
        console.log("FAILED", error);
      }
    );
  return false;
}
