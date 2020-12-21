import React from 'react';
import { render } from '@testing-library/react';

import AladdinSearchbar from './aladdin-searchbar';

describe('AladdinSearchbar', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AladdinSearchbar />);
    expect(baseElement).toBeTruthy();
  });
});
