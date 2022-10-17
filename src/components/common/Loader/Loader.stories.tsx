import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Loader from './Loader';

export default {
  title: 'CommonComponent/Loader',
  component: Loader,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = (args) => <Loader {...args} />;

export const LoaderComponent = Template.bind({});
LoaderComponent.args = {};

// export const LoggedOut = Template.bind({});
// LoggedOut.args = {};
