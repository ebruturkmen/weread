const darkIcon = document.getElementById('darkmod');
const lightIcon = document.getElementById('lightmod');
const body = document.querySelector('body');

darkIcon.addEventListener('click', () => {
    darkIcon.classList.add('hidden');
    lightIcon.classList.remove('hidden');
    body.classList.add('dark');
});

lightIcon.addEventListener('click', () => {
    lightIcon.classList.add('hidden');
    darkIcon.classList.remove('hidden');
    body.classList.remove('dark');
});
