const form = document.getElementById("bookingForm"); //Find bookingForm ID

form.addEventListener("submit", function(event) { //Wait for submit button to be pressed

    const phone = document.getElementById("phone").value.trim(); //Removes white space


    if (phone.length !== 10) { //Check if phone input is not equal to 10 digits
        alert("Your phone number must be 10 digits");  //Sents alert to user
        event.preventDefault();
        return;  
    }

});

const dateInput = document.getElementById('appointment'); //Chects current date
const today = new Date().toISOString().split('T')[0];  


dateInput.setAttribute('min', today);  //Sets minimum date to current date