var altura = 0 
var largura = 0
var vidas = 1
var tempo = 10

var criaMosquitoTempo = 1500

var nivel = window.location.search
nivel = nivel.replace('?', '')

if(nivel === 'Normal') {
  criaMosquitoTempo = 1500
}
else if (nivel === 'Hard') {
  criaMosquitoTempo = 1000
}
else if (nivel === 'TazkyLoko') {
  criaMosquitoTempo = 750
}
  


function ajustaTamanho() {
 altura =  window.innerHeight
  largura =  window.innerWidth
  console.log(altura, largura) 

}
 ajustaTamanho()

 var cronometro = setInterval(function() {
  tempo -= 1
  if (tempo < 0) {
    clearInterval(cronometro)
    clearInterval(criaMosca)
    window.location.href = 'vitoria.html'
  } else { 
  document.getElementById('cronometro').innerHTML = tempo
  
 }},1000)

 function posicaoRandomica() {
  if (document.getElementById('itazky')) {
  document.getElementById('itazky').remove() 
  
  if (vidas > 3 ) { 
    window.location.href = 'fim_do_game.html'

  } else {
    document.getElementById('v' +vidas).src="imagens/coracao_vazio.png"
  vidas++
  }
}

 var posicaoX = Math.floor(Math.random() * largura) - 90
 var posicaoY = Math.floor(Math.random() * altura) - 90

 posicaoX = posicaoX < 0 ? 0 : posicaoX
 posicaoY = posicaoY < 0 ? 0 : posicaoY

 console.log(posicaoX, posicaoY)


 var tazkyIcon = document.createElement('img')
  tazkyIcon.src = 'imagens/tazkyicon.png'
  tazkyIcon.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
  tazkyIcon.style.left = posicaoX + 'px'
  tazkyIcon.style.top = posicaoY + 'px'
  tazkyIcon.style.position = 'absolute'
  tazkyIcon.id = 'itazky'
  tazkyIcon.onclick = function (){
    this.remove() 

  }

 document.body.appendChild(tazkyIcon)




 
 
}

function tamanhoAleatorio() {
  var classe = Math.floor(Math.random() * 3)
  console.log(classe)

  switch (classe) {
    case 0:
      return 'tazky1'

    case 1:
      return 'tazky2'

    case 2:
      return 'tazky3'

  }
}

function ladoAleatorio() {
  var classe = Math.floor(Math.random() * 2)
  switch (classe) {
    case 0:
      return 'ladoA'

    case 1:
      return 'ladoB'

  
  }

}