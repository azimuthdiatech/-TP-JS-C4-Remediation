const mescol=document.getElementById("container");
const colonne=document.getElementById("colonne");
const menu=document.getElementById("menu");
const btn_corbeille=document.getElementById("btn_corbeille");
const btn_reset=document.getElementById("btn_reset");
const corbeille=document.getElementById("corbeille");
const header=document.querySelector(".header");
const btncol=document.querySelector("#newcol");
const btnnode=document.getElementById("newnode");
      btnnode.disabled=true;
const modal_contain=document.getElementById("modal_contain");
const bclose=document.getElementById("close");
const my_form=document.querySelector("form");
const btn_f=document.getElementById("btn_f");


/*---------------afficher le menu------------------*/
menu.addEventListener("click",function(){
    header.classList.toggle("is_visible");
    
})
/*---------------afficher la corbeille------------------*/
btn_corbeille.addEventListener("click",function(){
    corbeille.classList.toggle("is_visible");
})

/*---------------fonction qui génére les taches------------------*/
function gendata(){
    
    const divnot= document.getElementById("mesnot");

    let contain_tache=document.createElement("div");
    contain_tache.setAttribute("id","contain_tache");
        let previus=document.createElement("div");

/*-----------------restaurer tache-----------------*/

        const restaur_tach=document.createElement("img");
        restaur_tach.setAttribute("src", "restaur.png");
        restaur_tach.setAttribute("class", "restaur_tach");
        restaur_tach.style.display="none";
        restaur_tach.addEventListener("click",function(){
            divnot.appendChild(this.parentElement);
            restaur_tach.style.display="none";
            supprtach.style.display="block";
            next.style.display="block";
        })

/*-----------------supprimer tache-----------------*/

        const supprtach=document.createElement("img");
        supprtach.setAttribute("src", "suppr.png");
        supprtach.setAttribute("class", "supprtach");
        supprtach.addEventListener("click",function(){
            //this.parentElement.parentElement.removeChild(this.parentElement);
            corbeille.appendChild(this.parentElement);
            supprtach.style.display="none";
            restaur_tach.style.display="block";
            next.style.display="none";
            previus.style.display="none";

        })
/*---------------------reset all tach in col 1----------------------*/

        btn_reset.addEventListener("click",function(){
            divnot.appendChild(contain_tache);
            supprtach.style.display="block";
            next.style.display="block";
            restaur_tach.style.display="none";
            this.parentElement.removeChild(this.parentElement);
            corbeille.innerHTML="<h4>Toutes les taches ont été restauré dans la colonne 1</h4>";
            
         })
/*---------------------deplacer tache à gauche----------------------*/
        
        previus.setAttribute("id","previus");
        previus.innerHTML='<<';
        previus.style.display="none";
        previus.addEventListener("click",function(){
        previus.parentElement.parentElement.parentElement.previousElementSibling.lastChild.appendChild(contain_tache); 
    })

/*---------------------deplacer tache à droite----------------------*/
       
let next=document.createElement("div");
        next.setAttribute("id","next");
        next.innerHTML='>>';
        next.addEventListener("click",function(){
        next.parentElement.parentElement.parentElement.nextElementSibling.lastChild.appendChild(contain_tache);        
        previus.style.display="block";
    })

/*---------------------recup data----------------------*/

// my_form.forEach(element => {
//     if(element.value == ""{
//         alert("remplissez toutes les champs");
//     }
// });

    let tache_content=document.createElement("div");
    tache_content.setAttribute("id","tache_content");

        let area_data=document.createElement("p");
        area_data.textContent=my_form[0].value;
        let date_data=document.createElement("p");
        date_data.innerHTML=my_form[1].value;
        let debut_data=document.createElement("p");
        debut_data.innerHTML=my_form[2].value;
        let fin_data=document.createElement("p");
        fin_data.innerHTML=my_form[3].value;

    // tache_content.append(my_form[0].value,my_form[1].value,my_form[2].value,my_form[3].value);
    tache_content.append(area_data,date_data,debut_data,fin_data);
    contain_tache.append(previus,tache_content,next,supprtach,restaur_tach);
   
    divnot.appendChild(contain_tache);

}
// couleur_tache();
// function couleur_tache(){
//     var dt=new Date();
//     var dh=dt.getHours() + ":" + dt.getMinutes()
//     if(dh.getMilliseconds > my_form[3].value.getMilliseconds ){
//         alert("aok");
//         tache_content.style.background="green";
//     }
// }

////////////////////////////////////////////////////////
let t=0;
let color=["#F6D167","#D4ECDD","#4AA96C","#C5A880","#152D35","#F6D167"];

var k=0;
/*--------------------fonction génerer colonne------------------------*/
function gen_col(){
    t++;
    const div_col = document.createElement("div");
        let span=document.createElement("span");
        const divnot=document.createElement("div");
        const supprcol=document.createElement("img");
        const logo=document.createElement("img");

        supprcol.setAttribute("class", "supprcol");
        logo.setAttribute("class", "logo");
        supprcol.setAttribute("src", "supp.png");
        logo.setAttribute("src", "logodia.png");

/*--------------------supprimer colonne------------------------*/

        supprcol.addEventListener("click",function(e){
            if(e.target == colonne.childNodes[0]){
                supprcol.disabled=true;
            }else{
                 this.parentElement.parentElement.removeChild(this.parentElement);
                k--;
                t--;
                }
        });

        const inp=document.createElement("input");
        inp.style.display ="none";
    inp.setAttribute("class", "inputs");
    div_col.setAttribute("id", "div_col");
    divnot.setAttribute("id", "mesnot");
    span.setAttribute("class", "inputs");
    span.innerHTML= 'Colonne ' +t;
    span.addEventListener("dblclick",function(){
    // span.contentEditable=true;
       span.style.display ="none";
       inp.style.display ="block";
       inp.value=span.innerHTML ;
    })
    divnot.appendChild(logo);
    div_col.append(span,inp,supprcol,divnot);
    colonne.appendChild(div_col);
    
    div_col.style.background = color[t];
    
    return divnot; 
}

