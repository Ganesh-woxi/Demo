
$('#EventStartDate').datetimepicker({
    onClose:function (dateText, inst) {
    var endDateTextBox = $('#EventEndDate');
    if (endDateTextBox.val() != '') {
    var testStartDate = new Date(dateText);
    var testEndDate = new Date(endDateTextBox.val());
    if (testStartDate > testEndDate)
    endDateTextBox.val(dateText);
    }
else {
    endDateTextBox.val(dateText);
    }
},
onSelect:function (selectedDateTime) {
    var start = $(this).datetimepicker('getDate');
    $('#EventEndDate').datetimepicker('option', 'minDate', new Date(start.getTime()));
    }
});
$('#EventEndDate').datetimepicker({
    onClose:function (dateText, inst) {
    var startDateTextBox = $('#EventStartDate');
    if (startDateTextBox.val() != '') {
    var testStartDate = new Date(startDateTextBox.val());
    var testEndDate = new Date(dateText);
    if (testStartDate > testEndDate)
    startDateTextBox.val(dateText);
    }
else {
    startDateTextBox.val(dateText);
    }
},
onSelect:function (selectedDateTime) {
    var end = $(this).datetimepicker('getDate');
    $('#EventStartDate').datetimepicker('option', 'maxDate', new Date(end.getTime()));
    }
});