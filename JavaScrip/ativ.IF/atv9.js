const registeredPlates = ["ABC1234", "XYZ5678", "DEF9012"];

function validatePlate() {
    const plate = prompt("Digite a placa do veículo:");
    if (registeredPlates.includes(plate.toUpperCase())) {
        alert("Placa cadastrada no sistema.");
    } else {
        alert("Placa não cadastrada no sistema.");
    }
}

validatePlate();