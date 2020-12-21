import React from 'react';
import { render } from '@testing-library/react';

import AladdinDroppable from './aladdin-droppable';

describe('AladdinDroppable', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AladdinDroppable />);
    expect(baseElement).toBeTruthy();
  });
});
