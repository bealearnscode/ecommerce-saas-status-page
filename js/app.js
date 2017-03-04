$(document).ready(function() {
            $.getJSON("./js/history.json", function(data) {
                    $.each(data.services, function(key, value) {
                      $("<div><h2>"
                      + value.name
                      + "</h2><p>Status: "
                      + value.status
                      + "</p><p>Message: "
                      + value.message
                      + "</p></div>").appendTo("#services");
                        console.log(key);
                    });

                    drawBar();
                      function drawBar() {
                        var ctx = document.getElementById("myChart30").getContext("2d");
                        var myChart30 = new Chart(ctx, {
                            type: "bar",
                            data: {
                              labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7", "Day 8", "Day 9", "Day 10", "Day 11", "Day 12", "Day 13", "Day 14", "Day 15", "Day 16", "Day 17", "Day 18", "Day 19", "Day 20", "Day 21", "Day 22", "Day 23", "Day 24", "Day 25", "Day 26", "Day 27", "Day 28", "Day 29", "Day 30"],
                              datasets: [{
                                label: data.services[0].name,
                                data: data.services[0].values,
                                backgroundColor: "rgba(52, 152, 219,0.4)"
                              }, {
                                label: data.services[1].name,
                                data: data.services[1].values,
                                backgroundColor: "rgba(219,119,52,0.4)"
                            }]
                            }
                      })
                    };
            });
});
