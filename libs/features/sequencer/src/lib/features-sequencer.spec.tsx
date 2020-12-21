import React from 'react';
import { render } from '@testing-library/react';

import FeaturesSequencer from './features-sequencer';

describe('FeaturesSequencer', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FeaturesSequencer />);
    expect(baseElement).toBeTruthy();
  });
});
