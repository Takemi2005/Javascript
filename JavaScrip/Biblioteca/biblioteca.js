let biblioteca = [];

function exibirMenu(){
    return prompt(
        "Menu:\n" +
        "1 - Adicionar livro\n" +
        "2 - Buscar livro\n" +
        "3 - Listar livros\n" +
        "4 - Empréstimo do livro\n" +
        "5 - Sair\n" +
        "Ecolha uma opção:"
    );
}


function adicionarLivro() {
    let titulo = prompt("Digite o título do livro");
    let autor = prompt("Digite o autor do livro");
    let ano = prompt("Digite o ano de publicação do livro");
    biblioteca.push({titulo, autor, ano});
    alert
}

function emprestimolivro() {
    let livroemprestimo= prompt("Digite o titulo do livro que deseja emprestar");
    let autoremprestimo= prompt("Digite o nome do autor do livro a emprestar");
    let anoemprestimo= prompt("Digite o ano do livro a emprestar");

    biblioteca.push({livroemprestimo, autoremprestimo, anoemprestimo});
    alert("Emprestado  do livro realizado com sucesso");
}


exibirMenu();
adicionarLivro();
emprestimolivro();

function Listarlivros() {
    if(biblioteca.length > 0) {
        let mensagem = "Lista de livros na biblioteca:\n";
        biblioteca.forEach((livro) => {
            mensagem += 'Titulo: ${livro.titulo}, Autor: ${livro.autor}, Ano: ${livro.ano}\n';
        });
        alert(mensagem);
    } else {
        alert("A biblioteca está vazia");
    }
} 
 