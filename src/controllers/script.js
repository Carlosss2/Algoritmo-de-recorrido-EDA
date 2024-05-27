import Player from "../models/Player.js"
import { bst } from "./dependencies.js"

let btn = document.getElementById("agenda-btn")
let btn1 =document.getElementById("buscar-btn")
let btnMin =document.getElementById("min-btn")
let btnMax = document.getElementById("max-btn")
let btnInOrden =document.getElementById("inOrden")

btn.addEventListener("click",()=>{
    let firstName = document.getElementById("firstName").value
    let lastName = document.getElementById("lastName").value
    let equipo = document.getElementById("equipo").value

    let player = new Player(firstName, lastName, equipo)
    let data = bst.add(player)
    if (data)
        Swal.fire("Registro exitoso");
    else
    Swal.fire("Fallo el registro");
})


btn1.addEventListener("click", () => {  
    let dorsal = document.getElementById("searchDorsal").value
    let dataSearch = bst.search(dorsal)
    if (dataSearch) {
        Swal.fire("Jugador existe")
    } else {
        Swal.fire("No existe")
    }
})

btnMin.addEventListener("click", () => {
    
    const valorMin =bst.min()
    if(valorMin!==null){
       // console.log(valorMin)
       Swal.fire(`Valor minimo: ${valorMin.value.firstName} ${valorMin.value.lastName}, Equipo: ${valorMin.value.equipo}`)
}else{
    Swal.fire("Árbol vacio")
}

})

btnMax.addEventListener("click", () => {
    const valorMax =bst.max()
    if(valorMax!==null){
       Swal.fire(`Valor maximo: ${valorMax.value.firstName} ${valorMax.value.lastName}, Equipo: ${valorMax.value.equipo}`)
}else{
    Swal.fire("Árbol vacio")
}

}) 

btnInOrden.addEventListener("click", () => {
    let players = document.getElementById("mostrar");
    players.innerHTML = "";
         bst.inOrder((node) => {
        let playerItem = document.createElement("div");
        playerItem.textContent = `${node.firstName} ${node.lastName} ${node.equipo}`;
        players.appendChild(playerItem);
    });
})
