$(document).ready(function() {
  $.getJSON("./js/history.json", function(data) {
    for (var key in data.services) {
      if (data.services[key].name === "Dashboard availability - Last 30 days by hour") {
        var dashboardHeading= document.getElementById("dashboard-heading");
        dashboardHeading.innerHTML = data.services[key].name;
      }
      if (data.services[key].name === "API availability - Last 30 days by hour"){
        var apiHeading=document.getElementById("api-heading");
        apiHeading.innerHTML = data.services[key].name;
      }
      /*console.log(data.services[key].name);*/
      /*var dashboardHeading= document.getElementById("dashboard-heading");
      dashboardHeading.innerHTML = key.name;*/
    }

  });
});
