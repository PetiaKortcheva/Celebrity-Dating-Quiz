
$(document).ready(function() {
  $("form#dating-site").submit(function(event) {
    const age = parseInt($("input#age").val());
    const gender = $("select#gender").val();

    event.preventDefault();
  });
});