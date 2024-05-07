// document.addEventListener('DOMContentLoaded', () => {
//     const cardsContainer = document.querySelector('.cards');
//     const trashIcon = document.getElementById('trash');
//     const counter = document.getElementById('counter');
//     let count = 0;
  
//     function incrementCounter() {
//       count++;
//       counter.textContent = count;
//     }
  
    
//     trashIcon.addEventListener('dragover', (event) => {
//       event.preventDefault(); 
//     }, false);
  

//     trashIcon.addEventListener('drop', (event) => {
//       event.preventDefault(); 
//       incrementCounter(); 
  
      
//       const buttonToRemove = document.querySelector('.dragging');
//       if (buttonToRemove) {
//         buttonToRemove.parentNode.removeChild(buttonToRemove);
//       }
//     }, false);
  
    
//     const buttons = document.querySelectorAll('.ingr');
//     buttons.forEach((button) => {
//       button.addEventListener('dragstart', (e) => {
//         e.dataTransfer.setData('text/plain', button.id);
//         button.classList.add('dragging'); 
//       });
  
//       button.addEventListener('dragend', (e) => {
//         button.classList.remove('dragging'); 
//         if (!buttons.contains(e.target)) {
          
//           e.target.style.display = 'none';
//         } else {
         
//           button.style.position = '';
//           button.style.left = '';
//           button.style.top = '';
//         }
//       });
//     });
  

//     document.body.addEventListener('dragover', function (e) {
//       e.preventDefault();
//     });
  
//     // Add the drop event to the body
//     document.body.addEventListener('drop', function (e) {
//       e.preventDefault();
//       const data = e.dataTransfer.getData('text/plain');
//       const originalButton = document.getElementById(data);
  
//       if (originalButton && !originalButton.classList.contains('dragging')) {

//         const cloneButton = originalButton.cloneNode(true);
//         cloneButton.id = 'cloned-' + Date.now(); 
//         cloneButton.style.position = 'absolute';
//         cloneButton.style.left = e.clientX + 'px';
//         cloneButton.style.top = e.clientY + 'px';
//         document.body.appendChild(cloneButton);
//       }
//     });
//   });

/* user mode trial*/
let userIcon = document.querySelector('#dropdown-toggle');
let dropdownMenu = document.querySelector('#user-dropdown');
// Function to handle click events on the user icon
userIcon.addEventListener('click', function(e) {
    e.stopPropagation(); // Prevent event bubbling
    dropdownMenu.style.display = dropdownMenu.style.display === 'none' ? 'block' : 'none';
});

// Listen for click events anywhere on the page
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