window.addEventListener("load", function(){

const motos = document.querySelector("#motos");
const horario = document.querySelector("#horario");

var motoNumber = 0;
var horaNumber = 0;
var id = 0;
var boxHora = {};
var boxMotos = {};
var horaRed = {};
var laHora = {};
var laMoto = {};
var motoIdentificada;
var elementoHoraMoto = {};
var motoTrabajandoIdentificada = {};
var horaRoja = [];
var horaMotoDisponibles = [];
var horaMotoTrabajando =[];
var a = 0;

for(let i=1; i<=8; i++){
   motoNumber = i;
   boxMotos = document.createElement("div");
   boxMotos.id= 'M' + motoNumber ;
   boxMotos.classList.add("moto");
   boxMotos.textContent = 'M' + motoNumber ;
   boxMotos.style.visibility = "visible";
   motos.appendChild(boxMotos);
   }

for(let i=1; i<=24; i++) {
    horaNumber = i;
    const h = new Date();
    h.setHours(8);
    boxHora = document.createElement("div");
    boxHora.id = 'H' + horaNumber;
    boxHora.classList.add("hora");
    boxHora.textContent = "";
    boxHora.style.backgroundColor = 'rgb(255, 255, 255)';
    horario.appendChild(boxHora);

   const hora = document.getElementById(boxHora.id);

   if(hora.style.backgroundColor === 'rgb(255, 255, 255)')
   hora.addEventListener("click", myFunction);

function myFunction(e){

  if (hora.style.backgroundColor === 'rgb(255, 255, 255)') {
     a= a + 1;
     if(a >= 9 && horaRoja.length === 8 && horaMotoDisponibles.length === 0) {
         alert("112 No quedan motos disponibles");
         return;
         }
     if(horaRoja.length === 8 && horaMotoDisponibles.length === 0){alert("52 Última moto disponible");

console.log(horaRoja.length, horaMotoDisponibles.length);
        return;
        }

    hora.style.backgroundColor = 'rgb(255, 0, 0)';

       if(horaRoja.length === 8 && horaMotoDisponibles.length !== 0){horaMotoDisponibles; motoIdentificada;
             const motonDisponible = horaMotoDisponibles[0].motoIdentificada;

             horaMotoTrabajando.unshift(horaMotoDisponibles[0]);

                if(motonDisponible.style.visibility  === "visible") motonDisponible.style.visibility = "hidden";

                horaMotoDisponibles.shift();
console.log(horaRoja.length);
            if(horaRoja.length === 8 && horaMotoDisponibles.length === 0)  alert("69 Última moto disponible");
console.log("Posición 0");

          return;
          }

    const horaRedClickeada = horaRoja.filter((id) => id = boxMotos);

         if(boxMotos.style.visibility  === "visible") boxMotos.style.visibility = "hidden";

     var motoId =boxMotos.id.split("");

        motoNumber = motoId[1] - 1;
        let id= 'M' + motoNumber;
        laMoto = document.getElementById(id);
        horaRed = {hora, boxMotos};
        horaRoja.push(horaRed);
        boxMotos = laMoto;
console.log(horaRoja.length, horaMotoDisponibles.length);
    if(horaRoja.length === 8 && horaMotoDisponibles.length === 0) alert("112 Última moto disponible");
    console.log("Posición 1 Última moto disponible");


       return(horaRoja, laMoto);
}
    if (hora.style.backgroundColor === 'rgb(255, 0, 0)'){

     if(horaRoja.length !== 0 && horaMotoTrabajando.length !== 0){
      horaMotoTrabajando[0].motoIdentificada.style.visibility = "visible";
      hora.style.backgroundColor = "rgb(255, 255, 255)";
      horaMotoTrabajando.shift();
      return;
         }
      }

for(let x=0; x<=horaRoja.length -1; x++){
   if (horaRoja[x].hora.id === hora.id){
      const motoOculta = horaRoja[x].boxMotos
      motoIdentificada = document.getElementById(motoOculta.id);
      motoIdentificada.style.visibility = "visible";
      hora.style.backgroundColor = 'rgb(255, 255, 255)';
      }
   }
        elementoHoraMoto = {hora, motoIdentificada};
console.log(hora, motoIdentificada);
        horaMotoDisponibles.push(elementoHoraMoto);
console.log(horaRoja.length, horaMotoDisponibles.length);
     if(a >= 9 && horaRoja.length === 8 && horaMotoDisponibles.length === 0) {
         alert("112 No quedan motos disponibles");
console.log("No quedan motos disponibles");
         return;
         }

     if(horaRoja.length === 8 && horaMotoDisponibles.length === 0){alert("52 Última moto disponible");

console.log(horaRoja.length, horaMotoDisponibles.length);
console.log("Última moto disponible");
        return;
        }
           }
   }
});

