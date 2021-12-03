var canvas = document.getElementById("myCanvas");
        var ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    
        var piso = document.getElementById("piso");
        var paredDerecha = document.getElementById("paredDerecha");
    
        var paredAntorcha = document.getElementById("paredAntorcha");
    
        var paredFrontal = document.getElementById("paredFrontal");
        const mago= document.getElementById("mago");
        const lobo = document.getElementById("lobo")
        const descargaElect = document.getElementById("descargaElect")

        var canv = document.getElementById("myCanvas")
        let mapa = document.createElement("div");
        
        var seleccionPj = false

        function getComoJugar(){
          $( ()  => {
            const URL_oraciones = "comoJugar.json";

              $.get(URL_oraciones,(response,status)=> { 
                if (status === "success"){
                  let jsonOraciones = response
                  //console.log(oraciones[1])
                  imprimirOraciones(jsonOraciones)
                  //crear boton
                }
              
              })
            
          })
       }

function imprimirOraciones(jsonOraciones){
   oraciones = JSON.stringify(jsonOraciones)
 // for (x in jsonOraciones){
    for (oracion of jsonOraciones){
    $("#Inst1").append(oracion.Controles)
    $("#Inst2").append(oracion.Detalles)
    $("#Inst3").append(oracion.Objetivo)
    $("#mostrarInstrucciones")
    .hide("2000")
    
}
//}
}
$( "#mostrarInstrucciones" ).click(function() {
  getComoJugar()
});






