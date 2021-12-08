
class item{
    constructor(propiedades){
      this.x = propiedades.x;
      this.y = propiedades.y;
      this.type = "";
      this.looted = false;
    }
    draw(){
      let error = 35;
        ctx.drawImage(llave,(this.x-error),(this.y-error),150, 150)
        
    }

}
class key extends item {
    constructor(posX, posY) {
      super({x: posX, y: posY });
      this.type = "Llave"

    }
}
class Personaje {
    constructor(propiedades) {
      this.clase = propiedades.clase;
      this.nombre = propiedades.nombre;
      this.x = propiedades.x
      this.y = propiedades.y
      this.puntosDeVida = 1000;
      this.energia = 100;
      this.vidaMaxima = 1000;
      this.muerto = false;
      this.turno = false;
      this.items = [];
    }
    recibeAtaque(valor) {
      this.puntosDeVida = this.puntosDeVida - valor;
      console.log(`${this.nombre} recibio un ataque de ${valor}`);
      panelVida()
  
      if (this.puntosDeVida <= 0) {
        console.log(`${this.nombre} ha muerto`);
        this.muerto = true;
        this.draw(this.x,this.y)
        panelVida()
        this.imprimeVida();
      } else {
        this.imprimeVida();
        panelVida()
      }
    }
    recibeCuracion(valor) {
        var curacionTotal= this.puntosDeVida + valor;

        console.log(this.vidaMaxima)
        console.log(this.puntosDeVida)
        
        if (this.puntosDeVida == this.vidaMaxima) {
            console.log(`${this.nombre} no puede curarse, ya tiene la vida máxima`);
            this.imprimeVida();
            panelVida()          
            panelMana()
            
            
        }
        else if (curacionTotal > this.vidaMaxima){
            this.puntosDeVida = this.vidaMaxima;
            console.log(`${this.nombre} recibio una curación de ${valor}`);
            this.imprimeVida();
            panelVida()          
            panelMana()
            
        }
        
        else{
            this.puntosDeVida += valor;
            console.log(`${this.nombre} recibio una curación de ${valor}`);
            this.imprimeVida();
            panelVida()          
            panelMana()
            
            
        }
       
    }
    
    imprimeVida() {
      console.log(`Ahora le quedan ${this.puntosDeVida} puntos de vida`);
    }
    
    
  }
  
  class Clerigo extends Personaje {
    constructor(nombreClerigo, posX, posY) {
      super({ clase: "Clerigo", nombre: nombreClerigo, x: posX, y: posY });
      //this.punteria = punteria;
      this.puntosDeVida += this.puntosDeVida * 0.1;
      this.mana = 200;
      this.vidaMaxima += this.puntosDeVida * 0.1;
    }
    realizaCuracion() { //falta contador de pociones de vida
      var vidaAnterior = this.puntosDeVida
      if (this.puntosDeVida >= 901){
      this.puntosDeVida = 1100
      this.mana -= 100;
      this.imprimeVida();
      panelVida()          
      panelMana()
      
      }
      else{
      this.puntosDeVida = this.puntosDeVida + 200;
      this.mana -= 100;
      this.imprimeVida();
      panelMana()
      panelVida()
    }
    }
    
  }
  
class Mago extends Personaje {
    constructor(nombreMago, posX, posY) {
      super({ clase: "Mago", nombre: nombreMago, x: posX, y:posY });
      //this.punteria = punteria;
      this.puntosDeVida -= this.puntosDeVida * 0.3;
      this.vidaMaxima -= this.vidaMaxima * 0.3;
      this.mana = 750
      this.maxMana = 750
      /*this.x = 215;
      this.y = 800;*/
      this.turnosActuales = 4
      this.turnosMaximos = 4
      this.descripcion = {}
      this.movimiento = 100
    }
    meditar() {
        var maxMana= 750;
        if (this.mana >= 326){
        this.mana = 750
        console.log(`${this.nombre} tiene ${this.mana} de mana`);
        panelMana()
        }
        else {
        this.mana += maxMana*0.60
        console.log(`${this.nombre} tiene ${this.mana} de mana`);
        panelMana()
        }
    }
         
