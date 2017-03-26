/**
 * Created by yuejd on 2017/3/26.
 */
window.onload=function () {
    var tit = document.getElementById("notice-tit");
    var con = document.getElementById("notice-con");
    var tit_li = tit.getElementsByTagName("li");
    var con_li = con.getElementsByTagName("div");

//滑动切换
//     for(i=0;i<tit_li.length;i++){
//         tit_li[i].id=i;
//         tit_li[i].onmouseover =function () {
//             for(var j=0;j<tit_li.length;j++){
//                 tit_li[j].className='';
//                 con_li[j].style.display="none";
//             }
//               this.className='select';
//
//
//
//             //设置索引对应div显示
//             con_li[this.id].style.display="block";
//         }
//     }


//延迟切换
//     var timer = null;
//     for(i=0;i<tit_li.length;i++){
//         tit_li[i].id=i;
//         tit_li[i].onmouseover =function () {
//             var that=this;//因为后面用了settime方法会让this指向window，所以先把this存在变量中。
//             //如果存在准备执行的定时器，立刻清楚，只有当前停留时间大于500ms才开始执行
//             // if(timer){
//             //     clearTimeout(timer);
//             //     timer=null;
//             // }
//             timer=setTimeout(function () {
//                 for(var j=0;j<tit_li.length;j++){
//                     tit_li[j].className='';
//                     con_li[j].style.display="none";
//                 }
//                 that.className='select';
//                 //设置索引对应div显示
//                 con_li[that.id].style.display="block";
//             },1000)
//
//
//         }
//     }


//自动切换
  function tab() {
      var index=0;
      var timer=null;
      timer=setInterval(function () {
          index++;
          if(index>=tit_li.length){
              index=0;
          }
          for(var i=0;i<tit_li.length;i++){
              tit_li[i].className="";
              con_li[i].style.display="none";
          }
          tit_li[index].className="select";
          con_li[index].style.display="block";
          console.log(index)
      },1000)

  }
tab();

}