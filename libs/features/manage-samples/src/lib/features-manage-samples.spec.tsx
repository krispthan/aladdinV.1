import React from 'react';
import { render } from '@testing-library/react';

import FeaturesManageSamples from './features-manage-samples';

describe('FeaturesManageSamples', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FeaturesManageSamples />);
    expect(baseElement).toBeTruthy();
  });
});
