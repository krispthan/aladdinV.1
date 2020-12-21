import React from 'react';
import { render } from '@testing-library/react';

import FeaturesProjects from './features-projects';

describe('FeaturesProjects', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FeaturesProjects />);
    expect(baseElement).toBeTruthy();
  });
});
