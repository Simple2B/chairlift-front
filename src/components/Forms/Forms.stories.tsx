import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Provider } from 'react-redux';
import { store } from '../../store/index';

import Forms from './Forms';

export default {
  title: 'Forms',
  component: Forms,
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
} as ComponentMeta<typeof Forms>;

const Template: ComponentStory<typeof Forms> = (args) => <Forms {...args} />;

export const SingIn = Template.bind({});
SingIn.args = {
  user: {},
};
