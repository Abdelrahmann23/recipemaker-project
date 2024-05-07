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

//--------------------------------------------------------------
// forget password  validation
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
var form3=document.getElementById("forgetpassform");

      form3.addEventListener('submit', e => {
        e.preventDefault(); 
      vali();
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
       location.href="index.html";
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

const dropdowns = document.querySelectorAll('.dropdowningrediants');
dropdowns.forEach(dropdown => {
    const select = dropdown.querySelector('.selectt');
    const caret = dropdown.querySelector('.carett');
    const menu = dropdown.querySelector('.ingrediantsmenu');
    const options = dropdown.querySelectorAll('.ingrediantsmenu li'); 
    const selected = dropdown.querySelector('.selectedd');

    select.addEventListener('click', () => {
        select.classList.toggle('selectt-clicked');
        caret.classList.toggle('carett-rotate'); 
        menu.classList.toggle('ingrediantsmenu-open');
    });

    options.forEach(option => { 
        option.addEventListener('click', (event) => { 
            selected.innerText = event.target.innerText; 
            options.forEach(option => { 
                option.classList.remove('active');
            });
            event.target.classList.add('active');
            select.classList.remove('selectt-clicked');
            caret.classList.remove('carett-rotate');
            menu.classList.remove('ingrediantsmenu-open');
        });
    });
});




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
// .........................................admin add recipe js..................
function validateForm2() {
  var recipeName = document.getElementById("recipeName").value;
  var ingredients = document.getElementById("ingredients").value;
  var recipe = document.getElementById("recipe").value;

  if (recipeName === "" || ingredients === "" || recipe === "") {
      alert("Please fill out all fields!");
      return false;
  }

  // Perform additional validation if needed
  
  // If validation passes
  alert("Recipe added successfully!");
  return true;
}
// .............................................admin add ingredient................
function validateForm9() {
  var ingredientName = document.getElementById("ingredientName").value;
  var ingredientType = document.getElementById("ingredientType").value;
  var exampleRecipe = document.getElementById("exampleRecipe").value;

  if (ingredientName === "" || ingredientType === "" || exampleRecipe === "") {
      alert("Please fill out all fields!");
      return false;
  }

  // Perform additional validation if needed
  
  // If validation passes
  alert("Item added successfully!");
  return true;
}
/* --------------------------------------------------------------- */
/* -------------------------feedback----------------------- */
// Select all elements with the "i" tag and store them in a NodeList called "stars"
const stars = document.querySelectorAll('.stars i');

// Add a flag to check if a thank you message has been shown
let thankYouShown = false;

// Function to handle star activation and thank you message
function handleStarClick(starIndex) {
    // If the thank you message has already been shown, return early without doing anything
    if (thankYouShown) {
        return;
    }

    // Deactivate all stars before activating the chosen ones
    stars.forEach(star => {
        star.classList.remove('active');
    });

    // Activate the clicked star and all previous stars
    stars.forEach((otherStar, otherIndex) => {
        if (otherIndex <= starIndex) {
            otherStar.classList.add('active');
        }
    });

    // Show the thank you message with a slight delay
    setTimeout(() => {
      alert('Thank you for rating us 🙂  ');
        window.location.href = 'index.html';
    }, 300); // Adjust the delay as needed (in milliseconds)

    thankYouShown = true;
}

// Loop through the "stars" NodeList
stars.forEach((star, index) => {
    // Add an event listener that runs a function when the "click" event is triggered
    star.addEventListener('click', () => {
        handleStarClick(index);
    });

    // Disable future clicks on the same star
    star.addEventListener('click', () => {
        star.style.pointerEvents = 'none';
        // Replace the star's click event listener with a non-operational one
        star.removeEventListener('click', arguments.callee);
    });
});

/* --------------------------------------------------------------- */

// cart items
let openshopping = document.querySelector('.shopping');
let closeshopping = document.querySelector('.close');
let listcard = document.querySelector('.listcard');
let generate = document.querySelector('.generate');
let quantity = document.querySelector('.quantity');
let body = document.querySelector('body');

openshopping.addEventListener('click', () => {
    body.classList.add('active');
});

closeshopping.addEventListener('click', () => {
    body.classList.remove('active');
});

const buttons = document.querySelectorAll('.ingredient');
const countSpan = document.getElementById('countt');
const list = document.querySelector('.listcard');

let totalCount = 0;
let cartItems = [];

// Check if there are any existing items in localStorage
if (localStorage.getItem('cartItems')) {

    cartItems = JSON.parse(localStorage.getItem('cartItems'));
    totalCount = cartItems.length;

    renderCartItems();
}


function renderCartItems() {

    listcard.innerHTML = '';

    cartItems.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = item;

        const deleteIcon = document.createElement('i');
        deleteIcon.classList.add('ri-delete-bin-line');
        deleteIcon.classList.add('delete-icon');
  
        listItem.appendChild(deleteIcon);
       
        listcard.appendChild(listItem);
        
        deleteIcon.addEventListener('click', handleDelete);
    });
 
    countSpan.textContent = totalCount;
}

