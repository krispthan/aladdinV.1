import React from 'react';
import { render } from '@testing-library/react';

import AladdinToaster from './aladdin-toaster';

describe('AladdinToaster', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AladdinToaster />);
    expect(baseElement).toBeTruthy();
  });
});
