const botones = document.querySelectorAll(".categoria");
const imagenes = {
  todos: [
    "../../imgFolder/Galeria/decoraciones/decoracion3.webp",
    "../../imgFolder/Galeria/escaleras/escalera1.webp",
    "../../imgFolder/Galeria/mobiliarios/mobiliario2.webp",
    "../../imgFolder/Galeria/puertasYportones/porton2.webp",
    "../../imgFolder/Galeria/techos/techo1.webp",
    "../../imgFolder/Galeria/ventanas/ventana1.webp"
  ],
  decoraciones: [
    "../../imgFolder/Galeria/decoraciones/decoracion1.webp",
    "../../imgFolder/Galeria/decoraciones/decoracion2.webp",
    "../../imgFolder/Galeria/decoraciones/decoracion3.webp",
    "../../imgFolder/Galeria/decoraciones/decoracion4.webp",
    "#",
    "#"
  ],
  escaleras: [
    "../../imgFolder/Galeria/escaleras/escalera1.webp",
    "../../imgFolder/Galeria/escaleras/escalera2.webp",
    "#",
    "#",
    "#",
    "#"
  ],
  mobiliarios: [
    "../../imgFolder/Galeria/mobiliarios/mobiliario1.webp",
    "../../imgFolder/Galeria/mobiliarios/mobiliario2.webp",
    "../../imgFolder/Galeria/mobiliarios/mobiliario3.webp",
    "../../imgFolder/Galeria/mobiliarios/mobiliario4.webp",
    "../../imgFolder/Galeria/mobiliarios/mobiliario5.webp",
    "../../imgFolder/Galeria/mobiliarios/mobiliario6.webp"
  ],
  puertasYportones: [
    "../../imgFolder/Galeria/puertasYportones/porton1.webp",
    "../../imgFolder/Galeria/puertasYportones/porton2.webp",
    "../../imgFolder/Galeria/puertasYportones/porton3.webp",
    "../../imgFolder/Galeria/puertasYportones/puerta1.webp",
    "../../imgFolder/Galeria/puertasYportones/puerta2.webp",
    "../../imgFolder/Galeria/puertasYportones/puerta3.webp",
  ],
  techos: [
    "../../imgFolder/Galeria/techos/techo1.webp",
    "../../imgFolder/Galeria/techos/techo2.webp",
    "../../imgFolder/Galeria/techos/techo3.webp",
    "../../imgFolder/Galeria/techos/techo4.webp",
    "#",
    "#"
  ],
  ventanas: [
    "../../imgFolder/Galeria/ventanas/ventana1.webp",
    "../../imgFolder/Galeria/ventanas/ventana2.webp",
    "../../imgFolder/Galeria/ventanas/ventana3.webp",
    "#",
    "#",
    "#"
  ]
}

function cargarCategoria(nombreCategoria){
  const imgs = document.querySelectorAll(".imagen");
  imgs.forEach((img, i) => {
    img.style.backgroundImage = `url(${imagenes[nombreCategoria][i]})`;
  });
};


botones.forEach(boton => {
  boton.addEventListener("click", () => {
    botones.forEach(btn => {
        btn.classList.remove("categoria-activa");
    });
    boton.classList.add("categoria-activa")
    
    cargarCategoria(boton.dataset.categoria);
  });
})
