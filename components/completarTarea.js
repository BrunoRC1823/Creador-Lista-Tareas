const checkComplete = () => {
    const i = document.createElement("i");
    i.classList.add('far', 'fa-check-square', 'icon');
    i.dataset.checked = "checked";
    i.style.transition = 'all 0.4s';
    i.addEventListener("click", completarTarea);
    return i;
};
const completarTarea = (evento) => {
    const elemento = evento.target
    const padre = elemento.parentElement;
    const tituloTarea = padre.querySelector('.task').innerText;

    // Actualizar el estado de completado en el localStorage
    const tareasGuardadas = JSON.parse(localStorage.getItem('tareas')) || [];
    const tareasActualizadas = tareasGuardadas.map(tarea => {
        if (tarea.titulo === tituloTarea) {
            console.log("gha");
            tarea.completada = !tarea.completada; // Invertir el estado de completado
        }
        return tarea;
    });
    localStorage.setItem('tareas', JSON.stringify(tareasActualizadas));
    elemento.classList.toggle('fas');
    elemento.classList.toggle('completeIcon');
    elemento.classList.toggle('far');
    padre.classList.toggle('task__complete-decoration');
};
export default checkComplete;