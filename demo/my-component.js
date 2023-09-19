// import { html, LitElement } from 'lit';
// import { ScopedElementsMixin } from '@open-wc/scoped-elements';
// import { LionAccordion } from '@lion/ui/accordion.js';
// import '@lion/ui/define/lion-form.js';
// import '@lion/ui/define/lion-input.js';
// import '@lion/ui/define/lion-button.js';
// import '@lion/ui/define/lion-input-amount.js';
// import { loadDefaultFeedbackMessages } from '@lion/ui/validate-messages.js';
// import {
//   Required,
//   IsNumber,
//   MinLength,
//   MaxNumber,
//   IsDate,
// } from '@lion/ui/form-core.js';

// class MyComponent extends ScopedElementsMixin(LitElement) {
//   static get scopedElements() {
//     return { 'lion-accordion': LionAccordion };
//   }

//   render() {
//     loadDefaultFeedbackMessages();
//     return html`
//       <lion-form>
//         <form>
//           <lion-input-amount
//             .validators="${[new IsNumber()]}"
//             .modelValue="${'foo'}"
//             label="IsNumber"
//           ></lion-input-amount>
//           <lion-input-date
//             .validators=${[new IsDate()]}
//             .modelValue=${'foo'}
//             label="IsDate"
//           ></lion-input-date>
//           <lion-input
//             name="lastName"
//             label="Last Name"
//             .modelValue=${'Bar'}
//             .validators=${[new Required()]}
//             <!-- label="Required" -->
//           ></lion-input>
//         </form>
//       </lion-form>
//     `;
//   }
// }

// customElements.define('my-component', MyComponent);

// // export const overview = () => previewHtml`<my-component></my-component>`;

// // /^[A-Z][a-z0-9_-]{3,19}$/
