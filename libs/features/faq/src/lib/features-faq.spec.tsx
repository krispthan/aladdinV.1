import React from 'react';
import { render } from '@testing-library/react';

import FeaturesFaq from './features-faq';

describe('FeaturesFaq', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FeaturesFaq />);
    expect(baseElement).toBeTruthy();
  });
});
