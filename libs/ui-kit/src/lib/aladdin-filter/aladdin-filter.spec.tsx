import React from 'react';
import { render } from '@testing-library/react';

import AladdinFilter from './aladdin-filter';

describe('AladdinFilter', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AladdinFilter />);
    expect(baseElement).toBeTruthy();
  });
});
