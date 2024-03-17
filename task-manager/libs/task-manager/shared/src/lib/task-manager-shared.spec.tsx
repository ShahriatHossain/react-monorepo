import { render } from '@testing-library/react';

import TaskManagerShared from './task-manager-shared';

describe('TaskManagerShared', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TaskManagerShared />);
    expect(baseElement).toBeTruthy();
  });
});
