// Business Logic
function galToLiter(gal){
  return gal * 3.78541;
}

function fahrToCel(fahrenheit){
  return (fahrenheit - 32) / 1.8;
}

function cupsToMl(cups){
  return cups * 236.588;
}

//Front-end logic
$(document).ready(function(){
  $("#g-l").submit(function(event){
    event.preventDefault();
    var gallons = parseInt($("#gal-liter").val());
    var liters = galToLiter(gallons);
    $("#liter").text(liters);
    $("#liter-conversion").show();
  });

  $("#f-c").submit(function(event){
    event.preventDefault();
    var fahrenheit = parseInt($("#fahr-cel").val());
    var celsius = fahrToCel(fahrenheit);
    $("#celsius").text(celsius);
    $("#celsius-conversion").show();
  });

  $("#c-ml").submit(function(event){
    event.preventDefault();
    var cups = parseInt($("#cup-ml").val());
    var milliliters = cupsToMl(cups);
    $("#milliliters").text(milliliters);
    $("#ml-conversion").show();
  });
});
