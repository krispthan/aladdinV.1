import React from 'react';
import { render } from '@testing-library/react';

import { AladdinButton } from './aladdin-button';

describe('Button', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AladdinButton btnType="" />);
    expect(baseElement).toBeTruthy();
  });
});
