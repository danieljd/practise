/**
 * Created by yuejd on 2017/4/5.
 */
//导航栏点击
$(".left_nav  a").click(function () {

    var classname = $(this).closest("ul").attr("class");
    if(classname=="nav_bar_level1"){
        $(this).nextAll().show();
        $(this).parent().siblings().children("a").removeClass("nav_bar_current1").next().hide();
    }

})
//切换分组
var $page=$(".group_page");
var $title=$(".group_title li");
$.each($title,function (index,item) {
    item.id=index;

})

$title.click(function () {
    var id=$(this).attr("id");
    $(this).addClass("group_title_active").siblings().removeClass("group_title_active");
    $(".group_page").hide().eq(id).show();;

})

//切换分组方式
var $group= $ (".step1 li");
$group.click(function () {
    $(this).addClass("group_divide_active").siblings().removeClass("group_divide_active")
    var idd=$(this).attr("data-id");
    var box=$(this).parents(".group_content");
    var step2=box.find(".step2");
    if(step2.css('display')=='none'){
        step2.show();
    }
    box.find('.step2').find('li').hide();

    box.find(".step2").find("li[data_id=" +idd+ "]").show();
})