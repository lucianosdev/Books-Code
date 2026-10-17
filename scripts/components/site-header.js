class SiteHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header class="cabecalho">
                <div class="logo">
                    📚 Books & Code
                </div>

                <button class="menu-toggle"
                        aria-label="Abrir menu"
                        aria-expanded="false"
                        aria-controls="menu-navegacao">
                    ☰
                </button>

                <nav id="menu-navegacao" class="menu-navegacao">
                    <a href="#inicio" data-section="inicio">Início</a>
                    <a href="#livros" data-section="livros">Livros</a>
                    <a href="#sobre" data-section="sobre">Sobre</a>
                    <a href="#contato" data-section="contato">Contato</a>
                </nav>
            </header>
        `;

        const botaoMenu = this.querySelector('.menu-toggle');
        const menu = this.querySelector('.menu-navegacao');

        botaoMenu.addEventListener('click', () => {
            const menuAberto = menu.classList.toggle('menu-aberto');

            botaoMenu.setAttribute('aria-expanded', menuAberto);
            botaoMenu.setAttribute(
                'aria-label',
                menuAberto ? 'Fechar menu' : 'Abrir menu'
            );

            botaoMenu.textContent = menuAberto ? '✕' : '☰';
        });

        menu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                menu.classList.remove('menu-aberto');

                botaoMenu.setAttribute('aria-expanded', 'false');
                botaoMenu.setAttribute('aria-label', 'Abrir menu');
                botaoMenu.textContent = '☰';
            });
        });
    }
}

customElements.define('site-header', SiteHeader)
