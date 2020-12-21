import React from 'react';
import { render } from '@testing-library/react';

import ClaimProfile from './claim-profile';

describe('ClaimProfile', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ClaimProfile />);
    expect(baseElement).toBeTruthy();
  });
});
