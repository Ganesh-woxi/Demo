$(document).ready(function () {

    // Slider

    try {
        $("#slider").easySlider({
            auto:true,
            continuous:true,
            numeric:true,
            speed:1500,
            pause:15500
        });
    } catch (e) {

    }
    $('#myTab').tab('show')

    // Map animation
    //$(".mapWrapper").hide();
    $(".mapWrapper").css({right:'-360px'}, 500);

//    $(".globeIcon").click(function () {
//
//        if ($(this).hasClass("active")) {
//            $(this).removeClass("active")
//            // $(".mapWrapper").fadeOut();
//            $(".mapWrapper").stop().animate({right:'-360px'}, 500, function () {
//                $(".topMap").stop().css({width:'45px'}, 500);
//                $(".topMap").stop().css({height:'65px'}, 500);
//            });
//
//        } else {
//            $(this).addClass("active");
//            //	$(".mapWrapper").fadeIn();
//            $(".mapWrapper").stop().animate({right:'0px'}, 500);
//            $(".topMap").stop().css({width:'360px'}, 500);
//            $(".topMap").stop().css({height:'246px'}, 500);
//
//        }
//
//
//    });


// News ticker


    $(function () {
        var ticker = function () {
            setTimeout(function () {
                $('ul.ticker li:first').animate({marginTop:'-130px'}, 1000, function () {
                    $(this).detach().appendTo('ul.ticker').removeAttr('style');
                });
                ticker();
            }, 6000);
        };
        if ($('ul.ticker li').length > 1) {
            ticker();
        }
    });


// Input field, Textarea blur, focus

    $('.control-group input.hideValue, .control-group textarea').each(function () {
        var default_value = this.value;
        $(this).css('color', '#aaaaaa'); // this could be in the style sheet instead
        $(this).focus(function () {
            if (this.value == default_value) {
                this.value = '';
                $(this).css('color', '#aaaaaa');
            }
        });
        $(this).blur(function () {
            if (this.value == '') {
                $(this).css('color', '#aaaaaa');
                this.value = default_value;
            }
        });
    });

    // Less, more text

    var showChar = 180;
    var ellipsestext = "...";
    var moretext = "More";
    var lesstext = "Less";
    $('div.more').each(function () {
        var content = $(this).html();

        if (content.length > showChar) {

            var c = content.substr(0, showChar);
            var h = content.substr(showChar - 1, content.length - showChar);

            var html = c + '<div class="moreelipses">' + ellipsestext + '</div>&nbsp;<div class="morecontent hide"><div>' + h + '</div>&nbsp;&nbsp;</div><a href="" class="morelink">' + moretext + '</a>';

            $(this).html(html);
        }

    });

    $(".morelink").click(function () {
        if ($(this).hasClass("less")) {
            $(this).removeClass("less");
            $(this).html(moretext);
        } else {
            $(this).addClass("less");
            $(this).html(lesstext);
        }
        $(this).parent().prev().toggle();
        $(this).prev().toggle();
        return false;
    });


    $(document).on('click', ".readmoreProject", function (event) {
        alert('hi');
        event.preventDefault();
        if ($(this).hasClass('more')) {
            $('.morecontent').slideUp();
            $('.moreelipses').slideDown();
            $(".readmoreProject").text('More').addClass('more');
            $(this).siblings('.morecontent').slideDown();
            $(this).siblings('.moreelipses').slideUp();
            $(this).removeClass('more');
            $(this).text('Less');
        } else {
            $(this).siblings('.morecontent').slideUp();
            $(this).siblings('.moreelipses').slideDown();
            $(this).addClass('more');
            $(this).text('More');
        }
    });
});