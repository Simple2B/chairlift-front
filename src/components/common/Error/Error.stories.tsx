import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Error from './Error';

export default {
  title: 'CommonComponent/Error',
  component: Error,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Error>;

const Template: ComponentStory<typeof Error> = (args) => <Error {...args} />;

export const ErrorComponent = Template.bind({});
ErrorComponent.args = {};
