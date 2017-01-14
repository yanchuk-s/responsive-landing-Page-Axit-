// FIRST PAGE ANIMATION

//$('.navbar img').addClass('animated slideInDown');
//$('.nav').addClass('animated slideInRight');


//$('#sliderImg').addClass('animated rollIn');

//$('.hvr-push').addClass('animated jello');

//$('#slideH1one').addClass('animated tada');


// aniamte secondtext
$(document).ready(function () {
        var objToStick = $(".box"); //Получаем нужный объект
        var topOfObjToStick = $(objToStick).offset().top; //Получаем начальное расположение нашего блока

        $(window).scroll(function () {
            var windowScroll = $(window).scrollTop(); //Получаем величину, показывающую на сколько прокручено окно

            if (windowScroll = topOfObjToStick) { // Если прокрутили больше, чем расстояние до блока, то приклеиваем его
                $(objToStick).addClass('animated slideInUp');
           
            };
        });
    });





// плавний скролінг
$(document).ready(function(){
    
    setBindings(); 
    
});

function setBindings() {
    
    $("li a").click(function(e){
        
        e.preventDefault();
        var sectionID = e.currentTarget.id + "Section";
        
       
        
        $("html body").animate({
            
            scrollTop: $("#" + sectionID).offset().top
        }, 1000)
    })
    
}
		 



//animation for search input
$(document).ready(function()
 {
 var flag=true;
 $("#search").click(function()
  {
  if(flag==true)
  {
    $(".inputCss").show("slow");
    flag=!flag;
  }
  else
  {
   $(".inputCss").hide("slow");

                flag=!flag;}
    });
});
