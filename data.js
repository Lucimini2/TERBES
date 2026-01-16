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
  },
  {
    nombre: "Tauro",
    categoria: "Categoría 1",
    fortalezas: "Una vez que el Tauro realiza una embestida, se vuelve imparable, arrollando todo lo que tiene por delante gracias a su fuerza y constitución. Su capacidad de regeneración rápida le permite recuperarse de las heridas con rapidez, otorgándole una resistencia excepcional en batalla. Los cuernos del Tauro son armas letales que pueden perforar cualquier defensa, proporcionando ventaja significativa contra oponentes blindados.",
    debilidades: "No es un animal demasiado astuto y se deja guiar por su rabia incontrolable. Su regeneración rápida puede verse limitada por ciertos tipos de magia o ataques que afecten su capacidad de curación. Puede ser propenso a la fatiga debido a su tamaño masivo y al esfuerzo físico requerido en combates prolongados.",
    dano_texto: "2D8 (Embestida)",
    dano: 9,
    ca: 13,
    vitalidad: 28,
    px: 1500,
    movimiento: 9,
    dano_alcance: 1,
    localizacion: "En el plano terrenal, los Tauros suelen verse en las arenas de gladiadores, donde luchan contra oponentes experimentados en duelos a muerte. Estas criaturas imponentes son espectáculos populares en eventos de lucha de muchas culturas, donde se enfrentan a desafíos cada vez más difíciles para el deleite del público.",
    alineamiento: "Neutral/Caótica",
    descripcion: "El Tauro es una criatura imponente que se asemeja a un toro, pero con el doble de tamaño de un toro normal. Su cuerpo está cubierto por un pelaje oscuro y posee numerosas colas, lo que le otorga una apariencia intimidante. Sus heridas se regeneran con rapidez sorprendente, permitiéndole resistir incluso los ataques más feroces durante una lucha. Sus cuernos son extremadamente poderosos y capaces de perforar cualquier armadura o escudo convencional, convirtiéndolo en un oponente formidable en el campo de batalla.",
    imagen: "imgs/tauro.png"
  },
  {
    nombre: "Pez Khay",
    categoria: "Categoría 1",
    fortalezas: "Puede moverse sin restricciones entre distintos entornos, navegando por el plano abisal y otros medios como agua, aire, espacio, fuego, hielo o tierra. Posee la capacidad de revertir maldiciones y maleficios, actuando como agente de redención en el plano abisal. Al fusionarse con seres malditos, puede transmitir conocimientos almacenados en estos, aumentando la sabiduría y comprensión del plano abisal.",
    debilidades: "Es físicamente frágil y vulnerable a ataques directos; su pequeño tamaño lo convierte en presa fácil. No posee habilidades de combate y prefiere evitar el conflicto, quedando indefenso frente a amenazas directas. La magia infernal puede debilitarlo, comprometiendo su capacidad de redención; vulnerable en entornos altamente mágicos y hostiles.",
    dano_texto: "1D4 (Daño abisal)",
    ca: 17,
    vitalidad: 5,
    px: 100,
    movimiento: 7,
    dano_alcance: 1,
    localizacion: "Principalmente en el plano abisal, navegando libremente por cualquier lugar.",
    alineamiento: "Legal",
    descripcion: "Criatura singular del sombrío plano abisal. A primera vista puede confundirse con un pequeño delfín de apenas quince centímetros, pero su particularidad es moverse en cualquier tipo de medio: agua, aire, espacio, fuego, hielo o tierra. Su cuerpo muestra tonalidad blanca y gris con patrones de oleadas oscuras que recuerdan las profundidades abismales; una rareza entre las aberraciones y horrores del plano abisal.",
    imagen: "imgs/pezkhay.png"
  },
  {
    nombre: "Sanguijuela Enorme",
    categoria: "Categoría 1",
    fortalezas: "Sus enormes dimensiones le permiten dominar a presas pequeñas y ejercer presión abrumadora. Capacidad de ocultarse entre la vegetación acuática para emboscar efectivamente. Mandíbulas poderosas y dientes afilados capaces de infligir graves heridas y succionar grandes cantidades de sangre.",
    debilidades: "Puede ser torpe y lenta en tierra firme, volviéndose vulnerable a depredadores terrestres. Vulnerable a la deshidratación si se aleja del agua. Sus grandes ojos rojos son un punto débil; susceptibles a daños físicos o mágicos que afectan su capacidad de detectar presas y peligros.",
    dano_texto: "2D8 (Mordisco)",
    ca: 14,
    vitalidad: 74,
    px: 38850,
    movimiento: 6,
    dano_alcance: 3,
    localizacion: "Planos terrenales, especialmente pantanos; también cavernas subterráneas húmedas o sistemas de alcantarillado con suficiente humedad.",
    alineamiento: "Caótico",
    descripcion: "Criatura monstruosa semejante a una sanguijuela de hasta veinte metros de longitud. Habita en entornos acuáticos y pantanos, camuflándose entre la vegetación o enterrándose en el barro para acechar. Su cuerpo segmentado y piel resbaladiza le permiten adherirse firmemente a sus víctimas; mandíbulas equipadas con dientes afilados para perforar y succionar sangre. Destacan dos grandes ojos rojos que brillan en la oscuridad y varios ojos pequeños a lo largo de su cabeza.",
    imagen: "imgs/sanguijuelaenorme.png"
  },
  {
    nombre: "Stiarna",
    categoria: "Categoría 1",
    fortalezas: "Naturaleza dócil y gentil, ideal como montura o animal de transporte. Energía celestial en los cuernos que otorga protección y poder, mejorando la resistencia frente a ataques. Capacidad de iluminar el entorno con ojos azules incandescentes, útil para viajar o explorar en lugares oscuros o de noche.",
    debilidades: "Al ser dóciles no son agresivos ni se defienden en combate. Su protección disminuye en entornos con escasa bondad o energía celestial, volviéndose más vulnerables. Las temperaturas extremadamente calientes pueden afectarlos, reduciendo resistencia y capacidad para desempeñarse eficazmente.",
    dano_texto: "2D8 + 1D6 (cornada sagrada)",
    ca: 15,
    vitalidad: 28,
    px: 800,
    movimiento: 6,
    dano_alcance: 1,
    localizacion: "Oriundos del plano sagrado; también presentes en otros planos cuando son invocados o usados como monturas por seres benevolentes.",
    alineamiento: "Legal",
    descripcion: "Seres dóciles del plano sagrado, comúnmente monturas por su naturaleza tranquila. Apariencia similar a un ñu con pelaje grisáceo abundante que protege del frío y las inclemencias. Dos cuernos tipo reno portan energía celestial de poder y protección; ojos brillan con intenso azul incandescente capaz de iluminar el entorno. Llevan bolas de decoración y pelaje variado que añade belleza dulce.",
    imagen: "imgs/stiarna.png"
  },
  {
    nombre: "Unicornio",
    categoria: "Categoría 1",
    fortalezas: "Puede purificar árboles y lagos, restaurando vitalidad y equilibrio de ecosistemas. Lágrimas con propiedades curativas excepcionales. Gran agilidad y velocidad para evadir peligros; rapidez legendaria.",
    debilidades: "Emocionalmente frágil, susceptible a tristeza y depresión si es retenido contra su voluntad. La amputación del cuerno provoca muerte instantánea al ser su centro de poder y vitalidad. Receloso de la gente nueva y poco extrovertido, lo que dificulta formar alianzas.",
    dano_texto: "1D8 (Cornada)",
    ca: 8,
    vitalidad: 23,
    px: 650,
    movimiento: 11,
    dano_alcance: 1,
    localizacion: "Por norma general en el plano de ensueño; algunos encontrados perdidos en el plano terrenal.",
    alineamiento: "Legal",
    descripcion: "Bella criatura con apariencia de caballo y un único cuerno espiral en la frente capaz de purificar árboles y lagos. Profunda conexión con la naturaleza; esbelta y elegante, irradia pureza y nobleza. Emocionalmente frágil; retenerlo contra su voluntad puede llevarlo a la muerte por tristeza. Considerado de los animales terrestres más rápidos.",
    imagen: "imgs/unicornio.png"
  },
  {
    nombre: "Osoez",
    categoria: "Categoría 1",
    fortalezas: "Manipula sus espinas para adaptar defensa y ataque, obteniendo ventaja táctica. Depredador versátil con amplia dieta, capaz de sobrevivir en diversos entornos. Ataque a distancia lanzando espinas y regeneración inmediata.",
    debilidades: "Letargo prolongado lo vuelve vulnerable a la caza furtiva. La manipulación constante de las espinas puede agotarlo en combates largos. Sensible al frío, puede ralentizarse y volverse más letárgico.",
    dano_texto: "4D4 (Espina perforante)",
    ca: 8,
    vitalidad: 22,
    px: 1950,
    movimiento: 6,
    dano_alcance: 3,
    localizacion: "Diversas regiones del plano elemental, con entornos que favorecen su letargo y amplia variedad de alimentos.",
    alineamiento: "Neutral",
    descripcion: "Criatura corpulenta del tamaño de un oso con pelaje adornado por espinas similares a las de un erizo, distribuidas en espalda y extremidades. Puede modificar sus espinas haciéndolas más rígidas, flexibles, grandes o pequeñas según necesidad, brindando versatilidad defensiva y ofensiva. Conocido por su tendencia al letargo, activa mecanismos de defensa para evitar ser atacado; dieta extremadamente variada.",
    imagen: "imgs/osoez.png"
  },
  {
    nombre: "Pegaso",
    categoria: "Categoría 1",
    fortalezas: "Surca cielos con gran velocidad y destreza, evadiendo enemigos y explorando grandes extensiones. Musculatura poderosa y resistencia sorprendente para vuelos largos. Se dice que puede sanar a quienes toca su crin o beben aguas de los manantiales donde ha pisado.",
    debilidades: "Vulnerable a ataques mágicos que afectan el vuelo o la energía vital. Requiere espacios abiertos y cielos despejados; lugares confinados limitan su movilidad y debilitan su espíritu. Ser libre por naturaleza; capturarlo o someterlo puede provocar pérdida de gracia y sufrimiento emocional.",
    dano_texto: "2D6 (Golpe contundente)",
    ca: 9,
    vitalidad: 26,
    px: 950,
    movimiento: 9,
    dano_alcance: 1,
    localizacion: "Plano de ensueño; lugares remotos y vírgenes como praderas, bosques ancestrales o montañas inaccesibles.",
    alineamiento: "Legal",
    descripcion: "Majestuosa criatura que combina la gracia de un caballo con la libertad de un ave. Pelaje reluciente y poderosas alas blancas para volar con rapidez; crin y cola que fluyen como el viento; ojos de inteligencia y nobleza innatas. Irradia pureza y poder celestial; símbolo de esperanza y libertad.",
    imagen: "imgs/pegaso.png"
  },
  {
    nombre: "Ramidreju",
    categoria: "Categoría 1",
    fortalezas: "Encuentra cualquier tesoro sin importar su ocultación, gracias a su agudo sentido de ubicación. Pelaje con propiedades curativas que neutraliza alucinógenos y protege contra control mental. Excava galerías profundas para escapar o moverse bajo tierra con rapidez.",
    debilidades: "Muy pacífico; rara vez enfrenta enemigos y prefiere huir u ocultarse. Sólo encuentra tesoros o artefactos que se le han enseñado, limitando su uso sin guía. Fuerte sentido de comunidad; si se aísla o no se le atiende puede caer en depresión o autodestruirse.",
    dano_texto: "1D4 (Golpe)",
    ca: 16,
    vitalidad: 8,
    px: 250,
    movimiento: 6,
    dano_alcance: 1,
    localizacion: "Plano de ensueño; lugares apartados como bosques oscuros o montañas remotas donde puede excavar en paz.",
    alineamiento: "Neutral/Legal",
    descripcion: "Criatura extraordinaria que nace cada cien años; mezcla entre hurón y comadreja, más larga y ágil para moverse por galerías subterráneas. Pelaje con rayas verdes y negras; ojos amarillos intensos de apariencia mística. Famosa por excavar profundas galerías y por su pelaje con raras propiedades curativas. Puede localizar y traer cualquier tesoro que se le haya enseñado a encontrar; reacia a exponerse ante la sociedad.",
    imagen: "imgs/ramidreju.png"
  },
  {
    nombre: "Saetón",
    categoria: "Categoría 1",
    fortalezas: "Agilidad y rapidez en combate aéreo, capaz de esquivar bloqueos y sorprender desde distintos ángulos. Hipnotismo con la mirada que fascina o paraliza temporalmente. Puede transformar su cuerpo en diversas armas según la situación.",
    debilidades: "Vulnerable a magias elementales de hielo que ralentizan y afectan su agilidad. Tendencias suicidas que pueden llevarlo a actuar imprudentemente y poner en peligro a aliados. Atracción por el fuego, distrayéndolo del objetivo y exponiéndolo a riesgos adicionales.",
    dano_texto: "1D10",
    ca: 7,
    vitalidad: 8,
    px: 550,
    movimiento: 7,
    dano_alcance: 2,
    localizacion: "Plano terrenal; áreas boscosas y selváticas para camuflarse y acechar desde el aire; también zonas montañosas y ruinas antiguas.",
    alineamiento: "Neutral/Caótico",
    descripcion: "Serpiente larga y esbelta de oscuro color, capaz de serpentar por el aire con gracia y agilidad sorprendentes, lanzándose como una flecha contra enemigos. Ojos hipnóticos y fascinantes. Destaca su habilidad para modificar su cuerpo en una variedad de armas, otorgándole gran versatilidad táctica.",
    imagen: "imgs/saeton.png"
  }
];

try {
  localStorage.setItem('bestias', JSON.stringify(window.bestias));
} catch (_) {}
