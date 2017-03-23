/**
 * Created by yuejd on 2017/3/23.
 */
window.onload=function () {
    waterfall();
    var dataInt={"data":[{"src":'9.jpg'},{"src":'1.jpg'},{"src":'2.jpg'},{"src":'3.jpg'},{"src":'4.jpg'},{"src":'5.jpg'},{"src":'6.jpg'}]};
    console.log(dataInt)
    window.onscroll=function () {
        if(checkScroll()){
         //将数据块渲染到当前页面到尾部
            var main=document.getElementById("main");
          for(var i=0;i<dataInt.data.length;i++){
              console.log(0);
              var oBox=document.createElement("div");
              oBox.className="pin";
              main.appendChild(oBox);
              console.log(oBox);
              var oPic=document.createElement("div");
              oPic.className="box";
              oBox.appendChild(oPic);
              var oImg=document.createElement("img");
              oImg.src="./images/"+dataInt.data[i].src;
              oPic.appendChild(oImg);
              waterfall();
          }


        }
    }

}

function waterfall() {
    var main=document.getElementById("main");
    var oBox=main.getElementsByClassName("pin");
    var oBoxw=oBox[0].offsetWidth;
    var cols=Math.floor(document.documentElement.clientWidth/oBoxw);
    main.style.cssText= 'width:'+oBoxw*cols+'px ;margin:0 auto';
    var harr=[];//存放每一列高度的数组
    for(var i=0;i<oBox.length;i++){
        if(i<cols){
         harr.push(oBox[i].offsetHeight);
        }else{
            var minH=Math.min.apply(null,harr);
            var index=findindex(harr,minH);
            var offleft=index*oBoxw;
            oBox[i].style.position="absolute";
            oBox[i].style.top=minH+'px';
            oBox[i].style.left=offleft+'px';
            harr[index]+=oBox[i].offsetHeight;
        }
    }
     console.log(index)
}

function findindex(arr,val){
    for(var i=0;i<arr.length;i++){
        if(arr[i]==val){
            return i;
        }
    }
}
function checkScroll() {
    var main=document.getElementById("main");
    var oBox=main.getElementsByClassName("pin");
    var lastBox=oBox[oBox.length-1];
    var lasth=lastBox.offsetTop+Math.floor(lastBox.offsetHeight/2);
    var scrollTop=document.documentElement.scrollTop || document.body.scrollTop;
    var height=document.documentElement.clientHeight;
    console.log(scrollTop,height)
    if(lasth< scrollTop+height){
        return true;
    }else{
        return false;
    }
}