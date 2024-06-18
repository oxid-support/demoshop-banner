document.addEventListener('DOMContentLoaded', function () {
    const demoshopBanner = document.getElementById('demoshop-banner');
    const acceptBtn = document.getElementById('accept-btn');
    const demoshopToggleBtn = document.getElementById('demoshop-toggle-btn');
    const overlay = document.getElementById('overlay');
    const closeBtn = document.getElementById('close-btn');

    // Funktion zum Ausblenden des Banners
    function hideDemoshopBanner() {
        demoshopBanner.style.display = 'none';
        overlay.style.display = 'none';
        demoshopToggleBtn.style.display = 'block';
        localStorage.setItem('cookieAccepted', 'true');
        closeBtn.style.display = 'block';
    }

    // Funktion zum Anzeigen des Banners
    function showDemoshopBanner() {
        demoshopBanner.style.display = 'block';
        overlay.style.display = 'block';
        demoshopToggleBtn.style.display = 'none';
    }

    // Überprüfen, ob der Benutzer bereits zugestimmt hat
    if (localStorage.getItem('cookieAccepted') === 'true') {
        demoshopBanner.style.display = 'none';
        demoshopToggleBtn.style.display = 'block';
        closeBtn.style.display = 'block';
    } else {
        showDemoshopBanner();
    }

    // Event Listener für den Akzeptieren-Button
    acceptBtn.addEventListener('click', hideDemoshopBanner);

    // Event Listener für den Schließen-Button
    closeBtn.addEventListener('click', hideDemoshopBanner);

    // Event Listener für den Toggle-Button
    demoshopToggleBtn.addEventListener('click', showDemoshopBanner);
});
