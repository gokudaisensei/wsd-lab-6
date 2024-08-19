function validateForm(event) {
    event.preventDefault(); // Prevent form submission

    let isValid = true;

    // Username Validation
    const username = document.getElementById('username');
    const usernameHelp = document.getElementById('username_help');
    if (username.value.trim() === '') {
        usernameHelp.classList.remove('hidden');
        username.classList.add('border-red-600');
        isValid = false;
    } else {
        usernameHelp.classList.add('hidden');
        username.classList.remove('border-red-600');
    }

    // Email Validation
    const email = document.getElementById('email');
    const emailHelp = document.getElementById('email_help');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value.trim())) {
        emailHelp.classList.remove('hidden');
        email.classList.add('border-red-600');
        isValid = false;
    } else {
        emailHelp.classList.add('hidden');
        email.classList.remove('border-red-600');
    }

    // Password Validation
    const password = document.getElementById('password');
    const passwordHelp = document.getElementById('password_help');
    const passwordPattern = /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/;
    if (!passwordPattern.test(password.value.trim())) {
        passwordHelp.classList.remove('hidden');
        password.classList.add('border-red-600');
        isValid = false;
    } else {
        passwordHelp.classList.add('hidden');
        password.classList.remove('border-red-600');
    }

    // Confirm Password Validation
    const confirmPassword = document.getElementById('confirm-password');
    const confirmPasswordHelp = document.getElementById('confirm_password_help');
    if (confirmPassword.value.trim() !== password.value.trim()) {
        confirmPasswordHelp.classList.remove('hidden');
        confirmPassword.classList.add('border-red-600');
        isValid = false;
    } else {
        confirmPasswordHelp.classList.add('hidden');
        confirmPassword.classList.remove('border-red-600');
    }

    // Date of Birth Validation (must be at least 18 years old)
    const dob = document.getElementById('datepicker-actions');
    const dobHelp = document.getElementById('dob_help');
    const dobValue = dob.value.trim();
    const today = new Date();
    const dobDate = new Date(dobValue);

    if (dobValue === '' || !isValidDate(dobDate)) {
        dobHelp.classList.remove('hidden');
        dob.classList.add('border-red-600');
        isValid = false;
    } else {
        const age = today.getFullYear() - dobDate.getFullYear();
        const monthDiff = today.getMonth() - dobDate.getMonth();
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dobDate.getDate())) {
            age--;
        }
        if (age < 18) {
            dobHelp.classList.remove('hidden');
            dob.classList.add('border-red-600');
            dobHelp.textContent = 'You must be at least 18 years old.';
            isValid = false;
        } else {
            dobHelp.classList.add('hidden');
            dob.classList.remove('border-red-600');
        }
    }

    // Terms and Conditions Validation
    const terms = document.getElementById('terms');
    const termsHelp = document.getElementById('terms_help');
    if (!terms.checked) {
        termsHelp.classList.remove('hidden');
        terms.classList.add('border-red-600');
        isValid = false;
    } else {
        termsHelp.classList.add('hidden');
        terms.classList.remove('border-red-600');
    }

    if (isValid) {
        // Submit the form or perform further actions
        alert('Form is valid!'); // Replace this with actual form submission logic
    }
}

// Helper function to check if the date is valid
function isValidDate(date) {
    return date instanceof Date && !isNaN(date);
}

// Attach the validation function to the form's submit event
document.querySelector('form').addEventListener('submit', validateForm);
