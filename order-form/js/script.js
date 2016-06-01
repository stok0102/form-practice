$(document).ready(function(){
  $("#order-form").submit(function(event){
    event.preventDefault();
    var name = $("#name").val();
    var address = $("#address").val();
    $("#receipt-address").text(address);
    $("#receipt-name").text(name);
    $(".receipt").show();
  });
});
