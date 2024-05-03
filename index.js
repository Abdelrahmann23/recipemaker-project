let intro=document.querySelector('.intro');
let logo= document.querySelector('.logo-header');
let logospan=document.querySelectorAll('.logo');
window.addEventListener('DOMContentLoaded',()=>{
    setTimeout(()=>{
        logospan.forEach((span, idx)=>
        {
            setTimeout(()=>{
                span.classList.add('active');
            },(idx + 1) *400)
        });
        
        setTimeout(()=>
    {
        logospan.forEach((span,idx)=>{
            setTimeout(()=>{
                span.classList.remove('active');
                span.classList.add('fade');
            },(idx+1)*50)
        })
    },2000);
    setTimeout(()=>{
        intro.style.top='-100vh';
    },2300)

    })
    
});
document.addEventListener('DOMContentLoaded', function() {
    var seeMoreButton = document.querySelector('.seemore');
    var containerElement = document.querySelector('.container');

    if (seeMoreButton && containerElement) {
        seeMoreButton.addEventListener('click', function() {
            // Toggle the 'active' class on the container
            containerElement.classList.toggle('active');
            // Update the button text based on the current state
            var isActive = containerElement.classList.contains('active');
            seeMoreButton.textContent = isActive ? 'View Less' : 'View More';
        });
    } else {
        console.error('Could not find the .seemore button or .container element.');
    }
});



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
        checkInputs();
       
      });

        
      
    
    
      function checkInputs() {
     
       
        
      
        const emailValue = email.value.trim();
        const passwordValue = password.value.trim();
        var smalll=document.getElementById('smalll');
        var smal=document.getElementById('smal');
        var emailErr=passErr =true;
        
        if(emailValue === '' ) {
          setErrorFor(email, 'Email cannot be blank');
          smal.style.visibility="visible";
          
        } else if (!isEmaill(emailValue)) {
          smal.style.visibility="visible";
          setErrorFor(email, 'Not a valid email');
         

          
        } 
        else {
          setSuccessFor(email);
          smal.innerHTML="";
         emailErr = false;
        }
        
        if(passwordValue === '') {
          smalll.style.visibility="visible";
          setErrorFor(password, 'Password cannot be blank');
        } 
        else if(passwordValue.length < 8) {
          smalll.style.visibility="visible";
          setErrorFor(password, 'Password must contain at least 8 characters');
          
        }
        else{
          setSuccessFor(password);
          smalll.innerHTML="";
          passErr = false;
        }
        if (!(emailErr || passErr)) {
          if (emailValue === 'mohamed2202505@miuegypt.edu.eg') {
            // Redirect to a special admin page
            window.location.href = "forgetpass.html";
          } else {
            // Redirect to the normal nav page for other users
            window.location.href = "nav.html";
          }
          return true; // Form is valid
        }
      
        return false; // Form is invalid
        
       
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
        
      function isEmaill(email) {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
      }
      
      
      function validate() {
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
       
    
      
        
        let err=prr=crr=srr =nrr= true;
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
       
      
        if(( err || prr || crr||srr||nrr) == true) {
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

      var form3=document.getElementById("forgetpassform");

      form3.addEventListener('submit', e => {
        e.preventDefault(); 
        var Valid = vali();
        if (Valid) {
          window.location.href = "nav.html";
        }
      });

     function vali(){
      const ans=document.getElementById('forget');
      const anserror=document.getElementById('forgeterror');
      let arr=true;
      if(ans.value.trim() === '') {
        setErrorFor(anserror,'security question cannot be blank');
        anserror.style.visibility = 'visible';
       
      }
      else {
        var regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(ans.value) === false) {
            setErrorFor(anserror,"not a valid name")
            anserror.style.visibility = 'visible';
            
        } else {
          setSuccessFor(ans);
            anserror.innerHTML = '';
            arr=false;
        }
    }

    if(( arr) == true) {
      return false;
   } else {
       
       return true;
   }
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
        
      function isEmaill(email) {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
      }
      
