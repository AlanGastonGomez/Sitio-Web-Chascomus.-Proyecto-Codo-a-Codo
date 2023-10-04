// script.js

//document.addEventListener("DOMContentLoaded", function () {
    //const menuToggle = document.querySelector(".menu-toggle");
   // const navMenu = document.querySelector(".nav-menu");

   // menuToggle.addEventListener("click", function () {
   //     navMenu.classList.toggle("active");
   // });
//});

const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');
const header = document.querySelector('header');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active'); // Agregamos o quitamos la clase 'active' de la barra de navegación
    header.classList.toggle('active'); // Agregamos o quitamos la clase 'active' del header
});

