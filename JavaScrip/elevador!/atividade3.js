function calculateGrade() {
    const name = document.getElementById('studentName').value;
    const grade1 = parseFloat(document.getElementById('grade1').value);
    const grade2 = parseFloat(document.getElementById('grade2').value);
    const grade3 = parseFloat(document.getElementById('grade3').value);
    const workGrade = parseFloat(document.getElementById('workGrade').value);

    if (isNaN(grade1) || isNaN(grade2) || isNaN(grade3) || isNaN(workGrade)) {
        alert('Por favor, insira todas as notas corretamente.');
        return;
    }

    const average = (grade1 + grade2 + grade3 + workGrade) / 4;
    let message = `Aluno: ${name}\nMédia: ${average.toFixed(2)}\n`;

    if (average >= 6) {
        message += 'Resultado: Aprovado!';
    } else if (average >= 5) {
        message += 'Resultado: Recuperação.';
    } else {
        message += 'Resultado: Reprovado.';
    }

    document.getElementById('result').innerText = message;
}