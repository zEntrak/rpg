

let ultimoMensaje = 0
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
function dibujarHechizo(){

let hechizo= document.createElement("div")
hechizo.id = "hechizo"
hechizo.innerHTML = `<img src="images/descarga.gif"></img> `

//document.getElementById("npcEnemigo").appendChild(hechizo)

$("#npcEnemigo").append(hechizo)//crear personaje
$("#hechizo")
.hide()

}


function mostrarHechizo(){//que reciba como parametro el hechizo usado
   $("#hechizo")
    
    .fadeIn(1000)
    .hide("slow")
   
   
}



function jugadorAtaca (ataque, contrincante) {
 
        let valorAtaque = 0
        
        if (ataque === 1) {
            personajePrincipal.descargaElectrica(contrincante)
            
            mostrarHechizo()          
            controlarBatalla()
            actualizarStatus()
            if (contrincante.muerto == true){
                
                canv.width = 1500
                canv.height = 1000
                arrayPersonajesEnPelea = []
                mainMundo()
                
                contrincante.dropear()
                document.getElementById("batalla").className= "fondo ocultarFondo"         
                pauseMusic()
            }
            

            
        } 
        else if (ataque === 2) {
            personajePrincipal.meditar()
            controlarBatalla()
            actualizarStatus()
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
            actualizarStatus()
            
        }
        else {
            $("arañazo").trigger("click");
            arrayPersonajesEnPelea[0].arañazo()
            actualizarStatus()
            
        }
        if (personajePrincipal.muerto === true){
            actualizarStatus()
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
let music = new Audio('sounds/battle.mp3')
function actualizarDom(){
    
    music.play()
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
            <p> <span id="nombrePlayer1">   ${personajePrincipal.nombre} </span></p>
            <p>  <span id="vidaPlayer1">❤ ${personajePrincipal.puntosDeVida}</span>
            <span> <img class="fotoManaPlayer1"src="images/mana.png"></span> <span id="manaPlayer1">${personajePrincipal.mana}</span>
            </p>

            <div id="fotoPj">
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
            <p> <span id="nombreNpc">${arrayPersonajesEnPelea[0].clase}</span></p>
            <p class="vida"> ❤ <span id="vidaNpc">${arrayPersonajesEnPelea[0].puntosDeVida}</span> </p>

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
        <div id="indicadorBatalla">
            <div id="mensaje_1"> 
            

            </div>


            <div id="mensaje_2">
            

            </div>

            <div id="mensaje_3">
            

            </div>

        </div>
    </div>
    

    `
    

    document.getElementById("divContainer").appendChild(pelea);
   
    descargaElectrica.addEventListener("click", function(){jugadorAtaca(1,arrayPersonajesEnPelea[0])})
    meditar.addEventListener("click", function(){jugadorAtaca(2,arrayPersonajesEnPelea[0])})
    dibujarHechizo()
    //mordisco.addEventListener("click", function(){npcAtaca()})
    //arañazo.addEventListener("click", function(){npcAtaca()})
}



let mensaje1 = "";
let mensaje2 = "";
let mensaje3 = "";
let msg = "";
function indicadorBatalla(atacante, atacado, dañoRealizado, turnosGastados){
   
   
    let idMensaje_1 = document.getElementById("mensaje_1");
    let idMensaje_2 = document.getElementById("mensaje_2");
    let idMensaje_3 = document.getElementById("mensaje_3");
    
    if (atacante === 0){
        msg =   `${personajePrincipal.nombre} ha recargado un 60% de la maná ahora tiene ${personajePrincipal.mana}`
        }
    else {
        msg = `${atacante} ha dañado por ${dañoRealizado} al ${atacado} y ha gastado ${turnosGastados} turnos`
    }
        controlarMensajes(msg)
        
    if (ultimoMensaje === 1 ){
        
        idMensaje_1.innerText = msg
               
    }
    else if (ultimoMensaje === 2 ){

        idMensaje_2.innerText = msg
    }
    else if (ultimoMensaje === 3 ){

        idMensaje_3.innerText = msg
    }  

}

function controlarMensajes(msg){
    
    
    if (mensaje1 === "" || ultimoMensaje === 3){
        mensaje1 = msg

        ultimoMensaje= 1
    }
    else if (mensaje2 === "" || ultimoMensaje === 1){
        mensaje2 = msg
        ultimoMensaje= 2
    }
    else if (mensaje3 === "" || ultimoMensaje === 2){
        mensaje3 = msg
        ultimoMensaje= 3
    }
    
}

function actualizarStatus(){
    vidaPlayer1.innerText = personajePrincipal.puntosDeVida
    vidaNpc.innerText  = arrayPersonajesEnPelea[0].puntosDeVida
    manaPlayer1.innerText = personajePrincipal.mana
}  
function pauseMusic(){
    music.pause()
}