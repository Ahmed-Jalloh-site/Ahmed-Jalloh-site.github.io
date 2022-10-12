// JavaScript Document
$( function() {
   $("map area").click( function(){

      if ($(this).attr("id") == "Salary") {
         $("#feedback").css("color","red");
         $("#feedback").html("No, the salary is not important at this time");
      }

      if ($(this).attr("id") == "Duties") {
         $("#feedback").css("color","green");
         $("#feedback").html("Yes, the job duties are etremely important!");
      }   
	   if ($(this).attr("id") == "COVID") {
         $("#feedback").css("color","red");
         $("#feedback").html("No,the COVID disclaimer is usually not the most important part at this time.");
      }

      if ($(this).attr("id") == "Probationary") {
         $("#feedback").css("color","red");
         $("#feedback").html("No, the probationary period is not important at this time.");
      }

  $("#feedback").css("backgroundColor","yellow");
$('#myModal').modal("show");
   });
}); //end main jQuery function
