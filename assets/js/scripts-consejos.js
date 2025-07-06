$(document).ready(function() {
    $('#form-contacto').on('submit', function(event) {
        event.preventDefault();

        if(!form_valido()){
            $(this).add('was-validated');
        } else {
            form_enviado();
        }
    });

    $('#nombre-input').on('input', function() {
        validar_nombre();
    });

    $('#email-input').on('input', function() {
        validar_email();
    });

    $('#mensaje-area').on('input', function() {
        validar_mensaje();
    });

    $('.alert.alert-success button').on('click', function() {
        limpiar_formulario();
    });

    $('#test').on('show.bs.modal', function() {
        const responder = $('#responder');
        respuestas_correctas = 0;

        responder.text('Enviar Respuesta');
        responder.removeAttr('data-bs-dismiss');
        
        cargar_pregunta(0);
    });

    $('#responder').on('click', function() {
        let correcta = $('input[name="respuesta"]:checked').val();
        
        if(correcta == 'true') respuestas_correctas++;

        cargar_pregunta(Number($(this).attr('data-index')));  
    });
});

function form_valido() {
    v_nombre = validar_nombre();
    v_email = validar_email();
    v_mensaje = validar_mensaje();

    if(v_nombre && v_email && v_mensaje){
        return true;
    }
        
    return false;
};

function validar_nombre() {
    const nombre = $('#nombre-input').val().trim();
    
    if(nombre === ''){
        $('#error-nombre').text("* Campo Obligatotio");
        $('#nombre-input').addClass('is-invalid');
        return false;
    }
    
    if (nombre.length < 2){
        $('#error-nombre').text('* El nombre debe tener al menos 2 caracteres');
        $('#nombre-input').addClass('is-invalid');
        return false;
    }

    if (nombre.length > 50){
        $('#error-nombre').text('* El nombre no puede tener mas de 40 caracteres');
        $('#nombre-input').addClass('is-invalid');
        return false;
    }

    // Validar que solo contenga letras, espacios y algunos caracteres especiales
    const patron_nombre = /^[a-zA-ZáéíóúüñÁÉÍÓÚÜÑ\s'-]+$/;
    if (!patron_nombre.test(nombre)){
        $('#error-nombre').text('* El nombre solo puede contener letras, espacios, apostrofes y guiones');
        $('#nombre-input').addClass('is-invalid');
        return false;
    }

    $('#nombre-input').addClass('is-valid');
    $('#nombre-input').removeClass('is-invalid');
    return true;
}

function validar_email() {
    const email = $('#email-input').val().trim();

    if (email === '') {
        $('#error-email').text("* Campo Obligatotio");
        $('#email-input').addClass('is-invalid');
        return false;
    }
    
    // Patrón para validar email
    const patron_email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!patron_email.test(email)) {
        $('#error-email').text("* Email no tiene un formato valido ej: tuemail@ejemplo.com");
        $('#email-input').addClass('is-invalid');
        return false;
    }
        
    $('#email-input').addClass('is-valid');
    $('#email-input').removeClass('is-invalid');
    return true;
}

function validar_mensaje() {
    const mensaje = $('#mensaje-area').val().trim();

    if (mensaje === '') {
        $('#error-mensaje').text("* Campo Obligatotio");
        $('#mensaje-area').addClass('is-invalid');
        return false;
    }
        
    $('#mensaje-area').addClass('is-valid');
    $('#mensaje-area').removeClass('is-invalid');
    return true;
}

function limpiar_formulario() {
    $('#form-contacto .is-valid').removeClass('is-valid');
    $('#form-contacto input').val("");
    $('#form-contacto input').attr('readonly', false);
    $('#form-contacto textarea').val("");
    $('#form-contacto textarea').attr('readonly', false);
    $('.alert.alert-success').addClass('d-none');
}

function form_enviado() {
    $('#form-contacto input').attr('readonly', true);
    $('#form-contacto textarea').attr('readonly', true);
    $('.alert.alert-success').removeClass('d-none');
}

function cargar_pregunta(index) {
    const responder = $('#responder');
    const enunciado =$('#pregunta');

    let contenido = '';
    
    if(index < preguntas.length){
        const pregunta = preguntas[index];
        const alternativas = pregunta.alternativas;
        
        enunciado.text(pregunta.enunciado);
        
        alternativas.forEach((alternativa, contador) =>{
            contenido += `
                <div class="form-check my-4">
                    <input class="form-check-input" type="radio" name="respuesta" value="${alternativa.correcta}">
                    <label class="form-check-label" for="alternativa${index+1}${contador+1}">
                        ${alternativa.enunciado}
                    </label>
                </div>`
        });

        $('#alternativas').html(contenido);
        responder.attr('data-index', index + 1);

    } else {
        if (respuestas_correctas == preguntas.length){
            contenido = "Puntaje Perfecto, Felicitaciones!!!";
        } else {
            contenido = "Informate he intentalo nuevamente, tu puedes mejorar!!!";
        }

        enunciado.text("Resultados:");
        $('#alternativas').html(`
            <p>
                Correctas: ${respuestas_correctas} / ${preguntas.length}
            </p>
            <p class="text-center mt-5 fw-bold">
                ${contenido}
            </p>`
        );
        
        responder.text('Cerrar');
        responder.attr('data-bs-dismiss', 'modal');
    }
}