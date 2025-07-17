document.querySelectorAll('header .navbar a').forEach(anchor => {
    anchor.addEventListener('click', e => {
        e.preventDefault();
        document.querySelector(anchor.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
});

document.getElementById('reservation-form').addEventListener('submit', e => {
    e.preventDefault();
    alert('Thank you for your reservation! We will contact you shortly.');
    e.target.reset();
});

const chatboxIcon = document.getElementById('chatboxIcon');
const chatboxContainer = document.getElementById('chatboxContainer');
const closeChatbox = document.getElementById('closeChatbox');

chatboxIcon.addEventListener('click', () => {
    chatboxContainer.style.display = 'flex';
    chatboxIcon.style.display = 'none';
});

closeChatbox.addEventListener('click', () => {
    chatboxContainer.style.display = 'none';
    chatboxIcon.style.display = 'flex';
});

document.getElementById('chatboxForm').addEventListener('submit', e => {
    e.preventDefault();
    const chatboxMessages = document.getElementById('chatboxMessages');
    const message = document.getElementById('chatboxInput').value.trim();

    if (message) {
        const msgElement = document.createElement('p');
        msgElement.textContent = message;
        chatboxMessages.appendChild(msgElement);
        chatboxMessages.scrollTop = chatboxMessages.scrollHeight;
        e.target.reset();
    }
});

//side-bar menu
document.addEventListener("DOMContentLoaded", function () {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none'; // Force-hide on first load
});
function showSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}
function hideSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}
