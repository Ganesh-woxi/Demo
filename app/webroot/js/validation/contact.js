/* <![CDATA[ */
jQuery(function () {
    jQuery("#ContactLocation").validate({
        expression:"if (VAL) return true; else return false;",
        message:"Please enter location name"
    });
    jQuery("#ContactAddress").validate({
        expression:"if (VAL) return true; else return false;",
        message:"Please enter contact address"
    });

    jQuery("#country").validate({
        expression:"if (VAL) return true; else return false;",
        message:"Please select country"
    });
    jQuery("#ContactEmail").validate({
        expression:"if (VAL) return true; else return false;",
        message:"Please enter email address"
    });
    jQuery("#ContactEmail").validate({
        expression:"if (VAL.match(/^[^\\W][a-zA-Z0-9\\_\\-\\.]+([a-zA-Z0-9\\_\\-\\.]+)*\\@[a-zA-Z0-9_]+(\\.[a-zA-Z0-9_]+)*\\.[a-zA-Z]{2,4}$/)) return true; else return false;",
        message:"Please enter valid email address"
    });
});
/* ]]> */