let body = document.getElementsByTagName("body");
let title = document.getElementById("h1");
let days=document.getElementById("days");
let heure=document.getElementById("heure");
let minute=document.getElementById("minute");
let seconde=document.getElementById("seconde");


function compteArebours(){
    let nowYear= moment('2023','YYYY')
    let now=moment();
    let difference= nowYear - now ;
    let nbJours=nowYear.diff(now,"day");
    let duration=moment.duration(difference,'milliseconds')
    
    days.textContent = nbJours;
    heure.textContent =  duration._data.hours;
    minute.textContent = duration._data.minutes;
    seconde.textContent = duration._data.seconds;

    if (difference <= 0) {
          clearInterval(countDownInterval);
        body.style.backgroundImage = 'url("newyear.jpg")';
        days.textContent = 0;
        heure.textContent = 0;
        minute.textContent = 0;
        seconde.textContent = 0;
        title.innerHTML = "Bonne année !!!";
    }
}
let countDownInterval = setInterval(compteArebours, 1000);
compteArebours();