const eliminarIcon = () => {
    const i = document.createElement('i');
    i.classList.add('fas', 'fa-trash-alt', 'trashIcon', 'icon')
    i.style.transition = 'all 0.4s';
    i.addEventListener('click', eliminarTarea)
    return i;
};
const eliminarTarea = (evento) => {
    const padre = evento.target.parentElement;
    const tituloTarea = padre.querySelector('.task').innerText;
    // Eliminar la tarea del localStorage
    const tareasGuardadas = JSON.parse(localStorage.getItem('tareas')) || [];
    const tareasActualizadas = tareasGuardadas.filter(tarea => tarea.titulo !== tituloTarea);
    localStorage.setItem('tareas', JSON.stringify(tareasActualizadas));
    padre.remove();
};
export default eliminarIcon;