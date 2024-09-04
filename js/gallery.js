document.addEventListener('DOMContentLoaded', function() {
    const axieCards = document.querySelectorAll('.axie-card');

    axieCards.forEach(axie => {
        axie.addEventListener('click', function() {
            const axieId = axie.getAttribute('data-id');
            const axieClass = axie.getAttribute('data-class');
            const axieTime = axie.getAttribute('data-axie');
            const axieCards = axie.getAttribute('data-cards').split(',');

            // Generar la URL con los parámetros
            const queryString = `?id=${axieId}&class=${axieClass}&axie=${axieTime}&cards=${axieCards.join(',')}`;
            window.open(`details.html${queryString}`, '_blank');
        });
    });
});
