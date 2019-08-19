import { MDCTabBar } from '@material/tab-bar';
import schedule from '../data/schedule.js';

const tabBar = new MDCTabBar(document.querySelector('.mdc-tab-bar'));
tabBar.activateTab(0);
document
  .querySelector('.mdc-tab-bar')
  .addEventListener('MDCTabBar:activated', event => {
    showTab(event.detail.index);
  });

function showTab(index) {
  var scheduleTable = document.querySelector('.mdc-data-table');
  var nextGame = document.getElementById('next-game');
  if (index === 0) {
    scheduleTable.style.display = 'block';
    nextGame.style.display = 'none';
  } else {
    scheduleTable.style.display = 'none';
    nextGame.style.display = 'block';
  }
}

var wrapper = document.getElementById('schedule-cards');
for (let game of schedule) {
  var card = document.createElement('card');
  for (var property in game) {
    var info = document.createElement('info');
    var key = document.createElement('key');
    key.innerText = property;
    var value = document.createElement('value');
    value.innerText = game[property];
    info.appendChild(key);
    info.appendChild(value);
    card.appendChild(info);
  }
  wrapper.appendChild(card);
}
