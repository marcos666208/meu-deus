function novaIdade() {
    let nome = document.getElementById('nome').value;
    let idade = document.getElementById('idade').value;

    if (idade == '') {
        idade = 0;
    }
    
    let idadeFutura = parseInt(idade) + 40;
   
    return document.getElementById('idadeFutura').value = idadeFutura;
}
function bidade() {
    let nome = document.getElementById('nome').value;
    let idade = document.getElementById('idade').value;

    if (idade == '') {
        idade = 0;
    }
    
    let idadeAnterior = parseInt(idade) - 7;
   
    return document.getElementById('idadePassada').value = idadeAnterior;
}

function carregaJovem() {
    let url = 'images/principal.png';    
    let img = new Image(350,330);
    img.src = url;    

    return document.getElementById('novo').appendChild(img);
}

function carregaIdoso() {
    let url = 'images/velho.png';    
    let img = new Image(350,330);
    img.src = url;    

    return document.getElementById('idoso').appendChild(img);
}

function carregaBebe(){
    let url ='images/novo.png';
    let img = new Image(350,330)
    img.src = url;

    return document.getElementById('bebe').appendChild(img);
}

