function calcularIMC() {
    var idade = parseInt(document.getElementById("idade").value);
    var sexo = document.getElementById("sexo").value;
    var peso = parseFloat(document.getElementById("peso").value);
    var altura = parseFloat(document.getElementById("altura").value);

    if (!isNaN(idade) && idade >= 10 && !isNaN(peso) && !isNaN(altura) && altura > 0) {
        var imc = peso / (altura * altura);
        document.getElementById("resultado").textContent = imc.toFixed(2);

        var classificacao = "";

        if (imc < 18.5) {
            classificacao = "Baixo peso";
        } else if (imc >= 18.5 && imc <= 24.9) {
            classificacao = "Peso normal";
        } else if (imc >= 25 && imc <= 29.9) {
            classificacao = "Sobrepeso";
        } else if (imc >= 30 && imc <= 34.9) {
            classificacao = "Obesidade grau I";
        } else if (imc >= 35 && imc <= 39.9) {
            classificacao = "Obesidade grau II";
        } else {
            classificacao = "Obesidade grau III";
        }

        document.getElementById("classificacao").textContent = classificacao;
    } else {
        document.getElementById("resultado").textContent = "Por favor, insira valores válidos.";
        document.getElementById("classificacao").textContent = "";
    }
}