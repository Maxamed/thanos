var App = (function () {

  
  var jsonCall = function( req ) { $.when( $.ajax( req ) ).done(doView); };

  var doView = function(jsonObj){
        console.log(jsonObj);

        var template = Handlebars.templates.postlist(jsonObj);
        $('#postList').html(template);

console.log(template)


  }
 
  return {

    getData: function( bar ) {
  
  
      jsonCall(bar);
 
    }
  };
 
})();

App.getData("http://thanos.pandora.dev/app/endpoints.php/posts");
 
