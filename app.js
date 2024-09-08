function pesquisar() {
        // Obtém a seção HTML onde os resultados serão exibidos
        let section = document.getElementById("resultados-pesquisa");
    
        let campoPesquisa = document.getElementById("campo-pesquisa").value
    
        // se campoPesquisa for uma string sem nada
        if (!campoPesquisa) {
            section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar o nome de um atleta ou esporte</p>"
            return 
        }
    
        campoPesquisa = campoPesquisa.toLowerCase()
    
        // Inicializa uma string vazia para armazenar os resultados
        let resultados = "";
        let Titulo = ""; 
        let Descricao = "";
        let tags = "";
    
        // Itera sobre cada dado da lista de dados
        for (let dado of dados) {
            titulo = dado.Titulo.toLowerCase()
            descricao = dado.Descricao.toLowerCase()
            tags = dado.tags.toLowerCase()
            // se titulo includes campoPesquisa
            if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
                // cria um novo elemento
                resultados += `
                <div class="item-resultado">
                    <h2>
                        <a href="#" target="_blank">${dado.Titulo}</a>
                    </h2>
                    <p class="descricao-meta">${dado.Descricao}</p>
                    <a href=${dado.link} target="_blank">Mais informações</a>
                </div>
            `;
            }
        }
    
        if (!resultados) {
            resultados = "<p>Nada foi encontrado</p>"
        }
    
        // Atribui os resultados gerados à seção HTML
        section.innerHTML = resultados;
    }