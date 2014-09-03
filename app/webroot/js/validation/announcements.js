/**
 * Created by JetBrains PhpStorm.
 * User: webonise
 * Date: 5/24/12
 * Time: 4:02 PM
 * To change this template use File | Settings | File Templates.
 */

jQuery(function(){

    jQuery("#title").validate({
        expression: "if (VAL) return true; else return false;",
        message: "Please enter the title"
    });

    jQuery("#location").validate({
        expression: "if (VAL) return true; else return false;",
        message: "Please enter the location"
    });

    jQuery("#type").validate({
        expression: "if (VAL) return true; else return false;",
        message: "Please enter the type"
    });

    $('#start_date').datepicker({
        minDate:0,
        dateFormat:'yy-mm-dd'
    });

    jQuery("#start_date").validate({
        expression: "if (VAL) return true; else return false;",
        message: "Please enter the start date of event"
    });

    jQuery("#end_date").validate({
        expression: "if (VAL) return true; else return false;",
        message: "Please enter the end date of event"
    });

    jQuery('#end_date').datepicker({
        minDate:+1,
        dateFormat:'yy-mm-dd'
    });

    jQuery('#end_date').validate({
        expression: "if (VAL >= $('#start_date').val()) return true; else return false;",
        message: "Please enter the correct end date"
    });
});