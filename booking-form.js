const form = document.getElementById("bookingForm");

form.addEventListener("submit", function(event) {

    const phone = document.getElementById("phone").value.trim();


    if (phone.length !== 10) {
        alert("Your phone number must be 10 digits");
        event.preventDefault();
        return;  
    }

});

const dateInput = document.getElementById('appointment');
const today = new Date().toISOString().split('T')[0]; // Generates YYYY-MM-DD


dateInput.setAttribute('min', today); 