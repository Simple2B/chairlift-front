import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Provider } from 'react-redux';
import { store } from '../../store/index';

import SignUp from './SignUp';

export default {
  title: 'Forms/Sign Up',
  component: SignUp,
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
} as ComponentMeta<typeof SignUp>;

const Template: ComponentStory<typeof SignUp> = (args) => <SignUp {...args} />;

export const SingIn = Template.bind({});
SingIn.args = {
  user: {},
};
