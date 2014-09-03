$(document).ready(function (){

    jQuery('.play').fancybox({

        openEffect  : 'none',
        closeEffect : 'none',
        helpers : {
            media : {}
        }
    });
});

jQuery(window).load(function(){
    $.placeholder.shim();

});
