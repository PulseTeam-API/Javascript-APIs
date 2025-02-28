// notification-api.js

// Funktion zur Erstellung der Benachrichtigung
function createNotification({ title, message, duration }) {
    // Erstelle das Benachrichtigungs-Element
    const notification = document.createElement('div');
    notification.style.position = 'fixed';
    notification.style.bottom = '20px';
    notification.style.right = '-400px'; // Startet außerhalb des Bildschirms
    notification.style.backgroundColor = '#333';
    notification.style.color = '#fff';
    notification.style.padding = '15px';
    notification.style.borderRadius = '5px';
    notification.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';
    notification.style.zIndex = '10000';
    notification.style.display = 'flex';
    notification.style.flexDirection = 'column';
    notification.style.alignItems = 'flex-start';
    notification.style.gap = '10px';
    notification.style.transition = 'right 0.5s ease-in-out'; // Gleit-Animation
    notification.style.maxWidth = '300px'; // Maximale Breite der Benachrichtigung
    notification.style.wordWrap = 'break-word'; // Text umbrechen, wenn er zu lang ist
    notification.style.whiteSpace = 'normal'; // Text in mehrere Zeilen umbrechen

    // Füge den Titel hinzu
    const titleElement = document.createElement('h3');
    titleElement.textContent = title;
    titleElement.style.margin = '0';
    titleElement.style.fontSize = '16px';
    titleElement.style.fontWeight = 'bold';
    notification.appendChild(titleElement);

    // Füge den Text hinzu
    const textElement = document.createElement('p');
    textElement.textContent = message;
    textElement.style.margin = '0';
    textElement.style.fontSize = '14px';
    notification.appendChild(textElement);

    // Füge die Benachrichtigung zum Dokument hinzu
    document.body.appendChild(notification);

    // Gleite die Benachrichtigung ins Bild
    setTimeout(() => {
        notification.style.right = '20px'; // Endposition
    }, 10); // Kurze Verzögerung, damit die Animation ausgelöst wird

    // Gleite die Benachrichtigung nach Ablauf der Zeit wieder hinaus
    setTimeout(() => {
        notification.style.right = '-400px'; // Zurück nach rechts außerhalb des Bildschirms
        setTimeout(() => {
            notification.remove(); // Entferne die Benachrichtigung nach der Animation
        }, 500); // Warte, bis die Animation abgeschlossen ist
    }, duration);
}

// Nachricht in der Konsole, sobald die API geladen wird
console.log('%cNotification API made by PulseTeam', 'color: #ff4d36; font-size: 200%');

// Stelle die Funktion global zur Verfügung
window.createNotification = createNotification;
