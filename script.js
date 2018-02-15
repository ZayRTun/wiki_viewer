$(document).ready(function() {

  $("#sBtn").on("click", function() {
    var uInput = $("#userInput").val();
    var api = "https://en.wikipedia.org/w/api.php?action=opensearch&search=?"+uInput+"&format=json&callback=?";
    //var url = api + uInput;
    
    $.getJSON(api, function(data) {
      var dLen = data[1].length;
      //console.log(dLen);
      //console.log(data[2][0]);
      //console.log(data[3][0]);
      $("#result").html("");
      for(var i = 0; i < dLen; i++) {
        $("#result").append("<div><h3><a href="+data[3][i]+" target='blank'>"+data[1][i]+"<a/></h3><p>"+data[2][i]+"</p></div>");
      }
      
    });
    
    
    /*
    $.ajax({
      type: "GET",
      url: api,
      async: false,
      dataType: "json",
      success: function(data) {
        console.log(api);
      }
      
    });
    */
    
    
  });
  
  
  
  
});