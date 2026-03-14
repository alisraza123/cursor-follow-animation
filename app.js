var circle=document.getElementById("circle")
var main=document.getElementById("main")
console.log("hello")
main.addEventListener("mousemove",function(e){
    var x=e.clientX;
    var y=e.clientY;
    circle.style.top=y+ 'px';
    circle.style.left=x+'px';
})