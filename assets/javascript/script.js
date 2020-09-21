$(document).ready(()=>{
    //navbar scroll
    $(window).scroll(()=>{
        if ($(this).scrollTop() > 100) {
          $('.navbar').addClass('active')
        }
        else {
          $('.navbar').removeClass('active')
        }
    })
})

AOS.init();