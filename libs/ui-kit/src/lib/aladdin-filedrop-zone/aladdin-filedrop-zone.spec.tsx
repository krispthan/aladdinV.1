import React from 'react';
import { render } from '@testing-library/react';

import AladdinFiledropZone from './aladdin-filedrop-zone';

describe('AladdinFiledropZone', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AladdinFiledropZone />);
    expect(baseElement).toBeTruthy();
  });
});
