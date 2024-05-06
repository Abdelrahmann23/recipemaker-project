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



// const loginText = document.querySelector(".title-text .login");
//       const loginForm = document.querySelector("form.login");
//       const loginBtn = document.querySelector("label.login");
//       const signupBtn = document.querySelector("label.signup");
//       const signupLink = document.querySelector("form .signup-link a");
//       signupBtn.onclick = (()=>{
//         loginForm.style.marginLeft = "-50%";
//         loginText.style.marginLeft = "-50%";
//       });
//       loginBtn.onclick = (()=>{
//         loginForm.style.marginLeft = "0%";
//         loginText.style.marginLeft = "0%";
//       });
//       signupLink.onclick = (()=>{
//         signupBtn.click();
//         return false;
//       });
//       const form = document.getElementById('form');
//       const email = document.getElementById('email');
//       const password = document.getElementById('password');
   
//       form.addEventListener('submit', e => {
//         e.preventDefault(); 
//         checkInputs();
       
//       });

        
      
    
    
      // function checkInputs() {
     
       
        
      
      //   const emailValue = email.value.trim();
      //   const passwordValue = password.value.trim();
      //   var smalll=document.getElementById('smalll');
      //   var smal=document.getElementById('smal');
      //   var emailErr=passErr =true;
        
      //   if(emailValue === '' ) {
      //     setErrorFor(email, 'Email cannot be blank');
      //     smal.style.visibility="visible";
          
      //   } else if (!isEmaill(emailValue)) {
      //     smal.style.visibility="visible";
      //     setErrorFor(email, 'Not a valid email');
         

          
      //   } 
      //   else {
      //     setSuccessFor(email);
      //     smal.innerHTML="";
      //    emailErr = false;
      //   }
        
      //   if(passwordValue === '') {
      //     smalll.style.visibility="visible";
      //     setErrorFor(password, 'Password cannot be blank');
      //   } 
      //   else if(passwordValue.length < 8) {
      //     smalll.style.visibility="visible";
      //     setErrorFor(password, 'Password must contain at least 8 characters');
          
      //   }
      //   else{
      //     setSuccessFor(password);
      //     smalll.innerHTML="";
      //     passErr = false;
      //   }
      //   if (!(emailErr || passErr)) {
      //     if (emailValue === 'mohamed2202505@miuegypt.edu.eg') {
      //       // Redirect to a special admin page
      //       window.location.href = "forgetpass.html";
      //     } else {
      //       // Redirect to the normal nav page for other users
      //       window.location.href = "nav.html";
      //     }
      //     return true; // Form is valid
      //   }
      
      //   return false; // Form is invalid
        
       
      // }
    
      // function setErrorFor(input, message) {
      //   const formControl = input.parentElement;
      //   const small = formControl.querySelector('small');
      //   formControl.className = 'form-control error';
      //   small.innerText = message;
      // }
      
      // function setSuccessFor(input) {
      //   const formControl = input.parentElement;
      //   formControl.className = 'form-control success';
      // }
        
      // function isEmaill(email) {
      //   return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
      // }
      
      
//       function validate() {
//         const name=document.getElementById('name');
//         const nameerror=document.getElementById('nsmall');
//         const email = document.getElementById('emails');
//         const password = document.getElementById('passwords');
//         const confirmPassword = document.getElementById('confirmpassword');
//         const esmalError = document.getElementById('esmal');
//         const passwordError = document.getElementById('psmalll');
//         const confirmPasswordError = document.getElementById('smalconf');
//         const security=document.getElementById('security');
//         const securityError = document.getElementById('ssmal');
       
    
      
        
//         let err=prr=crr=srr =nrr= true;
//         if(name.value.trim() === '') {
//           setErrorFor(nameerror,'Name cannot be blank');
         
//           nameerror.style.visibility = 'visible';
          
