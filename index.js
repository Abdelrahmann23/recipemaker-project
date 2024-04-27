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
document.addEventListener('DOMContentLoaded', function() {
    var myImage = document.getElementById('ChickenImages');
    myImage.addEventListener('click', function() {
        var currentSrc = myImage.getAttribute('src');
        var alternateSrc = 'ChickStirFry1.jpeg';
        if (currentSrc === 'ChickStirFry.jpg') {
            myImage.style.opacity = 0;
            setTimeout(function() {
                myImage.setAttribute('src', alternateSrc);
                myImage.style.opacity = 1;
            }, 500);
        } else {
            myImage.style.opacity = 0;
            setTimeout(function() {
                myImage.setAttribute('src', 'ChickStirFry.jpg');
                myImage.style.opacity = 1; 
            }, 500); 
        }
    });
});