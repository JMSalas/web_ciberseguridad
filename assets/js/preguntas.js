let enunciado = "¿Cuál de las siguientes es una buena práctica para crear una contraseña segura?"
let texto_a1 = "Crear una contraseña larga que combine letras mayúsculas y minúsculas, números y símbolos."
let texto_a2 = "Usar tu fecha de nacimiento o nombre de tu mascota."
let texto_a3 = "Reutilizar la misma contraseña para todas tus cuentas."

let alternativa1 = new Alternativa(texto_a1, true);
let alternativa2 = new Alternativa(texto_a2, false);
let alternativa3 = new Alternativa(texto_a3, false);

const pregunta1 = new Pregunta(enunciado, [alternativa1, alternativa2, alternativa3]);

enunciado = "¿Es seguro hacer clic en enlaces sospechosos si provienen de un amigo conocido?"
texto_a1 = "Si."
texto_a2 = "No."

alternativa1 = new Alternativa(texto_a1, false);
alternativa2 = new Alternativa(texto_a2, true);

const pregunta2 = new Pregunta(enunciado, [alternativa1, alternativa2]);

enunciado = "¿Qué medida de seguridad adicional deberías habilitar siempre que sea posible para proteger tus cuentas en línea?"
texto_a1 = "Compartir tus contraseñas con amigos y familiares de confianza."
texto_a2 = "Desactivar las notificaciones de seguridad por correo electrónico."
texto_a3 = "Utilizar la autenticación de dos factores (2FA)."

alternativa1 = new Alternativa(texto_a1, false);
alternativa2 = new Alternativa(texto_a2, false);
alternativa3 = new Alternativa(texto_a3, true);

const pregunta3 = new Pregunta(enunciado, [alternativa1, alternativa2, alternativa3]);

const preguntas = [pregunta1, pregunta2, pregunta3];

let respuestas_correctas;

function Pregunta(enunciado,alternativas) {
    this.enunciado = enunciado;
    this.alternativas = alternativas;
}

function Alternativa(enunciado,correcta) {
    this.enunciado = enunciado;
    this.correcta = correcta;
}