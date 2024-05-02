let icons = document.querySelectorAll('.icon img');
let answers = document.querySelectorAll('.answer');
let questions = document.querySelectorAll('.question');
icons.forEach((icon,index) => (icon.parentElement).parentElement.addEventListener('click', () =>{
    if ((icon.src).includes('plus')) {
        icon.src = `assets/images/icon-minus.svg`;
        document.querySelector(`.ans${index+1}`).style.transition = 'all 1s ease-in-out';
        document.querySelector(`.ans${index+1}`).style.display = 'block';
    }
    else{
        icon.src = `assets/images/icon-plus.svg`;
        document.querySelector(`.ans${index+1}`).style.display = 'none';
    }
}));