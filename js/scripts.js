$(document).ready(function() {
  $("#form1").submit(function(event){
    var user1Input = $("input#user1").val();

    $(".user1").text(user1Input);
    $("#you").show();
    event.preventDefault();
  });
});
