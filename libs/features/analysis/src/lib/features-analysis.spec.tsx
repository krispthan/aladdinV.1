import React from 'react';
import { render } from '@testing-library/react';

import FeaturesAnalysis from './features-analysis';

describe('FeaturesAnalysis', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FeaturesAnalysis />);
    expect(baseElement).toBeTruthy();
  });
});
