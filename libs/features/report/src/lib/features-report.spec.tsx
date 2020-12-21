import React from 'react';
import { render } from '@testing-library/react';

import FeaturesReport from './features-report';

describe('FeaturesReport', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FeaturesReport />);
    expect(baseElement).toBeTruthy();
  });
});
