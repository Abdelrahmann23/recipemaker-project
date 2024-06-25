document.addEventListener('DOMContentLoaded', () => {
    const forgetPassForm = document.getElementById('forgetpassform');
   // Make sure this ID matches your form ID
  
    forgetPassForm.addEventListener('submit', e => {
        e.preventDefault();
        if (validateForm()) {
            sendData();
        }
    });
    
    function validateForm() {
        const email = document.getElementById('emails');
        const emailError = document.getElementById('esmal');
        const ans = document.getElementById('forget');
        const ansError = document.getElementById('forgeterror');
    
        let emailErr = true;
        let ansErr = true;
    
        // Validate email
        const emailValue = email.value.trim();
        if (emailValue === '') {
            setErrorFor(emailError, 'Email cannot be blank');
            emailError.style.visibility = "visible";
        } else if (!isEmail(emailValue)) {
            setErrorFor(emailError, 'Not a valid email');
            emailError.style.visibility = "visible";
        } else {
            setSuccessFor(emailError);
            emailError.innerHTML = "";
            emailErr = false;
        }
    
        // Validate security answer
        const ansValue = ans.value.trim();
        if (ansValue === '') {
            setErrorFor(ansError, 'Security question cannot be blank');
            ansError.style.visibility = "visible";
        } else {
            setSuccessFor(ansError);
            ansError.innerHTML = "";
            ansErr = false;
        }
    
        return !(emailErr || ansErr);
    }
    
    // Utility functions
    function setErrorFor(element, message) {
        element.innerText = message;
        element.style.color = 'red';
        element.style.visibility = 'visible';
    }
    
    function setSuccessFor(element) {
        element.innerText = '';
        element.style.visibility = 'hidden';
    }
    
    function isEmail(email) {
        var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
    function sendData() {
      const email = document.getElementById('emails').value.trim();
      const security = document.getElementById('forget').value.trim();
  
      fetch('/forgetpassword', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              emails: email,
              security: security
          })
      })
      .then(response => {
          if (!response.ok) {
              throw new Error('Network response was not ok');
          }
          return response.json();
      })
      .then(data => {
          console.log('Response from server:', data);
  
          if (data.error) {
              alert(data.error); // Show an error alert for incorrect password or user not found
          } else if (data.redirectUrl) {
            window.location.href = `/${data.redirectUrl}`;
          }
      })
      .catch(error => {
          console.error('Fetch error:', error);
          alert('Email or security answer may be incorrect.');
          // Handle errors here, such as displaying an error message to the user
      });
  
      return false; // Prevent form submission
  }
  
  
  
    function setErrorFor(input, message) {
        const formControl = input.parentElement;
        const small = formControl.querySelector('small');
        formControl.className = 'form-control error';
        small.innerText = message;
    }
  
    function setSuccessFor(input) {
        const formControl = input.parentElement;
        formControl.className = 'form-control success';
    }
  
    function isEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
  });