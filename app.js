// Elementos del Dom
const nuevaLista = document.getElementById("lista");
const escribirInput = document.getElementById("tareaInput");
const boton = document.getElementById("botonAgregar");
const inputBuscar = document.getElementById("buscar");
const botones = document.querySelectorAll(".tecla");
const limpiar = document.getElementById("borrar");
const botonEnter = document.getElementById("intro");
const teclaShift = document.getElementById("teclaMayus");

//Funciones
const agregarTarea = () => {

  let tarea = escribirInput.value.trim();
  if (tarea === "") {
    escribirInput.setAttribute("placeholder", "Agrega una tarea valida");
    return false;
  }else{
    escribirInput.setAttribute("placeholder", "Agrega una tarea");
  }
  const enlace = `<li class="list-group-item d-flex justify-content-between">${tarea} <button type="button" class="btn btn-danger borrar">Borrar</button></li>`;
  nuevaLista.innerHTML += enlace
  // let enlace = document.createElement("li");
  // enlace.innerHTML =`<li class="list-group-item">${tarea} <button type="button" class="btn btn-danger borrar">Borrar</button></li>`
  // nuevaLista.appendChild(enlace);
  escribirInput.value = "";
  
};  

const eliminarTarea = (event) => {
if(event.target.classList.contains("borrar")){
   event.target.parentElement.remove()
  }
};

const agregarTareaConKeyboard = (event) =>{
  if (event.key == `Enter` || event.key == `Insert`) {
    let tarea = escribirInput.value.trim();
    if (tarea === "") {
      escribirInput.setAttribute("placeholder", "Agrega una tarea valida");
      event.preventDefault();
      return false;
    }else{
      escribirInput.setAttribute("placeholder", "Agrega una tarea");
    }
    if (tarea) {
      agregarTarea(tarea);
      event.preventDefault();
    }
  }
}

const busqueda = () => {
 let caracter = inputBuscar.value.trim();
 let arreglo = Array.from(nuevaLista.children)
 arreglo.filter(texto => !texto.textContent.toLowerCase().includes(caracter))
         .forEach(cadenaFiltrada => {
  cadenaFiltrada.classList.add(`textFiltrado`) // el textFiltrado esta declarado en el CSS para realizar el efecto 
 })
 arreglo.filter(texto => texto.textContent.toLowerCase().includes(caracter))
         .forEach(cadenaFiltrada => {
cadenaFiltrada.classList.remove(`textFiltrado`)
})
}

botones.forEach(tecla =>{
  tecla.addEventListener(("click"),() =>{
  escribirInput.value += tecla.value
  })
})

const limpiarDisplay = () =>{
  escribirInput.value = " "
}


const mayusMinus = () =>{
  botones.forEach(tecla => {
    tecla.classList.toggle("upper")
  })  
}








//Eventos
boton.addEventListener(`click`, agregarTarea);// agrega la tarea
nuevaLista.addEventListener(`click`, eliminarTarea); // elimina la tarea
document.addEventListener(`keydown`, agregarTareaConKeyboard); // agrega la tarea por medio la tecla Enter o Insert
inputBuscar.addEventListener(`keyup`, busqueda);
limpiar.addEventListener("click", limpiarDisplay);
botonEnter.addEventListener("click", agregarTarea);
teclaShift.addEventListener("click", mayusMinus);