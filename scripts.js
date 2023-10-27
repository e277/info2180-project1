/* Add your JavaScript to this file */
window.onload = function() {
    const email = document.getElementById("email");
    const message = document.getElementsByClassName("message")[0];
    const button = document.getElementsByClassName("btn")[1];

    button.addEventListener("click", (event) => {
        event.preventDefault();

        if (email.value === "") {
            message.innerHTML = "Please enter a valid email address";
        } else {
            message.innerHTML = `Thank you! Your email address ${email.value} has been added to our mailing list!`;
        }
    })
    
}