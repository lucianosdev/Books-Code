class HeroSection extends HTMLElement {
    connectedCallback() {
        this.innerHTML =

    `
    <section id="inicio" class="hero">
    
    <p class="slogan">

         Encontre livros sobre HTML, CSS,
         JavaScript, React e muito mais!
     </p>

     <div class="acesso-books">
       
        <a href="#livros" class="btn-hero">📚 Explorar Livros</a>
        <a href="#sobre" class="btn-hero">ℹ️ Saiba Mais</a>
        
     </div>


    </section>
     `
    ;
    }
}

customElements.define('hero-section', HeroSection)
