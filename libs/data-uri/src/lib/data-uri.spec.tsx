import React from 'react';
import { render } from '@testing-library/react';

import DataUri from './data-uri';

describe('DataUri', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DataUri />);
    expect(baseElement).toBeTruthy();
  });
});