//         }
//         else{
//           var regex = /^[a-zA-Z\s]+$/;   
//           if(regex.test(name.value)===false) {
//            setErrorFor(nameerror,'not a valid name');
//             nameerror.style.visibility = 'visible';
//           }
//           else {
//             setSuccessFor(name);
//             nameerror.innerHTML='';
//             nrr = false;
//           }
            
  
//         }
      
//         if (email.value.trim() === '') {
//           setErrorFor(esmalError,'Email cannot be blank')
//           esmalError.style.visibility = 'visible';
          
//         }
//         else{
//           if (!isEmaill(email.value)) {
//             setErrorFor(esmalError,'not a valid email')
//             esmalError.style.visibility = 'visible';
            
//           }
//           else {
//             setSuccessFor(email);
//             esmalError.innerHTML='';
//             err = false;
//           }
//         }
        
      
//         if (password.value.trim() === '') {
//           setErrorFor(passwordError,'Password cannot be blank');
//           passwordError.style.visibility ='visible';
          
//         }
//         else if(password.value.length < 8) {
//           setErrorFor(passwordError,'Password must contain at least 8 characters');
//           passwordError.style.visibility ='visible';
          
//         }
//         else {
//           setSuccessFor(password);
//           passwordError.innerHTML='';
//           prr = false;
//         }
      
//         if (confirmPassword.value.trim() === '') {
//           setErrorFor(confirmPasswordError,'Confirmpassword cannot be blank');
//           confirmPasswordError.style.visibility ='visible';
         
//         }
//         else{
//           if (password.value.trim() !== confirmPassword.value.trim()) {
//             setErrorFor(confirmPasswordError,'passwords do not match');
//             confirmPasswordError.style.visibility ='visible';
            
//           }
//           else {
//             setSuccessFor(confirmPassword);
//             confirmPasswordError.innerHTML='';
//             crr = false;
//           }
//         }
//         if(security.value.trim()==='')
//         {
//           setErrorFor(securityError,'Security question cannot be blank');
//           securityError.style.visibility ='visible';
//         }
//         else{
//           setSuccessFor(security);
//           securityError.innerHTML = '';
//           srr = false;
//         }
       
      
//         if(( err || prr || crr||srr||nrr) == true) {
//           return false;
//        } else {
           
//            return true;
//        }
      
        
//       }
    
// const btn = document.getElementById("licon");
// const passwordEl = document.getElementById("password");

// btn.addEventListener("click", () => {
//   if (passwordEl.type === "password") {
//     passwordEl.type = "text";
//     btn.classList.replace("fa-eye", "fa-eye-slash");
//     console.log(btn);
//   } else {
//     passwordEl.type = "password";
//     btn.classList.replace("fa-eye-slash", "fa-eye");
//     console.log(btn);
//   }
// });

// const btn1 = document.getElementById("sicon");
// const passwordEl1 = document.getElementById("passwords");

// btn1.addEventListener("click", () => {
//   if (passwordEl1.type === "password") {
//     passwordEl1.type = "text";
//     btn1.classList.replace("fa-eye", "fa-eye-slash");
//     console.log(btn1);
//   } else {
//     passwordEl1.type = "password";
//     btn1.classList.replace("fa-eye-slash", "fa-eye");
//     console.log(btn1);
//   }
// });
// const btn2 = document.getElementById("cicon");
// const passwordEl2 = document.getElementById("confirmpassword");

// btn2.addEventListener("click", () => {
//   if (passwordEl2.type === "password") {
//     passwordEl2.type = "text";
//     btn2.classList.replace("fa-eye", "fa-eye-slash");
//     console.log(btn1);
//   } else {
//     passwordEl2.type = "password";
//     btn2.classList.replace("fa-eye-slash", "fa-eye");
//     console.log(btn1);
//   }
// });

//       var form3=document.getElementById("forgetpassform");

//       form3.addEventListener('submit', e => {
//         e.preventDefault(); 
//         var Valid = vali();
//         if (Valid) {
//           window.location.href = "nav.html";
//         }
//       });

