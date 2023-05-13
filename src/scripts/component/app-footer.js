class AppFooter extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <p>&copy;Copyright 2023 - FindFood-Apps</p>`;
  }
}

customElements.define('app-footer', AppFooter);
