import "./components/site-header.js"
import "./components/hero-section.js"
import "./components/books-section.js"
import "./components/site-footer.js"
import "./components/sobre-section.js"
import "./components/contato-section.js"

import "./services/api.js"

window.addEventListener("DOMContentLoaded", () => {

    const secoes = document.querySelectorAll("section[id]");
    const links = document.querySelectorAll("nav a");

    function atualizarMenuAtivo() {

        const posicaoAtual = window.scrollY + 150;
        let secaoAtual = secoes[0];

        secoes.forEach((secao) => {

            if (secao.offsetTop <= posicaoAtual) {
                secaoAtual = secao;
            }

        });

        links.forEach((link) => {

            link.classList.toggle(
                "ativo",
                link.dataset.section === secaoAtual.id
            );

        });

    }

    window.addEventListener("scroll", atualizarMenuAtivo);

    atualizarMenuAtivo();

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

