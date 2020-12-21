import React from 'react';
import { render } from '@testing-library/react';

import FeaturesRegister from './features-register';

describe('FeaturesRegister', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FeaturesRegister />);
    expect(baseElement).toBeTruthy();
  });
});
