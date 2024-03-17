import { render } from '@testing-library/react';

import EditTask from './edit-task';

describe('EditTask', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<EditTask />);
    expect(baseElement).toBeTruthy();
  });
});
