document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    if (validateForm1()) {
        const data = {
            fullname: document.getElementById("fullname").value,
            username: document.getElementById("username").value,
            email: document.getElementById("email").value,
            password: document.getElementById("password").value,
            confirm_password: document.getElementById("confirm_password").value,
            security: document.getElementById("secure").value,
            drop: document.getElementById("dropp").value
        };

        fetch('/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(result => {
            if (result.error) {
                // Handle server-side validation errors
                // Example: Display error messages next to input fields
             
                alert(result.error); // Display error message in alert
            } else {
                // Handle successful registration
                alert(result.successMessage); // Display success message in alert
                // Redirect to home page or another appropriate page
            }
        })
        
        .catch(error => {
            console.error('Fetch error:', error);
            alert('An error occurred while registering the user.');
        });
    }
});

function validateForm1() {
    const securequestion = document.getElementById("secure");
    const serror = document.getElementById("securesmall");
    const fullname = document.getElementById("fullname");
    const fullnamesmall = document.getElementById("fullnamesmall");
    const username = document.getElementById("username");
    const usernamesmall = document.getElementById("usernamesmall");
    const email = document.getElementById("email");
    const emailsmall = document.getElementById("emailsmall");
    const password = document.getElementById("password");
    const passsmall = document.getElementById("passsmall");
    const confirm_password = document.getElementById("confirm_password");
    const confsmall = document.getElementById("confsmall");

    let err = nrr = urr = prr = crr = srr = true;

    // Validate security question
    if (securequestion.value.trim() === "") {
        setErrorFor(serror, 'Security question cannot be blank');
    } else {
        var regex = /^[a-zA-Z\s]+$/;
        if (regex.test(securequestion.value) === false) {
            setErrorFor(serror, 'Not a valid security question');
        } else {
            setSuccessFor(serror);
            srr = false;
        }
    }

    // Validate fullname
    if (fullname.value.trim() === '') {
        setErrorFor(fullnamesmall, 'Name cannot be blank');
    } else {
        var regex = /^[a-zA-Z\s]+$/;
        if (regex.test(fullname.value) === false) {
            setErrorFor(fullnamesmall, 'Not a valid name');
        } else {
            setSuccessFor(fullnamesmall);
            nrr = false;
        }
    }

    // Validate username
    if (username.value.trim() === '') {
        setErrorFor(usernamesmall, 'Username cannot be blank');
    } else {
        var regex = /^[a-zA-Z][a-zA-Z0-9_]{2,15}$/;
        if (regex.test(username.value) === false) {
            setErrorFor(usernamesmall, 'Not a valid username');
        } else {
            setSuccessFor(usernamesmall);
            urr = false;
        }
    }

    // Validate email
    if (email.value.trim() === '') {
        setErrorFor(emailsmall, 'Email cannot be blank');
    } else {
        if (!isEmail(email.value)) {
            setErrorFor(emailsmall, 'Not a valid email');
        } else {
            setSuccessFor(emailsmall);
            err = false;
        }
    }

    // Validate password
    if (password.value.trim() === '') {
        setErrorFor(passsmall, 'Password cannot be blank');
    } else if (password.value.length < 8) {
        setErrorFor(passsmall, 'Password must contain at least 8 characters');
    } else {
        setSuccessFor(passsmall);
        prr = false;
    }

    // Validate confirm password
    if (confirm_password.value.trim() === '') {
        setErrorFor(confsmall, 'Confirm password cannot be blank');
    } else {
        if (password.value.trim() !== confirm_password.value.trim()) {
            setErrorFor(confsmall, 'Passwords do not match');
        } else {
            setSuccessFor(confsmall);
            crr = false;
        }
    }

    // Return true if all validations pass
    return !(err || nrr || urr || prr || crr || srr);
}

function setErrorFor(element, message) {
    element.innerText = message;
    element.style.color = 'red';
    element.style.visibility = 'visible';
}

function setSuccessFor(element) {
    element.style.visibility = 'hidden';
}

function isEmail(email) {
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function togglePasswordVisibility(id) {
    const input = document.getElementById(id);
    input.type = input.type === 'password' ? 'text' : 'password';
}
