/**
 * Created by JetBrains PhpStorm.
 * User: webonise
 * Date: 5/17/12
 * Time: 4:21 PM
 * To change this template use File | Settings | File Templates.
 */

jQuery(function(){
    //jQuery('#contact_no').mask("+99 999-999-9999");
    jQuery("#title").validate({
        expression: "if (VAL) return true; else return false;",
        message: "Please enter the title"
    });

    jQuery("#short_description").validate({
        expression: "if (VAL) return true; else return false;",
        message: "Please enter the short description"
    });

    jQuery('#short_description').validate({
        expression: "if (VAL.length <= 150) return true; else return false;",
        message: "Please enter short description in max. 150 characters long"
    });

    jQuery("#meta_keywords").validate({
        expression: "if (VAL) return true; else return false;",
        message: "Please enter the meta keywords"
    });

    jQuery("#meta_keywords").validate({
        expression: "if (VAL.length <= 70) return true; else return false;",
        message: "Meta Keywords can only be maximum 70 characters long"
    });

    jQuery("#meta_description").validate({
         expression: "if (VAL) return true; else return false;",
         message: "Please enter the meta description"
     });

    jQuery("#meta_description").validate({
        expression: "if (VAL.length <= 150) return true; else return false;",
        message: "Meta description can only be 150 characters long"
    });

//    jQuery("#contact_no").validate({
//        expression: "if (VAL) return true; else return false;",
//        message: "Please enter a valid Contact number"
//    });

    jQuery("#contact_email").validate({
        expression: "if (VAL.match(/^[^\\W][a-zA-Z0-9\\_\\-\\.]+([a-zA-Z0-9\\_\\-\\.]+)*\\@[a-zA-Z0-9_]+(\\.[a-zA-Z0-9_]+)*\\.[a-zA-Z]{2,4}$/)) return true; else{ jQuery('#username').focus();};",
        message: "Please enter valid email id."
    });


});