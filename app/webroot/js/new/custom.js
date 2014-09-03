/**
 * Created with JetBrains PhpStorm.
 * User: swapnil
 * Date: 22/2/13
 * Time: 11:08 AM
 * To change this template use File | Settings | File Templates.
 */

$(document).ready(function(){



    /*tooltip*/
    $(".toolTipWrap").hover(function(){
            $(this).find(".customTooltip").fadeIn();
        }
        ,function(){
            $(this).find(".customTooltip").stop().fadeOut();
        }
    );


    /*$("#slider").easySlider({
        auto: true,
        continuous: true,
        numeric: true,
        pause:10000
    });*/
    $('body').append("<div class='overlay'></div>");
    setTimeout(function(){
        var overlayHeight = ($('#wrapper').height())-120;
        $('.overlay').css({height:overlayHeight});
    },10000);
    $('ul.nav > li.hasDropdown').click(function(){
        $(this).prev('li').addClass('prev');
        $(this).next('li').addClass('next');
        $(this).find('.dropDown').fadeIn(500);
        $('.overlay').delay(500).stop().fadeIn(500);
    });

    $('ul.nav > li.hasDropdown').mouseleave(function(){
        $(this).prev('li').removeClass('prev');
        $(this).next('li').removeClass('next');
        $(this).find('.dropDown').stop().fadeOut(100);
        $('.overlay').stop().fadeOut(500);
    })
    var i = 1;
    $('.dropDown').mouseenter(function(){
        /*i = i+1;
        console.log(i);
        $('.overlay').fadeIn(500);*/
    });
    $('.top').click(function(){
//        $('.top').scrollTo( {top:'110px', left:'290px'}, 800 );
        $('body').scrollTo( 0, 800 );
        return false;
    });
    $('.whereOperate').click(function(){
//        $('.top').scrollTo( {top:'110px', left:'290px'}, 800 );
        $('body').scrollTo('.makingDifference', 800 );
        return false;
    });


//    Tab inside the dropdown
    $('.tabOuter .tabWrapper .tab').hide();
    $('.tabOuter .tabWrapper .tab:first-child').show();
    $('.tabOuter li:first-child a').addClass('active');
//    var i = 1;
    $('.tabOuter li a').mouseover(function(){
        var classes = "#" + $(this).attr('class');
        var tabLink = classes.split(" ");
        /*i = i+1;
        console.log(i + " " + tabLink[0]);*/
        $(this).parents('.tabOuter').find('li a').removeClass('active');
        $(this).addClass('active');
        $(this).parents('.tabOuter').find('.tab').hide();
        $(tabLink[0]).show();
        //return false;
    });
    /*var i = 1;
    $('.dropDown li a').hover(function(){
         i = i+1;
        console.log(i);
    });*/
    $('.tabOuter').mouseleave(function(){
        $('.tabOuter .tabWrapper .tab').hide();
        $('.tabOuter .tabWrapper .tab:first-child').show();
        $('.tabOuter li a').removeClass('active');
        $('.tabOuter li:first-child a').addClass('active');
    });

    $(document).on('click', ".readmoreProject", function (event) {
        event.preventDefault();
        if ($(this).hasClass('more')) {
            $('.morecontent').slideUp();
            $('.moreelipses').slideDown();
            $(".readmoreProject").text('Read More').addClass('more');
            $(this).siblings('.morecontent').slideDown();
            $(this).siblings('.moreelipses').slideUp();
            $(this).removeClass('more');
            $(this).text('Less');
        } else {
            $(this).siblings('.morecontent').slideUp();
            $(this).siblings('.moreelipses').slideDown();
            $(this).addClass('more');
            $(this).text('Read More');
        }
    });
    /*$('.cycle-slideshow').cycle({
        speed: 600,
        manualSpeed: 100
    });*/
    function sliderPager(){
        var numberOfSlides = ($('.cycle-pager > span').length)-1;
        var spanMargin = (360/numberOfSlides)-19;
        $('.cycle-pager > span').css({
            marginLeft:spanMargin
        })
    }
    sliderPager();
    setTimeout(function(){
        sliderPager();
    },1000)
    var windowHeight = $(window).height()+110;
    var outerHeight = $('.pageOuter').height();
    if(outerHeight <= windowHeight) {
        $('.top').hide();
    }
    $('.alert-success .close').click(function(){
        $('.alert-success').hide(1000);
    });

    /**
      *  This function is used to count sector in work tab and add class depending on count
      */
    sectorTabCount();

    function sectorTabCount(){
        var sectorCount = $(".workInList  li").length;
        if(sectorCount == 4)
         $(".workInList ").addClass("fourSector");
    }
});
