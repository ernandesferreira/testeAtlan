$(document).ready(function(){
  var numberTest = 1000000;
  var number = 0;
  var size = 0;
  var highestSequence = 1;
  var positionHighestSequence = 1;
  var i = 0;

  $("#calc").prop("disabled", false);

  $('#calc').click(function(){
    for (i=1; i <= numberTest; i++){
      number = i;
      size = 1;
      while(number!=1){
          if(number%2 == 0){
              number = number/2;
              }else{
              number = number*3 + 1;
          }
          size++;
      }
      if(size > highestSequence){
          highestSequence = size;
          positionHighestSequence = i;
      }
  }
   console.log('highestSequence: ', highestSequence );
   console.log('positionhighestSequence: ', positionHighestSequence );

   $("#calc").prop("disabled", true);

   $("#output").html("O número inteiro positivo abaixo de 1 milhão que produz a sequência com a maioria dos elementos é o número: <strong>"+positionHighestSequence+"</strong>, e o número de etapas é de <strong>"+highestSequence+"</strong> etapas.");
  });

 
 
    
  
});