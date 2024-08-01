export const steps = [
    // Main Steps
    {
        title: "Willkommen zur OXID eShop Features-Tour 👋",
        content: "Dies ist eine kurzer Rundgang um Ihnen zu zeigen, wo sich alles befindet.",
        target: undefined,
        order: 1,
        group: 'main'
    },
    {
        title: "Navigation",
        content: "Hier sehen Sie die Navigation mit verschiedenen Kategorien.",
        target: '#navigation',
        order: 2,
        group: 'main'
    },
    {
        title: "Frisch eingetroffen",
        content: "Es können mehrere Produkte unter einer bestimmten Aktion gelistet werden.",
        target: '.article-slider',
        order: 3,
        group: 'main'
    },
    {
        title: "Produkte",
        content: "Bewegen Sie den Mauszeiger über das Produkt und es erscheint der Button 'Zum Warenkorb'. Klicken Sie auf den Button, um das Produkt zum Warenkorb hinzuzufügen.",
        target: '.product-card',
        order: 4,
        group: 'main'
    },
    {
        title: "Suche",
        content: "Über die Suche können Sie nach Produkten suchen.",
        target: '#searchParam',
        order: 5,
        group: 'main'
    },
    {
        title: "Internationalisierung",
        content: "Über den Globus an dieser Stelle können sowohl Sprache als auch Währung ausgewählt werden.",
        target: '.dropdowns',
        order: 6,
        group: 'main'
    },
    {
        title: "Mein Konto",
        content: "Per Klick auf das Profilsymbol öffnet sich eine Möglichkeit zum einloggen oder man kann weitere Menüpunkte einsehen. Der Login für den Demoshop ist bereits vorausgefüllt. Login: test@test.com / Passwort: 1234",
        target: '[aria-label="Usercenter"]',
        order: 7,
        group: 'main'
    },
    {
        title: "Mein Merkzettel",
        content: "Hier können Sie sich die Produkte anschauen, die sie auf Ihre Merkliste gesetzt haben.",
        target: '[aria-label="Mein Merkzettel"]',
        order: 8,
        group: 'main'
    },
    {
        title: "Warenkorb",
        content: "Mit einem Klick auf das Einkaufswagensymbol öffnet sich der Miniwarenkorb. Wenn Sie bereits ein Produkt in den Warenkorb gelegt haben, haben Sie hier die Möglichkeit entweder zur Kasse zu gehen oder den Einkaufswagen zu betrachten.",
        target: '[data-bs-target="#basketModal"]',
        order: 9,
        group: 'main'
    },
    {
        title: "Demoshop Hinweise",
        content: "Sie können per Klick auf den Hinweis-Button jederzeit wieder die Startseite mit den Informationen zum Demoshop einsehen. Außerdem können Sie bei Bedarf die Tour wieder starten.",
        target: '#demoshop-toggle-btn',
        order: 10,
        group: 'main'
    },
    {
        title: "Ende der Tour",
        content: "Hiermit endet unsere Tour. Vielen Dank, dass Sie bis zum Ende der Tour dabei geblieben sind! Sie können gerne beliebig weiterstöbern. Viel Spaß!",
        target: undefined,
        order: 11,
        group: 'main'
    },
    // EE Basket Steps
    {
        title: "Unser Warenkorb",
        content: "Sie befinden sich aktuell im Warenkorb. Lassen Sie uns gemeinsam die wichtigsten Features zusammen anschauen.",
        target: undefined,
        order: 1,
        group: 'eebasket'
    },
    {
        title: "Gelistete Artikel",
        content: "Alle Artikel die in den Warenkorb gelegt wurden, werden hier aufgelistet. Sie können den Preis und sonstige Informationen zu den Artikeln sehen. Außerdem ist es möglich, die Menge beliebig anzupassen oder den Artikel aus dem Warenkorb zu entfernen.",
        target: '#basket_list',
        order: 5,
        group: 'eebasket'
    },
    {
        title: "Übersicht",
        content: "Auf der rechten Seite sieht man dann noch einmal den Preis der gesamten Bestellung, aufgelistet mit und ohne Mehrwertsteuer und eventuellen Versandkosten.",
        target: '.card.mb-3',
        order: 6,
        group: 'eebasket'
    },
    {
        title: "Gutscheine",
        content: "Hier hat man die Möglichkeit einen Gutschein einzugeben. Die Gutscheine können über die Administrationsoberfläche erstellt werden.",
        target: '[data-bs-target="#voucherCollapse"]',
        order: 7,
        group: 'eebasket'
    },
    {
        title: "Zur Kasse",
        content: "Mit Klick auf den Button 'Zur Kasse' können Sie dann den Warenkorb bezahlen.",
        target: getButtonCheckout('Zur Kasse'),
        order: 8,
        group: 'eebasket'
    },
    // B2B Basket Steps
    {
        title: "Unser Warenkorb",
        content: "Sie befinden sich aktuell im Warenkorb. Lassen Sie uns gemeinsam die wichtigsten Features zusammen anschauen.",
        target: undefined,
        order: 1,
        group: 'basket'
    },
    {
        title: "Warenkorb benennen",
        content: "Geben Sie dem Warenkorb einen Namen. Dies ist notwendig für einige B2B-Features. Falls kein Name vergeben wird, wird automatisch ein Name generiert.",
        target: '.col.col-md-12.mt-4',
        order: 2,
        group: 'basket'
    },
    {
        title: "Warenkorb exportieren",
        content: "Hier kann der Warenkorb exportiert werden. Die CSV-Datei, die im Anschluss generiert wird, kann dann unter dem Menüpunkt Bestelllisten importiert werden. Das erleichtert immer wiederkehrende Bestellungen, welche aber unregelmäßig ausgeführt werden.",
        target: getButtonWithText('Exportieren'),
        order: 3,
        group: 'basket'
    },
    {
        title: "Sammelbestellung",
        content: "Es ist möglich, mehrere Bestellungen auf eine schnelle und elegante Art zusammenzufassen. Dazu müssen Sie nur auf den Button 'Zur Sammelbestellung vormerken' klicken.",
        target: getButtonWithText('Zur Sammelbestellung vormerken'),
        order: 4,
        group: 'basket'
    },
    {
        title: "Gelistete Artikel",
        content: "Alle Artikel die in den Warenkorb gelegt wurden, werden hier aufgelistet. Sie können den Preis und sonstige Informationen zu den Artikeln sehen. Außerdem ist es möglich, die Menge beliebig anzupassen oder den Artikel aus dem Warenkorb zu entfernen.",
        target: '#basket_list',
        order: 5,
        group: 'basket'
    },
    {
        title: "Übersicht",
        content: "Auf der rechten Seite sieht man dann noch einmal den Preis der gesamten Bestellung, aufgelistet mit und ohne Mehrwertsteuer und eventuellen Versandkosten.",
        target: '.card.mb-3',
        order: 6,
        group: 'basket'
    },
    {
        title: "Gutscheine",
        content: "Hier hat man die Möglichkeit einen Gutschein einzugeben. Die Gutscheine können über die Administrationsoberfläche erstellt werden.",
        target: '[data-bs-target="#voucherCollapse"]',
        order: 7,
        group: 'basket'
    },
    {
        title: "Zur Kasse",
        content: "Mit Klick auf den Button 'Zur Kasse' können Sie dann den Warenkorb bezahlen.",
        target: getButtonCheckout('Zur Kasse'),
        order: 8,
        group: 'basket'
    },
    {
        title: "Terminbestellung",
        content: "Die Terminbestellung ist ein weiteres B2B-Feature. Damit kann man automatisiert etwas bestellen lassen. Sowohl einmalig als auch in einem bestimmten Intervall.",
        target: getButtonScheduled('Erstelle Terminbestellung'),
        order: 9,
        group: 'basket'
    },
    {
        title: "Ende der Tour",
        content: "Das war's mit dem Warenkorb. Wir wünschen Ihnen viel Spaß bei einer Testbestellung.",
        target: undefined,
        order: 10,
        group: 'basket'
    },
    // Scheduled Order Steps
    {
        title: "Wilkommen zur Terminbestellung",
        content: "Mit der Terminbestellung können Sie automatisch Bestellungen zu einem bestimmten Termin durchführen lassen. Dies ist nützlich bei regelmäßig wiederkehrerenden Bestellungen oder falls Sie zu dem Zeitpunkt, wann ein Warenkorb bestellt werden soll, die Bestellung nicht selbst durchführen können.",
        target: undefined,
        order: 1,
        group: 'scheduledorders'
    },
    {
        title: "Name des Warenkorbs",
        content: "Ganz oben sehen Sie den Namen des Warenkorbs.",
        target: 'h2',
        order: 2,
        group: 'scheduledorders'
    },
    {
        title: "Warenkorbübersicht",
        content: "Der gesamte Inhalt des Warenkorbs inklusive Preiskalkulation wird hier nochmals aufgelistet.",
        target: '[name="basket"]',
        order: 3,
        group: 'scheduledorders'
    },
    {
        title: "Herunterladen des Warenkorbs",
        content: "Mit Klick auf 'Herunterladen' kann der Warenkorb exportiert werden. Die Datei können Sie an anderer Stelle zur Schnellbestellung wieder importieren.",
        target: '[name="downloadBasket"]',
        order: 4,
        group: 'scheduledorders'
    },
    {
        title: "Name des Warenkorbs ändern",
        content: "An dieser Stelle können Sie den Namen des Warenkorbs ändern.",
        target: '[name="b2bname"]',
        order: 5,
        group: 'scheduledorders'
    },
    {
        title: "Datum der Ausführung",
        content: "Geben Sie das Datum an, an welchem die Bestellung ausgeführt werden soll.",
        target: '[name="b2bdatum"]',
        order: 6,
        group: 'scheduledorders'
    },
    {
        title: "Einmalige Ausführung oder regelmäßige Bestellung?",
        content: "Es gibt die Möglichkeit zwischen einer einmaligen Ausführung oder einer täglichen, wöchentlichen, monatlichen oder jährlichen Bestellung auszuwählen.",
        target: '[name="cycle"]',
        order: 7,
        group: 'scheduledorders'
    },
    {
        title: "Preisanpassungen",
        content: "Man kann einen maximalen Warenkorbbetrag freigeben. Wird inzwischen der Preis von Artikeln geändert und der Warenkorb überschreitet den festgelegten Maximalbetrag, dann wird die Bestellung nicht ausgeführt.",
        target: '[name="b2bbudgetmax"]',
        order: 8,
        group: 'scheduledorders'
    },
    {
        title: "Merkliste",
        content: "Setzen Sie hier den Haken, wenn Sie die Terminbestellung pausieren wollen. In dem Fall wird keine automatische Bestellung erfolgen. Sie können Ihre Vorlage aber jederzeit wieder verwenden.",
        target: '[name="b2bnotification"]',
        order: 9,
        group: 'scheduledorders'
    },
    {
        title: "Rechnungsadresse auf einen Blick",
        content: "Hier wird noch einmal die vollständige Rechnungsadresse angezeigt.",
        target: '.card.card-lg',
        order: 10,
        group: 'scheduledorders'
    },
    {
        title: "Den Auftrag aktivieren",
        content: "Mit Klick auf den Button aktivieren Sie Ihre Terminbestellung und die Bestellung wird am gewünschten Datum ausgeführt.",
        target: '[name="b2bActivateNowAction"]',
        order: 11,
        group: 'scheduledorders'
    },
    {
        title: "Das war's.",
        content: "Das war's dann auch schon. Viel Spaß beim anlegen!",
        target: undefined,
        order: 12,
        group: 'scheduledorders'
    },
    // Buying Agent Details
    {
        title: "Einkäufer verwalten",
        content: "Sie können als Chefeinkäufer Ihrem Untereinkäufer für das Genehemigungsverfahren einrichten oder ihm ein Budget zuweisen. Außerdem können Sie die Historie seines Bestellvolumens einsehen.",
        target: undefined,
        order: 1,
        group: 'agentdetails'
    },
    {
        title: "Name des Einkäufers",
        content: "Hier sehen Sie, um welchen Einkäufer es sich handelt.",
        target: '.page-header.col.pl-0.ml-3',
        order: 2,
        group: 'agentdetails'
    },
    {
        title: "Benutzerrechte",
        content: "Erlauben Sie Ihrem Einkäufer zu bestellen oder aktivieren Sie das Genehmigungsverfahren für ihn.",
        target: '.card-body',
        order: 3,
        group: 'agentdetails'
    },
    {
        title: "Budget festlegen",
        content: "Sie können Ihrem Einkäufer ein Budget zuweisen. Dabei wird in Jahresbudget, Monatsbudget, Wochenbudget und Tagesbudget unterschieden. Außerdem kann man auch ein maximales Budget pro Bestellung vergeben.",
        target: '.card card-lg',
        order: 4,
        group: 'agentdetails'
    },
    {
        title: "Budget festlegen",
        content: "An dieser Stellen können Sie die Historie Ihres Einkäufers einsehen.",
        target: '.col mb-5',
        order: 5,
        group: 'agentdetails'
    },
    {
        title: "Ende der Tour",
        content: "Das war's zu den Einstellungen zu Ihrem Einkäufer. Probieren Sie es doch gleich mal aus.",
        target: undefined,
        order: 6,
        group: 'agentdetails'
    },
    // Quick Order Details
    {
        title: "Bestelllisten nutzen",
        content: "Wenn Sie unregelmäßig wiederkehrende Bestellungen haben, dann nutzen Sie Bestelllisten um schnell und leicht die Produkte in den Warenkorb zu legen.",
        target: undefined,
        order: 1,
        group: 'quickorder'
    },
    {
        title: "Bestellliste auswählen",
        content: "Es kann eine zuvor exportierte Bestellliste hier hochgeladen werden. Die Produkte werden dann alle weiter unten gelistet.",
        target: '[name="userfile"]',
        order: 2,
        group: 'quickorder'
    },
    {
        title: "Bestellliste importieren",
        content: "Per Klick auf den Button 'Bestellliste importieren' wird dann die Bestellliste hochgeladen und importiert.",
        target: '.btn.btn-outline-primary.slide-right',
        order: 3,
        group: 'quickorder'
    },
    {
        title: "Artikel hinzufügen",
        content: "Hier können Artikel der Artikelliste hinzugefügt werden. Man gibt einfach die Bezeichnung eines Artikels ein und gibt eine Anzahl an.",
        target: '#csveingabe',
        order: 4,
        group: 'quickorder'
    },
    {
        title: "Name der Liste",
        content: "Um die Liste zu erstellen, muss ihr noch ein Name gegeben werden.",
        target: '#orderListTitle',
        order: 5,
        group: 'quickorder'
    },
    {
        title: "Aktualisieren",
        content: "Sie müssen auf den Button 'Aktualisieren' klicken. Dann werden darunter die Artikel gelistet.",
        target: '#updatebutton',
        order: 6,
        group: 'quickorder'
    },
    {
        title: "Angebotsanfrage",
        content: "Für die Artikel der Bestellliste kann eine Angebotsanfrage gestellt werden. Über diese Funktion kann man einen neuen Preis verhandeln.",
        target: '#b2bsendoffer',
        order: 7,
        group: 'quickorder'
    },
    {
        title: "Ende der Tour",
        content: "Das war's. Sie können jetzt gerne Ihre erste Bestellliste anlegen.",
        target: undefined,
        order: 8,
        group: 'quickorder'
    },
];

// Funktion, um den Button basierend auf Textinhalt zu finden
function getButtonWithText(text) {
    const buttons = document.querySelectorAll('.btn.btn-outline-primary.w-100');
    for (let button of buttons) {
        if (button.textContent.trim() === text) {
            return button;
        }
    }
    return null;
}

function getButtonCheckout(text) {
    const buttons = document.querySelectorAll('.btn.btn-highlight.btn-lg.w-100');
    for (let button of buttons) {
        if (button.textContent.trim() === text) {
            return button;
        }
    }
    return null;
}

function getButtonScheduled(text) {
    const buttons = document.querySelectorAll('.btn.btn-outline-primary.mt-3.w-100');
    for (let button of buttons) {
        if (button.textContent.trim() === text) {
            return button;
        }
    }
    return null;
}

export default steps;