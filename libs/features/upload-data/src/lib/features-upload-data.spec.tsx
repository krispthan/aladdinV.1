import React from 'react';
import { render } from '@testing-library/react';

import FeaturesUploadData from './features-upload-data';

describe('FeaturesUploadData', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FeaturesUploadData />);
    expect(baseElement).toBeTruthy();
  });
});
