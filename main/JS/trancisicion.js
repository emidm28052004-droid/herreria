const imagen = document.querySelector(".transicion img");

window.addEventListener("scroll", () => {
    // Multiplicamos por un factor sutil. Experimenta con 0.15 o 0.2
    const velocidad = window.scrollY * 0.20; 
    
    /* 1. Usamos signo menos (-) para que la imagen suba en el eje Y.
    2. Mantenemos el scale(1.3) para tener margen de imagen arriba y abajo.
    */
    imagen.style.transform = `translate3d(0px, ${velocidad}px, 0px) scale(1.3)`;
});