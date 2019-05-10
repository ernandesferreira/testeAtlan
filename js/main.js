$(document).ready(function(){
  var value = $('#input')
  $('#submit').click(function(){    
    var n = value.val();
    var c = 0;
    while (n > 1) {
      n = n % 2 ? 3 * n + 1 : n / 2;
      c++;
    }
    $("#output").text(c);
  });  
});