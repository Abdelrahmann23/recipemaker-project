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
  
    // Add the drop event to the body
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