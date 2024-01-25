let listaDeNumeroSorteados = [];
let numeroLimite = 10;
let numeroSecreto = numeroAleatorio();
console.log(numeroSecreto);

let tentativas = 1;

function exibirTexto(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2})
}

function textoNovoJogo(){
    exibirTexto('h1', 'Jogo do número secreto');
    exibirTexto('p', 'Escolha entre 1 e 10:');
}

textoNovoJogo();

function verificarChute() {
    let chute = document.querySelector('input').value;
    if(chute == numeroSecreto){
        exibirTexto('h1', 'Você acertou!!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let palavraTentativas = `Você descobriu o número secreto, com ${tentativas} ${palavraTentativa}!`;
        exibirTexto('p', palavraTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto){
            exibirTexto('h1', 'O número é menor');
            exibirTexto('p', 'Tente novamente:');
        } else {
            exibirTexto('h1', 'O número é maior');
            exibirTexto('p', 'Tente novamente:')
        }

        tentativas++

        limparCampo();
    }
}

function numeroAleatorio(){
   let numeroEscolhido = parseInt(Math.random() *numeroLimite + 1);
   let quantidadeDeElementosNaLista = listaDeNumeroSorteados.length;
   if (quantidadeDeElementosNaLista == numeroLimite){
    listaDeNumeroSorteados = []
   }

   if (listaDeNumeroSorteados.includes(numeroEscolhido)){
    return numeroAleatorio();   
   } else {
    listaDeNumeroSorteados.push(numeroEscolhido);
    console.log(listaDeNumeroSorteados);
    return numeroEscolhido;
   }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = numeroAleatorio();
    limparCampo();
    tentativas = 1;
    textoNovoJogo();
    document.getElementById('reiniciar').setAttribute('disabled', true);

}
