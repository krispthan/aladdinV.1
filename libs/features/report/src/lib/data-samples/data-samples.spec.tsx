import React from 'react';
import { render } from '@testing-library/react';

import DataSamples from './data-samples';

describe('DataSamples', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DataSamples />);
    expect(baseElement).toBeTruthy();
  });
});
