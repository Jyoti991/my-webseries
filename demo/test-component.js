import { html, css, LitElement } from 'lit';
import '@lion/ui/define/lion-form.js';
import '@lion/ui/define/lion-input.js';
import '@lion/ui/define/lion-button.js';
import '@lion/ui/define/lion-button-reset.js';
import '@lion/ui/define/lion-button-submit.js';
import '@lion/ui/define/lion-input-amount.js';
// import CapitalizeFirstLetterValidator from './CapitalizeFirstLetterValidator';
// import { loadDefaultFeedbackMessages } from '@lion/ui/validate-messages.js';
// import { Required, IsNumber, MinMaxNumber } from '@lion/ui/form-core.js';
import { ajax } from '@lion/ajax';

class TestComponent extends LitElement {
  static get properties() {
    return {
      cards: { type: Array },
    };
  }

  constructor() {
    super();

    // this.attachShadow({ mode: 'open' });
    this.cards = [];
    this.fetchHandler();
  }

  fetchHandler() {
    // console.log(this.cards);
    ajax
      .fetch(`../cards.json`)
      .then(response => response.json())
      .then(result => {
        // actionLogger.log(JSON.stringify(result, null, 2));
        console.log(result);
        this.cards = [...this.cards, ...result.cards];
        // console.log(this.cards);
      });
  }

  render() {
    return html`
      <div>
        <div class="series-cards">
          ${this.cards.map(
            i => html`
              <div class="card">
                <ion-icon
                  class="close-icon"
                  id="del-icon"
                  name="close-circle-outline"
                ></ion-icon>
                <p class="series-name">${i.title.toUpperCase()}</p>
                <ul class="series-details">
                  <li class="series-rating">
                    <span>${i.stars} stars</span>
                    <ion-icon
                      class="rating-icon"
                      name="star-outline"
                    ></ion-icon>
                  </li>
                  <li class="series-dir">${i.directors}</li>
                  <li class="platform">${i.platform}</li>
                </ul>
              </div>
            `
          )}
        </div>
      </div>
    `;
  }
}

customElements.define('test-component', TestComponent);
