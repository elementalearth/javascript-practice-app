import view from "./view";
view.render();

const shipTag = document.querySelector("#shipTag");
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
        });
    });

    shipTag.innerHTML = myJson.name;
  });
