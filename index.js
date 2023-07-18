// Este código nos permite encontrar el elemento mediante su ID 
const miBoton = document.getElementById('miBoton');
// Este código define la funcion que se ejecutara cuando se haga clic en el boton 
function handleClick() {
    alert ('¡Hola! Haz hecho clic en el boton');
} 
// El código addEventListener() para añadir un oyente de eventos al botón
miBoton.addEventListener("click", function handleClick() {
    alert("¡Haz hecho clic en el boton!");
});