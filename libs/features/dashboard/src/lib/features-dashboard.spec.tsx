import React from 'react';
import { render } from '@testing-library/react';

import FeaturesDashboard from './features-dashboard';

describe('FeaturesDashboard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FeaturesDashboard />);
    expect(baseElement).toBeTruthy();
  });
});