btncol.addEventListener("click", function(){
    if(colonne.childElementCount<5){
        gen_col();
        btnnode.disabled=false;
        }
        k++;
        
});

/*-----------------refresh ----------------------*/
// function refresh(){
//     const cols=document.querySelectorAll("span_id");
//     cols.forEach((element,i) => {
//         element.innerHTML="Colonne sama" +(t+1);
//     });
// }

/*------------------------------Create Modal Elements-----------------------------*/
function affich_note(){
    
    const modal = document.createElement("div");
    modal.setAttribute("class", "modal");

        const header_modal=document.createElement("div");
        header_modal.setAttribute("class", "header_modal");
            const ph=document.createElement("p");
            ph.setAttribute("id", "ph");
            ph.innerHTML="Nouvelle tache";
            const span=document.createElement("span");
            span.setAttribute("id", "close");
            span.innerHTML="&times;";
            span.addEventListener("click",function(e){
                modal_contain.style.display= "none";
              });

        const modal_body=document.createElement("div");
        modal_body.setAttribute("class", "modal_body");
            const pb=document.createElement("p");
            pb.setAttribute("id", "pb");
            pb.innerHTML="Remplir les informations de la nouvelle tâche";
            const pt=document.createElement("p");
            pt.innerHTML="Tâche";
            const tarea=document.createElement("textarea");
            tarea.setAttribute("id", "tarea");
            const dtatea= document.getElementById("tarea");
            tarea.setAttribute("rows",10); tarea.setAttribute("cols",20);
            const pd=document.createElement("p");
            pd.innerHTML="Date";
            const input_d=document.createElement("input");
            input_d.setAttribute("id", "input_d");
            input_d.setAttribute("type", "date");
            const phd=document.createElement("p");
            phd.innerHTML="Heure de début";
            const input_hd=document.createElement("input");
            input_hd.setAttribute("id", "input_hd");
            input_hd.setAttribute("type", "time");
            const phf=document.createElement("p");
            phf.innerHTML="Heure de fin";
            const input_hf=document.createElement("input");
            input_hf.setAttribute("id", "input_hf");
            input_hf.setAttribute("type", "time");

        const footer_modal = document.createElement("div");
        footer_modal.setAttribute("class", "footer_modal");
            const btn_f=document.createElement("button");
            btn_f.setAttribute("id", "btn_f");
            btn_f.setAttribute("type", "button");
            btn_f.innerHTML="Ajouter";
            btn_f.addEventListener("click",function(){
                if(my_form[0].value==""){
                   tarea.style.border="2px solid red";
                   tarea.style.transform="scale(1.1)";
                }else if(my_form[1].value==""){
                    input_d.style.border="2px solid red";
                }else if(my_form[2].value==""){
                    input_hd.style.border="2px solid red";
                }else if(my_form[3].value==""){
                    input_hf.style.border="2px solid red";
                }else if(my_form[2].value > my_form[3].value){
                    input_hd.style.border="2px dotted red";
                    input_hf.style.border="2px dotted red";
                }else{
                    gendata(); 
                }
    
            });

            header_modal.append(ph,span);
            modal.appendChild(header_modal);
            modal_body.append(pb,pt,tarea,pd,input_d,phd,input_hd,phf,input_hf);
            modal.appendChild(modal_body);
            footer_modal.appendChild(btn_f);
            modal.appendChild(footer_modal);
            my_form.appendChild(modal);

    if(modal_contain.style.display =="none"){
        modal_contain.style.display ="block";
    }else{
        modal_contain.style.display ="block"
    }
    return modal;
}
/*----------------Générer une note------------*/
btnnode.addEventListener("click",function(){
    modal_contain.style.display= "block";
    affich_note();
});

/*--------------fermer modal------------------*/
window.addEventListener("click",function(e){
if(e.target == modal_contain){
    modal_contain.style.display ="none";
}
});

/*-------------------validation formulaire-------------------*/

// function validate(e){
   
// const areadata=document.getElementById("tarea");
// const datedata=document.getElementById("input_d");
// const hddata=document.getElementById("input_hd");
// const hfdata=document.getElementById("input_hf");
//     if(areadata ==""){
//         alert("Veuillez entrer une tache");
//         document.areadata.focus();
//          e.preventDefault();
//         return false;
//     }
// }
// validate();


/*---------------------données json----------------------*/
// let url="http://localhost/TPJS_Remedia/Projet_Trello/data.json"
// function getData(url) {
//  fetch(url)
//     .then(res=> res.json())
//     .then(data=> console.log(data))
// }
// getData(url);





/*------------save in json-------------*/
// const divnot = document.getElementById('mesnot');
// let url="http://localhost/TPJS_Remedia/Projet_Trello/data.json";
// getData(url);

// function getData(url) {
//     fetch(url)
//      .then(res => res.json())
//      .then(data => {

//         showData(data.results);
//     }) 
// }

// function showData(data) {
//     data.forEach(user => {
//         const {tache,date,hdebut,hfin}= user;
//         const dat = document.createElement('div');
//         dat.classList.add('data');
//         dat.innerHTML = `<div class="user">
//                             <p>${tache}</p>
//                             <p>${date}</p> 
//                             <p>${hdebut}</p>
//                             <p>${hfin}</p>
//                         </div>`;
//         divnot.appendChild(dat);
//     });
// }