const days=document.getElementById("days");
const heure=document.getElementById("heure");
const minute=document.getElementById("minute");
const seconde=document.getElementById("seconde");
const days=document.getElementById("year");
const days=document.getElementById("countdown");

const currentyear= new Date().getFullYear();

const newYtime= new Date(`March 01 ${currentyear  + 1} 00:00:00`);

function comptArebour (){
    const currentTime= new Date();
     diff = newYtime - currentTime;
}
comptArebour();