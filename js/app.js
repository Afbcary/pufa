import { MDCTabBar } from '@material/tab-bar';
import { MDCTopAppBar } from '@material/top-app-bar';

const tabBar = new MDCTabBar(document.querySelector('.mdc-tab-bar'));
tabBar.activateTab(0);
document
  .querySelector('.mdc-tab-bar')
  .addEventListener('MDCTabBar:activated', event => {
    showTab(event.detail.index);
  });

// Instantiation
const topAppBarElement = document.querySelector('.mdc-top-app-bar');
const topAppBar = new MDCTopAppBar(topAppBarElement);

// document.querySelector('.mdc-top-app-bar__title').innerHTML = 'Respiratory Discstress';

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
