function verificar(){
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano');
    var resultado = document.getElementById('resultado');
    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!');
    } else {
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(fano.value);
        var genero = '';
        var img = document.createElement('img');
        img.setAttribute('id', 'foto');
        if(fsex[0].checked) {
            genero = 'Homem';
            if (idade >=0 && idade < 15) {
                // criança
                img.setAttribute('src','imagem/criançaMenino.png');
            } else if (idade >= 15 && idade < 25) {
                // jovem
                img.setAttribute('src','imagem/jovemHomem.png');
            } else if (idade >= 25 && idade < 59) {
                // adulto
                img.setAttribute('src','imagem/Homem.png');
            } else {
                // idoso
                img.setAttribute('src','imagem/idoso.png');
            }
        }else if (fsex[1].checked) {
            genero = 'Mulher';
            if (idade >=0 && idade < 15) {
                // criança
                img.setAttribute('src','imagem/criançaMenina.png');
            } else if (idade >= 15 && idade < 25) {
                // jovem
                img.setAttribute('src','imagem/jovemMulher.png');
            } else if (idade >= 25 && idade < 59) {
                // adulto
                img.setAttribute('src','imagem/Mulher.png');
            } else {
                // idoso
                img.setAttribute('src','imagem/idosa.png');
            }
        }

        resultado.style.textAlign = 'center';
        resultado.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
        resultado.appendChild(img);
    }
}