import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Provider } from 'react-redux';
import { store } from '../../store/index';

import Profile from './Profile';

export default {
  title: 'page/Profile',
  component: Profile,
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
} as ComponentMeta<typeof Profile>;

const Template: ComponentStory<typeof Profile> = (args) => <Profile {...args} />;

export const ProfileComponent = Template.bind({});
ProfileComponent.args = {};

// export const LoggedOut = Template.bind({});
// LoggedOut.args = {};
