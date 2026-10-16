import { buscarLivros } from "../services/api.js";
import { mostrarToast } from "../main.js";

class BooksSection extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <section id="livros" class="books">

            <h2>Livros em Destaque</h2>

            <div class="busca">

              <label for="pesquisa"> Buscar livros </label>
              <div class="conteiner-busca">
                <input type="text" id="pesquisa" placeholder="Digite o título ou assunto...">
                <button class="btn-pesquisar">Buscar</button> 
              </div>
            </div>

            <div class="books-grid"></div>

        </section>
        `;

    this.carregarLivros();
    this.configurarPesquisa();
  }


async carregarLivros(termo = "JavaScript") {
  const grid = this.querySelector(".books-grid");

  // Exibe o carregamento enquanto aguarda a API
  grid.innerHTML = "<p>📚 Carregando livros...</p>";

  const livros = await buscarLivros(termo);

  if (livros.length === 0) {
    grid.innerHTML = "<p>📚 Nenhum livro encontrado.</p>";
    mostrarToast("📚 Nenhum livro encontrado.");
    return;
  }

  let cards = "";

  livros.forEach((livro) => {
    const titulo = livro.title ?? "Título indisponível";
    const autores = livro.author_name?.join(", ") ?? "Autor desconhecido";
    const ano = livro.first_publish_year ?? "Ano desconhecido";

    const capa = livro.cover_i
      ? `https://covers.openlibrary.org/b/id/${livro.cover_i}-M.jpg`
      : "https://placehold.co/180x260?text=Sem+Capa";

    const link = livro.key
      ? `https://openlibrary.org${livro.key}`
      : "https://openlibrary.org";

    cards += `
      <article class="book-card">

        <img
          src="${capa}"
          alt="Capa do livro ${titulo}"
          loading="lazy"
        >

        <div class="book-info">

          <h3>${titulo}</h3>

          <p class="autor">
            ${autores}
          </p>

          <p class="descricao">
            Ano de publicação: ${ano}
          </p>

          <a
            href="${link}"
            target="_blank"
            rel="noopener noreferrer"
            class="btn-book"
          >
            Ver detalhes do livro →
          </a>

        </div>

      </article>
    `;
  });

  grid.innerHTML = cards;
}

  configurarPesquisa() {
    const input = this.querySelector("#pesquisa");

    const botao = this.querySelector(".btn-pesquisar");

    botao.addEventListener("click", () => {
      const termo = input.value.trim();

      if (!termo) {
        mostrarToast("⚠️ Digite o nome de um livro para pesquisar.");

        return;
      }

      this.carregarLivros(termo);

      input.value = "";
    });

    input.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        const termo = input.value.trim();

        if (!termo) return;

        this.carregarLivros(termo);

        input.value = "";
      }
    });
  }
}

customElements.define("books-section", BooksSection);
