const dropdowns1 = document.querySelectorAll('dropdowningrediants');
dropdowns1.forEach(dropdowningrediants => {
    const select1 = dropdowningrediants.querySelector('.select');
    const caret1 = dropdowningrediants.querySelector('.caret');
    const menu1 = dropdowningrediants.querySelector('.ingrediantsmenu');
    const options1 = dropdowningrediants.querySelectorAll('.ingrediantsmenu li'); 
    const selected1 = dropdowningrediants.querySelector('.selected');

    select1.addEventListener('click', () => {
        select1.classList.toggle('select-clicked');
        caret1.classList.toggle('caret-rotate'); 
        menu1.classList.toggle('ingrediantsmenu-open');
    });

    options1.forEach(option => { 
        option1.addEventListener('click', (event) => { 
            selected1.innerText = event.target.innerText; 
            options1.forEach(option => { 
                option.classList.remove('active');
            });
            event1.target.classList.add('active');
            select1.classList.remove('select-clicked');
            caret1.classList.remove('caret-rotate');
            menu1.classList.remove('ingrediantsmenu-open');
        });
    });
});
