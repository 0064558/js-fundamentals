function dizerBomDia(nome) {
    console.log("Bom dia " + nome + "!");
}

console.log("Set Timeout")
setTimeout(() => {
    dizerBomDia("Rodrigo");
    setTimeout(() => {
        dizerBomDia("Jo");
        setTimeout(() => {
            dizerBomDia("Ana");
        }, 2000);
    }, 2000);
}, 2000);