const form = document.getElementById("bookingForm");

form.addEventListener("submit", function(event) {

    const phone = document.getElementById("phone").value.trim();


    if (phone.length !== 10) {
        alert("Your phone number must be 10 digits");
        event.preventDefault();
        return;  
    }

});

