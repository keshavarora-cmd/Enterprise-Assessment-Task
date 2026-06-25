//Finds form
const form = document.getElementById("contactForm");

//
form.addEventListener('submit', function(event){
     

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;

    if (name === "") {
        alert("Please enter your name");
        event.preventDefault()
        return;
    }

    if (email === "") {
        alert("Please enter your email");
        event.preventDefault()
        return;
    }


    if (phone.length !== 10) {
        alert("Your phone number must be 10 digits");
        event.preventDefault()
        return;
    }

alert("Registration successful");
});

