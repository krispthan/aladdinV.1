import React from 'react';
import { render } from '@testing-library/react';

import AladdinList from './aladdin-list';

describe('AladdinList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AladdinList />);
    expect(baseElement).toBeTruthy();
  });
});
