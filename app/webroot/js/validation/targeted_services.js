/**
 * Created by JetBrains PhpStorm.
 * User: webonise
 * Date: 5/11/12
 * Time: 5:04 PM
 * To change this template use File | Settings | File Templates.
 */

jQuery(function(){
    jQuery('#name').validate({
        expression: "if(VAL) return true; else return false;",
        message: "Please enter the name"
    });

    jQuery('#attachment_edit').validate({
        expression: "if(VAL || jQuery('#attachment_name').val() !== '') return true; else return false;",
        message: "Please select a pdf"
    });

    jQuery(".attach_file").validate({
        expression: "if (validatePdfUpload(VAL)) return true; else return false;",
        message: "Please select a valid file"
    });
});
