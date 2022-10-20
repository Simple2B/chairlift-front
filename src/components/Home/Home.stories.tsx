import { ComponentStory, ComponentMeta } from '@storybook/react';
import Home from './Home';
import { Provider } from 'react-redux';
import { store } from '../../store/index';

export default {
  title: 'Page/Home',
  component: Home,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <Provider store={store}>
        <Story />
      </Provider>
    ),
  ],
} as ComponentMeta<typeof Home>;

const Template: ComponentStory<typeof Home> = (args) => <Home {...args} />;

export const HomePage = Template.bind({});
HomePage.args = {};
