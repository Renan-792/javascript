function verificar() {
 var data = new Date ()
 var ano = data.getFullYear()
 var fano = document.getElementById('txtano')
 var res = document.querySelector('div#res')
 if (fano.value.lenght == 0 || Number(fano.value) > ano ) {
    window.alert ('Ops, verifique seus dados e tente novamente!')
 } else { 
      var fsex = document.getElementsByName ('radsex')
      var idade = ano - Number(fano.value)
      var gênero = ''
      var img = document.createElement('img')
      img.setAttribute('id', 'foto')
if (fsex[0].checked) {
gênero = 'Homem'
      if (idade >= 0 && idade <10) {
                  //Criança
      img.setAttribute('src','bebe-menino.jpg')
        } else if (idade < 21) {
          //Jovem 
          img.setAttribute ('src', 'jovem-rapaz.jpg')
        }
        else if(idade < 60) {
          //Adulto
        img.setAttribute ('src', 'foto-adulto.jpg')
        }
        else{
          //idoso
          img.setAttribute ('src', 'fotoidoso.jpg')
        }
} else if (fsex[1].checked) {
gênero = 'Mulher'
      if (idade >= 0 && idade <10) {
        //Criança
        img.setAttribute ('src', 'bebe-menina.jpg')
    } else if (idade < 21) {
      //Jovem 
      img.setAttribute ('src', 'jovem-menina.jpg')
    }
    else if(idade < 60) {
      //Adulto
      img.setAttribute ('src', 'foto-adulta.jpg')
    }
    else{
      //idoso
      img.setAttribute ('src', 'fotoidosa.jpg')
    }
      }
      res.style.textAlingn = 'center'
      res.innerHTML = `${gênero} com Idade de ${idade} anos`
      res.appendChild(img)
    }
  }