    descargaElectrica(npcAtacado) {
      var dañoRealizado = 150;
      let manaGastado = 250;
      let turnosGastados= 2;
      if (this.turnosActuales <=0){
        console.log(`${this.nombre}, se ha quedado sin turnos, espera hasta que tu enemigo termine de jugar`)
      }
      else if (this.mana< manaGastado){
        console.log(`${this.nombre} no tiene maná para realizar el hechizo que cuesta ${manaGastado}`);
        panelMana()
      }
      
      
      else {
        let nombreAtacado = npcAtacado.nombre
        //let atacado = arrayNpcs.find(personaje => personaje.nombre == nombreAtacado); //buscar personaje a atacar dentro del array personajes, que corresponde a los enemigos. Podría llamarlo "enemigos"
        //Falta validación de si el personaje existe
        npcAtacado.recibeAtaque(dañoRealizado);
        this.turnosActuales -= turnosGastados;
        this.mana -= manaGastado;
        panelMana()
        console.log(`${this.nombre} ha atacado a ${nombreAtacado} por ${dañoRealizado} de daño y gastó ${manaGastado} de maná. A ${nombreAtacado} le quedan ${npcAtacado.puntosDeVida} de vida `);
      }
    }
    draw(x, y){
      if (this.muerto == true){
        console.log("muerto")
        return 0
        
      }
      else  ctx.drawImage(mago,x,y,70, 70);
        /*this.x = x
        this.y = y*/
    }
    moveRight(){
      
        
      endLevel()
        if (collider(this.x+85,this.y)){
          //console.log("No puede atravesar ese obstáculo")
          //console.log(this.x, this.y)
          bloqueado = false
        }
        else{
          
          
          this.x += this.movimiento
          //ctx.clearRect((this.x)-15,(this.y)-100, 100, 100);
          bloqueado = false
          dibujarMapa()
          this.draw(this.x, this.y)
          collider(this.x,this.y)
          detectarPersonaje()
          imprimirNpcsEnPantalla()
         
        }
    }
    moveLeft(){

      endLevel()
      if (collider((this.x-this.movimiento)-15,this.y)){
       // console.log("No puede atravesar ese obstáculo")
        //console.log(this.x, this.y)
        bloqueado = false
        
        }
      else{
        
        this.x -= this.movimiento
        bloqueado = false
        //ctx.clearRect((this.x)-15,(this.y)-100, 100, 100);
        dibujarMapa()
        this.draw(this.x, this.y)
        collider(this.x,this.y)
        detectarPersonaje()
        imprimirNpcsEnPantalla()
      }
    }
    moveUp(){
      endLevel()
      if (collider(this.x-15,this.y-this.movimiento)){
        //console.log("No puede atravesar ese obstáculo")
        //console.log(this.x, this.y)
        bloqueado = false
        }
      else{
        
        this.y -= this.movimiento
        bloqueado = false
        //ctx.clearRect((this.x)-15,(this.y)-100, 100, 100);
        dibujarMapa()
        this.draw(this.x, this.y)
        collider(this.x,this.y)
        detectarPersonaje()
        imprimirNpcsEnPantalla()
      } 
    }
    moveDown(){
      endLevel()
      if (collider(this.x-15,this.y+this.movimiento)){
        //console.log("No puede atravesar ese obstáculo")
        //console.log(this.x, this.y)
        bloqueado = false
        }
      else{
        bloqueado = false
        this.y += this.movimiento;
        
        //ctx.clearRect((this.x)-15,(this.y)-100, 100, 100);
        //ctx.drawImage(this.x),(this.y);
        dibujarMapa()
        this.draw(this.x, this.y)
        collider(this.x,this.y)
        detectarPersonaje()
        imprimirNpcsEnPantalla()
      }    
    }
    verificarTurno(){
      this.turno = true;
      if (this.turnosActuales == 0){
          this.turno = false;
               //Su turno ha finalizado return false
      }
      return this.turno;
    }
    agarrarObjeto(){
      let error = 15
      if (arrayLlave[0].looted === false){
        if((this.x-error) === arrayLlave[0].x && this.y ===arrayLlave[0].y){
          this.items.push(arrayLlave[0])
          arrayLlave[0].looted= true;
        }
      }
     
    }
}    



  class Lobo extends Personaje {
    constructor(nombreLobo, posX, posY) {
      super({ clase: "Lobo", nombre: nombreLobo, x: posX, y: posY });
      //this.punteria = punteria;
      this.puntosDeVida -= this.puntosDeVida * 0.5;
      this.vidaMaxima -= this.vidaMaxima * 0.5;
      this.turnosActuales = 4
      this.turnosMaximos = 4
      

      
      }
    mordisco() {
      let dañoMaxRealizado = 250
      let dañoMinRealizado = 150
      let dañoRealizado = Math.random() * (dañoMaxRealizado - dañoMinRealizado) + dañoMinRealizado;
      dañoRealizado = Math.round(dañoRealizado)
     
      let turnosGastados= 3;
              
        personajePrincipal.recibeAtaque(dañoRealizado);
        this.turnosActuales -= turnosGastados;
        
        console.log(`${this.nombre} ha atacado a ${personajePrincipal.nombre} por ${dañoRealizado} de daño. A ${personajePrincipal.nombre} le quedan ${personajePrincipal.puntosDeVida} de vida `);
      
    }
    arañazo() {
      let dañoMaxRealizado = 200
      let dañoMinRealizado = 100
      let dañoRealizado = Math.random() * (dañoMaxRealizado - dañoMinRealizado) + dañoMinRealizado;
      dañoRealizado = Math.round(dañoRealizado)

      let turnosGastados = 2
        personajePrincipal.recibeAtaque(dañoRealizado);
        this.turnosActuales -= turnosGastados;
        console.log(`${this.nombre} ha atacado a ${personajePrincipal.nombre} por ${dañoRealizado} de daño. A ${personajePrincipal.nombre} le quedan ${personajePrincipal.puntosDeVida} de vida `);
 
    }
    draw(x, y) {
      if (this.muerto == true){
        ctx.drawImage(sangre,x,y,70, 70);
      }
      else {ctx.drawImage(lobo,x,y,70, 70); }
        
    }
    dropear(){
     
      
      if (validarDrops() >=3){
        let error = 35;
        /*ctx.drawImage(llave,(this.x-error),(this.y-error),150, 150)*/
        const llave1 = new key(this.x,this.y)
        llave1.draw()
        arrayLlave.push(llave1)
      }


    }

    

  }

