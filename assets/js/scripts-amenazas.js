const cantidad_items = $('.carousel-item').length;

$('#prev').on('click', function() {
    modificar_accordion(-1, cantidad_items);
});

$('#next').on('click', function() {
    modificar_accordion(1, cantidad_items);
});

$('.accordion-button').on('click', function() {
    const accordion_button = $(this)
    const id = accordion_button.parent().parent().attr('data-id-accordion');
    
    $('.carousel-item.active').removeClass('active');
    $(`[data-id-carousel="${id}"]`).addClass('active');
});




function modificar_accordion(incremento, cantidad) {
    const carousel_active = $('.carousel-item.active');
    const id_active = $(carousel_active).attr('data-id-carousel');

    let id_nueva = Number(id_active) + incremento;


    if (id_nueva <= 0) {
        id_nueva = cantidad;
    }
    
    if (id_nueva > cantidad) {
        id_nueva = 1;
    }

    $(`[data-id-accordion="${id_active}"] .accordion-collapse`).removeClass('show');
    $(`[data-id-accordion="${id_active}"] button`).addClass('collapsed');

    $(`[data-id-accordion="${id_nueva}"] .accordion-collapse`).addClass('show');
    $(`[data-id-accordion="${id_nueva}"] button`).removeClass('collapsed');
}
