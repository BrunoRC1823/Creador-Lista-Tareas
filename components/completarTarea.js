const checkComplete = () => {
    const i = document.createElement("i");
    i.classList.add('far', 'fa-check-square', 'icon');
    i.addEventListener("click", completarTarea);
    return i;
};
const completarTarea = (evento) => {
    const elemento = evento.target
    console.log(elemento);
    const padre = elemento.parentElement;
    console.log(padre);
    elemento.classList.toggle('fas');
    elemento.classList.toggle('completeIcon');
    elemento.classList.toggle('far');
    padre.classList.toggle('task__complete-decoration');
};
export default checkComplete;