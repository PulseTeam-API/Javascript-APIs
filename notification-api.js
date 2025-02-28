function createNotification({ title, message, duration }) {
    const maxCharsPerLine = 40;

    function splitTextIntoLines(text, maxChars) {
        const lines = [];
        for (let i = 0; i < text.length; i += maxChars) {
            lines.push(text.substring(i, i + maxChars));
        }
        return lines;
    }

    const notification = document.createElement('div');
    notification.style.position = 'fixed';
    notification.style.bottom = '20px';
    notification.style.right = '-400px';
    notification.style.backgroundColor = '#333';
    notification.style.color = '#fff';
    notification.style.padding = '20px';
    notification.style.borderRadius = '10px';
    notification.style.boxShadow = '0 0 15px rgba(0, 0, 0, 0.7)';
    notification.style.zIndex = '10000';
    notification.style.display = 'flex';
    notification.style.flexDirection = 'column';
    notification.style.alignItems = 'flex-start';
    notification.style.gap = '10px';
    notification.style.transition = 'right 0.5s ease-in-out';
    notification.style.width = '400px'; // Feste Breite
    notification.style.whiteSpace = 'pre-wrap'; // Erlaubt Zeilenumbrüche

    const titleElement = document.createElement('h3');
    titleElement.textContent = title;
    titleElement.style.margin = '0';
    titleElement.style.fontSize = '20px';
    titleElement.style.fontWeight = 'bold';
    notification.appendChild(titleElement);

    const lines = splitTextIntoLines(message, maxCharsPerLine);

    lines.forEach(line => {
        const lineElement = document.createElement('p');
        lineElement.textContent = line;
        lineElement.style.margin = '0';
        lineElement.style.fontSize = '16px';
        notification.appendChild(lineElement);
    });

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.right = '20px';
    }, 10);

    setTimeout(() => {
        notification.style.right = '-400px';
        setTimeout(() => {
            notification.remove();
        }, 500);
    }, duration);
}

console.log('%cNotification API made by PulseTeam', 'color: #ff4d36; font-size: 200%');

window.createNotification = createNotification;
