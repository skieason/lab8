$(document).ready(function(){
    $("#serialize").click(function(){
        var myobj = {Name:$("#Name").val(),Comment:$("#Comment").val()};
        jobj = JSON.stringify(myobj);
        $("#json").text(jobj);
      	var url = "comment";
      	$.ajax({
        		url:url,
        		type: "POST",
        		data: jobj,
        		contentType: "application/json; charset=utf-8",
        		success: function(data,textStatus) {
            			$("#done").html(textStatus);
        		}
      	})
    });

    $("#getThem").click(function() {
      $.getJSON('comment', function(data) {
        console.log(data);
        var everything = "<br><br><div>Start: There will be no mention of cars in the comments.. all entries with the word 'car' will be manipulated..</div><ul>";
        for(var comment in data) {
          com = data[comment];

          var name = com.Name.toLowerCase().replace("car","cat");
          var comment = com.Comment.toLowerCase().replace("car","cat");

          everything += "<li>" + name + " - \"" + comment + "\"</li>";
        }
        everything += "</ul><div>End</div>";
        $("#comments").html(everything);
        $("#title").html("Current Comments:")
      })
    });
});
