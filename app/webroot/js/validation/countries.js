/**
 * Created by JetBrains PhpStorm.
 * User: webonise
 * Date: 5/17/12
 * Time: 4:21 PM
 * To change this template use File | Settings | File Templates.
 */

jQuery(function(){
    jQuery('#name').validate({
        expression:"if(VAL) return true; else return false;",
        message: "Please enter the name of the country"
    });

    jQuery('#name').validate({
        expression:"if(VAL.match(/[a-zA-Z]$/)) return true; else return false;",
        message: "Name can contain characters only"
    });

    jQuery('#abbrevation').validate({
        expression:"if(VAL) return true; else return false;",
        message: "Please enter the abbrevation"
    });

    jQuery('#abbrevation').validate({
        expression:"if(VAL.length <= 2) return true; else return false;",
        message: "Please enter the correct abbrevation of length 2"
    });


    jQuery('#abbrevation').validate({
        expression:"if(VAL.match(/[a-zA-Z]$/)) return true; else return false;",
        message: "Abbrevation can contain characters only"
    });

    jQuery('#region').validate({
        expression:"if(VAL) return true; else return false;",
        message: "Please select the region"
    });
});
