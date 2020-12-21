import React from 'react';
import { render } from '@testing-library/react';

import FeaturesClaim from './features-claim';

describe('FeaturesClaim', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FeaturesClaim />);
    expect(baseElement).toBeTruthy();
  });
});
