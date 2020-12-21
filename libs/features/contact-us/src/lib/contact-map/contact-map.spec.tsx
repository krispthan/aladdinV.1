import React from 'react';
import { render } from '@testing-library/react';

import ContactMap from './contact-map';

describe('ContactMap', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ContactMap />);
    expect(baseElement).toBeTruthy();
  });
});
