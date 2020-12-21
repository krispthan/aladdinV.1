import React from 'react';
import { render } from '@testing-library/react';

import FeaturesMasterPage from './features-master-page';

describe('FeaturesMasterPage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FeaturesMasterPage />);
    expect(baseElement).toBeTruthy();
  });
});
