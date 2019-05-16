/* global $ */

console.log('hi');

$('h1').click(function(){
    $('h1').css('color', 'green');
    $('h1').text('Ready to Code');
});
 $('#searchButton').click(function() {
        var searchTerm = $("#searchTerm").val();
        var Url = "https://openweathermap.org/api"
function getWeather (){
  $.ajax({
          url: giphyUrl,
          method: "GET",
          success: function(response) {



}


