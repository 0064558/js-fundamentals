let productValue = Number(prompt("Digite um valor: "));

if (productValue >= 20) {
    document.getElementById("result").textContent = "Aprovado";
} else {
    document.getElementById("result").textContent = "Reprovado";
}