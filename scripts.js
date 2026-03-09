function logMessage(message) {
  const consoleBox = document.getElementById('console-box');
  if (!consoleBox) return;
  const messageElement = document.createElement('p');
  messageElement.textContent = message;
  consoleBox.appendChild(messageElement);
  consoleBox.scrollTop = consoleBox.scrollHeight;
}

document.addEventListener('DOMContentLoaded', () => {
  const userName = document.getElementById('user-name');
  const userEmail = document.getElementById('user-email');
  const userCurrency = document.getElementById('user-currency');
  const signOutBtn = document.getElementById('signOutBtn');

  if (userName) userName.textContent = 'Guest';
  if (userEmail) userEmail.textContent = 'No login';
  if (userCurrency) userCurrency.textContent = localStorage.getItem('currency') || '100';

  if (signOutBtn) {
    signOutBtn.textContent = 'Back Home';
    signOutBtn.addEventListener('click', () => {
      window.location.href = 'index.html';
    });
  }

  logMessage('Auth removed. Running in guest mode.');
});

const darkModeToggle = document.getElementById('darkModeToggle');
if (darkModeToggle) {
  darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    const icon = document.getElementById('darkModeIcon');
    const isDarkMode = document.body.classList.contains('dark');
    if (icon) icon.textContent = isDarkMode ? '🌙' : '☀️';
    logMessage(`Dark mode ${isDarkMode ? 'enabled' : 'disabled'}.`);
  });
}
