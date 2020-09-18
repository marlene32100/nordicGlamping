$(document).ready(function(){

   $(window).scroll(function(){



      $(".fadeIn").each(function(i) {
         $(this).delay(i*1000).fadeIn(3000);

    /*   CODE IS TOO MUCH BUGGED: CHECK BEFORE USE
    $.fn.checkIfVisible = function() {
    
    var topElement = $(this).offset().top;
    var bottomElement = topElement+$(this).outerHeight();
    var topWindow = $(window).scrollTop();
    var bottomWindow = topWindow+$(window).height();
    return bottomElement>topWindow && topElement<bottomWindow;
    };
     
    if ($(this).checkIfVisible) {

        $(this).css("visibility", "visible").hide().delay(i*400).fadeIn(1000);
    }
     */
    
    
   }); 

   });
   
});
