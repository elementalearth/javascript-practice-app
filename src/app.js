import view from './view';
view.render();

const shipTag = document.querySelector('#shipTag');
const shipModel = document.querySelector('#shipModel');
const shipManufacturer = document.querySelector('#shipManufacturer');
const shipCrew = document.querySelector('#shipCrew');
const shipPassengers = document.querySelector('#shipPassengers');
const shipLength = document.querySelector('#shipLength');
const shipHyperdrive_rating = document.querySelector('#shipHyperdrive_rating');
const shipPilots = document.querySelector('#shipPilots');
console.log(shipTag);
console.log(shipModel);
fetch('https://swapi.co/api/starships/10/')
  .then(function(response) {
    return response.json();
  })
 .then(function(myJson) {
   shipTag.innerHTML = myJson.name;
   shipModel.innerHTML = myJson.model;
   shipManufacturer.innerHTML = myJson.manufacturer;
   shipCrew.innerHTML = myJson.crew;
   shipPassengers.innerHTML = myJson.passengers;
   shipLength.innerHTML = myJson.length;
   shipHyperdrive_rating.innerHTML = myJson.hyperdrive_rating;
   //shipPilots.innerHTML = myJson.pilots[0];

   fetch('https://swapi.co/api/people/13')
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      shipPilots.innerHTML = myJson.name;
      console.log(myJson);
    })
   console.log(myJson);
   console.log(myJson.pilots[0]);
   console.log(myJson.pilots.length);

   //-----ATTEMPTS TO FETCH API LINKS TO PILOTS CONTAINED IN MYJSON-----
   //shipPilots.innerHTML = myJson.pilots[0];                           <---Check to make sure API link is correct
   //shipPilots.innerHTML = fetch(myJson.pilots);                       <---Attempt to fetch the link resulted in 404 error for localhost1234:/myJson.pilots
   //shipPilots.innerHTML = for (i=0; i < myJson.pilots.length; i++) {  <---Attempt to parse through pilots
   //fetch(myJson.pilots[i])};                                          <---Attempt to fetch link from myJson @ i in for loop
   //const pilots = myJson.pilots[0];                                   <---Attempt to store API address in a const to see if fetch will work
   //fetch('myJson.pilots[0]');                                         <---It didn't
   // for (i = 0; i < myJson.pilots.length; i++) {                      <---Initial brainstorming
   //   fetch('myJson.pilots')
   //   console.log(myJson.pilots);
   // }
 });
