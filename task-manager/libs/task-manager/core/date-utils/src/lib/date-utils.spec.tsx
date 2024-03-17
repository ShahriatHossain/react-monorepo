import { render } from '@testing-library/react';

import DateUtils from './date-utils';

describe('DateUtils', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DateUtils />);
    expect(baseElement).toBeTruthy();
  });
});
