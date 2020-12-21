import React from 'react';
import { render } from '@testing-library/react';

import SharedModals from './shared-modals';

describe('SharedModals', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SharedModals />);
    expect(baseElement).toBeTruthy();
  });
});
