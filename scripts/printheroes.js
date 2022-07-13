/*const printheroes= (data, template, cont)=>{
    let fragment= document.createDocumentFragment();
    //console.log(template, div)
    
    data.forEach(element => {
        const {imagen}=element
        console.log(imagen)
        template.querySelector('img').setAttribute('src', imagen);  
        console.log(template);
        const clone= template.cloneNode(true);
    fragment.appendChild(clone);  
    
    });  
    cont.appendChild(fragment); 
    
}
export default printheroes*/