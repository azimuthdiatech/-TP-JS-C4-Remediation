const mescol=document.getElementById("container");
const colonne=document.getElementById("colonne");
const menu=document.getElementById("menu");
const header=document.querySelector(".header");
const btncol=document.querySelector("#newcol");
const btnnode=document.getElementById("newnode");
      btnnode.disabled=true;
const modal_contain=document.getElementById("modal_contain");
const bclose=document.getElementById("close");
const my_form=document.getElementById("my_form");
const btn_f=document.getElementById("btn_f");
const divcol= document.getElementById("div_col");

function gendata(){

    const area_data=document.createElement("div");
    area_data.textContent="ok1";
    const date_data=document.createElement("div");
    date_data.innerHTML="ok2";
    const debut_data=document.createElement("div");
    debut_data.innerHTML="ok3";
    const fin_data=document.createElement("div");
    fin_data.innerHTML="ok4";

    colonne.appendChild(area_data);
    colonne.appendChild(date_data);
    colonne.appendChild(debut_data);
    colonne.appendChild(fin_data);
    divcol.appendChild(colonne);

    return divcol;
}
// 786365663 numéro ahma dia  783743743



/*---------------afficher le menu------------------*/
menu.addEventListener("click",function(){
    header.classList.toggle("is_visible");
    
})
////////////////////////////////////////////////////////
let t=0;
let color=[,"#D4ECDD","darkred","#DF711B","#152D35","#F6D167"];

var k=0;
function gen_col(){
    t++;
    const div_col = document.createElement("div");
        let span=document.createElement("span");
        const divnot=document.createElement("div");
        const supprcol=document.createElement("img");
        supprcol.setAttribute("class", "supprcol");
        supprcol.setAttribute("src", "supp.png");
        supprcol.addEventListener("click",function(){
            if(colonne.childNodes==colonne.childNodes[0]){
                return true;
            }else{
                colonne.removeChild(div_col);
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
    div_col.appendChild(span);
    div_col.appendChild(inp);
    div_col.appendChild(divnot);
    div_col.appendChild(supprcol);

    colonne.appendChild(div_col);
    
    div_col.style.background = color[t];
    
    return divnot; 
}

btncol.addEventListener("click", function(){
    if(k<5){
        gen_col();
        btnnode.disabled=false;
        }
        k++;
});
/*-----------------ajouter data----------------------*/


/*------------Create Modal Elements------------*/
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
                modal_contain.remove();
              });

        const modal_body=document.createElement("div");
        modal_body.setAttribute("class", "modal_body");
            const pb=document.createElement("p");
            pb.setAttribute("id", "pb");
            pb.innerHTML="Remplir les informations de la nouvelle tache";
            const pt=document.createElement("p");
            pt.innerHTML="Tache";
            const tarea=document.createElement("textarea");
            tarea.setAttribute("id", "tarea");
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
            btn_f.addEventListener("submit",function(){
                gendata();
                let tach=document.getElementById("tarea").value;
                let date=document.getElementById("input_d").value;
                let debut=document.getElementById("input_hd").value;
                let fin=document.getElementById(" input_hf").value;
                
                btn_f.addEventListener("click",()=>{
                    divnot.innerHTML= tach+ `<br>` + date+ `<br>` + debut+ `<br>` + fin ;
                })
            });

            header_modal.appendChild(ph);
            header_modal.appendChild(span);
            modal.appendChild(header_modal);
            modal_body.appendChild(pb);
            modal_body.appendChild(pt);
            modal_body.appendChild(tarea);
            modal_body.appendChild(pd);
            modal_body.appendChild(input_d);
            modal_body.appendChild(phd);
            modal_body.appendChild(input_hd);
            modal_body.appendChild(phf);
            modal_body.appendChild(input_hf);
            modal.appendChild(modal_body);
            footer_modal.appendChild(btn_f);
            modal.appendChild(footer_modal);
            my_form.appendChild(modal);
            modal_contain.appendChild(my_form);

    if(modal_contain.style.display =="none"){
        modal_contain.style.display ="block";
    }else{
        modal_contain.style.display ="block"
    }
    
    return modal;
}
/*----------------Générer une note------------*/
btnnode.addEventListener("click",function(){
    affich_note();
});

window.addEventListener("click",function(e){
if(e.target == modal_contain){
    modal_contain.style.display =="none";
}
});

/*--------------------recup données form-----------------------*/

// let dn=document.getElementById("mesnot");
// let tach=document.getElementById("tarea").value;
// let date=document.getElementById("input_d").value;
// let debut=document.getElementById("input_hd").value;
// let fin=document.getElementById(" input_hf").value;

// btn_f.addEventListener("click",()=>{
//     divnot.innerHTML= tach+ `<br>` + date+ `<br>` + debut+ `<br>` + fin ;
// })


// fetch("data.json")
//     .then(res=> res.json())
//     .then(data=> console.log(data))




















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
