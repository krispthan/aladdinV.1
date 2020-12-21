import React from 'react';
import { render } from '@testing-library/react';

import AladdinInput from './aladdin-input';

describe('AladdinInput', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AladdinInput />);
    expect(baseElement).toBeTruthy();
  });
});
