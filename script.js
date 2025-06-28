const meetCard = [...document.querySelectorAll('.meet__card')],
    meetCardDesc = [...document.querySelectorAll('.meet__card__desc')],
    meetCardBtn1 = [...document.querySelectorAll('.card__btn_img1')],
    contactInput = [...document.querySelectorAll('.contact__form__input')];

    
    


// Cards 

meetCardBtn1.forEach((item, idx) => {
    item.addEventListener('click', function () {
        if (meetCard[idx].classList.contains('active')) {
            meetCard[idx].classList.remove('active')
            meetCardDesc[idx].classList.add('active')
            meetCardBtn1[idx].setAttribute('src', './img/x.png');
        
        } else {
            meetCard[idx].classList.add('active')
            meetCardDesc[idx].classList.remove('active')
            meetCardBtn1[idx].setAttribute('src', './img/plus-btn.png');

        }
    })


})

// Form

contactInput.forEach(item => {
    console.log(item);
    
})



