import React from 'react';
import { render } from '@testing-library/react';

import AladdinMultipleselectors from './aladdin-multipleselectors';

describe('AladdinMultipleselectors', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AladdinMultipleselectors />);
    expect(baseElement).toBeTruthy();
  });
});
