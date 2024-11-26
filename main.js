var buttonEl=document.querySelector(".btn");
var divEl=document.querySelector(".my-div");

var color=["red","green","blue"];
var i=0;
buttonEl.onclick= function(){
    divEl.style.backgroundColor=color[i];
    i++;
    if(i == 3){
        i=0;
    }


}