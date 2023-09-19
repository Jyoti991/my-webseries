import { html, css, LitElement } from 'lit';
import '@lion/ui/define/lion-tabs.js';

class WebSeriesCard extends LitElement {
  static get properties() {
    return {
      cards: { type: Array },
    };
  }

  constructor() {
    super();

    this.attachShadow({ mode: 'open' });
    this.cards = [
      {
        title: 'Gilmore Girls',
        directors: 'Amy Sherman-Palladino',
        stars: '8.2',
        platform: 'Netflix',
      },
      {
        title: 'Demon Slayer',
        directors: 'Haruo Sotozaki',
        stars: '8.7',
        platform: 'Netflix',
      },
      {
        title: 'Squid Game',
        directors: 'Hwang Dong-hyuk',
        stars: '8.0',
        platform: 'Netflix',
      },
      {
        title: 'FRIENDS',
        directors: 'David Crane & Marta Kauffman',
        stars: '8.9',
        platform: 'Netflix',
      },
      {
        title: 'Doraemon',
        directors: 'Mitsuo Kaminashi',
        stars: '8.3',
        platform: 'Hotstar',
      },
      {
        title: 'Farzi',
        directors: 'Raj & DK',
        stars: '8.4',
        platform: 'Prime-Video',
      },
    ];
  }

  static get styles() {
    return css`
      /* ... (your CSS styles) */
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
      .btn {
        width: 45%;
        height: 60px;
        font-size: 32px;
        font-weight: 600px;
        letter-spacing: 1px;
        text-transform: uppercase;
        text-align: center;
        border: none;
        color: #f0f8ff;
        background-color: #8a2be2;
        border-radius: 25px;
        cursor: pointer;
        margin: 32px 0 0 18px;
      }
    `;
  }

  connectedCallback() {
    super.connectedCallback();
    console.log(this, this.formElement);
    // Use document.querySelector to select elements
    this.formElement = document.querySelector('web-series-form');

    console.log(
      'ConnectedCallback: Adding event listener for web-series-added'
    );
    console.log(this.formElement);
    // Add an event listener for the custom event 'web-series-added'
    this.formElement.addEventListener('web-series-added', e => {
      // Update the 'cards' property with the new series data
      this.cards = [...this.cards, e.detail];

      console.log('Web series added. Updated cards:', this.cards);
    });
  }

  render() {
    return html`
      <lion-tabs>
        <button slot="tab" class="btn">Overview</button>
        <div slot="panel">
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
        <button slot="tab" class="btn">Work</button>
        <p slot="panel">Work page that showcases our work.</p>
      </lion-tabs>
      <!-- <div class="series-cards">
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
                <ion-icon class="rating-icon" name="star-outline"></ion-icon>
              </li>
              <li class="series-dir">${i.directors}</li>
              <li class="platform">${i.platform}</li>
            </ul>
          </div>
        `
      )}
      </div> -->
    `;
  }
}

customElements.define('web-series-card', WebSeriesCard);
