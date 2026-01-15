// Estructura de datos compartida de bestias
// Agrega aquí tus bestias siguiendo el esquema indicado.
// Este archivo es consumido por index.html, detalle.html y filtros.html.
//
// {
//   nombre: "Nombre",
//   categoria: "Categoría 1|Categoría 2|Categoría 3|Categoría 4",
//   fortalezas: "Texto",
//   debilidades: "Texto",
//   dano_texto: "ej.: 1D6 + 1D4 (Mordisco venenoso)", // opcional
//   dano: 0, ca: 0, vitalidad: 0, px: 0,
//   movimiento: 0, dano_alcance: 0,
//   localizacion: "Texto",
//   alineamiento: "Texto",
//   descripcion: "Texto",
//   imagen: "ruta/a/imagen.png" // opcional
// }
//
// Nota: No se incluyen ejemplos adicionales para respetar tu petición.

window.bestias = [
  {
    nombre: "Serpopardo",
    categoria: "Categoría 1",
    fortalezas: "El serpopardo posee la misma agilidad y rapidez que un guepardo, lo que le permite moverse con destreza en terrenos variados y acechar a sus presas de manera efectiva. Se desplaza con gran sigilo, emitiendo un sonido similar al de una serpiente que proviene de todas las direcciones, lo que confunde a sus presas y dificulta su detección. Gracias a su lengua bípera y su aguda visión, el serpopardo puede percibir su entorno con gran precisión, detectando presas potenciales o peligros inminentes.",
    debilidades: "Aunque es ágil y rápido, el serpopardo se desenvuelve mejor en hábitats que le brinden cobertura y oportunidades para emboscar a sus presas. El humo puede ahuyentar al serpopardo, lo que dificulta su capacidad para cazar o moverse en áreas afectadas por incendios u otros tipos de humo. Las serpientes adicionales en su cuerpo pueden ser un punto vulnerable en combate cuerpo a cuerpo; un ataque dirigido adecuadamente a estas serpientes puede incapacitar temporalmente al serpopardo.",
    dano_texto: "1D6 + 1D4 (Mordisco venenoso)",
    dano: 6,
    ca: 8,
    vitalidad: 12,
    px: 750,
    movimiento: 8,
    dano_alcance: 1,
    localizacion: "Habita bosques o selvas donde puede camuflarse entre la vegetación y acechar a sus presas; también en áreas húmedas como pantanos o selvas tropicales.",
    alineamiento: "Neutral/Caótica",
    descripcion: "Criatura híbrida que combina aspectos de serpiente y guepardo. Presenta múltiples serpientes en lugar de una cola común, entrelazadas con el pelaje, otorgándole una apariencia única. Posee agilidad y velocidad comparables a felinos rápidos; su piel en el cuello se endurece formando una estructura similar a escamas; cabeza semejante a la de un guepardo, con orejas puntiagudas y ojos afilados. Lengua viperina para percibir el entorno con gran precisión.",
    imagen: "imgs/serpopardo.png"
  }
];

try {
  localStorage.setItem('bestias', JSON.stringify(window.bestias));
} catch (_) {}
