function includeHeaderAndFooter() {
    let headerText = `
    <header>
        <nav>
            <ul>
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

document.addEventListener("DOMContentLoaded", includeHeaderAndFooter);