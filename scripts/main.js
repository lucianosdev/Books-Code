import "./components/site-header.js"
import "./components/hero-section.js"
import "./components/books-section.js"
import "./components/site-footer.js"
import "./components/sobre-section.js"
import "./components/contato-section.js"

import "./services/api.js"

window.addEventListener("DOMContentLoaded", () => {

    const secoes = document.querySelectorAll("section");
    const links = document.querySelectorAll("nav a");

    const observer = new IntersectionObserver((entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                links.forEach((link) => {
                    link.classList.remove("ativo");

                    if (link.dataset.section === entry.target.id) {
                        link.classList.add("ativo");
                    }
                });

            }

        });

    }, {
        threshold: 0.30
    });

    secoes.forEach((secao) => observer.observe(secao));

});


const formulario = document.querySelector(".form-contato");
const toast = document.getElementById("toast");

formulario.addEventListener("submit", (event) => {

    event.preventDefault();

    toast.classList.add("mostrar");

    setTimeout(() => {

        toast.classList.remove("mostrar");

    }, 3000);

    formulario.reset();

});

export function mostrarToast(mensagem) {

    const toast = document.getElementById("toast");

    toast.textContent = mensagem;

    toast.classList.add("mostrar");

    setTimeout(() => {

        toast.classList.remove("mostrar");

    }, 3000);

}