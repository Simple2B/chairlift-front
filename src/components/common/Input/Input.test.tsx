import React, { useState } from 'react';
import 'jest';
import Input from './Input';
import { render } from '@testing-library/react';

// eslint-disable-next-line no-undef
test('should render', () => {
  const [value, setValue] = useState('');
  render(
    <Input
      name={'name'}
      label={'name'}
      value={value}
      onChange={function (): void {
        console.log('Change input value');
      }}
      isError={false}
      helperText={''}
    />,
  );
});
