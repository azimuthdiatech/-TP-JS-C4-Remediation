const mesp=document.querySelector(".allp");
var btn=document.querySelectorAll("button");
const my_btn=document.querySelector(".notif");

function notif(){
    const p=document.createElement("p");
    p.setAttribute("id", "mesp");
    mesp.appendChild(p);
    return p;
}
btn.forEach(function(my_btn){
    my_btn.addEventListener("click",function(e){
        let recupcolor = my_btn.getAttribute("data-color");
        recupcolor = recupcolor[0].toUpperCase() + recupcolor.slice(1);
        let div = notif();
        div.textContent=`Notification ${recupcolor}`;
        div.classList.add('Notif'+recupcolor);
        setTimeout(function(){
            mesp.removeChild(div)}, 5000);
    });
});