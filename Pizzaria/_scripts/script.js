var quantidade = $('div#testemunhos ul').length;
let limite = Math.floor((quantidade * 336) * -1);
let largura = limite + 336;
let view_largura = $('section#testemunha div#testemunha-centro').width();

$('div#testemunhos').css('width',limite*-1);

$('div#testemunha-direita').click( function() {

  posicao_atual = $('div#testemunhos').position().left;
  nova_posicao = posicao_atual - view_largura;

  if ( limite < posicao_atual - view_largura ) {

    $('div#testemunhos').animate({left:nova_posicao},1000);
    
  }

  if ( limite > ( nova_posicao - view_largura )) {
    $('div#testemunha-direita ion-icon').css('opacity',0.5);
    $('div#testemunha-direita ion-icon').css('cursor','not-allowed');
    
  }

  $('div#testemunha-esquerda ion-icon').css('opacity', 1);
  $('div#testemunha-esquerda ion-icon').css('cursor','pointer');
})

$('div#testemunha-esquerda').click( function() {
  posicao_atual = $('div#testemunhos').position().left;

  if ( posicao_atual + view_largura <= 0 ) {
    nova_posicao = posicao_atual + view_largura;
    $('div#testemunhos').animate({left:nova_posicao},1000);

  }

  if ( nova_posicao < 1 && nova_posicao > -1 ) {
    $('div#testemunha-esquerda ion-icon').css('opacity',0.5);
    $('div#testemunha-esquerda ion-icon').css('cursor','not-allowed');        
  }

  $('div#testemunha-direita ion-icon').css('opacity',1);
  $('div#testemunha-direita ion-icon').css('cursor','pointer');

})

// códigos de clique para assinar

$('div.planos-bottom').click(function() {
  alert("clicou")
})

// códigos para links das redes sociais

$('ion-icon#facebook').click(function() {
  window.open("http://www.facebook.com","_blank");
})

$('ion-icon#instagram').click(function() {
  window.open("http://www.instagram.com","_blank");
})

$('ion-icon#twitter').click(function() {
  window.open("http://www.twitter.com","_blank");
})

$('ion-icon#youtube').click(function() {
  window.open("http://www.youtube.com","_blank");
})

$('ion-icon#linkedin').click(function() {
  window.open("http://www.linkedin.com","_blank");
})

/* Códigos de Animação */

$('section#domingo-perfeito').waypoint( function(direcao) {
  if (direcao == "down") {
    $('div.folha1').addClass('animate__animated animate__fadeInUp');
    $('div.folha3').addClass('animate__animated animate__fadeInUp');
    $('div.camarao').addClass('animate__animated animate__fadeInUp animate__slow');
    $('div.tomate').addClass('animate__animated animate__fadeInUp animate__slow');
    $('div.folha2').addClass('animate__animated animate__fadeInUp animate__slower');
    $('div.queijo').addClass('animate__animated animate__fadeInUp animate__slower');
  }

  if (direcao == "up") {
    $('div.folha1').removeClass('animate__animated animate__fadeInUp');
    $('div.folha3').removeClass('animate__animated animate__fadeInUp');
    $('div.camarao').removeClass('animate__animated animate__fadeInUp animate__slow');
    $('div.tomate').removeClass('animate__animated animate__fadeInUp animate__slow');
    $('div.folha2').removeClass('animate__animated animate__fadeInUp animate__slower');
    $('div.queijo').removeClass('animate__animated animate__fadeInUp animate__slower'); 
  }
},{
    offset: '450px;'
})

$('section#pizza').waypoint( function(direcao) {
  if (direcao == 'down') {
    $('section#pizza p').addClass('animate__animated animate__fadeInUp');
    $('section#pizza div.pizza-opcoes').addClass('animate__animated animate__fadeInUp animate__slow');
  }

  if (direcao == 'up') {
    $('section#pizza p').removeClass('animate__animated animate__fadeInUp');
    $('section#pizza div.pizza-opcoes').removeClass('animate__animated animate__fadeInUp animate__slow');
  }
},{
  offset: '450px;'
})