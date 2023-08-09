var alan =document.getElementById("go");
alan.style.position="absolute";

window.onmousemove=function gezdir(event) {
    alan.style.left=  event.clientX +"px"
    alan.style.top =  event.clientY +"px";
}