//      function vali(){
//       const ans=document.getElementById('forget');
//       const anserror=document.getElementById('forgeterror');
//       let arr=true;
//       if(ans.value.trim() === '') {
//         setErrorFor(anserror,'security question cannot be blank');
//         anserror.style.visibility = 'visible';
       
//       }
//       else {
//         var regex = /^[a-zA-Z\s]+$/;                
//         if(regex.test(ans.value) === false) {
//             setErrorFor(anserror,"not a valid name")
//             anserror.style.visibility = 'visible';
            
//         } else {
//           setSuccessFor(ans);
//             anserror.innerHTML = '';
//             arr=false;
//         }
//     }

//     if(( arr) == true) {
//       return false;
//    } else {
       
//        return true;
//    }
//      }
     
//      function setErrorFor(input, message) {
//         const formControl = input.parentElement;
//         const small = formControl.querySelector('small');
//         formControl.className = 'form-control error';
//         small.innerText = message;
//       }
      
//       function setSuccessFor(input) {
//         const formControl = input.parentElement;
//         formControl.className = 'form-control success';
//       }
        
//       function isEmaill(email) {
//         return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
//       }
      
/* ------------------------------------------------------------ */
/* Chicken stir fry picture*/

document.addEventListener("DOMContentLoaded", function() {
  const imageContainer = document.querySelector(".image-container6");
  const overlay = document.querySelector(".overlay6");
  const image = document.querySelector(".image-container6 img");

  overlay.addEventListener("click", function() {
      // Toggle between two images
      if (image.src.includes("chickStirFryIng.jpeg")) {
          image.style.opacity=0;
          setTimeout(function(){
              image.src = "ChickStirFry.jpg";
              image.style.opacity=1;
          },200);
      } else if(image.src.includes("ChickStirFry.jpg")){
          image.style.opacity=0;
          setTimeout(function(){
              image.src = "chickStirFryIng.jpeg";   
              image.style.opacity=1;
          },200);
      }
  });
});

//--------------------------------------------------------

/*BeefVegCurry recipe pic*/
document.addEventListener("DOMContentLoaded", function() {
  const imageContainer = document.querySelector(".image-container11");
  const overlay = document.querySelector(".overlay11");
  const image = document.querySelector(".image-container11 img");

  overlay.addEventListener("click", function() {
      // Toggle between two images
      if (image.src.includes("BeefVegCurryIng1.jpeg")) {
          image.style.opacity=0;
          setTimeout(function(){
              image.src = "BeefVegCurry.jpg";
              image.style.opacity=1;
          },200);
      } else if(image.src.includes("BeefVegCurry.jpg")){
          image.style.opacity=0;
          setTimeout(function(){
              image.src = "BeefVegCurryIng1.jpeg";   
              image.style.opacity=1;
          },200);
      }
  });
});


// ------------------------------------------------------


