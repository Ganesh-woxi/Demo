/**
 * @author GeekTantra
 * @date 24 September 2009
 */
/*
 * This functions checks where an entered date is valid or not.
 * It also works for leap year feb 29ths.
 * @year: The Year entered in a date
 * @month: The Month entered in a date
 * @day: The Day entered in a date
 */
function isValidDate(year, month, day) {
    var date = new Date(year, (month - 1), day);
    var DateYear = date.getFullYear();
    var DateMonth = date.getMonth();
    var DateDay = date.getDate();
    if (DateYear == year && DateMonth == (month - 1) && DateDay == day)
        return true;
    else
        return false;
}
/*
 * This function checks if there is at-least one element checked in a group of check-boxes or radio buttons.
 * @id: The ID of the check-box or radio-button group
 */
function isChecked(id) {
    var ReturnVal = false;
    $("#" + id).find('input[type="radio"]').each(function () {
        if ($(this).is(":checked"))
            ReturnVal = true;
    });
    $("#" + id).find('input[type="checkbox"]').each(function () {
        if ($(this).is(":checked"))
            ReturnVal = true;
    });
    return ReturnVal;
}

function isUnique(base_url, email) {

    var username = jQuery("#" + email).val();
    var response = $.ajax({
        type:'POST',
        url:base_url,
        data:'username=' + username,
        async:false
    }).responseText;
    // alert(response);
    return response;
}

function isUniqueCategory(base_url, category_field, collegeid, category_id) {

    var cat_id = jQuery("#" + category_field).val();
    var college_id = collegeid;
    var id = category_id;
    var response = $.ajax({
        type:'POST',
        url:base_url,
        data:'cat_id=' + cat_id + '&college_id=' + college_id + "&id=" + id,
        async:false
    }).responseText;
    return response;
}

function isValAvailable(id) {
    if ($("#" + id).val()) {
        return true;
    } else {
        return false;
    }
}

/*
 * This function checks if there is at-least one element checked in a group of check-boxes or radio buttons.
 * @id: The ID of the check-box or radio-button group
 */
function isValidData(id) {
    var ReturnVal = true;
    $("#" + id).find('input[type="text"]').each(function () {
        if ($(this).val() != "") {
            ReturnVal = true;
        } else {
            ReturnVal = false;
        }

    });
    return ReturnVal;
}

function isValidNewsletters(institudes, all_institude_td, checkboxes) {

    if ((isValAvailable(institudes) || isChecked(all_institude_td)) && !(isChecked(checkboxes))) {

        return false;

    } else if (!(isValAvailable(institudes) || isChecked(all_institude_td)) && (isChecked(checkboxes))) {

        return false;

    } else {

        return true;
    }
}

function isHiddenCheck(hiddenFldId) {
    var hiddenval = $("#" + hiddenFldId).val();

    if (hiddenval && hiddenval != '0') {
        return true;
    } else {
        return false
    }
}

function CompDate(adate, bdate) {

    var datea = jQuery("#" + adate).val();
    var dateb = jQuery("#" + bdate).val();
    var a = datea.split(' ');
    var b = dateb.split(' ');
    var first_date = a[0].split('-');
    var first_time = a[1].split(':');
    var second_date = b[0].split('-');
    var second_time = b[1].split(':');

    var sDate = new Date(first_date[0], first_date[1] - 1, first_date[2], first_time[0], first_time[1], first_time[2])

    var eDate = new Date(second_date[0], second_date[1] - 1, second_date[2], second_time[0], second_time[1], second_time[2]);

    if (sDate <= eDate) {
        return true;
    }
    else {

        return false;
    }
}
function isAssignUser(field_id, token_type) {
    var user_val = jQuery("#" + field_id).val();
    var tocken_checked = $("#" + token_type).is(":checked");
    if (user_val == "" && tocken_checked) {
        return false;
    } else {
        return true;
    }

}

function hasAttachment(field_id) {
    var attachment_count = jQuery('#' + field_id + ' input').length;
    alert(attachment_count);
    if (attachment_count == 0) {
        return false;
    } else {
        return true;
    }
}

function validateImageUpload(val) {
    if (!/(\.bmp|\.gif|\.jpg|\.jpeg|\.png)$/i.test(val)) {
        return false;
    } else {
        return true;
    }
}

function validatePdfUpload(val) {
    if (!/(\.pdf)$/i.test(val)) {
        return false;
    } else {
        return true;
    }
}

function validateURL(textval) {
    var urlregex = new RegExp(
        "^(http|https|ftp)\://([a-zA-Z0-9\.\-]+(\:[a-zA-Z0-9\.&amp;%\$\-]+)*@)*((25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9])\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0)\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0)\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[0-9])|([a-zA-Z0-9\-]+\.)*[a-zA-Z0-9\-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(\:[0-9]+)*(/($|[a-zA-Z0-9\.\,\?\'\\\+&amp;%\$#\=~_\-]+))*$");
    if (true === urlregex.test(textval)) {
        return true;
    }
    return false
}

function validateURLhttp(value) {
    return /^((https?|ftp):\/\/)?(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(value);
}


function countWords(val) {
    val = val.replace(/(^\s*)|(\s*$)/gi, "");
    val = val.replace(/[ ]{2,}/gi, " ");
    val = val.replace(/\n /, "\n");
    wordcount = val.split(' ').length;
    return wordcount;
}

function fetchLocation(googleAddressId, contactPositionId,  form_id,event) {
    $('#google-loader').show();
    var address = $("#" + googleAddressId).val();
    address += " ";
    geocoder = new google.maps.Geocoder();
    geocoder.geocode({ 'address':address}, function (results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            $('#google-loader').hide();
            $('#position-err-msg').hide();
            $("#" + contactPositionId).attr('value', results[0].geometry.location);
            $("#submitButton").removeAttr("disabled");
            if (event != null) {
                if (event.keyCode == 13) {
                    event.preventDefault();
                    $("#" + form_id).submit();
                }
            }
            if(form_id!=null){
                $("#" + form_id).submit();
            }
        } else {
            $('#position-err-msg').text('Invalid Google address');
            $('#position-err-msg').show();
            $('#google-loader').hide();
            event.preventDefault();
        }
    });
}

function validateYoutubeURL(textval) {
    var urlregex = new RegExp(
        "^(http|https|ftp)\://([a-zA-Z0-9\.\-]+(\:[a-zA-Z0-9\.&amp;%\$\-]+)*@)*((25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9])\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0)\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0)\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[0-9])|([a-zA-Z0-9\-]+\.)*[a-zA-Z0-9\-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(\:[0-9]+)*(/($|[a-zA-Z0-9\.\,\?\'\\\+&amp;%\$#\=~_\-]+))*$");
    if (true === urlregex.test(textval)) {
        console.log(textval);

        var response = $.ajax({

            type:'GET',
            url:'/resources/checkValidUrl',
            data:'url=' + textval,
            async:false
        }).responseText;
        return response;
    }
    return false
}

function display_error(){
    $("#submit_error").show();
}

function validate_contact(contact) {
    var regex = new RegExp("^(\\+\\d{2})?\\-?(\\d{10})$");
    if(contact ==''){
        return true;
    }
    if(regex.test(contact) ){
        return true;
    } else {
        return false
    }
}