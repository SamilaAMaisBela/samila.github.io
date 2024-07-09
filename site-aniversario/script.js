$(document).ready(function() {
    // Array com as imagens do slideshow
    var imagens = $('#slideshow-container img');
    var index = 0;
    
    // Função para alternar as imagens do slideshow
    function alternarSlide() {
      // Esconde todas as imagens
      imagens.hide();
      // Mostra a imagem atual
      imagens.eq(index).fadeIn(1000);
      // Atualiza o índice para a próxima imagem
      index = (index + 1) % imagens.length;
      // Chama a função novamente após um intervalo de tempo
      setTimeout(alternarSlide, 3000); // Altera a cada 3 segundos (3000 milissegundos)
    }
    
    // Inicia o slideshow
    alternarSlide();
  
    // Dados da aniversariante

    dados = JSON.parse(localStorage.getItem("formData"));
   
  
    // Exibição dos dados
    $('#nome').text(dados.nome);
    $('#idade').text('Idade: ' + dados.idade);
    $('#mensagem').text('Mensagem: ' + dados.mensagem);
  });
  