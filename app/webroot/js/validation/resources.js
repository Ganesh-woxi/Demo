/**
 * Created by JetBrains PhpStorm.
 * User: webonise
 * Date: 5/21/12
 * Time: 6:47 PM
 * To change this template use File | Settings | File Templates.
 */

jQuery(function(){

    jQuery("#title").validate({
        expression: "if (VAL) return true; else return false;",
        message: "Please enter the title"
    });

    jQuery("#embedded_code").validate({
        expression: "if (VAL) return true; else return false;",
        message: "Please enter the url"
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

    jQuery("#typeofresource").validate({
        expression: "if (VAL) return true; else return false;",
        message: "Please enter the Type of Resource"
    });
    jQuery("#date").validate({
        expression: "if (VAL) return true; else return false;",
        message: "Please choose publication date"
    });
//    jQuery("#author").validate({
//        expression: "if (VAL) return true; else return false;",
//        message: "Please enter the author"
//    });

    jQuery("#ResourceQuirk0").validate({
        expression: "if (150 > VAL.length) return true; else return false;",
        message: "Quirk can only be maximum 150 characters long"
    });
    jQuery("#ResourceQuirk1").validate({
        expression: "if (150 > VAL.length) return true; else return false;",
        message: "Quirk can only be maximum 150 characters long"
    });
    jQuery("#ResourceQuirk2").validate({
        expression: "if (150 > VAL.length) return true; else return false;",
        message: "Quirk can only be maximum 150 characters long"
    });
    jQuery("#ResourceQuirk3").validate({
        expression: "if (150 > VAL.length) return true; else return false;",
        message: "Quirk can only be maximum 150 characters long"
    });
    jQuery("#ResourceQuirk4").validate({
        expression: "if (150 > VAL.length) return true; else return false;",
        message: "Quirk can only be maximum 150 characters long"
    });
    jQuery(".image_extension").validate({
        expression: "if($('#ResourceIsHome').is(':checked')) { if (validateImageUpload(VAL)) return true; else return false;}else{ return true;}",
        message: "Please select valid image"
    });
    jQuery(".edit_image_extension").validate({
        expression: "if($('#ResourceIsHome').is(':checked')) { if ($('#image_name').is('.isImageAvailable') || validateImageUpload(VAL)) return true; else return false;}else{ return true;}",
        message: "Please select valid image"
    });
    jQuery("#embedded_code").validate({
        expression: "if (validateYoutubeURL(VAL)) return true; else return false;",
        message: "Please enter a valid url"
    });

    jQuery("#thumbnail").validate({
        expression: "if (VAL) return true; else return false;",
        message: "Please enter the thumbnail url"
    });

    jQuery('.date').datepicker({
        dateFormat:'yy-mm-dd'
    });
});