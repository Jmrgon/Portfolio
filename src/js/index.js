document.querySelectorAll('.recuadro').forEach(recuadro => {
    recuadro.addEventListener('click', () => {
        window.location.href = 'https://github.com/Jmrgon';
    });
});

document.getElementById('boton-redes').addEventListener('click', () => {
    window.location.href = 'redes-sociales.html';
});

const toggleBtn = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('header ul');

toggleBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});


const proyectos = [
    {
        nombre: "Isekai World",
        descripcion: "Juego estilo isekai con mundos y personajes interactivos.",
        tecnologiaPrincipal: "HTML/CSS/JavaScript",
        enlace: "https://github.com/Jmrgon"
    },
    {
        nombre: "Portfolio",
        descripcion: "Sitio web personal para mostrar proyectos y habilidades.",
        tecnologiaPrincipal: "HTML/CSS/JavaScript",
        enlace: "https://github.com/Jmrgon"
    },
    {
        nombre: "Coming soon~",
        descripcion: "Proyecto en desarrollo, detalles próximamente.",
        tecnologiaPrincipal: "Por definir",
        enlace: "https://github.com/Jmrgon"
    }
];

console.log(proyectos);