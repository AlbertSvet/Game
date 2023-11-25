new Swiper('.game__slider',{
    navigation: {
        nextEl: '.salon__right',
        prevEl: '.salon__left',
    },
     
     loop:true,
     
     speed:1000,
     
    
      

    breakpoints: {
        0: {
            slidesPerView:1,
            
        },
        480: {
            slidesPerView:1,
            centeredSlides: false,
             spaceBetween:0
            
        },
        768: {
            spaceBetween:20,
            slidesPerView:2,
           
        }
        

        
       

    },

});
new Swiper('.Newly__slider',{
    navigation: {
        nextEl: '.Newly__arrow-right',
        prevEl: '.Newly__arrow-left',
    },
     slidesPerView:2,
     loop:true,
     spaceBetween:25,
     speed:500,
     centeredSlides: true,

    breakpoints: {
        320: {
            slidesPerView:1,
            
        },
        480: {
            slidesPerView:1,
            spaceBetween:0,
            
        },
        768: {
            slidesPerView:3,
            spaceBetween:20,
        },
        992: {
            slidesPerView:3,
            spaceBetween:25,
          
        }

        
       

    },

});
new Swiper('.experience__slider',{
    navigation: {
        nextEl: '.Newly__arrow-right',
        prevEl: '.Newly__arrow-left',
    },
     slidesPerView:2,
     loop:true,
     spaceBetween:20,
     speed:600,
     centeredSlides: true,
    
    
     
   
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        dynamicBullets: true,
        
        
    }, 
    // autoplay: {
    //     delay: 1000,

    // }, 

    breakpoints: {
        0: {
            slidesPerView:1,
          
            
        },
        480: {
            slidesPerView:1,
            
            
        },
        768: {
            slidesPerView:2,
        }
        

        
       

    },

});


// =============================================================================================================//
// Бургер-меню
const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.header__menu');
const lis = document.querySelector('.menu__body');
const body = document.querySelector('body');

    iconMenu.addEventListener("click", () => {
        iconMenu.classList.toggle('active');   
        menuBody.classList.toggle('active');
        lis.classList.toggle('active');
        body.classList.toggle('lock');
       
    });

    menuBody.addEventListener('click', (e) =>{
        if(e.target == menuBody ) {
            menuBody.classList.remove('active');
            iconMenu.classList.remove('active');   
            lis.classList.remove('active');
            body.classList.remove('lock');
        }
    })
    


// =============================================================================================================//



// =============================================================================================================//
// Анимация при скролле
window.addEventListener('load', ()=>{


    const animItems = document.querySelectorAll('._anim-items');

    if (animItems.length > 0) {
        window.addEventListener('scroll', animOnScroll);
        function animOnScroll() {
            for (let index = 0; index < animItems.length; index++) {
                const animItem = animItems[index];
                const animItemHeight = animItem.offsetHeight;
                const animItemOffset = offset(animItem).top;
                const animStart = 4;

                let animItemPoint = window.innerHeight - animItemHeight / animStart;

                if (animItemHeight > window.innerHeight) {
                    animItemPoint = window.innerHeight - window.innerHeight / animStart;
                }

                if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                    animItem.classList.add('_active');
                } else {
                    if (!animItem.classList.contains('_anim-no-hide')) {
                        animItem.classList.remove('_active');
                    }
                }
            }
        }
        function offset(el) {
            const rect = el.getBoundingClientRect(),
                scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
                scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            return {
                top: rect.top + scrollTop, left: rect.left + scrollLeft
            }
        }
    }

    if (animItems.length > 0) {
        setTimeout(() => {
                animOnScroll();
            },500);
    }
})

// =============================================================================================================//


