import React from 'react';
import { render } from '@testing-library/react';

import AladdinModal from './aladdin-modal';

describe('AladdinModal', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AladdinModal />);
    expect(baseElement).toBeTruthy();
  });
});
