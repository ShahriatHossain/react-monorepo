import { render } from '@testing-library/react';

import ValidationUtils from './validation-utils';

describe('ValidationUtils', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ValidationUtils />);
    expect(baseElement).toBeTruthy();
  });
});
