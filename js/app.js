$(document).ready(function() {
      $.getJSON("./js/history.json", function(data) {
          /*$.each(data.services, function(key, value) {
            $("<div><h2>"
            + value.name
            + "</h2><p>Status: "
            + value.status
            + "</p><p>Message: "
            + value.message
            + "</p></div>").appendTo("body");
              console.log(key);
          });*/
          $.each(data.services, function(key, value){
            var ctx = document.getElementById("myChart").getContext("2d");
            var chartInstance = new Chart(ctx, {
              type: 'bar',
              data: data,
            });
          });
      });
});
