//----------------Première approche-------------

var i=0;
var image = [];
var time = 3000;

image[0]  = "images1.jpg";
image[1]  = "images2.jpg";
image[2]  = "images3.jpg";
image[3]  = "images4.jpg";
image[4]  = "images5.jpg";
image[5]  = "images6.jpg";
image[6]  = "images7.jpg";
image[7]  = "images8.jpg";
image[8]  = "images9.jpg";
image[9] = "images10.jpg";

function slide(){
document.slide.src =image[i];
    if(i< image.length - 1){
        i++;
    }else{
        i=0;
    }
    setTimeout("slide()" ,time);
}

window.onload=slide;

//----------------Deuxième approche-------------

// var container=document.getElementById("container");
// var previus=document.getElementById("previus");
// var next=document.getElementById("next");
// var position=0;
// var nbr=10;

// document.body.onload=function(){
//     container.style.width=(800*nbr)+"px";
//     for (i=1;i<=nbr;i++) {
//         div=document.createElement("div");
//         div.className="diapo";
//         div.style.backgroundImage="url('images"+i+".jpg')";
//         container.appendChild(div);
//     }
//     maskAffich();
// }

// previus.addEventListener("click",function(){
//     if(position>-nbr+1){
//         position--;
//         container.style.transform="translate("+position*800+"px)";
//         container.style.transition="all 0.3s ease";
//         maskAffich();
//     }
// });

// next.addEventListener("click",function(){
//     if(position<0){
//         position++;
//         container.style.transform="translate("+position*800+"px)";
//         container.style.transition="all 0.3s ease";
//         maskAffich();
//     }
// });

// function maskAffich(){
//     if(position==-nbr+1){
//         previus.style.visibility="hidden";
//     }else{
//         previus.style.visibility="visible";
//     }
//     if(position==0){
//         next.style.visibility="hidden";
//     }else{
//         next.style.visibility="visible";
//     }
// }
