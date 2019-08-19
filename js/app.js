import { MDCDrawer } from '@material/drawer';
import { MDCTabBar } from '@material/tab-bar';
import { MDCTopAppBar } from '@material/top-app-bar';

// import { MDCList } from '@material/list';
// const list = MDCList.attachTo(document.querySelector('.mdc-list'));
// list.wrapFocus = true;

const drawer = MDCDrawer.attachTo(document.querySelector('.mdc-drawer'));

const topAppBar = MDCTopAppBar.attachTo(document.getElementById('app-bar'));
topAppBar.setScrollTarget(document.getElementById('players'));
topAppBar.listen('MDCTopAppBar:nav', () => {
  console.log('clicked');
  // drawer.open = !drawer.open;
});

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
