const meetCard = [...document.querySelectorAll('.meet__card')],
      meetCardDesc = [...document.querySelectorAll('.meet__card__desc')],
      meetCardBtn1 = [... document.querySelectorAll('.card__btn_img1')],
      meetCardBtn2 = [...document.querySelectorAll('.card__btn_img2')];

      meetCardBtn1.forEach((item, idx) => {
       item.addEventListener('click', function(){
           if (meetCard[idx].classList.contains('active')) {
               meetCard[idx].classList.remove('active')
               meetCardDesc[idx].classList.add('active')
               meetCardBtn1[idx].classList.remove('active')
               meetCardBtn2[idx].classList.add('active')
           }else{
             meetCard[idx].classList.add('active')
               meetCardDesc[idx].classList.remove('active')
               meetCardBtn1[idx].classList.add('active')
               meetCardBtn2[idx].classList.remove('active')
           }
       })

        
      })

   
