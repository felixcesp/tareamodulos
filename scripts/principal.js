/*import getUrl from "../../helpers/getUrl"
import printheroes from "./printheroes"*/
//let listarCard = document.getElementById("listarCard")
/*const url='http://localhost:4080'*/
document.getElementById("btnCategory1").addEventListener('click', ()=>{
    getUrl('http://localhost:4080/marvel ')
    
});

document.getElementById("btnCategory2").addEventListener('click', ()=>{
    getUrl(url +'/dc')
});

const getUrl = async(url)=>{
    const  resp = await fetch(url)
    const data = await resp.json()
    console.table(data)

    listarCard.innerHTML = ''

    data.forEach(heroe =>{
        const {nombre, imagen, historia}=heroe

        listarCard.innerHTML +=`
        <div class="card" style="width: 18rem;">
        <img src=${imagen} class="card-img-top" alt="...">
        <div class="card-body">
            <h1>${nombre}</h1>
          <p class="card-text">${historia}</p>
        </div>
      </div>
        `



    })


}
/*
document.addEventListener("DOMContentLoaded", async ()=>{
    const template = document.getElementById("template").content;
    const cont = document.getElementById("listarCard");
    try {
        const data= await getUrl(url);
        printheroes(data, template, cont);
        
    } catch (error) {
        alert("servidor no responde")
        
    }
});*/




