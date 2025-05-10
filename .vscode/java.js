
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.createElement('button');
    menuToggle.classList.add('menu-toggle');
    menuToggle.innerHTML = '☰';
    document.querySelector('.navbar').appendChild(menuToggle);

    menuToggle.addEventListener('click', () => {
        const navlink = document.querySelector('.navlink');
        navlink.classList.toggle('active');
        menuToggle.classList.toggle('hidden');
    });
});