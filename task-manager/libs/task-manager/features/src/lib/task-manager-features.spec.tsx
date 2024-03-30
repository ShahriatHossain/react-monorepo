import { render } from '@testing-library/react';

import TaskManagerFeatures from './task-manager-features';

describe('TaskManagerFeatures', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TaskManagerFeatures />);
    expect(baseElement).toBeTruthy();
  });
});
