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
});