function crearMapa(){
    
    if (seleccionPj=== false){
      document.getElementById("divPrincipal").className= "fondo ocultarFondo"
      seleccionPj= true
    }
   
    mapa.id = "Mapa1";
    
    canv.width = 1500
    canv.height = 1000
    /*mapa.innerHTML=`
    
          
    
        <div style="position:absolute; left:68%;top:10px">
            <b>Clase : MAGO</b><br><br>
             <b >Hechizos</b> <br>
            <input id="descargaElectrica" type="button" value="Realizar Descarga Eléctrica" onclick="personajePrincipal.descargaElectrica()" /> <br>
            <input id="meditar" type="button" value="Recargar Maná" onclick="personajePrincipal.meditar()" /> <br><br>
            <b >
            Inventario
            </b>  
            <br>
            <input id="pocion" type="button" value="Tomar Poción (200hp)" onclick="personajePrincipal.recibeCuracion(200)" />
            <br>
            Mana
            
            
            
        </div>  
        
        `
        
        document.getElementById("divPrincipal").appendChild(mapa);*/
    
       


    }
        //dibujarMapa();
    function dibujarMapa(){

        
          
        ctx.drawImage(paredIzq,0,900,100, 100);
        ctx.drawImage(paredIzq,0,800,100, 100);
        ctx.drawImage(paredIzq,0,700,100, 100);
        ctx.drawImage(paredIzq,0,600,100, 100);
        ctx.drawImage(paredIzq,0,500,100, 100);
        ctx.drawImage(paredIzq,0,400,100, 100);
        ctx.drawImage(paredIzq,0,300,100, 100);
        ctx.drawImage(paredIzq,0,200,100, 100);
        ctx.drawImage(paredIzq,0,100,100, 100);
        ctx.drawImage(paredIzq,0,0,100, 100);
        
        ctx.drawImage(piso,100,900,100, 100);
        ctx.drawImage(piso,100,800,100, 100);
        
        
        
        ctx.drawImage(piso,100,700,100, 100);
        ctx.drawImage(piso,100,600,100, 100);
        ctx.drawImage(paredAntorcha,100,500,100, 100);
        ctx.drawImage(piso,100,400,100, 100);
        ctx.drawImage(piso,100,300,100, 100);
        ctx.drawImage(piso,100,200,100, 100);
        ctx.drawImage(piso,100,100,100, 100);
        ctx.drawImage(piso,100,0,100, 100);
        
        ctx.drawImage(piso,200,900,100, 100);
        ctx.drawImage(piso,200,800,100, 100);
        ctx.drawImage(piso,200,700,100, 100);
        ctx.drawImage(piso,200,600,100, 100);
        ctx.drawImage(paredFrontal,200,500,100, 100);
        ctx.drawImage(piso,200,400,100, 100);
        ctx.drawImage(piso,200,300,100, 100);
        ctx.drawImage(piso,200,200,100, 100);
        ctx.drawImage(piso,200,100,100, 100);
        ctx.drawImage(piso,200,0,100, 100);
        
        
        ctx.drawImage(piso,300,900,100, 100);
        ctx.drawImage(piso,300,800,100, 100);
        ctx.drawImage(piso,300,700,100, 100);
        ctx.drawImage(piso,300,600,100, 100);
        ctx.drawImage(paredFrontal,300,500,100, 100);
        ctx.drawImage(piso,300,400,100, 100);
        ctx.drawImage(piso,300,300,100, 100);
        ctx.drawImage(piso,300,200,100, 100);
        ctx.drawImage(piso,300,100,100, 100);
        ctx.drawImage(piso,300,0,100, 100);
        
        
        ctx.drawImage(piso,400,0,100, 100);
        ctx.drawImage(piso,400,100,100, 100);
        ctx.drawImage(piso,400,200,100, 100);
        ctx.drawImage(piso,400,300,100, 100);
        ctx.drawImage(piso,400,400,100, 100);
        ctx.drawImage(piso,400,500,100, 100);
        ctx.drawImage(piso,400,600,100, 100);
        ctx.drawImage(piso,400,700,100, 100);
        ctx.drawImage(piso,400,800,100, 100);
        ctx.drawImage(piso,400,900,100, 100);
        
        
        ctx.drawImage(piso,500,0,100, 100);
        ctx.drawImage(piso,500,100,100, 100);
        ctx.drawImage(piso,500,200,100, 100);
        ctx.drawImage(piso,500,300,100, 100);
        ctx.drawImage(piso,500,400,100, 100);
        ctx.drawImage(paredAntorcha,500,500,100, 100);
        ctx.drawImage(piso,500,600,100, 100);
        ctx.drawImage(piso,500,700,100, 100);
        ctx.drawImage(piso,500,800,100, 100);
        ctx.drawImage(piso,500,900,100, 100);
        
        
        ctx.drawImage(TechoVert,600,900,100, 100);
        ctx.drawImage(TechoVert,600,800,100, 100);
        ctx.drawImage(TechoVert,600,700,100, 100);
        ctx.drawImage(TechoVert,600,600,100, 100);
        ctx.drawImage(TechoVert,600,500,100, 100);
        ctx.drawImage(TechoVert,600,400,100, 100);
        ctx.drawImage(TechoVert,600,300,100, 100);
        ctx.drawImage(piso,600,200,100, 100);
        ctx.drawImage(piso,600,100,100, 100);
        ctx.drawImage(piso,600,0,100, 100);

        ctx.drawImage(piso,700,0,100, 100);
        ctx.drawImage(piso,700,100,100, 100);
        ctx.drawImage(piso,700,200,100, 100);
        ctx.drawImage(piso,700,300,100, 100);
        ctx.drawImage(piso,700,400,100, 100);
        ctx.drawImage(piso,700,500,100, 100);
        ctx.drawImage(piso,700,600,100, 100);
        ctx.drawImage(piso,700,700,100, 100);
        ctx.drawImage(piso,700,800,100, 100);
        ctx.drawImage(piso,700,900,100, 100);

        ctx.drawImage(piso,800,0,100, 100);
        ctx.drawImage(piso,800,100,100, 100);
        ctx.drawImage(piso,800,200,100, 100);
        ctx.drawImage(piso,800,300,100, 100);
        ctx.drawImage(piso,800,400,100, 100);
        ctx.drawImage(piso,800,500,100, 100);
        ctx.drawImage(piso,800,600,100, 100);
        ctx.drawImage(piso,800,700,100, 100);
        ctx.drawImage(piso,800,800,100, 100);
        ctx.drawImage(piso,800,900,100, 100);
        
        ctx.drawImage(piso,900,0,100, 100);
        ctx.drawImage(piso,900,100,100, 100);
        ctx.drawImage(piso,900,200,100, 100);
        ctx.drawImage(piso,900,300,100, 100);
        ctx.drawImage(piso,900,400,100, 100);
        ctx.drawImage(piso,900,500,100, 100);
        ctx.drawImage(piso,900,600,100, 100);
        ctx.drawImage(piso,900,700,100, 100);
        ctx.drawImage(piso,900,800,100, 100);
        ctx.drawImage(piso,900,900,100, 100);
        
        ctx.drawImage(piso,1000,0,100, 100);
        ctx.drawImage(piso,1000,100,100, 100);
        ctx.drawImage(piso,1000,200,100, 100);
        ctx.drawImage(piso,1000,300,100, 100);
        ctx.drawImage(piso,1000,400,100, 100);
        ctx.drawImage(piso,1000,500,100, 100);
        ctx.drawImage(piso,1000,600,100, 100);
        ctx.drawImage(piso,1000,700,100, 100);
        ctx.drawImage(piso,1000,800,100, 100);
        ctx.drawImage(piso,1000,900,100, 100);
        
        ctx.drawImage(piso,1100,0,100, 100);
        ctx.drawImage(piso,1100,100,100, 100);
        ctx.drawImage(piso,1100,200,100, 100);
        ctx.drawImage(piso,1100,300,100, 100);
        ctx.drawImage(piso,1100,400,100, 100);
        ctx.drawImage(piso,1100,500,100, 100);
        ctx.drawImage(piso,1100,600,100, 100);
        ctx.drawImage(piso,1100,700,100, 100);
        ctx.drawImage(piso,1100,800,100, 100);
        ctx.drawImage(piso,1100,900,100, 100);









       /* $( document ).ready(function() {
          console.log('El Mapa está listo');
        });
        */
        
        //imprimirJugadorEnPantalla()
        }
        
        
        function imprimirJugadorEnPantalla(){
        
         var posX = personajePrincipal.x
         var posY = personajePrincipal.y
          personajePrincipal.draw(posX,posY);
        }
        
        
       
        //Imprimir vida y maná
        
    
        function imprimirNpcsEnPantalla(){
          
          arrayNpcs.forEach(function(element){
            if (element.muerto == false) { 
              element.draw(element.x,element.y)
            }
           
          })
        }
  /*
        function AnimDescElect(){

          ctx.drawImage(descargaElect,element.x,element.y,100,100)
        }

*/


  
  function panelVida(){
        
      
    ctx.beginPath()
    ctx.strokeStyle = "black";
    ctx.fillStyle = "red";
    porcentajeRed = personajePrincipal.puntosDeVida / personajePrincipal.vidaMaxima *100
    ctx.fillRect(1200,300,porcentajeRed,30)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.strokeStyle = "black";
    ctx.fillStyle = "white";
    porcentajeWhite = 100 - porcentajeRed
    ctx.fillRect(1200,300,porcentajeWhite,30)
    ctx.stroke()
     
  
  }
  /*
  function panelVida(porcentajeRed, porcentajeWhite){
    ctx.beginPath()
    ctx.strokeStyle = "black";
    ctx.fillStyle = "red";
    ctx.fillRect(1200,300,porcentajeRed,30)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.strokeStyle = "black";
    ctx.fillStyle = "white";
    ctx.fillRect(1200,300,porcentajeWhite,30)
    ctx.stroke()
  }*/
  
  function panelMana(){
  
    /*if (personajePrincipal.mana <= 0) {
      ctx.beginPath()
      ctx.strokeStyle = "black";
      ctx.fillStyle = "white";
      porcentajeWhiteMana = 100
      ctx.fillRect(1200,400,porcentajeWhiteMana,30)
      ctx.stroke()
  
    }
    else {*/
      ctx.beginPath()
      ctx.strokeStyle = "black";
      ctx.fillStyle = "blue";
      porcentajeBlue = personajePrincipal.mana / personajePrincipal.maxMana *100
      ctx.fillRect(1200,400,porcentajeBlue,30)
      ctx.stroke()
  
      ctx.beginPath()
      ctx.strokeStyle = "black";
      ctx.fillStyle = "white";
      porcentajeWhiteMana = 100 - porcentajeBlue
      ctx.fillRect(1200,400,porcentajeWhiteMana,30)
      ctx.stroke()
   /* }*/
  }

 function mainMundo(){
    panelVida();
    panelMana()
          
    dibujarMapa()
    imprimirJugadorEnPantalla()
    imprimirNpcsEnPantalla()
  }
  
    