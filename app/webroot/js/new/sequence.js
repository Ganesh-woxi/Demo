$(document).ready(function(){
    $( ".sortable" ).sortable({
        stop:function(){
            var sortedIDs = $(this).sortable("toArray");
            saveSequence(sortedIDs);
        }
    });
    $( ".mgntSortable" ).sortable({
        stop:function(){
            var sortedIDs = $(this).sortable("toArray");
            saveManagementSequence(sortedIDs);
        }
    });
});

function saveSequence(ids){
    $.ajax({
        beforeSend:function () {
        },
        url:'/domains/reposition',
        type:'POST',
        data:{ ids:ids},
        complete:function () {
        }
    });
}
function saveManagementSequence(ids){
    $.ajax({
        beforeSend:function () {
        },
        url:'/teams/reposition',
        type:'POST',
        data:{ ids:ids},
        complete:function () {
        }
    });
}