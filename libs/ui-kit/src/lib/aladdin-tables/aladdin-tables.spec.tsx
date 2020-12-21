import React from 'react';
import { render } from '@testing-library/react';

import AladdinTables from './aladdin-tables';

describe('AladdinTables', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AladdinTables />);
    expect(baseElement).toBeTruthy();
  });
});
