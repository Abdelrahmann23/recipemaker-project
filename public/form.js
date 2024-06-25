

const loginText = document.querySelector(".title-text .login");
      const loginForm = document.querySelector("form.login");
      const loginBtn = document.querySelector("label.login");
      const signupBtn = document.querySelector("label.signup");
      const signupLink = document.querySelector("form .signup-link a");
      signupBtn.onclick = (()=>{
        loginForm.style.marginLeft = "-50%";
        loginText.style.marginLeft = "-50%";
      });
      loginBtn.onclick = (()=>{
        loginForm.style.marginLeft = "0%";
        loginText.style.marginLeft = "0%";
      });
      signupLink.onclick = (()=>{
        signupBtn.click();
        return false;
      });

      const form = document.getElementById('form');
      const email = document.getElementById('email');
      const password = document.getElementById('password');
      
      form.addEventListener('submit', e => {
          e.preventDefault();
          if (checkInputs()) {
              sendData();
          }
      });
      
      function checkInputs() {
          const emailValue = email.value.trim();
          const passwordValue = password.value.trim();
          const smalll = document.getElementById('smalll');
          const smal = document.getElementById('smal');
          let emailErr = true;
          let passErr = true;
      
          if (emailValue === '') {
              setErrorFor(email, 'Email cannot be blank');
              smal.style.visibility = "visible";
          } else if (!isEmail(emailValue)) {
              setErrorFor(email, 'Not a valid email');
              smal.style.visibility = "visible";
          } else {
              setSuccessFor(email);
              smal.innerHTML = "";
              emailErr = false;
          }
      
          if (passwordValue === '') {
              setErrorFor(password, 'Password cannot be blank');
              smalll.style.visibility = "visible";
          } else if (passwordValue.length < 8) {
              setErrorFor(password, 'Password must contain at least 8 characters');
              smalll.style.visibility = "visible";
          } else {
              setSuccessFor(password);
              smalll.innerHTML = "";
              passErr = false;
          }
      
          return !(emailErr || passErr);
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
          return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
      }
      
      function sendData() {
          const emailValue = email.value.trim();
          const passwordValue = password.value.trim();
      
          fetch('/Login', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                  emails: emailValue,
                  passwords: passwordValue
              }),
          })
          .then(response => response.json())
          .then(data => {
              console.log('Response from server:', data);
      
              if (data.error) {
                  alert(data.error); // Show an error alert for incorrect password or user not found
              } else if (data.redirectUrl) {
                  window.location.href = `/${data.redirectUrl}`;
              }
          })
          .catch(error => {
              console.error('Error:', error);
              alert('Email or password may be incorrect.');
          });
      }
      
      
      function validate() {
        const usernames=document.getElementById('usernames');
        const usererror=document.getElementById('usmall');
        const name=document.getElementById('name');
        const nameerror=document.getElementById('nsmall');
        const email = document.getElementById('emails');
        const password = document.getElementById('passwords');
        const confirmPassword = document.getElementById('confirmpassword');
        const esmalError = document.getElementById('esmal');
        const passwordError = document.getElementById('psmalll');
        const confirmPasswordError = document.getElementById('smalconf');
        const security=document.getElementById('security');
        const securityError = document.getElementById('ssmal');
       
    
      
        
        let err=prr=crr=srr =nrr=urr= true;

        if(usernames.value.trim()=='')
          {
            setErrorFor(usererror,'Name cannot be blank');
            usererror.style.visibility = 'visible';
          }
          else{

            var regex=/^[a-zA-Z][a-zA-Z0-9_]{2,15}$/;
            if(regex.test(usernames.value)===false) {
              setErrorFor(usererror,'not a valid username');
              usererror.style.visibility = 'visible';
            }
            else {
              setSuccessFor(usererror);
              usererror.innerHTML='';
              urr = false;
            }   

          }




        if(name.value.trim() === '') {
          setErrorFor(nameerror,'Name cannot be blank');
         
          nameerror.style.visibility = 'visible';
          
        }
        else{
          var regex = /^[a-zA-Z\s]+$/;   
          if(regex.test(name.value)===false) {
           setErrorFor(nameerror,'not a valid name');
            nameerror.style.visibility = 'visible';
          }
          else {
            setSuccessFor(name);
            nameerror.innerHTML='';
            nrr = false;
          }
            
  
        }
      
        if (email.value.trim() === '') {
          setErrorFor(esmalError,'Email cannot be blank')
          esmalError.style.visibility = 'visible';
          
        }
        else{
          if (!isEmaill(email.value)) {
            setErrorFor(esmalError,'not a valid email')
            esmalError.style.visibility = 'visible';
            
          }
          else {
            setSuccessFor(email);
            esmalError.innerHTML='';
            err = false;
          }
        }
        
      
        if (password.value.trim() === '') {
          setErrorFor(passwordError,'Password cannot be blank');
          passwordError.style.visibility ='visible';
          
        }
        else if(password.value.length < 8) {
          setErrorFor(passwordError,'Password must contain at least 8 characters');
          passwordError.style.visibility ='visible';
          
        }
        else {
          setSuccessFor(password);
          passwordError.innerHTML='';
          prr = false;
        }
      
        if (confirmPassword.value.trim() === '') {
          setErrorFor(confirmPasswordError,'Confirmpassword cannot be blank');
          confirmPasswordError.style.visibility ='visible';
         
        }
        else{
          if (password.value.trim() !== confirmPassword.value.trim()) {
            setErrorFor(confirmPasswordError,'passwords do not match');
            confirmPasswordError.style.visibility ='visible';
            
          }
          else {
            setSuccessFor(confirmPassword);
            confirmPasswordError.innerHTML='';
            crr = false;
          }
        }
        if(security.value.trim()==='')
        {
          setErrorFor(securityError,'Security question cannot be blank');
          securityError.style.visibility ='visible';
        }
        else{
          setSuccessFor(security);
          securityError.innerHTML = '';
          srr = false;
        }
       
      
        if(( err || prr || crr||srr||nrr||urr) == true) {
          return false;
       } else {
           
           return true;
       }
      
        
      }
    
