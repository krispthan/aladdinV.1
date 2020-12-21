import React from 'react';
import { render } from '@testing-library/react';

import AladdinCheckbox from './aladdin-checkbox';

describe('AladdinCheckbox', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AladdinCheckbox />);
    expect(baseElement).toBeTruthy();
  });
});
