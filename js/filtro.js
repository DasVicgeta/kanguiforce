document.getElementById('filterButton').addEventListener('click', function() {
    const filterContainer = document.getElementById('filterContainer');
    if (filterContainer.classList.contains('hidden')) {
        filterContainer.classList.remove('hidden');
        filterContainer.classList.add('show');
        this.textContent = 'Ocultar Filtros';
    } else {
        filterContainer.classList.remove('show');
        filterContainer.classList.add('hidden');
        this.textContent = 'Mostrar Filtros';
    }
});

document.getElementById('classFilter').addEventListener('change', function() {
    const selectedClass = this.value;
    const axieCards = document.querySelectorAll('.axie-card');

    axieCards.forEach(function(card) {
        if (selectedClass === 'all') {
            card.style.display = 'block';
        } else if (card.classList.contains(selectedClass)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});
