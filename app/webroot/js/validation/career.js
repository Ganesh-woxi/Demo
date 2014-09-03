/* <![CDATA[ */
jQuery(function () {
    jQuery("#CareerTitle").validate({
        expression:"if (VAL) return true; else return false;",
        message:"Please enter the Required field"
    });
    jQuery("#CareerExperience").validate({
        expression:"if (VAL) return true; else return false;",
        message:"Please enter the Required field"
    });
    jQuery("#CareerLocation").validate({
        expression:"if (VAL) return true; else return false;",
        message:"Please enter the Required field"
    });
    jQuery("#CareerSkill").validate({
        expression:"if (VAL) return true; else return false;",
        message:"Please enter the Required field"
    });
    jQuery("#CareerDescription").validate({
        expression:"if (VAL) return true; else return false;",
        message:"Please enter the Required field"
    });
});
/* ]]> */