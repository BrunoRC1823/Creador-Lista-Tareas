const eliminarIcon = () => {
    const i =  document.createElement('i');
    i.classList.add('fas','fa-trash-alt','trashIcon','icon')
    i.addEventListener('click',eliminarTarea)
    return i;
};
const eliminarTarea = (evento) => {
    const padre = evento.target.parentElement;
    padre.remove();
};
export default eliminarIcon;