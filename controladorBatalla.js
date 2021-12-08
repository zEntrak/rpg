
//acordarse de limpiar el arraydeNpcenpelea
let turnoJugador = true

function controlarBatalla(){

    var elemsP1 = document.getElementsByClassName("botonesP1");
    var elemsNpc = document.getElementsByClassName("botonesNpc");
   
            //Activar visual de ataque del NPC
        if (personajePrincipal.turnosActuales <= 0){
            for(var i = 0; i < elemsP1.length; i++) {
                elemsP1[i].disabled = true;
                
            }

            for(var i = 0; i < elemsNpc.length; i++) {
                elemsNpc[i].disabled = false;
                
            
            }
            
            
        //function actualizar turnos
            if (arrayPersonajesEnPelea[0].turnosActuales >= 2){
                turnoJugador = false
                npcAtaca()             
            }
            else {
                console.log("Es el turno del pj principal")
                turnoJugador = true
                personajePrincipal.turnosActuales = personajePrincipal.turnosMaximos
                arrayPersonajesEnPelea[0].turnosActuales = 4     
            }
            controlarBatalla()
        }

        else { //Activar visual de ataque del JUGADOR
            for(var i = 0; i < elemsP1.length; i++) {
                elemsP1[i].disabled = false;
            }
            for(var i = 0; i < elemsNpc.length; i++) {
                elemsNpc[i].disabled = true;          
            }
                        
        }
}
function mostrarHechizo(){

let hechizo= document.createElement("div")
hechizo.id = "hechizo"
hechizo.innerHTML = `<img src="images/descarga.gif"></img> `

document.getElementById("npcEnemigo").appendChild(hechizo)

/*$("#npcEnemigo").append(hechizo)//crear personaje
    
    .fadeIn("2000")
    .hide()*/

}
setTimeout(mostrarHechizo, 2000);


function jugadorAtaca (ataque, contrincante) {
 
        let valorAtaque = 0
        
        if (ataque === 1) {
            personajePrincipal.descargaElectrica(contrincante)
            mostrarHechizo()            
            controlarBatalla()
            if (contrincante.muerto == true){
                canv.width = 1500
                canv.height = 1000
                arrayPersonajesEnPelea = []
                mainMundo()
                contrincante.dropear()
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

    function npcAtaca(){
        ataque = Math.random() * (2 - 1) + 1;
        ataque = Math.round(ataque)
        if (ataque=== 1){
            $("mordisco").trigger("click");
            arrayPersonajesEnPelea[0].mordisco()
            
        }
        else {
            $("arañazo").trigger("click");
            arrayPersonajesEnPelea[0].arañazo()
            
        }
        if (personajePrincipal.muerto === true){
            document.getElementById("batalla").className= "fondo ocultarFondo"
            hasMuerto()
            
        }


    }



//botonAtaque1Player1.addEventListener("click", function(){jugadorAtaca(3,npc)})
//$("boton").trigger("click");
function reiniciarObjetos (){
    //para empezar el juego de nuevo
    // guardar en la misma variable la instancia nueva, acordarse de guardar la clase y el nombre elegido
}
function hasMuerto(){
    

let muerto= document.createElement("div")
muerto.id = "muerto"
muerto.innerHTML= `
<h1 class="h1Muerto">YOU DIED</h1>

<div class="startStage">
		<div>
			<h1>Has perdido</h1>
            
			<div>
				<p>Guía a tu personaje a la Salida</p>
				<p>Usa las flechas para moverte y trata de evitar a los lobos</p>
				
			</div>
			<button id="reiniciar" onClick="" >Reiniciar nivel</button>
		</div>
	</div>
`

document.getElementById("divContainer").appendChild(muerto);
reiniciar.addEventListener("click", function(){
    canv.width = 1500
    canv.height = 1000
    arrayPersonajesEnPelea = []
    mainMundo()

})

}
let pelea = document.createElement("div");
pelea.id = "pelea";
function actualizarDom(npc){
    canv.width = 0
    canv.height = 0
    let turno= ""
    if (turnoJugador=true){
        turno = `Es el turno de ${personajePrincipal.nombre} `
    }
    else {turno = `Es el turno del NPC `}
   

    pelea.innerHTML=`<div id="batalla" class="fondo">

    <div id="indicadorMensajes">${turno}</div>

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

            <div id="npcEnemigo"class="personaje">
                    <img src="images/lobo.png">
                    
            </div>
        
            
            <div class="botonesNpc" id= "mordisco">
                    <button class="button is-normal is-fullwidth botonesNpc"> 
                        <span> Mordisco </span>
                    </button>
                    <p class="descripcionAtaque">
                        Acá va la descripción
                    </p>
                </div> 
    
                <div class="botonesNpc" id= "arañazo">
                        <button class="button is-normal is-fullwidth botonesNpc"> 
                            <span> Arañazo </span>
                        </button>
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
    //mordisco.addEventListener("click", function(){npcAtaca()})
    //arañazo.addEventListener("click", function(){npcAtaca()})
}