let num = document.querySelector('input#fnum');
let lista = document.querySelector('select#flista');
let res = document.querySelector('div#res');
let valores = [];

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true;
    } else {
        return false;
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) !== -1) {
        return true;
    } else {
        return false;
    }
}

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value));
        let item = document.createElement('option');
        item.text = `O valor ${num.value} foi adicionado`;
        lista.appendChild(item)
        res.innerHTML = '';
    } else {
        window.alert('Valor inválido ou já se encontra na lista.');
    }
    num.value = '';
    num.focus()
}

function finalizar() {
    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar.')
    } else {
        let totalElementos = valores.length;
        let maiorValor = valores[0]
        let menorValor = valores[0]
        let soma = 0
        let media = 0
        for (let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maiorValor)
                maiorValor = valores[pos]
            if (valores[pos] < menorValor)
                menorValor = valores[pos]
        }
        media += soma / totalElementos
        res.innerHTML = '';
        res.innerHTML += `<p>Ao todo, temos ${totalElementos} números cadatrados.</p>`;
        res.innerHTML += `<p>O maior valor cadastrado foi ${maiorValor}.</p>`;
        res.innerHTML += `<p>O menor valor cadastrado foi ${menorValor}.</p>`;
        res.innerHTML += `<p>A soma de todos os valores cadastrados é ${soma}.</p>`;
        res.innerHTML += `<p>A média dos valores cadastrados é ${media.toFixed(2)}.</p>`;

    }

}
