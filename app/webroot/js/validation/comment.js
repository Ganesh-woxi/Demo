jQuery(function(){

    jQuery("#CommentBody").validate({
        expression: "if (jQuery.trim(VAL)) return true; else return false;",
        message: "Please write your comment"
    });

    jQuery("#CommentAuthorName").validate({
        expression: "if (jQuery.trim(VAL)) return true; else return false;",
        message: "Please enter your name"
    });

    jQuery("#CommentAuthorEmail").validate({
        expression: "if (jQuery.trim(VAL)) return true; else return false;",
        message: "Please enter email address"
    });
    jQuery("#CommentAuthorEmail").validate({
        expression:"if (VAL.match(/^[^\\W][a-zA-Z0-9\\_\\-\\.]+([a-zA-Z0-9\\_\\-\\.]+)*\\@[a-zA-Z0-9_]+(\\.[a-zA-Z0-9_]+)*\\.[a-zA-Z]{2,4}$/)) return true; else return false;",
        message:"Please enter valid Email Address"
    });
    jQuery("#recaptcha_response_field").validate({
        expression: "if (jQuery.trim(VAL)) return true; else return false;",
        message: "Please enter recaptcha",
        error_class:"errormsgWrapper recaptchaError"
    });

});