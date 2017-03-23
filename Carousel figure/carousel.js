/**
 * Created by yuejd on 2017/3/21.
 */
window.onload = function () {
    var contain=document.getElementsByClassName("contain")[0];
    var list=document.getElementById("list");
    var buttons=document.getElementsByClassName("button")[0].getElementsByTagName("span");
    var prev=document.getElementById("prev");
    var next=document.getElementById("next");
    var index=1;
    var timer;

    function showButton() {
        for(var i=0;i<buttons.length;i++){
            if(buttons[i].className=="on"){
                buttons[i].className="";
            }
        }
        buttons[index-1].className='on';
    }


    function animate(offset) {
        var leftValue=parseInt(list.style.left) + offset;
        list.style.left = leftValue + 'px';
        if (leftValue < -5000){
            list.style.left= -1000 +'px';
        }
        if (leftValue > -1000){
            list.style.left= -5000 +'px';
        }
    }

    function play() {
        timer = setInterval(function () {
            next.onclick();
        },2000);

    }
    function stop() {
        clearInterval(timer);
    }
    contain.onmouseover = stop;
    contain.onmouseout = play;
    play();



    next.onclick = function () {
        if(index==5){
            index=1;
        }else{
            index+=1;
        }
        showButton();
        animate(-1000);

    }
    prev.onclick = function () {
        if(index==1){
            index=5;
        }else{
            index=index-1;
        }

        showButton();
        animate(1000);
    }
    for(var i=0;i<buttons.length;i++){
        buttons[i].onclick = function () {
            if(this.className=="on"){
                return;
            }
            var myIndex=parseInt(this.getAttribute("index"));
            var offset= -1000 *(myIndex - index);
            animate(offset);
            index=myIndex;
            showButton();
        }
    }



}