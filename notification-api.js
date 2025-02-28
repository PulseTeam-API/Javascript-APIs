// notification-api.js
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

    // Füge den Titel hinzu
    const titleElement = document.createElement('h3');
    titleElement.textContent = title;
    titleElement.style.margin = '0';
    notification.appendChild(titleElement);

    // Füge den Text hinzu
    const textElement = document.createElement('p');
    textElement.textContent = message;
    textElement.style.margin = '0';
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

// Gib eine Nachricht in der Konsole aus, sobald die API geladen wurde
console.log('%cNotification API made by PulseTeam', 'color: #ff4d36; font-size: 200%');

// Stelle die Funktion global zur Verfügung
window.createNotification = createNotification;
