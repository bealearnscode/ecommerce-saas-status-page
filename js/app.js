//produces xmlhttprequest error
/*$(document).ready(function() {
  $("button").click(function() {
      $.getJSON("./js/history.json", function(data) {
          $.each(data.services, function(key, value) {
              $("ul").append("<li>"+value.name+"-"+value.message+"</li>");
              console.log(key);
          });
      });
  });
});*/

$(document).ready(function() {
      $.getJSON("./js/history.json", function(data) {
          $.each(data.services, function(key, value) {
              $("div").add("<h2>").append(value.name);
              console.log(key);
          });
      });
});
