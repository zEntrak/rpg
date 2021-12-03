
//acordarse de limpiar el arraydeNpcenpelea


function controlarBatalla(){

    var elems = document.getElementsByClassName("botonesP1");
   

    if (personajePrincipal.turnosActuales <= 0){
        for(var i = 0; i < elems.length; i++) {
            elems[i].disabled = true;
        }
    }
    else if (personajePrincipal.turnosActuales> 0 ){
        for(var i = 0; i < elems.length; i++) {
            elems[i].disabled = false;
        }
    }
}

function atacaEnemigo(){
    //verificar id de elemento de los botones de los enemigos o cambia clase a botonesNpc

}
function jugadorAtaca (ataque, contrincante) {

    
    
        let valorAtaque = 0
        
        if (ataque === 1) {
            personajePrincipal.descargaElectrica(contrincante)
            console.log(personajePrincipal.turnosActuales)
            controlarBatalla()
            if (contrincante.muerto == true){
                canv.width = 1500
                canv.height = 1000
                arrayPersonajesEnPelea = []
                mainMundo()
                document.getElementById("batalla").className= "fondo ocultarFondo"
               
            }

            
        } 
        else if (ataque === 2) {
            personajePrincipal.meditar()
            controlarBatalla()
        }

        contrincante.vida -= valorAtaque
        //actualizarVista(valorAtaque, player, contrincante)

    }



//botonAtaque1Player1.addEventListener("click", function(){jugadorAtaca(3,npc)})
//$("boton").trigger("click");


let pelea = document.createElement("div");
pelea.id = "pelea";
function actualizarDom(npc){
    canv.width = 0
    canv.height = 0
    
   

    pelea.innerHTML=`<div id="batalla" class="fondo">

    <div id="indicadorMensajes">Acá van los turnos</div>

<div class="level is-mobile">

        <div class="level-item has-text-centered center-elements" id="player1">
            <p>Player 1: <span id="nombrePlayer1">Algo</span></p>
            <p class="vida"> ❤ <span id="vidaPlayer1">${personajePrincipal.puntosDeVida}</span></p>

            <div class="personaje">
                    <img src="images/mago.png" width="0" height="0">
            </div>
        
            <div class="botonesP1" id="descargaElectrica">
                    <button class="button is-normal is-fullwidth botonesP1"> 
                        <span> Descarga Eléctrica </span>
                    </button>
                    <p class="descripcionAtaque">
                        Acá va la descripción
                    </p>
                </div> 

                <div class="botonesP1" id= "meditar">
                        <button class="button is-normal is-fullwidth botonesP1"> 
                            <span> Meditar </span>
                        </button>
                        <p class="descripcionAtaque">
                            Acá va la descripción
                        </p>
                </div> 
            </div>
        

        <div class="level-item has-text-centered center-elements" id="player2">
            <p>Player 2: <span id="nombrePlayer2">Algo</span></p>
            <p class="vida"> ❤ <span id="vidaPlayer2">${npc.puntosDeVida}</span> </p>

            <div class="personaje">
                    <img src="images/lobo.png">
            </div>
        
            
            <div class="botonesNpc" id= "mordisco">
                    <div class="button is-normal is-fullwidth"> 
                        <span> Mordisco </span>
                    </div>
                    <p class="descripcionAtaque">
                        Acá va la descripción
                    </p>
                </div> 
    
                <div class="botonesNpc" id= "arañazo">
                        <div class="button is-normal is-fullwidth"> 
                            <span> ATAQUE </span>
                        </div>
                        <p class="descripcionAtaque">
                            Acá va la descripción
                        </p>
                </div> 
                
            </div>
           
        </div>
    </div>
    

    `

    document.getElementById("divContainer").appendChild(pelea);
   
    descargaElectrica.addEventListener("click", function(){jugadorAtaca(1,arrayPersonajesEnPelea[0])})
    meditar.addEventListener("click", function(){jugadorAtaca(2,arrayPersonajesEnPelea[0])})
    mordisco.addEventListener("click", function(){jugadorAtaca(1, personajePrincipal)})
    arañazo.addEventListener("click", function(){jugadorAtaca(2, personajePrincipal)})
}