$(document).ready(function(){
  $("form").submit(function(event) {
    event.preventDefault();
    var name = $("#name").val();
    var date = $("#date").val();
    var timeStart = $("#time-start").val();
    var timeEnd = $("#time-end").val();

    $("#receipt-name").text(name);
    $("#receipt-date").text(date);
    $("#receipt-time-start").text(timeStart);
    $("#receipt-time-end").text(timeEnd);

    $("#receipt").show();
  });
});
