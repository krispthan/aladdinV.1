import React from 'react';
import { render } from '@testing-library/react';

import DomainModels from './domain-models';

describe('DomainModels', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DomainModels />);
    expect(baseElement).toBeTruthy();
  });
});
