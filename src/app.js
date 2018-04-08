import view from './view';
view.render();

const shipTag = document.querySelector('#shipTag');

fetch('https://swapi.co/api/starships/10/')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    shipTag.innerHTML = myJson.name;
    console.log(myJson);
  });
