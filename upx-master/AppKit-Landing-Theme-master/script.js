function somaPontos() {
    var btnCarro =document.getElementById('carro');
    var btnmoto =document.getElementById('moto');
    var btnonibus =document.getElementById('onibus');


    btnCarro.onclick = function promptCarro() {
        var kmCarro = prompt("Digite aqui a quantidade de km!")
        if (kmCarro == 0) {
            alert('Opa! Digite um valor válido!')
        }
        else {
            const calculoCarro = kmCarro * 5 * 375 / 75
            document.getElementById('pontos').textContent = calculoCarro
        }
    }

    btnmoto.onclick = function promptMoto() {
        var kmMoto = prompt("Digite aqui a quantidade de km!")
        if (kmMoto == 0) {
            alert('Opa! Digite um valor válido!')
        }
        else {
            const calculoMoto = kmMoto * 5 * 300 / 75
            document.getElementById('pontos').textContent = calculoMoto
        }
    }

    btnonibus.onclick = function promptOnibus() {
        var kmOnibus = prompt("Digite aqui a quantidade de km!")
        if (kmOnibus == 0) {
            alert('Opa! Digite um valor válido!')
        }
        else {
            const calculoOnibus = kmOnibus * 5
            document.getElementById('pontos').textContent = calculoOnibus
        }
    }

}