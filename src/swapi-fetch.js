import { randomNumberExc } from './helpers';
import mFalcon from './images/mfalcon.jpg';
import deathStar from './images/dstar2.jpg';
import starDestroyer from './images/star-destroyer.jpg';

const shipTag = document.querySelector('#shipTag');
const bgContainer = document.querySelector('.hero-image');
const shipIds = [3, 9, 10];
const randomShipId = shipIds[randomNumberExc(shipIds.length)];

fetch(`https://swapi.co/api/starships/${randomShipId}/`)
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    shipTag.innerHTML = myJson.name;
    if (randomShipId === 10)
      bgContainer.style.backgroundImage = `url('${mFalcon}')`;
    else if (randomShipId === 9)
      bgContainer.style.backgroundImage = `url('${deathStar}')`;
    else if (randomShipId === 3)
      bgContainer.style.backgroundImage = `url('${starDestroyer}')`;
    console.log(myJson);
  });
