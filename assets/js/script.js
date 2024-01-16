const accordionBtns = document.querySelectorAll('.accordion-btn');


accordionBtns.forEach(btn =>{
    btn.addEventListener('click', function(){
        this.classList.toggle('active')
        const accordionDetay =this.nextElementSibling
        const plus = this.querySelector('.plus-btn-icon')
        const minus = this.querySelector('.minus-btn-icon')


        if(accordionDetay.style.maxHeight){
            accordionDetay.style.maxHeight=null
            plus.style.display='block'
            minus.style.display='none'
        } else{
            accordionDetay.style.maxHeight = accordionDetay.scrollHeight +
            'px'
            plus.style.display='none'
            minus.style.display='block'

        }
    })
} )