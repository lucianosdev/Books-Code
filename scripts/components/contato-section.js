class ContatoSection extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
            <section id="contato" class="contato">

                <h2>Entre em Contato</h2>

                <p>
                    Assuntos relacionados a livros e programação? Contate-nos!
                    
                </p>

                <form class="form-contato">

                    <div class="campo">
                        <label for="nome">Nome</label>
                        <input
                            type="text"
                            id="nome"
                            placeholder="Digite seu nome"
                            required
                        >
                    </div>

                    <div class="campo">
                        <label for="email">E-mail</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Digite seu e-mail"
                            required
                        >
                    </div>

                    <div class="campo">
                        <label for="mensagem">Mensagem</label>
                        <textarea
                            id="mensagem"
                            rows="5"
                            placeholder="Escreva sua mensagem..."
                            required
                        ></textarea>
                    </div>
                  
                  
                     <button type="submit" class="btn-enviar">
                        Enviar 📩 
                     </button>

                </form>

                <div id="toast" class="toast">
                 Mensagem enviada com sucesso! ✅ </br>
                    Obrigado pelo contato. 📚 
                </div>

            </section>
        `;
  }
}

customElements.define("contato-section", ContatoSection);
