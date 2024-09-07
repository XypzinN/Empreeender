function pesquisar() {
    // Seleciona a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    let entrada = document.getElementById("entrada").value;
    
    // Verifica se a entrada está vazia
    if (entrada === "") {
        section.innerHTML = "<p>Sua busca não foi encontrada</p>";
        return;
    }
    
    entrada = entrada.toLowerCase();
    let resultados = ""; // Inicializa uma string vazia para armazenar o HTML dos resultados
    
    // Certifique-se de que a variável 'dados' esteja definida e preenchida com informações
    for (let info of dados) {
        let titulo = info.titulo.toLowerCase();
        let descricao = info.descricao.toLowerCase();
        
        // Verifica se a entrada está presente no título ou descrição
        // Certifique-se de que info.tags exista e seja um array
        if (titulo.includes(entrada) || descricao.includes(entrada) || (info.tags && info.tags.some(tag => tag.toLowerCase().includes(entrada)))) {
            // Cria o HTML para cada resultado individual
            resultados += `<div class="item-resultado">
                <h2>${info.titulo}</h2>
                <p class="descricao-meta">${info.descricao}</p>
                <a href="${info.link}" target="_blank">Mais informações</a>
            </div>`;
        }
    }
    
    // Se nenhum resultado foi encontrado, exibe uma mensagem de aviso
    if (resultados === "") {
        resultados = "<p>Nada foi encontrado. Você precisa digitar algo relacionado.</p>";
    }
    
    // Atualiza o conteúdo da seção com os resultados construídos
    section.innerHTML = resultados;
}
