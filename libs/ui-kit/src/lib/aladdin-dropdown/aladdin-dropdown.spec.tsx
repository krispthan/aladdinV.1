import React from 'react';
import { render } from '@testing-library/react';

import AladdinDropdown from './aladdin-dropdown';

describe('AladdinDropdown', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AladdinDropdown />);
    expect(baseElement).toBeTruthy();
  });
});