//     /*Stuffed shells recipe pic*/
    document.addEventListener("DOMContentLoaded", function() {
    const imageContainer = document.querySelector(".image-container12");
    const overlay = document.querySelector(".overlay12");
    const image = document.querySelector(".image-container12 img");

    overlay.addEventListener("click", function() {
        // Toggle between two images
        if (image.src.includes("StuffedshellsIng.jpeg")) {
            image.style.opacity=0;
            setTimeout(function(){
                image.src = "Stuffed Shells.jpg";
                image.style.opacity=1;
            },200);
        } else if(image.src.includes("Stuffed Shells.jpg")){
            image.style.opacity=0;
            setTimeout(function(){
                image.src = "StuffedshellsIng.jpeg";   
                image.style.opacity=1;
            },200);
        }
    });
});
/* ------------------------------------------------------------ */
// ....................................................ceaser salad inspiration recipee1 js............................
document.addEventListener("DOMContentLoaded", function() {
  const imageContainer = document.querySelector(".image-container1");
  const overlay = document.querySelector(".overlay1");
  const image = document.querySelector(".image-container1 img");

  overlay.addEventListener("click", function() {
      // Toggle between two images
      if (image.src.includes("ceaser%20ing.jpg")) {
          image.src = "ceaser.jpg";
      } else {
          image.src = "ceaser%20ing.jpg";
      }
  });
});
/* ------------------------------------------------------------ */
//.............................shrimp inspiration recipee2 js.........................
document.addEventListener("DOMContentLoaded", function() {
  const imageContainer = document.querySelector(".image-container4");
  const overlay = document.querySelector(".overlay4");
  const image = document.querySelector(".image-container4 img");

  overlay.addEventListener("click", function() {
      // Toggle between two images
      if (image.src.includes("shrimps1.jpg")) {
          image.src = "shrimpp.png";
      } else {
          image.src = "shrimps1.jpg";
      }
  });
});
/* ------------------------------------------------------------ */
//.......................greek salad inspiration recipee3 js.....................
document.addEventListener("DOMContentLoaded", function() {
  const imageContainer = document.querySelector(".image-container2");
  const overlay = document.querySelector(".overlay2");
  const image = document.querySelector(".image-container2 img");

  overlay.addEventListener("click", function() {
      // Toggle between two images
      if (image.src.includes("greeksalad.jpg")) {
          image.src = "greeeeeek,jpg.jpg";
      } else {
          image.src = "greeksalad.jpg";
      }
  });
});
/* ------------------------------------------------------------ */
//..............................french fries recipee appetizer.........................................

document.addEventListener("DOMContentLoaded", function() {
  const imageContainer = document.querySelector(".image-container3");
  const overlay = document.querySelector(".overlay3");
  const image = document.querySelector(".image-container3 img");

  overlay.addEventListener("click", function() {
      // Toggle between two images
      if (image.src.includes("french-fries-9.jpg")) {
          image.src = "fries.jpg";
      } else {
          image.src = "french-fries-9.jpg";
      }
  });
});
/* ------------------------------------------------------------ */
//..............................................bruschetttaa recipee appetizer..................................

document.addEventListener("DOMContentLoaded", function() {
  const imageContainer = document.querySelector(".image-container5");
  const overlay = document.querySelector(".overlay5");
  const image = document.querySelector(".image-container5 img");

  overlay.addEventListener("click", function() {
      // Toggle between two images
      if (image.src.includes("bruschetaa1.png")) {
          image.src = "bruschetta.jpg";
      } else {
          image.src = "bruschetaa1.png";
      }
  });
});
/* ------------------------------------------------------------ */
/* ------------------molten cake recipe---------------------------- */
document.addEventListener("DOMContentLoaded", function() {
  const imageContainer = document.querySelector(".image-container8");
  const overlay = document.querySelector(".overlay8");
  const image = document.querySelector(".image-container8 img");

  overlay.addEventListener("click", function() {
     
      if (image.src.includes("Chocolate-Lava-Cake-Ingredients.jpg")) {
          image.style.opacity=0;
          setTimeout(function(){
              image.src="Molten Lava Cake for Two [Video].jpg"
              // image.src = "";
              image.style.opacity=1;
          },200);
      } else {
          image.style.opacity=0;
          setTimeout(function(){
              image.src = "Chocolate-Lava-Cake-Ingredients.jpg";   
              image.style.opacity=1;
          },200);
      }
  });
});

/* ------------------------------------------------------------ */
/* ------------------------cream brule------------------------ */
document.addEventListener("DOMContentLoaded", function() {
  const imageContainer = document.querySelector(".image-container7");
  const overlay = document.querySelector(".overlay7");
  const image = document.querySelector(".image-container7 img");

  overlay.addEventListener("click", function() {
    
      if (image.src.includes("creme-brulee-ingredients-.jpg")) {
          image.style.opacity=0;
          setTimeout(function(){
              image.src="Creme-Brulee-Recipe.jpg"
              // image.src = "";
              image.style.opacity=1;
          },200);
      } else {
          image.style.opacity=0;
          setTimeout(function(){
              image.src = "creme-brulee-ingredients-.jpg";   
              image.style.opacity=1;
          },200);
      }
  });
});

