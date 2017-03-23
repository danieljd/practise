/**
 * Created by yuejd on 2017/3/23.
 */
$(window).on('load',function () {
    waterfall();
    var dataInt={"data":[{"src":'9.jpg'},{"src":'1.jpg'},{"src":'2.jpg'},{"src":'3.jpg'},{"src":'4.jpg'},{"src":'5.jpg'},{"src":'6.jpg'}]};console.log(dataInt);
    $(window).on("scroll",function () {
        if(checkScroll()){
          $.each(dataInt.data,function (key,value) {
              var oBox=$("<div>").addClass("pin").appendTo($("#main"));
              var oPic=$("<div>").addClass("box").appendTo($(oBox));
              $("<img>").attr('src',"images/"+$(value).attr("src")).appendTo($(oPic));

          })
            waterfall();
        }
    })
})
function waterfall() {
    var $box=$("#main>div");
    var w=$box.eq(0).outerWidth();
    var cols=Math.floor($(window).width()/w);
    $("#main").width(w*cols).css("margin","0 auto");
    var arrH=[];
    $box.each(function (index,value) {
     if(index<cols){
         arrH.push($(value).outerHeight());
     }else {
         var minH=Math.min.apply(null,arrH);
         var minHindex=$.inArray(minH,arrH);
         $(value).css({
             'position':'absolute','top':minH+'px','left':minHindex*w+'px'
         })
         arrH[minHindex]+=$box.eq(index).outerHeight();
     }
    })

}
function checkScroll() {
    var $lastbox=$('#main>div').last();
    var lastBoxDis=$lastbox.offset().top+Math.floor($lastbox.outerHeight()/2);
    var scrollTop=$(window).scrollTop();
    var h=$(window).height();
    return (lastBoxDis<scrollTop+h)?true:false;
}

