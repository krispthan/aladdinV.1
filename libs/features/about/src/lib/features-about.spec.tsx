import React from 'react';
import { render } from '@testing-library/react';

import FeaturesAbout from './features-about';

describe('FeaturesAbout', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FeaturesAbout />);
    expect(baseElement).toBeTruthy();
  });
});
