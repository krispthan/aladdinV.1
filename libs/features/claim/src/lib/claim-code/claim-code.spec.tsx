import React from 'react';
import { render } from '@testing-library/react';

import ClaimCode from './claim-code';

describe('ClaimCode', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ClaimCode />);
    expect(baseElement).toBeTruthy();
  });
});
