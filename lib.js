function includeHeaderAndFooter() {
    let headerText = `
    <header>
        <nav>
            <ul class="left-menu">
                <li><a href="index.html"><img class="icon-home" src="resources/dragon.png" alt="Inicio"></a></li>
            </ul>
            <ul class="center-menu">
                <li><a href="cv.html">Curricúlo</a></li>
                <li><a href="portfolio.html">Portfólio</a></li>
            </ul>
        </nav>
    </header>
    `;
    let footerText =`
    <footer>
        <p>Feito por Paulo Abade. Todos os Direitos Reservados ©</p>
    </footer>
    `;

    let headerElement = document.createElement("div");
    let footerElement = document.createElement("div");
    headerElement.innerHTML = headerText;
    footerElement.innerHTML = footerText;
    document.body.prepend(headerElement.firstElementChild);
    document.body.appendChild(footerElement.firstElementChild);
}

document.addEventListener("DOMContentLoaded", function () {
    includeHeaderAndFooter();

    const carousel = document.querySelector('.carousel');
    const items = document.querySelectorAll('.carousel-item');
    let currentIndex = 0;

    function showItem(index) {
        const offset = -index * 100;
        carousel.style.transform = `translateX(${offset}%)`;
    }

    document.querySelector('.carousel-button.prev').addEventListener('click', function () {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : items.length - 1;
        showItem(currentIndex);
    });

    document.querySelector('.carousel-button.next').addEventListener('click', function () {
        currentIndex = (currentIndex < items.length - 1) ? currentIndex + 1 : 0;
        showItem(currentIndex);
    });

    // Inicializa o carrossel mostrando o primeiro item
    showItem(currentIndex);
});