import checkComplete from "./components/completarTarea.js";
import eliminarIcon from "./components/eliminarIcon.js";
(() => {
    const btn = document.querySelector("[data-form-btn]")
    const esVacio = (input) => {
        const span = document.querySelector("[data-form-span]");
        if (input.value === "") {
            input.classList.add("error");
            span.style.display = "block";
            return true;
        } else {
            input.classList.remove("error");
            span.style.display = "none";
            return false;
        }
    }
    const createTask = (evento) => {
        evento.preventDefault();
        const input = document.querySelector("[data-form-input]");
        const vacio = esVacio(input);
        if (!vacio) {
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
            // Guardar en el localStorage
            const tareasGuardadas = JSON.parse(localStorage.getItem('tareas')) || [];
            const nuevaTarea = { titulo: valor, completada: false }; // Objeto que representa la nueva tarea
            tareasGuardadas.push(nuevaTarea);
            localStorage.setItem('tareas', JSON.stringify(tareasGuardadas));
        }
    };

    btn.addEventListener("click", createTask);
    // Generar tareas almacenadas al cargar la página
    window.addEventListener('load', () => {
        const tareasGuardadas = JSON.parse(localStorage.getItem('tareas')) || [];

        if (tareasGuardadas.length > 0) {
            const lista = document.querySelector("[data-list]");

            tareasGuardadas.forEach((tarea) => {
                const {titulo, completada} = tarea
                const nuevaTarea = document.createElement('li');
                const contenidoTarea = document.createElement('div');
                const tituloTarea = document.createElement('span');

                nuevaTarea.classList.add('card');
                tituloTarea.classList.add('task');
                tituloTarea.innerText = titulo;
                const i = checkComplete();
                console.log(i);
                if (completada) {
                    i.classList.add('fas'); // Marcar como completado
                    i.classList.add('completeIcon');
                    contenidoTarea.classList.add('task__complete-decoration');
                } else {
                    i.classList.add('far');
                }
                contenidoTarea.appendChild(i);
                contenidoTarea.appendChild(tituloTarea);
                nuevaTarea.appendChild(contenidoTarea);
                nuevaTarea.appendChild(eliminarIcon());

                lista.appendChild(nuevaTarea);
            });
        }
    });
})();