const droppable = true;
const arrayLlave= []
 function validarDrops(){
  //una variable global define si pueden dropear o no
  if (droppable === true){
    let contador = 0;
    arrayNpcs.forEach(function(npc){
      if (npc.muerto === true){
        contador +=1;    
      }

    })
   return contador;
  }
}

//arrayEnemigos
  const lobo1= new Lobo("roberto",500, 600)
  const lobo2= new Lobo("lobo2",700, 500)
  const lobo3= new Lobo("lobo3",400, 100)
  const lobo4= new Lobo("lobo4",200,400)
  const arrayNpcs = [];
  arrayNpcs.push(lobo1,lobo2,lobo3,lobo4)

  


  /*function crearPersonaje(){
    //Switch para elegir clase del personaje
    personajePrincipal = new Mago(prompt("Ingrese nombre de tu personaje de clase Mago"))
    personajesJugador.push(personajePrincipal)

  }*/

//arrayCollider


var bloqueado = false

function collider(x,y){

const arrayCollider = []   //Aquí van todas las posiciones donde queremos que no atraviese el personaje principal.

arrayCollider.push([0,900],[0,800],[0,700],[0,600],[0,500],[0,400],[0,300],[0,200],[0,100],[0,0],[100,500],[200,500],[300,500],[500,500],[600,800],[600,700],[600,600],[600,500],[600,400],[600,300],
                   [100,1000],[200,1000],[300,1000],[400,1000],[500,1000]
  )

//const posicion = arrayCollider.find(element => element[1] = ((115)-15))
arrayCollider.forEach(function(element) {
//console.log(x, element[0], y, element[1])
if ( element[0] === x && element[1] === y){
  
  console.log("No podes pasar por acá " +x,y) 
  bloqueado = true

}
})
return bloqueado
}

