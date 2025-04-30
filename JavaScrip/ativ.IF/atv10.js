function generateList() {
    let start = parseInt(prompt("Digite o valor inicial:"));
    let end = parseInt(prompt("Digite o valor final:"));
    let list = [];

    for (let i = start; i <= end; i += 100) {
        list.push(i);
    }

    alert("A lista gerada é: " + list.join(", "));
}

generateList();

function movieGenres() {
    let genres = ("Ação", "Comédia", "Drama", "Fantasia", "Terror", "Romance", "Ficção Científica", "Suspense", "Documentário", "Animação");
    let userGenre = prompt("Digite um gênero de filme:");

    if (genres.includes(userGenre)) {
        alert("O gênero " + userGenre + " está na lista.");
    } else {
        alert("O gênero " + userGenre + " não está na lista.");
    }
}

movieGenres();

function generateOddList() {
    let start = parseInt(prompt("Digite o valor inicial:"));
    let end = parseInt(prompt("Digite o valor final:"));
    let list = [];

    for (let i = start; i <= end; i++) {
        if (i % 2 !== 0) {
            list.push(i);
        }
    }

    alert("A lista de valores ímpares é: " + list.join(", "));
}

generateOddList();

verificargenerateList();
verificarmovieGenres();
verificargenerateList();
