function mostrar()
{
let nombre;
let carrera;
let sexo;
let materia;
let nota;
let edad;
let contadorQuimica = 0;
let contadorFisica = 0;
let contadorSistemas =0;
let flagMejorPromedio = 1;

let flagAlumnaJoven = 1;

let flagMasMaterias = 1;
let nombreMJ;
let notaMax;
let nombreMP;
let masMaterias;
let edadMaterias;
let nombreMaterias;
let totalEstudiantes;
let porcentajeFisica;
let porcentajeQuimica;
let porcentajeSistemas;


for (i=0; i<500; i++){ 


	nombre = prompt("Ingrese su nombre ").toLowerCase();

	edad = parseInt(prompt("Ingrese el edad"));
	while (isNaN(edad) || edad <= 0 ) {
		edad = parseInt(prompt("ERROR, ingrese un edad valido "));
	}


	sexo = prompt("Ingrese la carrera (masculino/femenino/nobinario)").toLowerCase();
	while (sexo != "masculino" && sexo != "femenino" && sexo != "nobinario" ) {
		
		sexo = prompt("ERROR. Reingrese sexo femenino, masculino , nobinario ").toLowerCase();}


	carrera = prompt("Ingrese la carrera (quimica/fisica/sistemas)").toLowerCase();
	while (carrera != "quimica" && carrera != "fisica" && carrera != "sistemas" ) {
		
		carrera= prompt("ERROR. Reingrese carrera quimica , fisica , sistemas ").toLowerCase();}



		materia = parseInt(prompt("Ingrese la materia entre  1  y  5 : "));
		while(materia < 1 || materia > 5|| isNaN(materia))
		{
			materia = parseInt(prompt("Error.No esta ingresando una materia acorde a lo pedido,reingreselo"));
		}
			
			
			
			
			
		nota = parseInt(prompt("Ingrese promedio de nota del alumno entre 0y 10: "));
		while(nota < 0 || nota > 10 || isNaN(nota))
		{
			nota = parseInt(prompt("Error.No esta ingresando una nota acorde a lo pedido,reingreselo"));
		}




switch (carrera){


case"quimica":
contadorQuimica++;


break;

case"fisica":

contadorFisica++;





break;


case"sistemas":

contadorSistemas++;

break;


}




//Punto A 



if (carrera== "fisica") {

if (flagMejorPromedio || nota > notaMax) { 
	nombreMP= nombre;
	
	notaMax = nota;
	flagMejorPromedio = 0;}}





//Punto B 



 if (sexo == "femenino"){
 
 
  if (flagAlumnaJoven || edad < edadJoven ){ 
	
	nombreMJ= nombre;
	edadJoven = edad;
	flagAlumnaJoven = 0;}
  }

	//Punto D 




  if(carrera == "fisica" || carrera == "sistemas") {
  
  if (flagMasMaterias || materia > masMaterias ) { 
	
	nombreMaterias= nombre;
	edadMaterias = edad;
	flagMasMaterias = 0;}  }


}

totalEstudiantes = contadorFisica + contadorQuimica + contadorSistemas;
porcentajeFisica = contadorFisica * 100 / totalEstudiantes;
porcentajeQuimica = contadorQuimica * 100 / totalEstudiantes;
porcentajeSistemas = contadorSistemas * 100 / totalEstudiantes;

document.write("A)  El nombre del mejor promedio de los alumnos que estudian Fisica. Sin importar el sexo." +  nombreMP + "<br>");
	
   document.write("B)El nombre de la alumna mas joven. " + nombreMJ +"<br>");
 
   document.write("c) Porcentaje de estudiantes que estudia cada carrera es: " + porcentajeSistemas+ "y el porcentaje de quimica es " + porcentajeQuimica + "y el porcentaje de Fisica es: " + porcentajeFisica + "<br>");
 
   document.write( "D ) nombre del estudiante que cursa mas materias exceptuando la carrera de Quimica. : " + nombreMaterias  + " edad  : " + edadMaterias + "<br>");



}