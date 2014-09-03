jQuery(function(){
    jQuery("#SearchText").validate({
        expression: "if (VAL) return true; else return false;",
        message: "Please enter search term"
    });
});