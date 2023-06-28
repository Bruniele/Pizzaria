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