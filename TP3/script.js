
var i=0;
var image = ["images1.jpg","images2.jpg","images3.jpg","images4.jpg","images5.jpg"
,"images6.jpg","images7.jpg","images8.jpg","images9.jpg","images10.jpg"];

var time = 3000;

var container=document.getElementById("container");
var previus=document.getElementById("previus");
var next=document.getElementById("next");
var position=0;
var nbr=image.length;

window.onload=function slide(){
    container.style.width=(800*nbr)+"px";
    image.forEach((element,i)=>{
    div=document.createElement("div");
    div.className="diapo";
    div.style.backgroundImage=`url('${element}')`;
    container.appendChild(div);
       }) 
    }

previus.addEventListener("click",function(){
    if(position>-nbr+1){
        position--;
    }else{
        position=0
    }
    container.style.transform="translate("+position*800+"px)";
    container.style.transition="all 0.3s ease";
});

next.addEventListener("click",function(){
    if(position<0){
        position++;
    }else{
        position--;
    }
    container.style.transform="translate("+position*800+"px)";
    container.style.transition="all 0.3s ease";
});

