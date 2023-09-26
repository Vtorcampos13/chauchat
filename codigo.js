function shoot() {

    const probabilidadBloqueo = Math.random(); //simulamos la probabilidad de bloqueo del 80%
    if (probabilidadBloqueo < 0.8) {
      console.log("pium!");
    } else {
      console.log("Illo, me he quedao pillá!");
    }
  }
  
  
  function chauchat(cargador) { //Funcion que realiza los disparos
    let disparos = 0;
  
    for (let i = 0; i < cargador; i++) {
      disparar();
      disparos++;
  
     
      if (disparos % 3 === 0) { // Imprimimos el espacio cada 3 disparos
        console.log("\n");
      }
    }
  }
  
  let cargador = 9;
  
  chauchat(cargador);