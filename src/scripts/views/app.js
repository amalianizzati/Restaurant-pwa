import routes from '../routes/routes';
import UrlParser from '../routes/url-parser';

class App {
  // eslint-disable-next-line object-curly-newline
  constructor({ content, menu, drawer, main }) {
    this._content = content;
    this._menu = menu;
    this._drawer = drawer;
    this._main = main;

    this._initialAppShell();
  }

  _initialAppShell() {
    this._menu.addEventListener('click', (event) => {
      this._drawer.classList.toggle('open');
      event.stopPropagation();
    });
    this._main.addEventListener('click', () => {
      this._drawer.classList.remove('open');
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    const skipLinkElem = document.querySelector('.skip-link');
    skipLinkElem.addEventListener('click', (event) => {
      event.preventDefault();
      document.querySelector('#content').focus();
    });
    this._content.innerHTML = await page.render();
    await page.afterRender();
  }
}
export default App;
