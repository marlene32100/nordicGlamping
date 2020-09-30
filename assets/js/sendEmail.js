function sendEmail(contactForm) {
    emailjs.send("gmail", "katia", {
        "from_mr": contactForm.mr.value,
        "from_mrs": contactForm.mrs.value,
        "from_name": contactForm.fName.value,
        "from_surname": contactForm.lName.value,
        "from_phone": contactForm.phone.value,
        "from_email": contactForm.email.value,
        "message": contactForm.message.value
    })
    .then(
        function(response) {
            alert("Thank you for submitting your request. We will take care soon of you.");
            console.log("SUCCESS", response);
        },
        function(error) {
            alert("Something went wrong with your request. Please try again");
            console.log("FAILED", error);
        }
    );
    return false; 
}