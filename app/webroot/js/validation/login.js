jQuery(function(){
    jQuery("#username").validate({
        expression: "if (VAL) return true; else return false;",
        message: "Please enter user name."
    });
    jQuery("#password").validate({
        expression: "if (VAL) return true; else return false;",
        message: "Please enter your password."
    });

    jQuery("#username").validate({
        expression: "if (VAL.match(/^[^\\W][a-zA-Z0-9\\_\\-\\.]+([a-zA-Z0-9\\_\\-\\.]+)*\\@[a-zA-Z0-9_]+(\\.[a-zA-Z0-9_]+)*\\.[a-zA-Z]{2,4}$/)) return true; else return false;",
        message: "Please enter valid email address."
    });
    jQuery("#password").validate({
        expression: "if (VAL.match(/[a-zA-Z0-9]$/)) return true; else return false;",
        message: "Password should be alphanumeric."
    });
});