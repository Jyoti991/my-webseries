import { html } from 'lit';
import '../src/my-webseries.js';

export default {
  title: 'MyWebseries',
  component: 'my-webseries',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ header, backgroundColor }) {
  return html`
    <my-webseries
      style="--my-webseries-background-color: ${backgroundColor || 'white'}"
      .header=${header}
    >
    </my-webseries>
  `;
}

export const App = Template.bind({});
App.args = {
  header: 'My app',
};
