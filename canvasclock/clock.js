/**
 * Created by yuejd on 2017/3/26.
 */
var dom = document.getElementById("clock");
var ctx = dom.getContext("2d");
var width = ctx.canvas.width;
var height = ctx.canvas.height;
var r = width/2;
var rem=width/200;
function drawback() {
    ctx.save();
    ctx.translate(r,r);
    ctx.beginPath();
    ctx.lineWidth=8*rem;
    ctx.arc(0,0,r-ctx.lineWidth/2,0,2*Math.PI,false);
    ctx.stroke();
    var arr=[3,4,5,6,7,8,9,10,11,12,1,2];
    ctx.font=18*rem + "px Arial";
    ctx.textAlign="center";
    ctx.textBaseline="middle"
    for(i=0;i<12;i++){
     var rad= 2*Math.PI/12*i;
        var x=(r-30*rem)*Math.cos(rad);
        var y=(r-30*rem)*Math.sin(rad);
        ctx.fillStyle='#000';
        ctx.fillText(arr[i],x,y);
    }
    for(var i=0;i<60;i++){
        var rad=2*Math.PI/60*i;
        var x=Math.cos(rad)*(r-18*rem);
        var y=Math.sin(rad)*(r-18*rem);
        ctx.beginPath();
        if(i % 5===0){
            ctx.fillStyle="#000"
            ctx.arc(x,y,2*rem,0,2*Math.PI,false)
        }
        else {
            ctx.fillStyle="#cccccc";
            ctx.arc(x,y,2*rem,0,2*Math.PI,false)
        }

        ctx.fill();
    }

}
function drawhour(hour,minute) {
    ctx.save();
    ctx.beginPath();
    ctx.lineWidth=6*rem;
    ctx.lineCap='round';
    ctx.rotate(2*Math.PI/12*hour + 2*Math.PI/60/12*minute);
    ctx.moveTo(0,5*rem);
    ctx.lineTo(0,-r/2);
    ctx.stroke();
    ctx.restore();

}
function drawminute(minute) {
    ctx.save();
    ctx.beginPath();
    ctx.lineWidth=3*rem;
    ctx.lineCap='round';
    ctx.rotate(2*Math.PI/60*minute);
    ctx.moveTo(0,10*rem);
    ctx.lineTo(0, -r +30);
    ctx.stroke();
    ctx.restore();
}
function drawsecond(second) {
    ctx.save();
    ctx.beginPath();
    ctx.lineWidth=6*rem;
    ctx.lineCap='round';
    ctx.rotate(2*Math.PI/60*second);
    ctx.moveTo(-2,10);
    ctx.lineTo(2, 10);
    ctx.lineTo(1,-r+18);
    ctx.lineTo(-1,-r+18);
    ctx.fillStyle="red";
    ctx.fill();
    ctx.restore();
}
function drawdot() {
    ctx.beginPath();
    ctx.arc(0,0,3*rem,0,2*Math.PI,false);
    ctx.fillStyle="#fff";
    ctx.fill();
}



function draw() {
    ctx.clearRect(0,0,width,height);
    var now=new Date();
    var hour=now.getHours();
    var minute=now.getMinutes();
    var second=now.getSeconds();
    drawback();
    drawhour(hour,minute);
    drawminute(minute);
    drawsecond(second);
    drawdot();
    ctx.restore();

}
draw();
setInterval(draw,1000);




