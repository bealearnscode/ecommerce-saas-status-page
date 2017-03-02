//produces xmlhttprequest error
$(document).ready(function() {
  $("button").click(function() {
      $.getJSON("./js/history.json", function(data) {
          $.each(data, function(key, value) {
              $("ul").append("<li>"+value.name+"</li>");
          });
      });
  });
});

/*function loadJSON(callback) {

    var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
    xobj.open('GET', 'history.json', true);
    xobj.onreadystatechange = function () {
          if (xobj.readyState == 4 && xobj.status == "200") {
            callback(xobj.responseText);
          }
    };
    xobj.send(null);
 }

 function init() {
  loadJSON(function(response) {
   // Parse JSON string into object
     var actual_JSON = JSON.parse(response);
  });
}*/
