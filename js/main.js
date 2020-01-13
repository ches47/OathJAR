$(document).ready(function(){
    
    
    $('.about__toggle').click(function(event) {
        event.preventDefault(); 
        console.log('click');                    
    
    
        $('.about-content__box').hide();
        
        var href = $(this).attr('href');
    
        console.log(href);
        
        
        $(href).fadeIn();
        
        
        
    });
    
    

    var windowHeight = $(window).height();
    console.log(windowHeight);
    
    
//    ВОЗВРАЩАЕТ НА ВВЕРХ СТРЕЛКА
    
    $(window).scroll(function(){
        console.log( $(this).scrollTop() );
        if ( $(this).scrollTop() > windowHeight) {
            $('#scrollToTop').fadeIn();   
        } else { 
            $('#scrollToTop').fadeOut();  
            
        }
   
    });
    
    
     
    $('#scrollToTop').click(function(event){
       event.preventDefault(); 
       $('html').animate({scrollTop: 0}, 800)    
    });
    
    
    
    
    
    
    
    
//    ВНИЗ СТРЕЛКА (КОТОРАЯ В БАНКЕ СТРЕЛКА )  
//    1 КОД 
//    $(window).scroll(function(){
//        
//        
//        console.log( $(this).linkCircle() );
//   
//        if ( $(this).linkCircle() ) {
//            $('#linkCircle')
//            
//        }
//        
//    });
    
   
//    2 КОД     
//    
//    $('#linkCircle').click(function(event){
//        console.log ('11');
//       event.preventDefault(); 
//       $('body').animate({linkCircle: 800}, 1800)    
//    });
    
        
        
    
    
    
    
    
         
});