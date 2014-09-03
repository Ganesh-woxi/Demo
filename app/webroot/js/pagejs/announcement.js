$(document).ready(function () {
    $('.archive').click(function (event) {
        key = $(this).attr('rel');
        val = $(this).attr('id');
        if (val)
            key = key + "," + val;
        $.ajax({
            url:"/announcements/ajax_search",
            type:"POST",
            data:{ archive:key},
            success:function (response) {
                $('ul.whatsNew').html(response);
            },
            error:function (response) {
                console.log(response);
            }
        });
    });

    $('.annBtn').click(function (event) {
        if ($(this).is('.active')) {
            $(this).removeClass('active');
        } else {
            $(this).addClass('active');
        }
        var type = [];
        var label = "What's New";
        var count = $('form  a.active').length - 1;
        $('form  a.active').each(function (key, value) {
            type.push($(value).attr('rel'));
            if (key == 0) {
                label = label + " - ";
            }
            if (count == key) {
                if (key != 0) {
                    label = label + " & " + $(value).text();
                } else {
                    label = label + " " + $(value).text();
                }
            } else {
                label = label + " " + $(value).text() + ",";
            }
        });
        $(".span10 h2").text(label);
        var key = $("input[name=keyWords]").val();
        $.ajax({
            url:"/announcements/ajax_search",
            type:"POST",
            data:{ key:key, type:type },
            success:function (response) {
                $('ul.whatsNew').html(response);
            },
            error:function (response) {
                console.log(response);
            }
        });
        event.preventDefault();
    });
    $("input[name=keyWords]").keyup(function () {
        var type = [];
        $('form  a.active').each(function (key, value) {
            type.push($(value).attr('rel'));
        });

        var key = $("input[name=keyWords]").val();
        $.ajax({
            url:"/announcements/ajax_search",
            type:"POST",
            data:{ key:key, type:type },
            success:function (response) {
                $('ul.whatsNew').html(response);
            },
            error:function (response) {
                console.log(response);
            }
        });
    });

});