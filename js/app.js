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
            var ctx = document.getElementById("myChart");
            var myChart = new Chart(ctx, {
              type: 'bar',
              data: {
                labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
                datasets: [{
                  label: '# of Votes',
                  //no difference in using data:data vs data: value.values
                  data: data,
                  backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                  ],
                  borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                  ],
                  borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});
            /*var ctx = document.getElementById("myChart").getContext("2d");
            var chartInstance = new Chart(ctx, {
              type: 'bar',
              data: value.values,
            });*/
          });
      });
});
