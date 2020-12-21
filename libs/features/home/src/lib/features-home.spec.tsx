import React from 'react';
import { render } from '@testing-library/react';

import FeaturesHome from './features-home';

describe('FeaturesHome', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FeaturesHome />);
    expect(baseElement).toBeTruthy();
  });
});
