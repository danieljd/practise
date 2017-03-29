/**
 * Created by yuejd on 2017/3/28.
 */
$(".right").delegate(".btn_finish","click",function() {
    var form = $(".right")
    form.find("input").each(function () {
        var val = $.trim($(this).val());
        if (val == "" || val == undefined) {
            var placeholder = $(this).attr("placeholder");
            $(this).focus();
            $(this).siblings(".tips").show().find("span").text(placeholder);
            return false;
        }else {
            $(this).siblings(".tips").hide();
        }

    })

})