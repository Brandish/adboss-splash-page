$(function() {
    //when document is ready load possible effects
    AllPages.setupMenu();
    
    //splash page phone display
    Home.setUpEffects();
});

var AllPages = (function(){
    function menuSlide(){
        //navbar trigger
        $('#nav-button').click( function(event){
            var slideMenu$ = $('#navbar-slide');
            var show = 'show';
            if (slideMenu$.hasClass(show)) {
                slideMenu$.removeClass(show);
            } else{
                 slideMenu$.addClass(show);
            };
        });
    }
    return{
        setupMenu : menuSlide //, for multiples
    };
})();

var Home = (function(){
    function phoneSlide(){
        if($('.brandish')){
            $('#trigger').click(function(){
                var logo$ = $('#trigger');
                var phone$ = $('.peek');
                var buttons$ = $('.download-buttons');
                var text$ = $('.call-action');
                var height = phone$.position();
                var fadeSpeed = 500;
                var phoneHeight = 502;
                
                //set the phone's top to its curent numerical value
                //this gets around animation problems in Chrome and Safari
                phone$.css('top',height.top+'px');
                
                //fade the brandish logo
                logo$.fadeOut(fadeSpeed);
                //restore the phone's size and hide resulting overflow
                $('body').css('overflow','hidden');
                phone$.addClass('full-size');

                //slide in phone and trigger other effects after slide
                phone$.animate({
                    bottom: '0px',
                    top : '0px'
                },800, function(){
                    height = phone$.offset();
                    //place the download now text above the phone
                    text$.css({
                        'top' : (height.top-50)+'px',
                        'left' : height.left+'px'
                    });
                    //place the download images below the phone
                    buttons$.css({
                        'top' : (height.top+phoneHeight)+'px'
                    });
                    //fade in the elements
                    text$.fadeIn(fadeSpeed);
                    buttons$.fadeIn(fadeSpeed);
                });
            });
        }
    }
    return{
        setUpEffects: phoneSlide
    };
})();