import { MDCTabBar } from '@material/tab-bar';

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
