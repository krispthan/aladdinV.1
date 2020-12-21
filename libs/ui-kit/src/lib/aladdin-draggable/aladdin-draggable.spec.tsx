import React from 'react';
import { render } from '@testing-library/react';

import AladdinDraggable from './aladdin-draggable';

describe('AladdinDraggable', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AladdinDraggable />);
    expect(baseElement).toBeTruthy();
  });
});
