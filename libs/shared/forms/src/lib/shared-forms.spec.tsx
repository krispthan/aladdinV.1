import React from 'react';
import { render } from '@testing-library/react';

import SharedForms from './shared-forms';

describe('SharedForms', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SharedForms />);
    expect(baseElement).toBeTruthy();
  });
});
