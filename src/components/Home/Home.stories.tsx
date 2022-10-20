import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Home from './Home';
import { Provider } from 'react-redux';
import { store } from '../../store/index';

export default {
  title: 'Page/Home',
  component: Home,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
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
