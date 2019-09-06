GET: $(document).ready(
    function() {
      // GET REQUEST
      $("#call").click(function(event) {
        event.preventDefault();
        ajaxGet();
      });

      // DO GET
      function ajaxGet() {
        $.ajax({
          url : "http://localhost:8080/secure/home",
          success : function(result) {
                $("#cors").hide();
                $("#response").html(result);
                },
          error: function(XMLHttpRequest, textStatus, errorThrown) {
                alert("Error: " + errorThrown);
                $("#cors").show();
                }
        });
      }
})