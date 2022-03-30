
const APIURL ="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI ="https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

const main = document.getElementById('main');
const head = document.getElementById('header');
const inputs = document.querySelector('input');
const form = document.getElementById('form');
const search =document.getElementById('search');
var page=1;

/*-----------------------------Récupérer les film------------------------------*/

getMovies(APIURL);

function getMovies(url){
    fetch(url).then(res => res.json()).then(data =>{

       showMovies(data.results);
    //    console.log(data.results);
    })
}

/*-----------------------------Afficher les film------------------------------*/

function showMovies(data){
    data.forEach(movie => {
        const {title,overview,poster_path,vote_average}= movie;
        const movieE1 =document.createElement('div');
        movieE1.classList.add('movie');
        movieE1.innerHTML =`
                <img src="${IMGPATH+poster_path}" alt="${title}">
                <div class="movie-info">
                    <h3>${title}</h3>
                    <span class="${color(vote_average)}">${vote_average}</span>
                </div>
                <div class="overview">
                    <h3>Overview</h3>
                    ${overview}
                    
                </div>
            `
            main.appendChild(movieE1);
    })
}

/*-------------------------------Couleur des votes--------------------------------*/

function color(vote){
    if(vote>=8){
        return "green";

    }else if(vote>=5){

        return "orange";
    }else{
         return "red"
    }

}

/*---------------------------Faire une recherche de film---------------------------*/

search.onkeyup = (e) =>{
    e.preventDefault();
    const chercherFilm =search.value;
    if(chercherFilm){
        main.innerHTML ='';
        getMovies(SEARCHAPI+chercherFilm)
    }else{
        getMovies(APIURL);
    }
}

/*---------------charger les pages au fur et à mesure qu'on scroll------------------*/ 

window.onscroll=function(){
    if((window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
        page++;
        getMovies(APIURL+page);

    }   
}

/*-----------------------------------loader----------------------------------------*/

if(document.readyState){
    setTimeout(()=>{
        const load= document.querySelector('.loader');
        load.style.visibility = 'hidden';
        main.style.visibility = 'visible';
        }, 3000);
    }else{
        load.style.visibility = 'visible';
        main.style.visibility = 'hidden';
    }

/*----------------------------------------------------------------------------------*/
    function val(e){
    head.textContent = e.target.value;
}
inputs.addEventListener("change", val);