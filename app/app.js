// background image (body)


// météo (weather)
const meteoBloc = document.getElementById("weather");
meteoBloc.textContent = "Météo du jour";

// lieu (location)
const siteBloc = document.getElementById("location");
siteBloc.textContent = "Localisation";

// Horloge
// Pour recharger la page (trouver autre chose)
// setTimeout(() => 
//   location.reload(), 1000
// );
const datetime = new Date();
// Horaire
const heureBloc = document.getElementById("time");
let thisHour = datetime.getHours();
let thisMinutes = datetime.getMinutes();
heureBloc.textContent = thisHour + ":" + thisMinutes;

// Jour
const jourBloc = document.getElementById("day");
const dayOfWeek = ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"];
const monthOfYear = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"];
let thisDay = datetime.getDay();
let thisDate = datetime.getDate();
let thisMonth = datetime.getMonth();
jourBloc.textContent = dayOfWeek[thisDay] + " " + thisDate + " " + monthOfYear[thisMonth];

// recherche (search)
const rechercheBloc = document.getElementById("search");

// citation (quote)
const citationBloc = document.getElementById("quote");
citationBloc.textContent = "citation";
