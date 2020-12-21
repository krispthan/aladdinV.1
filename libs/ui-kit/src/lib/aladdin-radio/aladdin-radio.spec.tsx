import React from 'react';
import { render } from '@testing-library/react';

import AladdinRadio from './aladdin-radio';

describe('AladdinRadio', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AladdinRadio />);
    expect(baseElement).toBeTruthy();
  });
});
