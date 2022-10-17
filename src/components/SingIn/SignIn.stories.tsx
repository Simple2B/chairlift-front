import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import SignIn from './SignIn';

export default {
  title: 'Forms/SingIn',
  component: SignIn,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof SignIn>;

const Template: ComponentStory<typeof SignIn> = (args) => <SignIn {...args} />;

export const SingIn = Template.bind({});
SingIn.args = {
  user: {},
};

// export const LoggedOut = Template.bind({});
// LoggedOut.args = {};
