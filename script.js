function checkEmail() {
    const email = document.getElementById('email').value;
    const emailMessage = document.getElementById('emailMessage');

    if (email.length > 3 && email.includes('@') && email.includes('.')) {
        emailMessage.textContent = "All good to go!";
        emailMessage.className = 'message success';
    } else {
        emailMessage.textContent = "Please enter a valid email.";
        emailMessage.className = 'message error';
    }
}

function checkPassword() {
    const password = document.getElementById('password').value;
    const passwordMessage = document.getElementById('passwordMessage');

    if (password.length > 8) {
        passwordMessage.textContent = "All good to go!";
        passwordMessage.className = 'message success';
    } else {
        passwordMessage.textContent = "Password must be more than 8 characters.";
        passwordMessage.className = 'message error';
    }
}

document.getElementById('submitBtn').addEventListener('click', function() {
    const emailMessage = document.getElementById('emailMessage').classList.contains('success');
    const passwordMessage = document.getElementById('passwordMessage').classList.contains('success');

    if (emailMessage && passwordMessage) {
        const confirmation = confirm("Are you sure you want to submit?");
        if (confirmation) {
            alert("Successful signup!");
        } else {
            clearForm();
        }
    } else {
        alert("Please fix the errors before submitting.");
    }
});

function clearForm() {
    document.getElementById('signupForm').reset();
    document.getElementById('emailMessage').textContent = '';
    document.getElementById('passwordMessage').textContent = '';
}
