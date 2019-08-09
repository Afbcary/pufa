import { MDCTabBar } from '@material/tab-bar';
import { MDCTopAppBar } from '@material/top-app-bar';

const tabBar = new MDCTabBar(document.querySelector('.mdc-tab-bar'));

// Instantiation
const topAppBarElement = document.querySelector('.mdc-top-app-bar');
const topAppBar = new MDCTopAppBar(topAppBarElement);

// document.querySelector('.mdc-top-app-bar__title').innerHTML = 'Respiratory Discstress';
