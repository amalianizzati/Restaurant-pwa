import 'regenerator-runtime';
import '../styles/main.css';
import '../styles/responsive.css';
import App from './views/app';
import swRegister from './utils/sw-register';

import './component/app-bar';
import './component/app-hero';
import './component/app-footer';

const app = new App({
  content: document.querySelector('#content'),
  menu: document.querySelector('#menu'),
  drawer: document.querySelector('#drawer'),
  main: document.querySelector('main'),
});
window.addEventListener('hashchange', () => {
  app.renderPage();
});
window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
