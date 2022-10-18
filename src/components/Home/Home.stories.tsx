import React from 'react';
import { ComponentStory, ComponentMeta, storiesOf } from '@storybook/react';

import Home from './Home';
import { MemoryRouter } from 'react-router-dom';

export default {
  title: 'Page/Home',
  component: Home,
  // initialEntries: '/',
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Home>;

const Template: ComponentStory<typeof Home> = (args) => <Home {...args} />;

export const HomePage = Template.bind({});
HomePage.args = {};

// storiesOf('Home', module)
//   .addDecorator((story) => <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>)
//   .add('normal', () => <Home />);

// export const LoggedOut = Template.bind({});
// LoggedOut.args = {};
