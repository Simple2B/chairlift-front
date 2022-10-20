import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Provider } from 'react-redux';
import { store } from '../../../store/index';

import CreatePassword from './CreatePassword';

export default {
  title: 'Forms/CreatePassword',
  component: CreatePassword,
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
} as ComponentMeta<typeof CreatePassword>;

const Template: ComponentStory<typeof CreatePassword> = (args) => <CreatePassword {...args} />;

export const CreatePasswordComponent = Template.bind({});
CreatePasswordComponent.args = {
  classes: { error: '' },
};
