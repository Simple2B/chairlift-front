import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Home from './Home';

export default {
  title: 'Page/Home',
  component: Home,
  // initialEntries: '/',
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
    // reactRouter: {
    //   routePath: '/',
    //   routeParams: { primary: 'firstparam', secondary: 'secondparam' },
    // },
  },
} as ComponentMeta<typeof Home>;

const Template: ComponentStory<typeof Home> = (args) => <Home {...args} />;

export const HomePage = Template.bind({});
HomePage.args = {};

// storiesOf('Params', module)
//   .addDecorator(StoryRouter())
//   .add('params', () => <Home />);

// storiesOf('Home', module)
//   .addDecorator((story) => <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>)
//   .add('normal', () => <Home />);

// export const LoggedOut = Template.bind({});
// LoggedOut.args = {};

// const { primary, secondary } = useParams();
// console.log('primary value: ' + primary);
// console.log('secondary value: ' + secondary);
