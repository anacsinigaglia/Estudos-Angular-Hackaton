const meuCabecalho = document.querySelector('h1');
meuCabecalho.textContent = 'Não quer entrar para tomar uma xícara de café?';

function changeImg(){
    if(document.getElementById("imgXicara").src == 'xicara.jpg') {
        document.getElementById("imgXicara").src = 'xicara.jpg';
    } else {
        document.getElementById("imgXicara").src = 'xicaracafe.jpg';
    }
}
