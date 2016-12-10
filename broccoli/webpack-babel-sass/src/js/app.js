import data from './data.js';

let elem = document.createElement('p');
elem.innerHTML = data.build;
document.body.appendChild(elem);
