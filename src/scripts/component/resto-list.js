class RestoList extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <h1>
      <span class="title-content">Explore Restaurant</span>
    </h1>
      <div class="row" id="resto-list"></div>
        `;
  }
}

customElements.define('resto-list', RestoList);
