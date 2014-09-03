jQuery(function () {
    var autocomplete = new google.maps.places.Autocomplete(document.getElementById('ContactGoogleAddress'));

    $("#ContactGoogleAddress").keypress(function (event) {
        if (event.keyCode == 13) {
            event.preventDefault();
            fetchLocation('ContactGoogleAddress', 'ContactPosition', "ContactForm", event);
        }
    });
    $("#submitButton").click(function (e) {
        if ($.trim($("#ContactGoogleAddress").val()) !== '') {
            e.preventDefault();
            fetchLocation('ContactGoogleAddress', 'ContactPosition', "ContactForm", e);
        }
        else {
            $("#ContactPosition").attr('value', '');
        }

    });
    return true;
});