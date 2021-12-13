
function finalizarJuego() {
var modal = document.getElementById("myModal");


var span = document.getElementsByClassName("close")[0];



  modal.style.display = "block";


span.onclick = function() {
  modal.style.display = "none";
}


window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

}
let terminarJuego= document.createElement("div")
terminarJuego.id = "fin"

function ventanaFinalizar(){


    terminarJuego.innerHTML= `


<!-- The Modal -->
<div id="myModal" class="modal">

  <!-- Modal content -->
  <div class="modal-content">
    <span class="close">&times;</span>
    <p>GRACIAS POR JUGAR!</p>
    <p>Has finalizado la beta del juego, aguarde novedades para las próximas actualizaciones</p>
    <p>Puedes jugar nuevamente haciendo click en el botón de abajo</p>
    <button id="reiniciar" onClick=resetLevel() >Reiniciar nivel</button>
    <br>
    <br>
    <br>
    <p>pd: GRACIAS ADRIÁN POR TODO!!!!!</p>
  </div>

</div>

`
document.getElementById("divContainer").appendChild(terminarJuego);
finalizarJuego()
}

