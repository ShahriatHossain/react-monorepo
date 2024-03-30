import { render } from '@testing-library/react';

import TaskDetails from './task-details';

describe('TaskDetails', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TaskDetails />);
    expect(baseElement).toBeTruthy();
  });
});
