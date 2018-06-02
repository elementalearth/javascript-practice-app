import view from "./view";
view.render();

const shipTag = document.querySelector("#shipTag");
const shipModel = document.querySelector("#shipModel");
const shipSpeed = document.querySelector("#shipSpeed");
const shipCrew = document.querySelector("#shipCrew");
const shipPassengers = document.querySelector("#shipPassengers");
const shipPilots = document.querySelector("#shipPilots");
const knownPilots = document.querySelector("#knownPilots");
const pilots = {};

fetch("https://swapi.co/api/starships/10/")
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    myJson.pilots.forEach(function(pilot) {
      fetch(pilot)
        .then(function(pilotRes) {
          return pilotRes.json();
        })
        .then(function(pilotJson) {
          console.log(pilotJson);
          console.log(pilotJson.name);
          //pilotJson.name.forEach(function(){
            var li = document.createElement('li');
            li.innerHTML = pilotJson.name;
            knownPilots.appendChild(li);
        //  });
        });
    });
    shipTag.innerHTML = myJson.name;
    shipModel.innerHTML = myJson.model;
    shipSpeed.innerHTML = myJson.max_atmosphering_speed;
    shipCrew.innerHTML = myJson.crew;
    shipPassengers.innerHTML = myJson.passengers;
  //shipPilots.innerHTML = myJson.pilots;
  //pilots.innerHTML = myJson.name;
  });
