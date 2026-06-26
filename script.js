const form = document.getElementById("contactForm");

form.addEventListener("submit", function(event) {

    const phone = document.getElementById("phone").value.trim();


    if (phone.length !== 10) {
        alert("Your phone number must be 10 digits");
        event.preventDefault();
        return;  
    }

    alert("Message Sent!");

});