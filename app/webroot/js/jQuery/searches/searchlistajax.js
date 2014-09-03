// Need to refactor
var incr = 0;
var formArr = new Array();
var form1 = {};
var hrefUrl = location.pathname;

if (hrefUrl.split('/')[2] == "display") {
    var display_tab = hrefUrl.split('/')[3];
} else {
    var display_tab = 0;
}
var req = '';

function displayFirstCheckboxes() {
    var viewId='';
    $(".form-horizontal .checkbox").hide();
    $(".form-horizontal .radio label").hide();
    $(".form-horizontal .radio input[type=radio]").hide();

    $(".form-horizontal").each(function (e) {
        $(this).find("label.radio label:lt(4)").show();
        $(this).find("label.radio input[type=radio]:lt(4)").show();
        $(this).find("label.checkbox:lt(4)").show();
        var formId= $(this).attr('id');
        if($("#" + formId +" > .radio > input[type=radio]").length <= 4 && $("#" + formId +" > .radio > input[type=radio]").length !=0) {
            viewId= $(this).siblings('a').attr('id');
            $("#" + viewId).hide();
        }
        if($("#" + formId +" > .checkbox > input[type=checkbox]").length <= 4 &&$("#" + formId +" > .checkbox > input[type=checkbox]").length !=0) {
            viewId= $(this).siblings('a').attr('id');
            $("#" + viewId).hide();
        }
    });
}
$(function () {
    $('#resourceloader').hide();
    $('form.search').each(function () {
        var formId = $(this).attr('id');
        var content = $(this).html();
        if (!($.trim(content))) {
            $('#' + formId).parent().hide();
        } else {
            $('#' + formId).parent().show();
        }
    });
    displayFirstCheckboxes();

    $(".viewMoreIcons").click(function () {
        if ($(this).html() == "View More") {
            var id = $(this).siblings('form').attr('id');
            $("#" + id).find(".checkbox").show();
            $("#" + id).find(".radio label").show();
            $("#" + id).find(".radio input[type=radio]").show();
            $("#" + id).addClass("startScroll");
            $(this).html("View Fewer");
        } else {
            var id = $(this).siblings('form').attr('id');
            $("#" + id).find(".checkbox").hide();
            $("#" + id).find(".radio label").hide();
            $("#" + id).find(".radio input[type=radio]").hide();
            $("#" + id).find(".radio label:lt(4)").show();
            $("#" + id).find(".radio input[type=radio]:lt(4)").show();
            $("#" + id).find("label.checkbox:lt(4)").show();
            $("#" + id).removeClass("startScroll");
            $(this).html("View More");
        }
    });

    $('#search-form').submit(function (e) {
        return false;
    });
});


var htmlSubTheme='';

var arrSubThemeItem = [];

var htmlCountriesByRegion;
var arrcountriesByRegion = [];

var groupSearchTheme = '';
var arrSearchTheme = new Array();
var arrSubTheme  =new Array();
var arrRegionTheme = new Array();
var arrCountryTheme = new Array();
var arrTypeTheme = new Array();
var arrAuthorTheme = new Array();
var htmlGrpSearch =[];
var themeHtml='';
var arrCheckedCountries= new Array();

