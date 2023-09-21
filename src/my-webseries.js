import { LitElement, html, css } from 'lit';
import '../demo/web-series-form.js';
import '../demo/web-series-card.js';
// import '../demo/test-component.js';
// import '../demo/my-component.js';
// // import '../demo/my-component.js';

// const logo = new URL('../assets/open-wc-logo.svg', import.meta.url).href;

class MyWebseries extends LitElement {
  static properties = {
    header: { type: String },
    cards: { type: Array },
  };

  static styles = css``;

  constructor() {
    super();
    this.header = 'My app';
    // this.cards = [];
  }

  // connectedCallback() {
  //   super.connectedCallback();

  //   // Use document.querySelector to select elements
  //   this.formElement = document.querySelector('web-series-form');
  //   this.cardElement = document.querySelector('web-series-card');
  // }

  render() {
    return html`
      <!-- <web-series-form></web-series-form>
      <web-series-card .cards=""></web-series-card> -->
    `;
  }
}

customElements.define('my-webseries', MyWebseries);
