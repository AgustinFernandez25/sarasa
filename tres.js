function mostrar() {
 
  let tipo;
  let respuesta;
  let origen;
  let precio;
  let contMuñeca = 0;
  let contPelota = 0;
  let contRompecabezas = 0;
  let flagMasBarato = 1;
  let precioRompeMasBarato;
  let precioflagMasBarato;
  
  let contImportados = 0;
  let acumPrecioImportados =0;
  let precioImportados;
  let precioTotal = 0;
  let iva;
  
  
  
  do{
  tipo = prompt("Ingrese jugete tipo (muñeca/rompecabezas/pelota)").toLowerCase();
    while (tipo != "muñeca" && tipo != "rompecabezas" && tipo != "pelota" ) {
      
      tipo = prompt("ERROR. Reingrese jugete muñeca , rompecabezas , pelota ").toLowerCase();}
    
  
  
  
  origen =  prompt("Ingrese origen del jugete (importado /nacional)").toLowerCase();
  while (origen != "importado" && origen != "nacional" ) {
    
    origen = prompt("ERROR. Reingrese origen del jugete ¨importado¨ o ¨nacional¨ ").toLowerCase();}
  
  
  
  
    precio = parseInt(prompt("Ingrese el precio del jugete entre 1000 y 5000: "));
    while(precio < 1000 || precio > 5000 || isNaN(precio))
    {
      precio = parseInt(prompt("Error.No esta ingresando un precio acorde a lo pedido,reingreselo"));
    }
    
    precioTotal = precioTotal + precio;
  
  
    switch (tipo) {
      case "muñeca":
        contMuñeca++;
        break;
      case "pelota":
        contPelota++;
        break;
      case "rompecabezas":
        contRompecabezas++;
        break;
    }
  
  
  
  
  
   //Punto A
   if (contMuñeca > contRompecabezas && contMuñeca > contPelota) {
    jugueteMasVendido = "muñeca";
  }
  else if (contRompecabezas >= contMuñeca && contRompecabezas > contPelota) {
    jugueteMasVendido = "rompecabezas";
  }
  else {
    jugueteMasVendido = "pelotas";
  }
  
  
  
  //Punto B 
  
  
  if (origen == "importado"){
    contImportados++;
    acumPrecioImportados= acumPrecioImportados + precio;
  }
  
  
  
  
  
  
  
  //Punto D
  
  if (tipo == "rompecabezas" && origen == "nacional") {
  
  if (flagMasBarato || precio < precioRompeMasBarato){
    
    precioflagMasBarato = precio;
    
    flagMasBarato = 0;}}
  
  
  
  
  
  
  
  
  
  
     respuesta = prompt("¿Desea seguir ingresando datos? (Sí = 's'; No = 'n')").toLowerCase();
    while (respuesta != 's' && respuesta != 'n') {
      respuesta = prompt("ERROR. ¿Desea seguir ingresando datos? (Sí = 's'; No = 'n')").toLowerCase();
      }
    //FINAL DEL DO  
     } while (respuesta == 's');
  
  
    //cuentas
  
    //Punto B
    
    precioImportados = acumPrecioImportados / contImportados;
  
    
    iva = precioTotal * 0.21;
  
  
  
  
    document.write("A) El tipo de juguete mas vendido" +  jugueteMasVendido + "<br>");
    
    document.write("B) El promedio de precio de los juguetes importados" +  precioImportados +"<br>");
  
    document.write( "C) La recaudacion total : " + precioTotal  + "<br>");
  
    document.write( "D )Cual es el precio del rompecabezas nacional mas barato : " + precioflagMasBarato  + "<br>");
  
    document.write( "e )   Cuanto se percibio de iva en total (es el 21% de las ventas): " + iva  + "<br>");
  
  
  }
  