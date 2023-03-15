let list = document.querySelectorAll('.nav li');
function active(){
    list.forEach((i) =>
    i.classList.remove('active'));
    this.classList.add('active');
}
list.forEach((i) =>
i.addEventListener('click' ,active));

let menuToggle = document.querySelector('.menuToggle');
let header = document.querySelector('header');
menuToggle.onclick = function()
{
    header.classList.toggle('active');
}



















// slider js//
$('.responsive').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    pauseOnHover:true,
    autoplay: true,
	autoplaySpeed: 2000,
	 
    Arrow:true,
     responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                
                
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                  
                

            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                  
                 
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
}); ; 

   