import React from 'react';
import { render } from '@testing-library/react';

import DataAccessAuthentication from './data-access-authentication';

describe('DataAccessAuthentication', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DataAccessAuthentication />);
    expect(baseElement).toBeTruthy();
  });
});
