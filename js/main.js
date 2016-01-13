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
                var pre = 'animated';
                //fade the brandish logo
                logo$.fadeOut(450);
                //transition phone to the middle
                phone$.addClass('full-size').animate({
                        top: '0px',
                        bottom: '0px'
                },900);
                
                

                
            });
        }
    }
    return{
        setUpEffects: phoneSlide
    };
})();