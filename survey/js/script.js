//Business logic


//User inferface logic
$(document).ready(function() {
  $("#survey").submit(function(event){
    event.preventDefault();
    var name = $("#name").val();
    var food = $("#food").val();
    var music = $("input:radio[name=genre]:checked").val();
    var birthDate = $("#born").val();
    var color = $("#color").val();

    $("body").css("background", color);
    alert("You're not only one");
  });
});
