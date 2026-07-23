const form = document.getElementById("contactForm"); //Find contactForm ID

form.addEventListener("submit", function(event) { //Wait for submit button to be pressed

    const phone = document.getElementById("phone").value.trim(); //Removes white space


    if (phone.length !== 10) { //Check if phone input is not equal to 10 digits
        alert("Your phone number must be 10 digits"); //Sents alert to user
        event.preventDefault();
        return;  
    }

    alert("Message Sent!"); //Sends alert to user

});

