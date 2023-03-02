const btn = document.querySelector("[data-form-btn]")

const createTask = (evento) => {
    evento.preventDefault();
    const input = document.querySelector("[data-form-input]");
    const valor = input.value;
    const lista = document.querySelector("[data-list]");
    const tarea = document.createElement('li');
    tarea.classList.add('card')
    input.value = '';
    const contenido = `
    <div>
        <i class="far fa-check-square icon"></i>
        <span class="task">${valor}</span>
    </div>
    <i class="fas fa-trash-alt trashIcon icon"></i>`;
    tarea.innerHTML = contenido;
    lista.appendChild(tarea);
};

btn.addEventListener("click", createTask)
