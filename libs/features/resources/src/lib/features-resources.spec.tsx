import React from 'react';
import { render } from '@testing-library/react';

import FeaturesResources from './features-resources';

describe('FeaturesResources', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FeaturesResources />);
    expect(baseElement).toBeTruthy();
  });
});
