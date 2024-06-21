document.addEventListener('DOMContentLoaded', function () {
    const demoshopBanner = document.getElementById('demoshop-banner');
    const acceptBtn = document.getElementById('accept-btn');
    const demoshopToggleBtn = document.getElementById('demoshop-toggle-btn');
    const closeBtn = document.getElementById('close-btn');

    // Funktion zum Ausblenden des Banners
    function hideDemoshopBanner() {
        demoshopBanner.style.display = 'none';
        demoshopToggleBtn.style.display = 'block';
        localStorage.setItem('cookieAccepted', 'true');
        closeBtn.style.display = 'block';
        document.documentElement.style.overflowY = 'auto';
    }

    // Funktion zum Anzeigen des Banners
    function showDemoshopBanner() {
        demoshopBanner.style.display = 'block';
        demoshopToggleBtn.style.display = 'none';
        closeBtn.style.display = localStorage.getItem('cookieAccepted') ? 'block' : 'none';
        document.documentElement.style.overflowY = 'hidden';
    }


    // Event Listener für den Akzeptieren-Button
    acceptBtn.addEventListener('click', hideDemoshopBanner);

    // Event Listener für den Schließen-Button
    closeBtn.addEventListener('click', hideDemoshopBanner);

    // Event Listener für den Toggle-Button
    demoshopToggleBtn.addEventListener('click', showDemoshopBanner);

    document.head.insertAdjacentHTML("beforeend", "<style>.no-scroll { overflow: hidden; }</style>");
});
