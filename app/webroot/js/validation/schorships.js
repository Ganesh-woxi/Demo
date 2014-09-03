jQuery(function(){
       jQuery("#name").validate({
        expression: "if (VAL) return true; else return false;",
        message: "Please enter the name"
    });

    jQuery("#mob_number").validate({
        expression: "if (VAL) return true; else return false;",
        message: "Please enter the mobile number"
    });

    jQuery("#email_id").validate({
        expression: "if (VAL) return true; else return false;",
        message: "Please enter valid email address"
    });

    jQuery("#email_id").validate({
        expression:"if (VAL.match(/^[^\\W][a-zA-Z0-9\\_\\-\\.]+([a-zA-Z0-9\\_\\-\\.]+)*\\@[a-zA-Z0-9_]+(\\.[a-zA-Z0-9_]+)*\\.[a-zA-Z]{2,4}$/)) return true; else return false;",
        message:"Please enter valid email address"
    });

    jQuery("#email_secondary").validate({
        expression:"if (VAL.match(/^[^\\W][a-zA-Z0-9\\_\\-\\.]+([a-zA-Z0-9\\_\\-\\.]+)*\\@[a-zA-Z0-9_]+(\\.[a-zA-Z0-9_]+)*\\.[a-zA-Z]{2,4}$/) || (VAL.length==0)) return true; else return false;",
        message:"Please enter valid email address"
    });

    jQuery("#yrs_of_exp").validate({
        expression: "if (VAL) return true; else return false;",
        message: "Please enter experience"
    });

    jQuery("#yrs_of_exp_digital").validate({
        expression: "if (VAL) return true; else return false;",
        message: "Please enter experience"
    });

    jQuery("#lang").validate({
        expression: "if (VAL) return true; else return false;",
        message: "Please enter languages"
    });

    jQuery("#institute").validate({
        expression: "if (VAL) return true; else return false;",
        message: "Please enter institute name"
    });

    jQuery("#type_of_institute").validate({
        expression: "if (VAL) return true; else return false;",
        message: "Please enter type of institute"
    });

    jQuery("#web_url").validate({
        expression: "if (validateURLhttp(VAL)) return true; else return false;",
        message: "Please enter valid institue website url"
    });

    jQuery("#job_title").validate({
        expression: "if (VAL) return true; else return false;",
        message: "Please enter job title"
    });

    jQuery("#job_type").validate({
        expression: "if (VAL) return true; else return false;",
        message: "Please enter job type"
    });

    jQuery("#length_curr_emp").validate({
        expression: "if (VAL) return true; else return false;",
        message: "Please enter length of employment"
    });

    /*jQuery("#pos_curr_emp").validate({
        expression: "if (VAL) return true; else return false;",
        message: "Please enter length of employment"
    });*/

    jQuery("#work_add").validate({
        expression: "if (VAL) return true; else return false;",
        message: "Please enter address"
    });
    jQuery("#city").validate({
        expression: "if (VAL) return true; else return false;",
        message: "Please enter city"
    });
    jQuery("#country").validate({
        expression: "if (VAL) return true; else return false;",
        message: "Please enter country"
    });
    jQuery("#zip_code").validate({
        expression: "if (VAL) return true; else return false;",
        message: "Please enter zip code"
    });
    jQuery("#sup_name").validate({
        expression: "if (VAL) return true; else return false;",
        message: "Please enter supervisor name"
    });
    jQuery("#sup_title").validate({
        expression: "if (VAL) return true; else return false;",
        message: "Please enter supervisor title"
    });
    jQuery("#sup_phone_no").validate({
        expression: "if (VAL) return true; else return false;",
        message: "Please enter supervisor phone number"
    });
    jQuery("#sup_email_id").validate({
        expression:"if (VAL.match(/^[^\\W][a-zA-Z0-9\\_\\-\\.]+([a-zA-Z0-9\\_\\-\\.]+)*\\@[a-zA-Z0-9_]+(\\.[a-zA-Z0-9_]+)*\\.[a-zA-Z]{2,4}$/)) return true; else return false;",
        message:"Please enter valid email address"
    });

    jQuery("#sup_address").validate({
        expression: "if (VAL) return true; else return false;",
        message:"Please enter address"
    });
    jQuery("#bio").validate({
        expression: "if (VAL) return true; else return false;",
        message:"This field is required"
    });

    jQuery("#job_field_exp").validate({
        expression: "if (VAL) return true; else return false;",
        message:"This field is required"
    });
    jQuery("#prev_training").validate({
        expression: "if (VAL) return true; else return false;",
        message:"This field is required"
    });
    jQuery("#expectations").validate({
        expression: "if (VAL) return true; else return false;",
        message:"This field is required"
    });
    jQuery("#agent_network_acc").validate({
        expression: "if (VAL) return true; else return false;",
        message:"This field is required"
    });

    jQuery("#contributions").validate({
        expression: "if (VAL) return true; else return false;",
        message:"This field is required"
    });
    jQuery("#funding").validate({
        expression: "if (VAL) return true; else return false;",
        message:"This field is required"
    });

    jQuery("#confirm").validate({
        expression: "if( $('#confirm').is(':checked') ) return true; else return false;",
        message: "Please confirm"
    });
    jQuery("#agreement").validate({
        expression: "if( $('#agreement').is(':checked') )  return true; else return false;",
        message:"Please confirm"
    });

});
