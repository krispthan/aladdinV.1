import React from 'react';
import { render } from '@testing-library/react';

import Featureslogin from './features-login';

describe('Featureslogin', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Featureslogin />);
    expect(baseElement).toBeTruthy();
  });
});
