class AppHero extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="hero">
        <img src="./images/heros/hero-image_2.jpg" alt="gambar makanan" />
        <div class="hero-inner">
          <h1 class="hero-title">FindFood-Apps</h1>
          <p class="hero-subtitle">
            Find the best restaurants only on the FindFood-Apps.
          </p>
        </div>
      </div>`;
  }
}

customElements.define('app-hero', AppHero);