/* ------------------------------------------------------------ */
/* ------------------------tiramisu------------------------ */
document.addEventListener("DOMContentLoaded", function() {
  const imageContainer = document.querySelector(".image-container9");
  const overlay = document.querySelector(".overlay9");
  const image = document.querySelector(".image-container9 img");

  overlay.addEventListener("click", function() {
      // Toggle between two images
      if (image.src.includes("Tiramisu-Ingredients-for-Tiramisu.jpg")) {
          image.style.opacity=0;
          setTimeout(function(){
              image.src="homemade-tiramisu-2.jpg"

              image.style.opacity=1;
          },200);
      } else {
          image.style.opacity=0;
          setTimeout(function(){
              image.src = "Tiramisu-Ingredients-for-Tiramisu.jpg";   
              image.style.opacity=1;
          },200);
      }
  });
});
/* ------------------------------------------------------------ */
/* ------------------------cheese cake------------------------ */
document.addEventListener("DOMContentLoaded", function() {
  const imageContainer = document.querySelector(".image-container10");
  const overlay = document.querySelector(".overlay10");
  const image = document.querySelector(".image-container10 img");

  overlay.addEventListener("click", function() {
      // Toggle between two images
      if (image.src.includes("creamy-baked-cheesecake-.jpg")) {
          image.style.opacity=0;
          setTimeout(function(){
              image.src="The Best New York-Style Cheesecake - Baker by Nature.jpg"
              
              image.style.opacity=1;
          },200);
      } else {
          image.style.opacity=0;
          setTimeout(function(){
              image.src = "creamy-baked-cheesecake-.jpg";   
              image.style.opacity=1;
          },200);
      }
  });
});

/* ------------------------------------------------------------ */
/* ------------------------cookies------------------------ */
document.addEventListener("DOMContentLoaded", function() {
  const imageContainer = document.querySelector(".image-container13");
  const overlay = document.querySelector(".overlay13");
  const image = document.querySelector(".image-container13 img");

  overlay.addEventListener("click", function() {
     
      if (image.src.includes("chocolate-chip-cookies-mfs-step.jpg")) {
          image.style.opacity=0;
          setTimeout(function(){
              image.src="BAKERY-STYLE-CHOCOLATE-CHIP-COOKIES-9-637x637-1.jpg"
          
              image.style.opacity=1;
          },200);
      } else {
          image.style.opacity=0;
          setTimeout(function(){
              image.src = "chocolate-chip-cookies-mfs-step.jpg";   
              image.style.opacity=1;
          },200);
      }
  });
});
/* ------------------------------------------------------------ */

/* delete user */
document.addEventListener('DOMContentLoaded', () => {
    const trashIcon = document.getElementById('trashh');
    const counter = document.getElementById('counterr');
    let count = 0;
  
    
    function incrementCounter() {
      count++;
      counter.textContent = count;
    }
  
   
    trashIcon.addEventListener('dragover', (event) => {
      event.preventDefault(); 
    }, false);
  

    trashIcon.addEventListener('drop', (event) => {
      event.preventDefault(); 
      incrementCounter(); 
  
    
      const data = event.dataTransfer.getData('text/plain');
      const buttonToRemove = document.getElementById(data);
      if (buttonToRemove) {
        buttonToRemove.remove();
      }
    }, false);
  

    const buttons = document.querySelectorAll('.ingri');
    buttons.forEach((button) => {
      button.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', button.id);
        button.classList.add('dragging'); 
      });
  
      button.addEventListener('dragend', (e) => {
        button.classList.remove('dragging'); 
        if (!buttons.contains(e.target) && e.target.classList.contains('ingri')) {

          e.target.remove();
        }
      });
    });
  

    document.body.addEventListener('dragover', function (e) {
      e.preventDefault();
    }, false);
  });


// -------------------------------------------

