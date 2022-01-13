$(document).ready(function() {
  $("form#dating-site").submit(function(event) {
    const age = parseInt($("input#age").val());
    const gender = $("select#gender").val();
    $("#BradPitt").hide();
    $("#TomHanks").hide();
    $("#SandraBullock").hide();
    console.log(age);
    console.log(gender);

    if (gender === 'female' && age > 21 && age <= 30) {
      $("#BradPitt").show();
     } else if (gender === 'female' && age > 31) {
       $("#TomHanks").show();
     } else {
       $("#SandraBullock").show();
     }

    event.preventDefault();
  });
});