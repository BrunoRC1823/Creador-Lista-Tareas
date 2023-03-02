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
        const contenido = `
    <i class="fas fa-trash-alt trashIcon icon"></i>`;

        input.value = '';
        tarea.classList.add('card');
        tituloTarea.classList.add('task');
        tituloTarea.innerText = valor;

        contenidoTarea.appendChild(checkComplete());
        contenidoTarea.appendChild(tituloTarea);

        tarea.appendChild(contenidoTarea);
        lista.appendChild(tarea);
    };

    btn.addEventListener("click", createTask)
    const checkComplete = () => {
        const i = document.createElement("i");
        i.classList.add('far', 'fa-check-square', 'icon');
        i.addEventListener("click", completarTarea);
        return i;
    };
    const completarTarea = (evento) => {
        const elemento = evento.target
        elemento.classList.toggle('fas');
        elemento.classList.toggle('completeIcon');
        elemento.classList.toggle('far');
    };
})();