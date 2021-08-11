function mostrar()
{
	let nombre;
	let tipo; 
	let sangre;
	let edad;
    let sexo;
	let contadorAve = 0;
	let contadorMamifero = 0;
	let contadorReptil = 0;
	
	let contadorEdadReptil = 0;
	let flagMasJoven = 1
	let edadJoven;
	let tipoJoven;
let sexoJoven;
	let promedioReptil;
	let porcentajeAves;
	let TotalTipo;
	let cantidadMascota;



	do{

		
		
		nombre = prompt("Ingrese su nombre ").toLowerCase();
	
	 
	while (!(nombre.length >= 3 && nombre.length <= 8)){
		nombre = prompt("ERROR INGRESE  ENTRE 3 Y 8 CARECTERES ").toLowerCase();
	}
	
	
	
	edad = parseInt(prompt("Ingrese el edad"));
	while (isNaN(edad) || edad <= 0 ) {
		edad = parseInt(prompt("ERROR, ingrese un edad valido "));
	}
		
		
	tipo = prompt("Ingrese la tipo (mamifero/ave/reptil)").toLowerCase();
	while (tipo != "mamifero" && tipo != "ave" && tipo != "reptil" ) {
		
		tipo = prompt("ERROR. Reingrese tipo ave, mamifero , reptil ").toLowerCase();}



		if(tipo == "reptil"){
    alert("El tipo de sangre del reptil es fria ");
	sangre = "fria";}

		else{
		sangre = prompt("Ingrese la sangre (calida/fria)").toLowerCase();
		while (sangre != "fria" && sangre != "calida" ) {
			
			sangre = prompt("ERROR. Reingrese tipo de sangre. calida / fria ").toLowerCase();}}


			
			sexo = prompt("Ingrese sexo m de macho y h de hembra").toLowerCase();
		while (sexo != "m" && sexo != "h" ) {
			
			sexo = prompt("ERROR. Ingrese sexo m de macho y h de hembra ").toLowerCase();}
		
	

		
		
		
	
if (tipo == "ave"){

contadorAve++;}


if (tipo == "mamifero"){
	
contadorMamifero++;}


if ( tipo == "reptil") {

contadorReptil++;

contadorEdadReptil+=edad;


}
		
		
		
		

//Punto B


if (flagMasJoven || edad < edadJoven ) { 
	tipoJoven = tipo;
	edadJoven = edad;
	sexoJoven = sexo;
	
	flagMasJoven = 0;}
		
		
		


	if(contadorAve > contadorMamifero && contadorAve> contadorReptil){
		cantidadMascota = "ave";
	}
	else if(contadorMamifero> contadorAve && contadorMamifero > contadorReptil){
		cantidadMascota = "mamifero";
	}
	else if(contadorReptil> contadorMamifero && contadorReptil > contadorAve){
		cantidadMascota = "reptil";
	}

	
	
	
	
	
	
	
	respuesta = prompt("¿Desea seguir ingresando datos? (Sí = 's'; No = 'n')").toLowerCase();
	while (respuesta != 's' && respuesta != 'n') {
			respuesta = prompt("ERROR. ¿Desea seguir ingresando datos? (Sí = 's'; No = 'n')").toLowerCase();
			}
		//FINAL DEL DO  
		 } while (respuesta == 's');




TotalTipo = contadorReptil + contadorAve + contadorMamifero;

//Punto A CUENTAS



promedioReptil =  contadorEdadReptil / contadorReptil ;



//Punto C 

porcentajeAves = contadorAve * 100 / TotalTipo;


		





document.write("a- Promedio de edad de los reptiles" +  promedioReptil + "<br>");
	
		 document.write(" b- tipo la mascota mas joven " + tipoJoven + " Y el sexo "+   sexoJoven  + "<br>");
	   
		 document.write( "c- Del total de mascotas que porcentaje que son aves  es  " + porcentajeAves  + "<br>");
	   
		 document.write( "D ) d- De que tipo de mascota hay mas cantidad : " + cantidadMascota  + "<br>");
	   
		
	   







}