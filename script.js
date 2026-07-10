// Função do Quiz Agrinho 2026

function verificarResposta(opcao) {

    const resultado = document.getElementById("resultado");

    if (opcao === "b") {
        resultado.innerHTML =
        "✅ Parabéns! A irrigação por gotejamento é uma das formas mais eficientes de economizar água na agricultura.";
        resultado.style.color = "green";
    } else {
        resultado.innerHTML =
        "❌ Resposta incorreta. A melhor alternativa é utilizar a irrigação por gotejamento, pois reduz o desperdício e utiliza a água de forma mais eficiente.";
        resultado.style.color = "red";
    }

}
