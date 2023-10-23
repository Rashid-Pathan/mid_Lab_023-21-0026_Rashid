document.addEventListener("DOMContentLoaded", function () {
    // Get references to your HTML elements
    const signInButton = document.querySelector(".sign-in");
    const getStartedButton = document.querySelector(".get-started");
    const submitRequestButton = document.querySelector(".submit-request");
  
    const nameInput = document.querySelector(".eg-zoya-memon");
    const emailInput = document.querySelector(".eg-zoyamemon767gmailcom");
    const contactInput = document.querySelector(".eg-contact-number");
    const commentInput = document.querySelector(".eg-requesting-for");
  
    // Add click event listeners to buttons
    signInButton.addEventListener("click", function () {
      alert("Sign In button clicked");
    });
  
    getStartedButton.addEventListener("click", function () {
      alert("Get Started button clicked");
    });
  
    submitRequestButton.addEventListener("click", function () {
      const name = nameInput.value;
      const email = emailInput.value;
      const contact = contactInput.value;
      const comment = commentInput.value;
  
      alert(`Submitted Request:\nName: ${name}\nEmail: ${email}\nContact: ${contact}\nComment: ${comment}`);
    });
  });
  