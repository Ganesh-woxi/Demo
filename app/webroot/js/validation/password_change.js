jQuery(function(){
    jQuery("#old_password").validate({
        expression: "if (VAL) return true; else return false;",
        message: "Please enter your old password."
    });
    jQuery("#new_password").validate({
        expression: "if (VAL) return true; else return false;",
        message: "Please enter new password."
    });
    jQuery("#confirm_password").validate({
        expression: "if (VAL) return true; else return false;",
        message: "Please enter confirm password."
    });
    jQuery("#confirm_password").validate({
        expression: "if ((VAL == jQuery('#new_password').val()) && VAL) return true; else return false;",
        message: "Confirm password field doesn't match the new password field."
    });
});