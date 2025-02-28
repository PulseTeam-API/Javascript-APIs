// notification-api.js

// Funktion zur Erstellung der Benachrichtigung
function createNotification({ title, message, duration }) {
    // Maximales Zeichenlimit pro Zeile
    const maxCharsPerLine = 40; // Erhöht, um mehr Text pro Zeile zu ermöglichen

    // Funktion, um den Text in Zeilen mit maximaler Zeichenanzahl aufzuteilen
    function splitTextIntoLines(text, maxChars) {
        const lines = [];
        for (let i = 0; i < text.length; i += maxChars) {
            lines.push(text.substring(i, i + maxChars));
        }
        return lines;
    }

    // Erstelle das Benachrichtigungs-Element
    const notification = document.createElement('div');
    notification.style.position = 'fixed';
    notification.style.bottom = '20px';
    notification.style.right = '-400px'; // Startet außerhalb des Bildschirms
    notification.style.backgroundColor = '#333';
    notification.style.color = '#fff';
    notification.style.padding = '20px'; // Mehr Padding
    notification.style.borderRadius = '10px'; // Größere abgerundete Ecken
    notification.style.boxShadow = '0 0 15px rgba(0, 0, 0, 0.7)'; // Stärkerer Schatten
    notification.style.zIndex = '10000';
    notification.style.display = 'flex';
    notification.style.flexDirection = 'column';
    notification.style.alignItems = 'flex-start';
    notification.style.gap = '10px'; // Größerer Abstand zwischen den Zeilen
    notification.style.transition = 'right 0.5s ease-in-out'; // Gleit-Animation
    notification.style.maxWidth = '400px'; // Größere maximale Breite der Benachrichtigung

    // Füge den Titel hinzu
    const titleElement = document.createElement('h3');
    titleElement.textContent = title;
    titleElement.style.margin = '0';
    titleElement.style.fontSize = '20px'; // Größere Schriftgröße
    titleElement.style.fontWeight = 'bold';
    notification.appendChild(titleElement);

    // Teile den Nachrichtentext in Zeilen auf
    const lines = splitTextIntoLines(message, maxCharsPerLine);

    // Füge jede Zeile als separates <p>-Element hinzu
    lines.forEach(line => {
        const lineElement = document.createElement('p');
        lineElement.textContent = line;
        lineElement.style.margin = '0';
        lineElement.style.fontSize = '16px'; // Größere Schriftgröße
        notification.appendChild(lineElement);
    });

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
