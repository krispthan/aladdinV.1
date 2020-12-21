import React from 'react';
import { render } from '@testing-library/react';

import SequencerNavigation from './sequencer-navigation';

describe('SequencerNavigation', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SequencerNavigation />);
    expect(baseElement).toBeTruthy();
  });
});
