//Receber os valores do formulário
const formimc = document.getElementById('formimc');
const resultadodiv = document.getElementById('resultado');

// Adicionar o evento submit ao formulário
formimc.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir o comportamento padrão do formulário

    // Obter os valores de peso e altura dentro do evento
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);

    // Verificar se os valores são válidos
    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        resultadodiv.innerHTML = `<strong>Por favor, insira valores válidos para peso e altura.</strong>`;
        return;
    }

    // Calcular o IMC
    const imc = peso / (altura * altura);

    // Determinar a categoria
    let categoria = '';
    if (imc < 18.5) {
        categoria = "Abaixo do Peso";
    } else if (imc >= 18.5 && imc < 24.99) {
        categoria = "Peso Normal";
    } else if (imc >= 25 && imc < 29.9) {
        categoria = "Sobrepeso";
    } else if (imc >= 30 && imc < 34.9) {
        categoria = "Obesidade";
    } else if (imc >= 35 && imc < 39.9) {
        categoria = "Obesidade Grau II";
    } else {
        categoria = "Obesidade Grau III";
    }

    // Exibir o resultado
    resultadodiv.innerHTML = `Seu IMC é <strong>${imc.toFixed(2)}</strong>, portanto você está na categoria: <strong>${categoria}</strong>.`;
});
