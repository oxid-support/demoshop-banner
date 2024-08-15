import { steps } from './steps.js';

document.addEventListener('DOMContentLoaded', function () {
    const demoshopBanner = document.getElementById('demoshop-banner');
    const acceptBtn = document.getElementById('accept-btn');
    const demoshopToggleBtn = document.getElementById('demoshop-toggle-btn');
    const closeBtn = document.getElementById('close-btn');
    const headerMessage = document.getElementById('header-message');
    const isDesktop = window.innerWidth >= 1024;

    const tg = new tourguide.TourGuideClient({
        steps: steps,
        completeOnFinish: true,
        exitOnClickOutside: false,
        progressBar: true,
        targetPadding: 20
    });

    // Funktion zum Ausblenden des Banners
    function hideDemoshopBanner() {
        demoshopBanner.style.display = 'none';
        demoshopToggleBtn.style.display = 'block';
        localStorage.setItem('cookieAccepted', 'true');
        closeBtn.style.display = 'block';
        document.documentElement.style.overflowY = 'auto';
        if (isDesktop) {
            if (!localStorage.getItem('tourCompleted') || localStorage.getItem('tourCompleted') === 'false') {
                tg.start('main').then(() => {
                    localStorage.setItem('tourCompleted', 'true');
                })
            }
        }
    }

    // Funktion zum Anzeigen des Banners
    function showDemoshopBanner() {
        demoshopBanner.style.display = 'block';
        demoshopToggleBtn.style.display = 'none';
        closeBtn.style.display = localStorage.getItem('cookieAccepted') ? 'block' : 'none';
        if (localStorage.getItem('b2b') || localStorage.getItem('b2b') === 'true') {
            headerMessage.innerHTML += ' B2B'
        }
        document.documentElement.style.overflowY = 'hidden';
    }


    // Event Listener für den Akzeptieren-Button
    acceptBtn.addEventListener('click', hideDemoshopBanner);

    // Event Listener für den Schließen-Button
    closeBtn.addEventListener('click', hideDemoshopBanner);

    // Event Listener für den Toggle-Button
    demoshopToggleBtn.addEventListener('click', showDemoshopBanner);

    document.head.insertAdjacentHTML("beforeend", "<style>.no-scroll { overflow: hidden; }</style>");

    const currentURL = window.location.href;
    const searchParams = window.location.search;
    const pathname = window.location.pathname;
    const elementExists = document.querySelector('[name="basketname"]') !== null;

    console.log('Current URL:', currentURL);
    console.log('Current Search Params:', searchParams);
    console.log('Current Pathname:', pathname);
    
    if (isDesktop) {
        switch (true) {
            case pathname.includes('/warenkorb') && !localStorage.getItem('basketCompleted'):
                console.log('Checking basket tour conditions...');
                if (!localStorage.getItem('b2b')) {
                    console.log('Starting ee basket tour...');
                    tg.start('eebasket').then(() => {
                        localStorage.setItem('basketCompleted', 'true');
                    });
                } else if (localStorage.getItem('b2b') && elementExists) {
                    console.log('Starting b2b basket tour...');
                    tg.start('basket').then(() => {
                        localStorage.setItem('basketCompleted', 'true');
                    });
                }
                break;

            case searchParams.includes('cl=b2bscheduledordersdetails') && !localStorage.getItem('scheduledCompleted'):
                console.log('Starting scheduled order details tour')
                tg.start('scheduledorders').then(() => {
                    localStorage.setItem('scheduledCompleted', 'true');
                });
                break;

            case searchParams.includes('cl=b2bbuyingagentdetails') && !localStorage.getItem('agentCompleted'):
                console.log('Starting buying agent details tour...');
                tg.start('agentdetails').then(() => {
                    localStorage.setItem('agentCompleted', 'true');
                });
                break;

            case searchParams.includes('cl=b2bquickorderdetails') && !localStorage.getItem('quickorderCompleted'):
                console.log('Starting quick order details tour...');
                tg.start('quickorder').then(() => {
                    localStorage.setItem('quickorderCompleted', 'true');
                });
                break;

            default:
                console.log('No matching tour found.');
                break;
        }
    } else {
        console.log('Device is not in desktop mode. Tour will not start.');
    }
});