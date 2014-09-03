/**
 * Created by JetBrains PhpStorm.
 * User: webonise
 * Date: 5/17/12
 * Time: 8:23 PM
 * To change this template use File | Settings | File Templates.
 */

jQuery(function(){

    jQuery("#name").validate({
        expression: "if (VAL) return true; else return false;",
        message: "Please enter the name"
    });

    jQuery('#name').validate({
        expression:"if(VAL.match(/[a-zA-Z]$/)) return true; else return false;",
        message: "Name can contain characters only"
    });

    jQuery("#designation").validate({
        expression: "if (VAL) return true; else return false;",
        message: "Please enter the designation"
    });

    jQuery('#designation').validate({
        expression:"if(VAL.match(/[a-zA-Z]$/)) return true; else return false;",
        message: "Designation can contain characters only"
    });

    jQuery("#email").validate({
        expression: "if (VAL) return true; else return false;",
        message: "Please enter the email id"
    });

    jQuery("#location").validate({
        expression: "if (VAL) return true; else return false;",
        message: "Please enter the location"
    });

    jQuery("#email").validate({
        expression: "if (VAL.match(/^[^\\W][a-zA-Z0-9\\_\\-\\.]+([a-zA-Z0-9\\_\\-\\.]+)*\\@[a-zA-Z0-9_]+(\\.[a-zA-Z0-9_]+)*\\.[a-zA-Z]{2,4}$/)) return true; else{ jQuery('#username').focus();};",
        message: "Please enter valid email id."
    });

    jQuery("#country").validate({
        expression:"if (VAL) return true; else return false;",
        message:"Please select country"
    });

    /*jQuery("#twitter").validate({
        expression: "if (!(VAL) || validateURL(VAL)) return true; else return false;",
        message: "Please enter a valid url"
    });

    jQuery("#facebook").validate({
        expression: "if (!(VAL) || validateURL(VAL)) return true; else return false;",
        message: "Please enter a valid url"
    });

    jQuery("#pintrest").validate({
        expression: "if (!(VAL) || validateURL(VAL)) return true; else return false;",
        message: "Please enter a valid url"
    });*/
});