jQuery(function(){
    jQuery("#title").validate({
        expression: "if (VAL) return true; else return false;",
        message: "Please enter the title"
    });
    /*jQuery("#description").validate({
        expression: "if (VAL) return true; else return false;",
        message: "Please enter the testimonial text"
    });*/
    jQuery("#author").validate({
        expression: "if (VAL) return true; else return false;",
        message: "Please enter the name"
    });
});