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

// 鼠标滑过效果
function mouse(element,className) {
    element.mouseover(function () {
        $(this).addClass(className);
    })
    element.mouseout(function () {
        if ($(this).siblings().hasClass(className)){
            $(this).removeClass(className);
        }

    })
}
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
// mouse($title,"group_title_active");
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
// mouse($group,"group_divide_active")
//点击分组方式列表
var $bag=$(".bag li");
$bag.click(function () {
    var step2=$(this).parents(".step2"),
        pa_top = parseInt($(this).position().top),
        pa_left=parseInt($(this).position().left),
        off_top = parseInt($(this).offset().top),       //绝对位置中的top值
        off_left = parseInt($(this).offset().left),     //绝对位置中的left值
        win_height = $(window).height(),    //浏览器当前可视区域高度
        win_width = $(window).width(),     //浏览器当前可视区域宽度
        box_left,box_top

        if(off_left+135+280 >= win_width){
            box_left=pa_left-280;
        }else {
            box_left=pa_left+ 135;
        }

        if(off_top + 245 >= win_height){
            box_top=pa_top + 120-245;
        }else {
            box_top=pa_top;
        }
        $(this).siblings().removeClass("bag_active");
        $(this).addClass("bag_active")
        $(".box").show().css({
            top:box_top,
            left:box_left
        })


    })
$(".btn_modal_close").click(function () {
      $(".box").hide();
  })
// mouse($bag,"bag_active");