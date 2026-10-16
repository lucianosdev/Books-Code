const URL_BASE = "https://openlibrary.org/search.json";

export async function buscarLivros(termo) {
  try {
    const resposta = await fetch(
      `${URL_BASE}?q=${encodeURIComponent(termo)}&limit=6&fields=key,title,author_name,first_publish_year,cover_i`
    );

    if (!resposta.ok) {
      throw new Error("Erro ao buscar livros.");
    }

    const dados = await resposta.json();

    return dados.docs || [];
  } catch (erro) {
    console.error("Erro ao buscar livros:", erro);
    return [];
  }
} 