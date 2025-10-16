const toggleBtn = document.querySelector('.menu-toggle');
const hamburgerBtn = document.getElementById('hamburger-btn');
const navMenu = document.getElementById('nav-menu');


document.querySelectorAll('.recuadro').forEach(recuadro => {
    recuadro.addEventListener('click', () => {
        window.location.href = 'https://github.com/Jmrgon';
    });
});

document.getElementById('boton-redes').addEventListener('click', () => {
    window.location.href = 'redes-sociales.html';
});

hamburgerBtn.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});
navMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
  });
});


const proyectoss = [
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