const btn = document.getElementById("licon");
const passwordEl = document.getElementById("password");

btn.addEventListener("click", () => {
  if (passwordEl.type === "password") {
    passwordEl.type = "text";
    btn.classList.replace("fa-eye", "fa-eye-slash");
    console.log(btn);
  } else {
    passwordEl.type = "password";
    btn.classList.replace("fa-eye-slash", "fa-eye");
    console.log(btn);
  }
});

const btn1 = document.getElementById("sicon");
const passwordEl1 = document.getElementById("passwords");

btn1.addEventListener("click", () => {
  if (passwordEl1.type === "password") {
    passwordEl1.type = "text";
    btn1.classList.replace("fa-eye", "fa-eye-slash");
    console.log(btn1);
  } else {
    passwordEl1.type = "password";
    btn1.classList.replace("fa-eye-slash", "fa-eye");
    console.log(btn1);
  }
});
const btn2 = document.getElementById("cicon");
const passwordEl2 = document.getElementById("confirmpassword");

btn2.addEventListener("click", () => {
  if (passwordEl2.type === "password") {
    passwordEl2.type = "text";
    btn2.classList.replace("fa-eye", "fa-eye-slash");
    console.log(btn1);
  } else {
    passwordEl2.type = "password";
    btn2.classList.replace("fa-eye-slash", "fa-eye");
    console.log(btn1);
  }
});

     
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
        
      function isEmaill(email) {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
      }










      document.getElementById('signupForm').addEventListener('submit', async function (event) {
        event.preventDefault();
  
        if (validate()) {
          const data = {
            names: document.getElementById('name').value,
            usernames: document.getElementById('usernames').value,
            emails: document.getElementById('emails').value,
            passwords: document.getElementById('passwords').value,
            confirmpassword: document.getElementById('confirmpassword').value,
            security: document.getElementById('security').value,
            drop: '' // Assuming drop is an optional field and it's not present in the form.
          };
  
          try {
            const response = await fetch('/Signupp', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(data)
            });
  
            const result = await response.json();
  
            if (response.ok) {
              alert("User registered successfully!");
              // Redirect or update UI accordingly
            } else {
              document.getElementById('responseMessage').innerText = result.error;
            }
          } catch (error) {
            console.error('Error:', error);
            document.getElementById('responseMessage').innerText = 'An error occurred while registering the user.';
          }
        }
      });