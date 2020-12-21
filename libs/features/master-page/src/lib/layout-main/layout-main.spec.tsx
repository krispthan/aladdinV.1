import React from 'react';
import { render } from '@testing-library/react';

import LayoutMain from './layout-main';

describe('LayoutMain', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LayoutMain />);
    expect(baseElement).toBeTruthy();
  });
});