/*delete ingredient*/
document.addEventListener('DOMContentLoaded', () => {
    const cardsContainer = document.querySelector('.cards');
    const trashIcon = document.getElementById('trash');
    const counter = document.getElementById('counter');
    let count = 0;
  
    function incrementCounter() {
      count++;
      counter.textContent = count;
    }
  
    
    trashIcon.addEventListener('dragover', (event) => {
      event.preventDefault(); 
    }, false);
  

    trashIcon.addEventListener('drop', (event) => {
      event.preventDefault(); 
      incrementCounter(); 
  
      
      const buttonToRemove = document.querySelector('.dragging');
      if (buttonToRemove) {
        buttonToRemove.parentNode.removeChild(buttonToRemove);
      }
    }, false);
  
    
    const buttons = document.querySelectorAll('.ingr');
    buttons.forEach((button) => {
      button.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', button.id);
        button.classList.add('dragging'); 
      });
  
      button.addEventListener('dragend', (e) => {
        button.classList.remove('dragging'); 
        if (!buttons.contains(e.target)) {
          
          e.target.style.display = 'none';
        } else {
         
          button.style.position = '';
          button.style.left = '';
          button.style.top = '';
        }
      });
    });
  

    document.body.addEventListener('dragover', function (e) {
      e.preventDefault();
    });
  
   
    document.body.addEventListener('drop', function (e) {
      e.preventDefault();
      const data = e.dataTransfer.getData('text/plain');
      const originalButton = document.getElementById(data);
  
      if (originalButton && !originalButton.classList.contains('dragging')) {

        const cloneButton = originalButton.cloneNode(true);
        cloneButton.id = 'cloned-' + Date.now(); 
        cloneButton.style.position = 'absolute';
        cloneButton.style.left = e.clientX + 'px';
        cloneButton.style.top = e.clientY + 'px';
        document.body.appendChild(cloneButton);
      }
    });
  });


/* --------------------------------------------------------------- */
/* -------------------------view ingredinats----------------------- */

// const dropdowns1 = document.querySelectorAll('dropdowningrediants');
// dropdowns1.forEach(dropdowningrediants => {
//     const select1 = dropdowningrediants.querySelector('.select');
//     const caret1 = dropdowningrediants.querySelector('.caret');
//     const menu1 = dropdowningrediants.querySelector('.ingrediantsmenu');
//     const options1 = dropdowningrediants.querySelectorAll('.ingrediantsmenu li'); 
//     const selected1 = dropdowningrediants.querySelector('.selected');

//     select1.addEventListener('click', () => {
//         select1.classList.toggle('select-clicked');
//         caret1.classList.toggle('caret-rotate'); 
//         menu1.classList.toggle('ingrediantsmenu-open');
//     });

//     options1.forEach(option => { 
//         option1.addEventListener('click', (event) => { 
//             selected1.innerText = event.target.innerText; 
//             options1.forEach(option => { 
//                 option.classList.remove('active');
//             });
//             event1.target.classList.add('active');
//             select1.classList.remove('select-clicked');
//             caret1.classList.remove('caret-rotate');
//             menu1.classList.remove('ingrediantsmenu-open');
//         });
//     });
// });

// ........................................add js of adding users for admin...........................
function togglePasswordVisibility(inputId) {
  console.log("togglePasswordVisibility function called");
  var passwordInput = document.getElementById(inputId);
  var toggleButton = passwordInput.nextElementSibling;

  if (passwordInput.type === "password") {
      passwordInput.type = "text";
      toggleButton.innerHTML = '<i class="fas fa-eye-slash"></i>';
  } else {
      passwordInput.type = "password";
      toggleButton.innerHTML = '<i class="fas fa-eye"></i>';
  }
}

function validateForm1() {
  console.log("validateForm function called");
  var fullname = document.getElementById("fullname").value;
  var username = document.getElementById("username").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var confirm_password = document.getElementById("confirm_password").value;

  if (fullname === "" || username === "" || email === "" || password === "" || confirm_password === "") {
      alert("All fields are required!");
      return false;
  }

  if (password !== confirm_password) {
      alert("Passwords do not match!");
      return false;
  }

  alert("User added successfully!"); // Add this alert message

  return true;
}

