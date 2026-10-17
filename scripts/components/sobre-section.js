class SobreSection extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <section id="sobre" class="sobre">
    <h2>Saiba Mais</h2>


    <div class="conteiner-info">
     <div class="info">
       <p>
           Books & Code é uma plataforma que ajuda estudantes e desenvolvedores a encontrarem 
           livros sobre tecnologias como HTML, CSS, JavaScript, React, Spring Boot e muito mais.  
           
        </p> 
     </div>
    </div>
    </section>
     `;
  }
}

customElements.define("sobre-section", SobreSection);
