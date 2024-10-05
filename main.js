//Declaracion de constantes
//Elemento del texto del nombre de la tarea
const input = document.querySelector('input');
//Boton de agregar tarea identificado por su clase
const addBtn = document.querySelector('.btn-add');
//Lista de tarea
const ul = document.querySelector('ul');
//Contenedor de mensaje lista vacia 
const empty = document.querySelector('.empty');
//Contenedor de mensaje lista  
const licontainer = document.querySelector('.li-container');
//Evento para agregar tarea
addBtn.addEventListener("click", (e) => {
    e.preventDefault();
    //Texto del nombre de la tarea
    const text = input.value;
    //Condicional para validar que el texto sea diferente a nulo
    if(text !== ''){
        //Creacion de item para la lista
        const li = document.createElement('li');
        //Creacion del elemento para contener el nombre de la tarea
        const p = document.createElement('p');
        p.textContent = text;
        p.className = 'li-text';
        li.appendChild(FDoneInp());
        //Funcion para agregar el elemento del nombre a li 
        li.appendChild(p);
        //Funcion para agregar el elemento boton de eliminar a li
        li.appendChild(FDeleteBtn());
        //Funcion para agregar el elemento item li a la lista ul
        ul.appendChild(li);
        //limppiar elemento input
        input.value = '';
        //Funcion para no desplegar el contenedor empty
        empty.style.display = 'none';
        //Funcion para desplegar el contenedor lista
        licontainer.style.display = 'block';
    }
    //si es nulo alert
    else{
        alert('Tarea sin nombre');
    }

});
//Funcion de Tarea completada
function FDoneInp(){
    //Input tipo checkbox para marcar tarea
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'input-check';
    //Evento para cambiar estilo de texto
    checkbox.addEventListener('change', (e)=> {
        //Obtener item
        const item = e.target.parentElement;
        if (checkbox.checked) {
            //Cambiar clase de p del item seleccionado == check sea true
            item.querySelector('p').className = 'text-done';
        } else {
            //Cambiar clase de p del item desseleccionado == check es false
            item.querySelector('p').className = 'li-text';
        } 
    })
    return checkbox;
}


//Funcion para eliminar tarea
function FDeleteBtn(){
    //Creacion del bonton para eliminar tarea
    const deleteBtn = document.createElement('button');
    //Texto del boton
    deleteBtn.textContent = 'x';
    //Clase del boton
    deleteBtn.className = 'btn-delete';
    //Evento para cuando se haga click en el boton
    deleteBtn.addEventListener('click', (e)=>{
        //Obtencion del item por medio del nodo padre
        const item = e.target.parentElement;
        //Remover item de la lista
        ul.removeChild(item);
        //Obtener todos los elemento li
        const items = document.querySelectorAll('li');
        //Condicion para validar si la cantidad de elementos es igual a 0
        if(items.length === 0){
            //Desplegar contenedor empty de mensaje de lista vacia
            empty.style.display = 'block';
            licontainer.style.display = 'none';
        }
            
    });
    //Retornar elemento eliminar boton
    return deleteBtn;
}