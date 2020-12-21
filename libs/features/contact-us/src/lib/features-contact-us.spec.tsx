import React from 'react';
import { render } from '@testing-library/react';

import FeaturesContactUs from './features-contact-us';

describe('FeaturesContactUs', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FeaturesContactUs />);
    expect(baseElement).toBeTruthy();
  });
});
