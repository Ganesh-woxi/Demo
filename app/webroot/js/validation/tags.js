/**
 * Created by JetBrains PhpStorm.
 * User: webonise
 * Date: 5/18/12
 * Time: 12:10 PM
 * To change this template use File | Settings | File Templates.
 */

jQuery(function(){

    jQuery('#name').validate({
        expression:"if(VAL) return true; else return false;",
        message: "Please enter the name of the tag"
    });
});
