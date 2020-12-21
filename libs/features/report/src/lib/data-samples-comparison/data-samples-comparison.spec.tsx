import React from 'react';
import { render } from '@testing-library/react';

import DataSamplesComparison from './data-samples-comparison';

describe('DataSamplesComparison', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DataSamplesComparison />);
    expect(baseElement).toBeTruthy();
  });
});
