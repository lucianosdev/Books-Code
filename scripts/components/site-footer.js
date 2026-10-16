class SiteFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML =


`<footer class="rodape">
     <p>&copy; 2026 Books & Code - Desenvolvido por Luciano Brasil.</p>
</footer>`
    ;
    }
    
}

customElements.define('site-footer', SiteFooter)
