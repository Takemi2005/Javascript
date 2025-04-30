const elevador = document.querySelector('.elevador');
const andar = document.querySelectorAll('.andar-botao');
const tamanho_piso = 70; // Altura de cada andar

let andar_atual = 0; 

andar.forEach(button => {
    button.addEventListener('click', () => {
        const andar_destino = parseInt(button.dataset.floor); 
        moverElevador(andar_destino);
    });
});

function moverElevador(andar_destino){
    const distancia = andar_destino * tamanho_piso; // Calcular a distância a mover
    elevador.style.bottom = `${distancia}px`; // Mover o elevador para o andar correto
    andar_atual = andar_destino; // Atualizar o andar atual
}
