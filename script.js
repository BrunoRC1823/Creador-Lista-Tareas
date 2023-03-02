import checkComplete from "./components/completarTarea.js";
import eliminarIcon from "./components/eliminarIcon.js";
(() => {
    const btn = document.querySelector("[data-form-btn]")

    const createTask = (evento) => {
        evento.preventDefault();
        const input = document.querySelector("[data-form-input]");
        const lista = document.querySelector("[data-list]");
        const tarea = document.createElement('li');
        const contenidoTarea = document.createElement('div');
        const tituloTarea = document.createElement('span');
        const valor = input.value;

        input.value = '';
        tarea.classList.add('card');
        tituloTarea.classList.add('task');
        tituloTarea.innerText = valor;

        contenidoTarea.appendChild(checkComplete());
        contenidoTarea.appendChild(tituloTarea);

        tarea.appendChild(contenidoTarea);
        tarea.appendChild(eliminarIcon());
        lista.appendChild(tarea);
    };

    btn.addEventListener("click", createTask);
})();