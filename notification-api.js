// notification-api.js
function createNotification({ title, message, duration }) {
    console.log('API-Datei wird geladen und ausgeführt.');
    const notification = document.createElement('div');
    notification.style.position = 'fixed';
    notification.style.bottom = '20px';
    notification.style.right = '-400px';
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
    notification.style.transition = 'right 0.5s ease-in-out';

    const titleElement = document.createElement('h3');
    titleElement.textContent = title;
    titleElement.style.margin = '0';
    notification.appendChild(titleElement);

    const textElement = document.createElement('p');
    textElement.textContent = message;
    textElement.style.margin = '0';
    notification.appendChild(textElement);

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