// Function to handle the delete action
function handleDelete(event) {
    const listItem = event.target.parentElement;
    const itemText = listItem.textContent;

    const index = cartItems.indexOf(itemText);
    if (index !== -1) {
        cartItems.splice(index, 1);

        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }
    listItem.remove();
    totalCount--;
    countSpan.textContent = totalCount;
    const correspondingButton = Array.from(buttons).find(button => button.textContent.trim() === itemText);


    if (correspondingButton) {
        correspondingButton.disabled = false;
    }
}


buttons.forEach(button => {

    button.addEventListener('click', () => {
        const ingredientText = button.textContent.trim();

          if (!cartItems.includes(ingredientText)) {
            cartItems.push(ingredientText);
            totalCount++;
            localStorage.setItem('cartItems', JSON.stringify(cartItems));

            renderCartItems();
          
          button.disabled = true;
        } 
          
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
       
        renderCartItems();
    });
});

// Loop through each ingredient button
buttons.forEach(button => {

    button.addEventListener('click', () => {
        const ingredientText = button.textContent.trim();

        if (!cartItems.includes(ingredientText)) {
            cartItems.push(ingredientText);
            totalCount++;
           
            localStorage.setItem('cartItems', JSON.stringify(cartItems));
            renderCartItems();
           
            button.disabled = true;
        }

        
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        
        renderCartItems();
    });
});

// Select generate button
const generateButton = document.getElementById('generateBtn');


generateButton.addEventListener('click', () => {
    
    const currentPagePath = window.location.pathname;

    
    if (currentPagePath.includes('appetizer1.html')) {
        window.location.href = 'const recipee.html';
    } else if (currentPagePath.includes('dessert.html')) {
       
        window.location.href = 'recipe.html';
    } else if (currentPagePath.includes('MainDishes.html')) {
       
        window.location.href = 'recipesFound.html';
    } else {
       
        window.location.href = 'default.html';
    }
});
// ----------------------------------------------------------

/* user mode trial*/
let userIcon = document.querySelector('#dropdown-toggle');
let dropdownMenu = document.querySelector('#user-dropdown');
// click events on the user icon
userIcon.addEventListener('click', function(e) {
    e.stopPropagation(); // Prevent event bubbling
    dropdownMenu.style.display = dropdownMenu.style.display === 'none' ? 'block' : 'none';
});
// clicking anywhere on the page
document.addEventListener('click', function(event) {
    let isClickInside = dropdownMenu.contains(event.target);
    if (!isClickInside) {
        dropdownMenu.style.display = 'none';
    }
});

/*dont delete*/
function validateForm() {
    var emailUserEdit = document.getElementById('emailUserEdit').value;
    var passwordUserEdit = document.getElementById('newpass').value;
    var oldpass=document.getElementById('oldpass').value;
    // Email validation
    var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(emailUserEdit) && emailUserEdit!=="") {
        document.getElementById('emailError').innerHTML = "Please enter a valid email address";
        return false;
    } else {
    document.getElementById('emailError').innerHTML = "";
    }
    
    if (passwordUserEdit.length < 8) {
        document.getElementById('passwordError').innerHTML = "Password must be at least 8 characters long";
        return false;
    } 
    if(oldpass==passwordUserEdit){
        document.getElementById('passwordError').innerHTML="New password can't be the same as Old one.";
        return false;
    }else {
    document.getElementById('passwordError').innerHTML = "";
    
    }
    
    return true;

}

/* EDIT USERS FOR ADMIN*/
document.addEventListener("DOMContentLoaded", function() {
    const userList = document.getElementById("userList");
    const selectedUser = document.getElementById("selecteduser");
    const editUserForm = document.getElementById("editUserFormAdmin");
    const submitMessage = document.getElementById("submitMessage");

    // Event listener for when a user is clicked(not workinggggg)
    userList.addEventListener("click", function(e) {
        if (e.target.tagName === "LI") {
            const username = e.target.dataset.username;
            selectedUser.textContent = username;
            document.getElementById("username").value = username;
            document.getElementById("emailUserEdit").value = ""; // Clear email input
            submitMessage.textContent = ""; // Clear any previous submit message
        }
    });

    // Event listener for form submission
    editUserForm.addEventListener("submit", function(e) {
        e.preventDefault(); // Prevent default form submission behavior
        
        // Perform form validation
        if (validateForm()) {
            // If validation passes, show submit message
            submitMessage.textContent = "Thank you for submitting!";
        }
    });
});

/*ingredient admin edit*/
function validateIngredientForm() {
    var ingredientNameEdit = document.getElementById('ingredientNameEdit').value.trim();
    var ingredientNewName = document.getElementById('ingredientNewName').value.trim();

    // Check if the old name is in the list
    var ingredientList = Array.from(document.querySelectorAll('#ingredientList li')).map(li => li.textContent.trim());
    if (!ingredientList.includes(ingredientNameEdit)) {
        document.getElementById('oldIngNameError').innerHTML = "No such ingredient";
        return false;
    } else {
        document.getElementById('oldIngNameError').innerHTML = "";
    }

    // Check if the new name is already in the list
    if (ingredientList.includes(ingredientNewName)) {
        document.getElementById('NewIngNameError').innerHTML = "Ingredient already exists";
        return false;
    } else {
        document.getElementById('NewIngNameError').innerHTML = "";
    }
    

    document.getElementById('ingredientImageError').innerHTML = "";

    return true;
}
