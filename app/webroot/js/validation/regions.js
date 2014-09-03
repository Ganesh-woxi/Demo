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
        message: "Please enter the name of the region"
    });

    jQuery('#name').validate({
        expression:"if(VAL.match(/[a-zA-Z]$/)) return true; else return false;",
        message: "Name can contain only alphabates"
    });
});
