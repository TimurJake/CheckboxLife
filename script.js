const checkboxItem = document.querySelectorAll('.checkbox-item');
const counterItem = document.querySelector('.counter');
const checkbar = document.querySelector('.checkbar-active');
const lastItem = document.getElementById('last-item')
const checkBarMath = 100/66;
let barMath = 0;

checkboxItem.forEach(checkboxItem => {
    checkboxItem.addEventListener('click', function() {
        checkboxItem.classList.toggle('checkbox-press');

        if(checkboxItem.classList.contains('checkbox-press')) {
            counterItem.innerText = ++counterItem.innerText;
            barMath += checkBarMath;
            checkbar.style.width = `${barMath}%`;
        } else{
            counterItem.innerText = --counterItem.innerText;
            checkbar.style.width = `${barMath}%`;
            barMath -= checkBarMath;
        }

        checkbar.style.width = `${barMath}%`;

        if(parseInt(counterItem.innerText) < 1) {
            barMath = 0;
            checkbar.style.width = `${barMath}%`;
        }
    });
});
