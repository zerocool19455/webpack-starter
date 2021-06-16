import './styles.css';
import { miModulo } from './js/juego.js';

//inicializarJuego();
console.log( miModulo );

document.querySelector('#btnNuevo').addEventListener('click', () => {
    miModulo.nuevoJuego();
});