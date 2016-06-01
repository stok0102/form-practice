$(document).ready(function() {
  $("form#name-form").submit(function(event) {
    var someInput = $("input#name").val()
    $("#nameInput").text(someInput);
    $(".para").show();
    event.preventDefault();
  });

  $("form#shout").submit(function(event) {
    var bigName = $("input#shoutName").val();
    bigName = bigName.toUpperCase();
    $("#upperName").append(bigName);
    // $("#upper").show();
    event.preventDefault();
  });
});
