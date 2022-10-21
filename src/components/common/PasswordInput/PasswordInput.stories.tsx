import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import PasswordInput from './PasswordInput';

export default {
  title: 'CommonComponent/PasswordInput',
  component: PasswordInput,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof PasswordInput>;

const Template: ComponentStory<typeof PasswordInput> = (args) => <PasswordInput {...args} />;

export const LoaderComponent = Template.bind({});
LoaderComponent.args = {};