function detectarPersonaje(){

 
  arrayNpcs.forEach(function(npc){
    if (npc.x === (personajesJugador[0].x-15) && npc.muerto == false){ //HARDCODE -15 y 1 sólo personaje
      //buscar y
      for (let i = 0; i < 400; i+= 100) {
        if (npc.y === personajesJugador[0].y + i ||  npc.y === personajesJugador[0].y - i){
          console.log("EMPIEZA LA BATALLA")//personajePrincipal ataque a lobo1
          arrayPersonajesEnPelea= []
          arrayPersonajesEnPelea.push(npc)
          actualizarDom(npc)
          return true
        }
        
      }
    }
    else if(npc.y === (personajesJugador[0].y) && npc.muerto == false){
      for (let a = 0; a < 400; a+=100) {
        if (npc.x === ((personajesJugador[0].x-15) + a) || (npc.x === ((personajesJugador[0].x-15) - a))){
          console.log("EMPIEZA LA BATALLA")
          arrayPersonajesEnPelea= []
          arrayPersonajesEnPelea.push(npc)
          actualizarDom(npc)
          return true
        }
        
        
      }
    }

  })

}

function endLevel(){
  if (personajePrincipal.clase === "Mago"){
    error = 15
  }
  else { error = 0}
  probabilidad2 = personajePrincipal.y === 0 && (personajePrincipal.x - error)  === 1000
  probabilidad1 = (personajePrincipal.x - error)  === 1000 && personajePrincipal.y === 100
  probabilidad3 = (personajePrincipal.items).length > 0
  if (probabilidad2 === true  ){
    console.log("BORRAR MUNDO") //modificar DOM
 }
  if ( (probabilidad1 || probabilidad2) && probabilidad3){
      console.log("Has finalizado el Nivel 1")
      return true
    }
  
  
  


}










const clerigoDisp= new Clerigo("-", 100,100)
const magoDisp= new Mago("-",100,100)
const personajesDisponibles = []
personajesDisponibles.push(magoDisp,clerigoDisp)
//Array con Personajes del jugador principal
const personajesJugador = [];
//crearPersonaje()
//const AliadoClerigo = new Clerigo("Letrof",-200,-100)
//const Clerigo1 = new Clerigo("zLk",-300,-100);




const maxPersonajes = 2;


  function contratarAliado(nombre){ //se ejecutaría al estar cerca de un personaje a contratar
    let contratar = confirm("Quiere contratar a "+ nombre + "?")
    if (contratar == true) {
      if (personajesJugador.length == maxPersonajes){
        console.log("Oh!! Parece que tu equipo está completo, deberías echar a alguien antes de contratarme")
      }  
      else{
        nombre.toLowerCase();
        switch (nombre){
          case "letrof":
            personajesJugador.push(AliadoClerigo)
            break;
    
        //ACÁ IRIAN MÁS CASE con otros personajes a contratar. No los instancié aún
          default:
            break;
          }
      }    
    }
    else {
     console.log("Estaré aquí esperándote para unirme a ti")
    }
  }
  





  //const Mago1 = new Mago("Mago Poderoso")

//main() Acá habría un contador de turnos entre el enemigo y el protagonista
  function checkDead(){
    
  }
  function comienzaPelea(){
    return true
  }
  function terminaPelea(){
    return false
  }

  let arrayPersonajesEnPelea = []
  function turnos(){
    
    
    arrayPersonajesEnPelea = personajesJugador.concat(arrayNpcs)
    //WHILE (VALIDACIÓN DE QUE los personajes de personajesJugador o arrayNpcs estan vivos)
    let turnosRestantesJugadorActual = arrayPersonajesEnPelea.find(personaje => personaje.turnosActuales);
    let nombrePj = arrayPersonajesEnPelea.find(personaje => personaje.nombre);
    
    console.log (turnosRestantesJugadorActual)
/*
    let atacado = arrayNpcs.find(personaje => personaje.nombre == nombreAtacado); 
    atacado.recibeAtaque(dañoRealizado);
      */

    
    //array.shift para eliminar el primer jugador del array
    //push, para volver a meterlo al final
    


   }



 //listener de teclas
 window.addEventListener("keydown", (evento) => {
  if (evento.key === "ArrowDown"){
      //console.log("ArrowDown")
      return personajePrincipal.moveDown();
  } 
  if (evento.key === "ArrowRight") {
      return personajePrincipal.moveRight();
  }
  if (evento.key === "ArrowUp") return personajePrincipal.moveUp();
  if (evento.key === "ArrowLeft") return personajePrincipal.moveLeft();
  if (evento.key === "a") return personajePrincipal.agarrarObjeto();
})








