 class SiteHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML =

`<header class="cabecalho">
    <div class="logo">
        📚 Books & Code
    </div>


    <nav>
        <a href="#inicio" data-section="inicio">Início</a>
        <a href="#livros" data-section="livros">Livros</a>
        <a href="#sobre" data-section="sobre">Sobre</a>
        <a href="#contato" data-section="contato">Contato</a>
    </nav>
</header>`
    ;
    }
    
}

customElements.define('site-header', SiteHeader)
