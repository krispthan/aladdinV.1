import React from 'react';
import { render } from '@testing-library/react';

import Guards from './guards';

describe('Guards', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Guards />);
    expect(baseElement).toBeTruthy();
  });
});
