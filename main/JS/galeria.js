const botones = document.querySelectorAll(".categoria");
const imagenes = {
  todos: [
    "https://emidm28052004-droid.github.io/herreria/imgFolder/Galeria/decoraciones/decoracion3.webp",
    "https://emidm28052004-droid.github.io/herreria/imgFolder/Galeria/escaleras/escalera1.webp",
    "https://emidm28052004-droid.github.io/herreria/imgFolder/Galeria/mobiliarios/mobiliario2.webp",
    "https://emidm28052004-droid.github.io/herreria/imgFolder/Galeria/puertasYportones/porton2.webp",
    "https://emidm28052004-droid.github.io/herreria/imgFolder/Galeria/techos/techo1.webp",
    "https://emidm28052004-droid.github.io/herreria/imgFolder/Galeria/ventanas/ventana1.webp"
  ],
  decoraciones: [
    "https://emidm28052004-droid.github.io/herreria/imgFolder/Galeria/decoraciones/decoracion1.webp",
    "https://emidm28052004-droid.github.io/herreria/imgFolder/Galeria/decoraciones/decoracion2.webp",
    "https://emidm28052004-droid.github.io/herreria/imgFolder/Galeria/decoraciones/decoracion3.webp",
    "https://emidm28052004-droid.github.io/herreria/imgFolder/Galeria/decoraciones/decoracion4.webp",
    "#",
    "#"
  ],
  escaleras: [
    "https://emidm28052004-droid.github.io/herreria/imgFolder/Galeria/escaleras/escalera1.webp",
    "https://emidm28052004-droid.github.io/herreria/imgFolder/Galeria/escaleras/escalera2.webp",
    "#",
    "#",
    "#",
    "#"
  ],
  mobiliarios: [
    "https://emidm28052004-droid.github.io/herreria/imgFolder/Galeria/mobiliarios/mobiliario1.webp",
    "https://emidm28052004-droid.github.io/herreria/imgFolder/Galeria/mobiliarios/mobiliario2.webp",
    "https://emidm28052004-droid.github.io/herreria/imgFolder/Galeria/mobiliarios/mobiliario3.webp",
    "https://emidm28052004-droid.github.io/herreria/imgFolder/Galeria/mobiliarios/mobiliario4.webp",
    "https://emidm28052004-droid.github.io/herreria/imgFolder/Galeria/mobiliarios/mobiliario5.webp",
    "https://emidm28052004-droid.github.io/herreria/imgFolder/Galeria/mobiliarios/mobiliario6.webp"
  ],
  puertasYportones: [
    "https://emidm28052004-droid.github.io/herreria/imgFolder/Galeria/puertasYportones/porton1.webp",
    "https://emidm28052004-droid.github.io/herreria/imgFolder/Galeria/puertasYportones/porton2.webp",
    "https://emidm28052004-droid.github.io/herreria/imgFolder/Galeria/puertasYportones/porton3.webp",
    "https://emidm28052004-droid.github.io/herreria/imgFolder/Galeria/puertasYportones/puerta1.webp",
    "https://emidm28052004-droid.github.io/herreria/imgFolder/Galeria/puertasYportones/puerta2.webp",
    "https://emidm28052004-droid.github.io/herreria/imgFolder/Galeria/puertasYportones/puerta3.webp",
  ],
  techos: [
    "https://emidm28052004-droid.github.io/herreria/imgFolder/Galeria/techos/techo1.webp",
    "https://emidm28052004-droid.github.io/herreria/imgFolder/Galeria/techos/techo2.webp",
    "https://emidm28052004-droid.github.io/herreria/imgFolder/Galeria/techos/techo3.webp",
    "https://emidm28052004-droid.github.io/herreria/imgFolder/Galeria/techos/techo4.webp",
    "#",
    "#"
  ],
  ventanas: [
    "https://emidm28052004-droid.github.io/herreria/imgFolder/Galeria/ventanas/ventana1.webp",
    "https://emidm28052004-droid.github.io/herreria/imgFolder/Galeria/ventanas/ventana2.webp",
    "https://emidm28052004-droid.github.io/herreria/imgFolder/Galeria/ventanas/ventana3.webp",
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