$('.resourceLibrarySearch').live('click keyup', function () {
    var keyword = $('input[type=text].resourceLibrarySearch').val();
    keyword = $.trim(keyword);
    if ($(this).attr("class") === "search-query librarySearch librarySearchInner resourceLibrarySearch") {
        if (!keyword) {
            return;
        }
    }
    var minlength = 3;
    var getDataSubThm='';
    var grpSearchHtml='';
    if ($(this).attr("class") == "icon-cross resourceLibrarySearch") {
        if($(this).attr("id")== "keywordCross") {
            $(".search-query.librarySearch.librarySearchInner.resourceLibrarySearch").val('');
            keyword='';
            htmlGrpSearch ["keywordHtml"]='';
        }

        var removedTag = $(this).prev().text();
        $('.grayBox .search input[value="' + removedTag + '"]').attr('checked', false);
        if ($(this).parent().attr('id') == "formSearchTheme") {
            htmlGrpSearch ['themeHtml']='';
            htmlGrpSearch['SubThemeHtml']='';
            arrSearchTheme='';
            arrSubTheme=[];
            $('#formSubTheme').html('');
            $('#formSubTheme').parent().hide();
            }
        else if ($(this).parent().attr('id') == "formRegionTheme") {
            pop_element($(this).attr('id'),arrRegionTheme);
            htmlGrpSearch['CountryThemeHtml']='';
            $('#formCountryTheme').html('');
            $('#formCountryTheme').parent().hide();
            getDataCountry = {region:$(this).val()};
            arrCheckedCountries=[];
            arrCheckedCountries=arrCountryTheme;
            arrCountryTheme=[];
            if(!isEmpty(arrRegionTheme)) {
                get_countries_by_region();
            }
            else {
                $('#formCountryTheme').html('');
                $('#formCountryTheme').parent().hide();
            }
            addCountryThemeHtml($(this).parent().attr('id'));
        }
        else if ($(this).parent().attr('id') == "formSubTheme") {
            pop_element($(this).attr('id'),arrSubTheme);
            addSubThemeHtml($(this).parent().attr('id'));
        }
        else if ($(this).parent().attr('id') == "formCountryTheme") {
            var country_id=$(this).attr('country_name').replace('_1','');
            pop_element($(this).attr('country_name'),arrCountryTheme);
            addCountryThemeHtml($(this).parent().attr('id'));

        }
        else if ($(this).parent().attr('id') == "formTypeTheme") {
            pop_element($(this).attr('id'),arrTypeTheme);
        }
        else if ($(this).parent().attr('id') == "formAuthorTheme") {
            pop_element($(this).attr('id'),arrAuthorTheme);
        }

    }
   if($(".search-query.librarySearch.librarySearchInner.resourceLibrarySearch").val() !==''){
       htmlGrpSearch ["keywordHtml"]= '<li><div class="tagsName">' + $(".search-query.librarySearch.librarySearchInner.resourceLibrarySearch").val() + '</div><a href="javascript:void();" class="icon-cross resourceLibrarySearch" id="keywordCross"></a></li>';
        $('.tagsList').html(htmlGrpSearch);
   }
        if ($(this).is(':checked')) {
            themeHtml='';
            if ($(this).parent().parent().attr('id') == "formSearchTheme") {
                arrSearchTheme = $(this).val().replace(",","|");
                arrSubTheme=[];
                themeHtml = '<li id="'+$(this).parent().parent().attr('id')+'"><div class="tagsName">' + $(this).val() + '</div><a href="javascript:void();" class="icon-cross resourceLibrarySearch" id="themeHtml"></a></li>';
                getDataSubThm = {theme:$(this).val()};
                get_sub_theme_ajax();
            }
           else if ($(this).parent().parent().attr('id') == "formRegionTheme") {
                arrRegionTheme [$(this).attr('id')]=$(this).val();
                htmlGrpSearch['CountryThemeHtml']='';
                getDataCountry = {region:$(this).val()};
                arrCheckedCountries=[];
                arrCheckedCountries=arrCountryTheme;
                arrCountryTheme=[];
                if(!isEmpty(arrRegionTheme)) {
                    get_countries_by_region();

                }
                else {
                    $('#formCountryTheme').html('');
                    $('#formCountryTheme').parent().hide();
                }

            }
            else if ($(this).parent().parent().attr('id') == "formSubTheme") {
                arrSubTheme [$(this).attr('id')]=$(this).val();

            }
            else if ($(this).parent().parent().attr('id') == "formCountryTheme") {
                arrCountryTheme [$(this).attr('id')]=$(this).val();

            }
            else if ($(this).parent().parent().attr('id') == "formTypeTheme") {
                arrTypeTheme[$(this).attr('id')]=$(this).val();

            }
            else if ($(this).parent().parent().attr('id') == "formAuthorTheme") {
                arrAuthorTheme[$(this).attr('id')]=$(this).val();

            }
            if(themeHtml!==''){
                htmlGrpSearch ['themeHtml']=themeHtml;
                htmlGrpSearch['SubThemeHtml']='';
            }
            else if($(this).parent().parent().attr('id') == "formSubTheme") {
                addSubThemeHtml($(this).parent().parent().attr('id'));

            }
            else if($(this).parent().parent().attr('id') == "formCountryTheme") {
                addCountryThemeHtml($(this).parent().parent().attr('id'));
            }
            else if($(this).parent().parent().attr('id') == "formRegionTheme") {
                htmlGrpSearch[$(this).attr('id')]='<li id="'+$(this).parent().parent().attr('id')+'"><div class="tagsName">' + $(this).val() + '</div><a href="javascript:void();" class="icon-cross resourceLibrarySearch" id="'+$(this).attr('id')+'"></a></li>';
                addCountryThemeHtml("formCountryTheme");
            }
            else{
                htmlGrpSearch[$(this).attr('id')]='<li id="'+$(this).parent().parent().attr('id')+'"><div class="tagsName">' + $(this).val() + '</div><a href="javascript:void();" class="icon-cross resourceLibrarySearch" id="'+$(this).attr('id')+'"></a></li>';

            }
        }
        else {
            for(var i in htmlGrpSearch) {
                if(i==$(this).attr('id')){
                    htmlGrpSearch[i]='';
                }
            }
            if ($(this).parent().parent().attr('id') == "formRegionTheme") {
                 pop_element($(this).attr('id'),arrRegionTheme);
                getDataCountry = {region:$(this).val()};
                arrCheckedCountries=[];
                arrCheckedCountries=arrCountryTheme;
                arrCountryTheme=[];
                if(!isEmpty(arrRegionTheme)) {
                    get_countries_by_region();

                }
                else {
                    $('#formCountryTheme').html('');
                    $('#formCountryTheme').parent().hide();
                }
                htmlGrpSearch['CountryThemeHtml']='';
                addCountryThemeHtml($(this).parent().parent().attr('id'));

            }
            else if ($(this).parent().parent().attr('id') == "formSubTheme") {
                pop_element($(this).attr('id'),arrSubTheme);
                addSubThemeHtml($(this).parent().parent().attr('id'));
            }
            else if ($(this).parent().parent().attr('id') == "formCountryTheme") {
                pop_element($(this).attr('id'),arrCountryTheme);
                addCountryThemeHtml($(this).parent().parent().attr('id'));
            }
            else if ($(this).parent().parent().attr('id') == "formTypeTheme") {
                pop_element($(this).attr('id'),arrTypeTheme);
            }
            else if ($(this).parent().parent().attr('id') == "formAuthorTheme") {
                pop_element($(this).attr('id'),arrAuthorTheme);
            }
        }
    for(var i in htmlGrpSearch) {
        grpSearchHtml +=htmlGrpSearch[i];
    }
    $('.tagsList').html(grpSearchHtml);
    var searchUrl = '/searches?display_tab=' + display_tab + '&key=' + keyword + '&theme=' + arrSearchTheme + '&subtheme=' + convertToString(arrSubTheme) + '&region=' + convertToString(arrRegionTheme) + '&country=' + convertToString(arrCountryTheme) + '&type=' + convertToString(arrTypeTheme) + '&author=' + convertToString(arrAuthorTheme) + '&searchBtn=Search';
    if ($(this).attr("class") === "search-query librarySearch librarySearchInner resourceLibrarySearch") {
        resourceSearchBykey(keyword, minlength);
    }
    else {
        get_search_res_ajax();
    }
    function pop_element(index,arr) {
        for(var key in arr) {
            if(key==index){
                arr[key]='';
            }
        }
    }

    function convertToString(data) {
        stringData='';
        for(var key in data) {
            if(data[key]!=='')
           stringData +=(data[key] + ',');
        }
        stringData=stringData.replace(/(\s+)?.$/, '');
        return stringData;
    }

    function addSubThemeHtml(divId) {
        var crossHtml='';
        for(var key in arrSubTheme) {
            if(arrSubTheme[key] !=='')
            crossHtml += '<li id= "'+divId+'"><div class="tagsName" >' + arrSubTheme[key] + '</div><a href="javascript:void();" class="icon-cross resourceLibrarySearch" id="'+key+'"></a></li>'
        }
            htmlGrpSearch['SubThemeHtml']=crossHtml;

    }

    function addCountryThemeHtml (divId){
        var crossHtml='';
        for(var key in arrCountryTheme) {
            if(arrCountryTheme[key] !=='')
                crossHtml += '<li id= "'+divId+'"><div class="tagsName" >' + arrCountryTheme[key] + '</div><a href="javascript:void();" class="icon-cross resourceLibrarySearch" country_name="'+key+'"></a></li>'
        }
        htmlGrpSearch['CountryThemeHtml']=crossHtml;
    }


    function resourceSearchBykey(keyword, minlength) {
        var value = keyword;
        if (req != '') req.abort();
        if (value.length >= minlength) {
            req = $.ajax({
                type:"GET",
                url:searchUrl,
                dataType:"text",
                success:function (data) {
                    req = '';
                    //we need to check if the value is the same
                    if (value != '') {
                        $('#resourceSearchAjax').html('');
                        $('#resourceSearchAjax').html(data);
                    }

                }
            });
        }
        return true;
    }

    function get_sub_theme_ajax() {
        var url = '/searches/get_subthemes_ajax?theme=' + arrSearchTheme;
        htmlSubTheme='';
        if (getDataSubThm != 0) {
            $.ajax({

                type:'GET',
                url:url,
                async:false,

                success:function (data) {

                    var subThemes = $.parseJSON(data);
                    if (subThemes.length) {
                        $.each(subThemes, function (i, item) {
                            arrSubThemeItem.push(item.value);       //I think this is not required
                            htmlSubTheme += '<label class="checkbox"><input type="hidden" name="' + item.value + '" id="" value="0"><input type="checkbox" class="resourceLibrarySearch" name="' + item.value + '" id="'+ item.id + '" value="' + item.id + '">' + item.value + '</label>';
                        });
                    }

                    $('#formSubTheme').html(htmlSubTheme);
                    $("#formSubTheme .checkbox").hide();
                    $("#formSubTheme").each(function (e) {
                        $(this).find("label:lt(4)").show();
                    });
                    $("#subTopicView").html("View More");
                    if($("#formSubTheme  > .checkbox > input[type=checkbox] ").length <= 4) {
                        $("#subTopicView").hide();
                    }
                    else {
                        $("#subTopicView").show();
                    }
                }
            });
        }
        $('form.search').each(function () {
            var formId = $(this).attr('id');
            var content = $(this).html();
            if (!($.trim(content))) {
                $('#' + formId).parent().hide();
            } else {
                $('#' + formId).parent().show();
            }
        });
    }

    function get_countries_by_region() {
        var url = '/searches/get_countries_by_region?region=' +convertToString(arrRegionTheme);
        htmlCountriesByRegion='';
        if (getDataCountry != 0) {
            $.ajax({
                type:'GET',
                url:url,
                async:false,

                success:function (data) {

                    var countries = $.parseJSON(data);
                    if (countries.length) {
                        $.each(countries, function (i, item) {
                            htmlCountriesByRegion += '<label class="checkbox"><input type="hidden" name="' + item.value + '" id="" value="0"><input type="checkbox" class="resourceLibrarySearch" name="' + item.value + '" id="'+ item.id + '" value="' + item.id + '">' + item.value + '</label>';
                        });
                    }

                    $('#formCountryTheme').html(htmlCountriesByRegion);
                    $("#formCountryTheme .checkbox").hide();
                    for(var i in arrCheckedCountries ) {
                        if($("[id= '"+i+"']").length > 0) {
                            arrCountryTheme[i]=arrCheckedCountries[i];
                            if(arrCheckedCountries[i] !=='')
                                $("[id= '"+i+"']").attr('checked',true);

                        }

                    }
                    $("#formCountryTheme").each(function (e) {
                        $(this).find("label:lt(4)").show();
                    });
                    $("#viewMoreIcons").html("View More");
                    if($("#formCountryTheme  > .checkbox > input[type=checkbox] ").length <= 4) {
                       $("#countryView").hide();
                    }
                    else {
                        $("#countryView").show();
                    }

                    var content = $('#formCountryTheme').html();
                    if ($.trim(content)) {
                        $('#formCountryTheme').parent().show();
                    } else {
                        $('#formCountryTheme').parent().hide();
                    }
                }
            });
        }

    }

    function get_search_res_ajax() {
        $("#resourceloader").show();
        $.ajax(
            {
                type:'GET',
                url:searchUrl,
                success:function (data) {

                    if ($("#resourceSearchAjax").length == 0) {
                        $('.tab-content').html('');
                        $('.tab-content').append('<div id="recentPublications" class="tab-pane fade in active"><div id="resourceSearchAjax"></div></div>');
                        $('#resourceSearchAjax').html('');
                        $('#resourceSearchAjax').html(data);
                    } else {
                        $('#resourceSearchAjax').html('');
                        $('#resourceSearchAjax').html(data);
                    }
                    $("#resourceloader").hide();
                }
            }
        );
    }

    function isEmpty(arr) {
        var key;
        for (key in arr) {
            if (arr[key] !=='') return false;
        }
        return  true;
    }
});
