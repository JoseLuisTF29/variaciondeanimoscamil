// Frases motivadoras por estado de ánimo
const frases = {
    'Feliz': [
        'La felicidad no es un destino, sino una forma de viajar. Aprecia cada momento y celebra las pequeñas cosas de la vida.',
        'La alegría se encuentra en la simplicidad de lo cotidiano. Encuentra belleza en los detalles y deja que iluminen tu camino.',
        'Ser feliz es una elección que hacemos cada día. Rodéate de amor y gratitud, y verás cómo florece tu espíritu.',
        'La felicidad compartida es doble felicidad. Disfruta de los momentos con quienes amas; ellos son el verdadero tesoro de la vida.',
        'Cada rayo de sol trae consigo la promesa de un nuevo comienzo. Aprovecha cada día para crear recuerdos que calienten tu corazón.',
        'La verdadera felicidad nace del interior. Cultiva la paz y el amor en tu corazón, y verás cómo se reflejan en el mundo que te rodea.',
    ],
    'Estresada': [
        'La vida está llena de presiones, pero recuerda que tu bienestar es lo primero. Respira profundamente y busca la calma en el caos.',
        'El estrés es como una niebla densa; puede ser abrumador, pero con el tiempo, se disipará. Permítete encontrar claridad en medio de la confusión.',
        'En momentos de tensión, date permiso para pausar y reflexionar. Cada paso lento puede llevarte hacia la paz que buscas.',
        'Las dificultades son temporales. Mantén tu mente enfocada en el presente y busca las lecciones en cada desafío.',
        'Recuerda que el estrés puede ser un maestro disfrazado. Aprender a manejarlo es una herramienta valiosa en tu crecimiento personal.',
        'Cada día trae nuevas oportunidades. Permítete soltar lo que no puedes controlar y enfócate en lo que realmente importa.',
    ],
    'Ansiosa': [
        'La ansiedad puede ser una sombra pesada, pero recuerda que siempre hay luz al final del túnel. Busca la paz dentro de ti mismo.',
        'Tus pensamientos pueden ser turbulentos, pero la calma siempre está a tu alcance. Enfócate en el momento presente y abraza la serenidad.',
        'La vida está llena de incertidumbres, y está bien no tener todas las respuestas. Confía en tu capacidad para enfrentar lo que venga.',
        'La ansiedad puede enseñarte sobre tu fortaleza. Permítete sentir y luego transforma ese sentimiento en acción positiva.',
        'Cada vez que sientas ansiedad, recuerda que es solo un momento, no un destino. Encuentra consuelo en la conexión con quienes te rodean.',
        'Las preocupaciones son como olas; pueden ser abrumadoras, pero siempre pasan. Mantén tu mirada en la costa y busca tu equilibrio.',
    ],
    'Vulnerable': [
        'La vulnerabilidad es la esencia de la conexión humana. No temas mostrarte tal como eres; en tu autenticidad hay una belleza única.',
        'Permitir que otros vean tu verdadero yo es un acto de valentía. La vulnerabilidad crea lazos más profundos y significativos.',
        'Cada emoción que sientes es válida. Deja que tu vulnerabilidad te guíe hacia la comprensión y el amor por ti misma.',
        'La verdadera fortaleza se encuentra en la apertura. Al compartir tus luchas, inspiras a otros a hacer lo mismo.',
        'No estás sola en tus batallas; todos enfrentamos momentos de vulnerabilidad. Busca apoyo y construye puentes con quienes te rodean.',
        'La vulnerabilidad te conecta con el mundo de una manera hermosa. Permítete ser vista y experimenta la libertad de ser tú misma.',
    ],
    'Triste': [
        'La tristeza es un viaje que todos emprendemos en algún momento. Permítete sentirla, porque cada lágrima que cae es una forma de sanación.',
        'En los días oscuros, recuerda que la luz siempre regresa. La tristeza es solo un capítulo en la historia de tu vida.',
        'Hablar sobre tu tristeza puede ser liberador. No estás sola; compartir tus sentimientos te acerca a quienes te quieren.',
        'La tristeza puede ser una maestra sabia. Reflexiona sobre lo que has aprendido y permite que te guíe hacia un futuro más brillante.',
        'El dolor que sientes hoy es un recordatorio de que eres humano. Cada emoción tiene su lugar en el viaje de la vida.',
        'En el silencio de la tristeza, busca las pequeñas luces que te rodean. Cada conexión significativa puede iluminar incluso los días más grises.',
    ],
    'Enojada': [
        'El enojo es una emoción poderosa que te muestra lo que necesita cambiar en tu vida. Escúchalo y utiliza esa energía para el crecimiento.',
        'Tus emociones son válidas y merecen ser expresadas. El enojo puede ser un catalizador para la transformación personal si se maneja sabiamente.',
        'Reflexiona sobre el origen de tu enojo. La autoconciencia te ayudará a transformar esos sentimientos en acciones constructivas.',
        'No temas comunicar tus sentimientos. Hablar con claridad puede liberar la tensión que llevas dentro y facilitar la resolución.',
        'A veces, el silencio puede ser más poderoso que las palabras. Tómate un tiempo para calmarte y luego aborda la situación con serenidad.',
        'Tus emociones son un reflejo de tus valores. Permítete sentir y luego transforma ese enojo en acciones que promuevan la paz.',
    ]
};

// Función para guardar el estado de ánimo y mostrar la frase
function guardarAnimo(animo) {
    if (!frases[animo]) {
        console.error("Estado de ánimo no válido");
        return;
    }
    
    const descripcion = `Hoy te sientes ${animo.toLowerCase()}.`;
    const fraseMotivadora = frases[animo][Math.floor(Math.random() * frases[animo].length)];
    
    document.getElementById('descripcionAnimo').innerText = descripcion;

    // Cambia el color de fondo según el estado de ánimo
    document.body.className = animo.toLowerCase();

    // Animación al cambiar la frase
    const fraseElement = document.getElementById('fraseMotivadora');
    fraseElement.style.opacity = 0; // Desvanecer
    setTimeout(() => {
        fraseElement.innerText = fraseMotivadora;
        fraseElement.style.opacity = 1; // Aparecer
    }, 300); // Tiempo de desvanecimiento
}

function cargarMensaje() {
    // Oculta el contenedor de mensaje
    document.getElementById("mensajeContainer").style.display = "none";
    
    // Muestra el contenedor cargado
    const mensajeCargado = document.getElementById("mensajeCargado");
    mensajeCargado.style.display = "block";

    // Inicia la barra de carga
    const barraCarga = document.getElementById("barraCarga");
    barraCarga.style.width = "0%"; // Resetea la barra
    let carga = 0;

    const intervalo = setInterval(() => {
        carga += 10; // Aumenta el progreso
        barraCarga.style.width = carga + "%";

        if (carga >= 100) {
            clearInterval(intervalo); // Detiene la carga
            document.getElementById("enviado").style.display = "block"; // Muestra "¡Enviado!"
            document.getElementById("buenasVibras").style.display = "block"; // Muestra el mensaje de buenas vibras
        }
    }, 200); // Cambia el tiempo si quieres que cargue más rápido o lento
}


function enviarMensaje() {
    // Redirigir a la URL
    window.open("https://hug.doneber.dev/hug/P3RvPUNhbWlsYSZtc2djPSVGMCU5RiU5MiU5QlF1ZStUZW5nYXMrdW4rSGVybW9zbytEaWElMjElRjAlOUYlOTIlOUIlMEElMEEmaW1nSWQ9ODc2YjZhNTgmc29uZ0lkPTE=/main", "_blank");
}
