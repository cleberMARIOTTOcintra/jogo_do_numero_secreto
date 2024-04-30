let numeroSecreto = gerarNumeroAleatorio();

let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

exibirMensagemInicial()

function verificarChute() {
    let chute = document.querySelector('input').value;
    console.log(numeroSecreto);
       
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', `ACERTOUUU ${numeroSecreto}!!!`);
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemDasTentativas = `Voce acertou o numero secreto com ${tentativas} ${palavraTentativa}!!!!`;
        exibirTextoNaTela('p', mensagemDasTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', `Você errou, o número secreto é MENOR que ${chute}`);
        } else {
            exibirTextoNaTela('p',`Você errou, o número secreto é MAIOR que ${chute}`);
        }
        tentativas++; 
        limparcampo();     
    }
}

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
}

function limparcampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(params) {
    numeroSecreto = gerarNumeroAleatorio();
    limparcampo();
    tentativas = 1;
    exibirMensagemInicial()
    document.getElementById('reiniciar').setAttribute('disabled' , true);
}

