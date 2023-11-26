//////////////////////
/* BACKGROUND-IMAGE */
//////////////////////
var x = document.querySelector("body");
x.style.backgroundImage = "url(\"/style/media/" + Math.floor((Math.random()*4)+1)+".jpg\")";

/////////////
/* WEATHER */
/////////////
var key = "ca1b8e3c00b84d03a9e203520230711";
var uri = "http://api.weatherapi.com/v1/current.json";

navigator.geolocation.getCurrentPosition((position) => {
  var urlApi = uri + "?key=" + key + "&q=" + position.coords.latitude + "," + position.coords.longitude;

  $.getJSON(urlApi, function(data) {

    // City
    let cityName = data.location.name;
    $('#location')
    .append(cityName);

    // Degrees (celcius)
    let degrees = data.current.temp_c;
    $('#degrees')
    .append(degrees + " °C");

    // Weather Icon
    let wheatherIcon = data.current.condition.icon;
    $('<img/>')
    .attr('src', "https:" + wheatherIcon)
    .appendTo('#picture');
  });
});

//////////
/* TIME */
//////////
$(document).ready(function() {
  const newDate = new Date();
  const dayOfWeek = ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"];
  const monthOfYear = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"];
  const dayDiv = document.getElementById("day");

  // Date
  newDate.setDate(newDate.getDate());
  $(dayDiv).html(
    dayOfWeek[newDate.getDay()] + " " + newDate.getDate() + ' ' + monthOfYear[newDate.getMonth()] + ' ' + newDate.getFullYear()
  );

  // Time
  const timeDiv = document.getElementById("time");
  $(timeDiv).html()
  
  setInterval( function() {
    //   var seconds = new Date().getSeconds();
    //   $("#seconds").html(( seconds < 10 ? "0" : "" ) + seconds);
    var minutes = new Date().getMinutes();
    $("#minutes").html(( minutes < 10 ? "0" : "" ) + minutes);
    var hours = new Date().getHours();
    $("#hours").html(( hours < 10 ? "0" : "" ) + hours);
  },1000);

});

////////////
/* SEARCH */
////////////
const rechercheBloc = document.getElementById("search");

////////////
/* QUOTES */
////////////
const citationBloc = document.getElementById("quote");
citationBloc.textContent = "citation";
