import React from 'react';
import { render } from '@testing-library/react';

import ProjectProfile from './project-profile';

describe('ProjectProfile', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ProjectProfile />);
    expect(baseElement).toBeTruthy();
  });
});
