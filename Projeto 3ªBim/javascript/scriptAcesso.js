const userRole = sessionStorage.getItem("role");
const tarifaInput = document.getElementById("tarifa");

if (userRole === "adm") {
    tarifaInput.disabled = false;
}
if (tarifaInput) {
    const tarifaSalva = localStorage.getItem("tarifa");

    if (userRole === "adm") {
        tarifaInput.addEventListener("input", function() {
            localStorage.setItem("tarifa", tarifaInput.value);
        });
        
    } else {
        tarifaInput.disabled = true;
        
        if (tarifaSalva) {
            tarifaInput.value = tarifaSalva;
        }
    }
}
document.getElementById("formulario").addEventListener("submit", function(event) { 
    event.preventDefault();

    const carro = document.getElementById("carro").value;
    const placa = document.getElementById("placa").value;
    const horario_de_chegada = parseFloat(document.getElementById("horario_de_chegada").value);
    const horario_de_saida = parseFloat(document.getElementById("horario_de_saida").value);
    const tarifa = parseFloat(document.getElementById("tarifa").value);

    if (horario_de_chegada >= horario_de_saida) {
        alert("Digite o horário de chegada correto!!");
        return;
    }

    let resultado = horario_de_saida - horario_de_chegada;
    let valor_a_pagar = tarifa;

    if (resultado >= 2) {
        valor_a_pagar += (tarifa / 2) * (resultado - 1);
    }

    const table = document.getElementById("tabela").getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

    const celula_carro = newRow.insertCell(0);
    const celula_placa = newRow.insertCell(1);
    const celula_horario_de_chegada = newRow.insertCell(2);
    const celula_horario_de_saida = newRow.insertCell(3);
    const celula_valor_a_pagar = newRow.insertCell(4);

    celula_carro.textContent = carro;
    celula_placa.textContent = placa;
    celula_horario_de_chegada.textContent = horario_de_chegada.toFixed(2);
    celula_horario_de_saida.textContent = horario_de_saida.toFixed(2);
    celula_valor_a_pagar.textContent = valor_a_pagar.toFixed(2);
});