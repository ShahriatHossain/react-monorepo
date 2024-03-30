import { render } from '@testing-library/react';

import TaskListItem from './task-list-item';

describe('TaskListItem', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TaskListItem />);
    expect(baseElement).toBeTruthy();
  });
});
