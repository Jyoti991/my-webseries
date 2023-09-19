import { html, css, LitElement } from 'lit';
import '@lion/ui/define/lion-tabs.js'; // Import Lion Tabs
// import '@lion/tabs/lion-tab.js'; // Import Lion Tab
import '@lion/ui/define/lion-form.js';
// import { LionTabs } from '@lion/tabs';

class TabContainer extends LitElement {
  static styles = css`
    /* Your CSS styles for the tab container */
    .series-cards {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 28px;
      border-radius: 25px;
      background-color: #b181de;
      padding: 20px;
      margin: 10px;
    }

    .card {
      display: grid;
      row-gap: 16px;
      /* align-self: baseline; */
      padding: 18px 18px 28px 18px;
      border-radius: 25px;
      background-color: #cbbadb;
      /* transition: all 0.3s; */
    }

    .card:hover {
      transform: scale(1.03);
    }

    .series-name {
      font-size: 28px;
      font-weight: 600px;
      text-align: center;
      color: #8a2be2;
    }

    .series-dir {
      font-weight: 500px;
    }

    .series-details {
      list-style: none;
      display: grid;
      grid-template-columns: 2fr 1fr;
    }

    .close-icon {
      height: 28px;
      width: 28px;
      color: #8a2be2;
      cursor: pointer;
    }

    .rating-icon {
      height: 16px;
      width: 16px;
      color: #8a2be2;
      cursor: pointer;
    }

    .platform {
      color: #8a2be2;
      font-size: 10px;
      letter-spacing: 1.2px;
      font-weight: 600px;
      margin-top: 2px;
    }
  `;

  static properties = {
    cards: { type: Array },
  };

  constructor() {
    super();
    // Initialize the cards property here or fetch data as needed
    this.cards = [];
  }

  render() {
    return html`
      <lion-tabs>
        <lion-tab>
          <span slot="label">Web Series</span>
          <web-series-card .cards=${this.cards}></web-series-card>
        </lion-tab>
        <!-- Add more tabs as needed -->
      </lion-tabs>
    `;
  }
}

customElements.define('tab-container', TabContainer);
