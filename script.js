function translateSite() {
    const elements = document.querySelectorAll('.translate');
    const langButton = document.querySelector('nav button.translate');
    const isEnglish = langButton.textContent.trim() === "EN";

    elements.forEach(element => {
        const ptText = element.getAttribute('data-pt');
        const enText = element.getAttribute('data-en');

        if (isEnglish) {
            element.textContent = ptText;
            if (element.placeholder) {
                element.placeholder = ptText;
            }
        } else {
            element.textContent = enText;
            if (element.placeholder) {
                element.placeholder = enText;
            }
        }
    });

    // Atualiza o texto do botão de idioma
    if (isEnglish) {
        langButton.textContent = "PT";
    } else {
        langButton.textContent = "EN";
    }
}

document.addEventListener('DOMContentLoaded', function() {
    translateSite();
});
