

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

