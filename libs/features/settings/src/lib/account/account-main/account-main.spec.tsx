import React from 'react';
import { render } from '@testing-library/react';

import AccountMain from './account-main';

describe('AccountMain', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AccountMain />);
    expect(baseElement).toBeTruthy();
  });
});
