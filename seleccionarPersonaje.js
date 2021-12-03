


$("#vidaMago").html(`<span style="color:red;">${magoDisp.puntosDeVida}</span>`)
$("#vidaClerigo").html(`<span style="color:red;">${clerigoDisp.puntosDeVida}</span>`)

/*document.getElementById("vidaMago").innerHTML = `<span style="color:red;">${magoDisp.puntosDeVida}</span>`;
document.getElementById("vidaClerigo").innerHTML = `<span style="color:red;">${clerigoDisp.puntosDeVida}</span>`;*/

function inputNombre(personajeAppend, personajeRemove,personajeSeleccionado){
    var spanName= document.createElement("span")
    spanName.id= "spanText"
    
    var campoNombre = document.createElement('input');
    campoNombre.type = "text";
    campoNombre.name = "nombre";
    campoNombre.value = "";
    /*const divPrincipal = document.getElementById('divPrincipal')
    const personaje2 = document.getElementById('personaje2')
    const cambiarPersonaje = document.createElement('input');
    cambiarPersonaje.type = "button";
    cambiarPersonaje.value = "Cambiar Personaje";
    cambiarPersonaje.onclick= "divPrincipal.appendChild(personaje2)" ;*/      
    var formulario = document.createElement('form');
    formulario.id= "form";
    var submit = document.createElement('input');
    submit.id = "subm"
    submit.type = "submit"
    submit.value = "Crear Personaje"


    document.getElementById(personajeAppend).appendChild(spanName)
    $("#form").append(submit)
    document.getElementById("spanText").innerHTML="Ingrese el Nombre del personaje: ";
    document.getElementById(personajeAppend).appendChild(formulario)
    
    document.getElementById("form").appendChild(campoNombre);
  
    //document.getElementById(personajeSeleccionado).remove();
    
    // agregar cambiar personaje document.getElementById('personaje1').appendChild(cambiarPersonaje);
    
    
    
    $(`#${personajeSeleccionado}`).fadeOut(2000)
    $("#form").append(submit)//crear personaje
    .hide()
    .fadeIn("2000")
    $(`#${personajeRemove}`).fadeOut(2000)
    $("#form").submit(validarFormulario)
    //formulario.addEventListener("submit", validarFormulario)
    
    
   
}


function validarFormulario(e){
e.preventDefault();
localStorage.setItem('nombre', form[0].value );
const personaje = localStorage.getItem('nombre');
crearPersonaje(personaje)
borrarPanelCreacionPj()
crearMapa()
dibujarMapa()
mainMundo()

    
}
function crearPersonaje(personaje){
    if (claseElegida == "Mago") {
    personajePrincipal = new Mago(personaje,115,800)
    
   
    
    
}
    else {
    personajePrincipal = new Clerigo(personaje,200,800)
    }
    personajesJugador.push(personajePrincipal)
    localStorage.setItem('personajeJugador', JSON.stringify(personajePrincipal));
}

function borrarPanelCreacionPj(){
    document.getElementById("creacionPersonaje").remove();

}




let claseElegida = "";

    $("#clerigoSeleccionado").on('click',function() {claseElegida = "Clerigo";})
    $("#magoSeleccionado").on('click',function() {claseElegida = "Mago";})

   /* document.getElementById('clerigoSeleccionado').addEventListener("click", function() {
        claseElegida = "Clerigo";
      });*/
   /* document.getElementById('magoSeleccionado').addEventListener("click", function() {
        claseElegida = "Mago";
      });*/