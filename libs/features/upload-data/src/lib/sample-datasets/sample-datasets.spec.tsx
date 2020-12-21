import React from 'react';
import { render } from '@testing-library/react';

import SampleDatasets from './sample-datasets';

describe('SampleDatasets', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SampleDatasets />);
    expect(baseElement).toBeTruthy();
  });
});
