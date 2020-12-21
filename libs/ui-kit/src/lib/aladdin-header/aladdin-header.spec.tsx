import React from 'react';
import { render } from '@testing-library/react';

import AladdinHeader from './aladdin-header';

describe('AladdinHeader', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AladdinHeader />);
    expect(baseElement).toBeTruthy();
  });
});
