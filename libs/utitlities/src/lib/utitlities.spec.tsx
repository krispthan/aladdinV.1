import React from 'react';
import { render } from '@testing-library/react';

import Utitlities from './utitlities';

describe('Utitlities', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Utitlities />);
    expect(baseElement).toBeTruthy();
  });
});
