import React from 'react';
import { render } from '@testing-library/react';

import AladdinCard from './aladdin-card';

describe('Card', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AladdinCard />);
    expect(baseElement).toBeTruthy();
  });
});
