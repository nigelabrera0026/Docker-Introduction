import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Button } from './Button';

test('Button should handle click events', () => {
  const handleClick = jest.fn();

  // Render the Button with the `data-testid` prop set to "Button".
  render(<Button onClick={handleClick} data-testid="Button" />);
  // Use the `data-testid` to get the button element.
  const element = screen.getByTestId("Button");

  // Click the button
  fireEvent.click(element);

  // Expect the `handleClick` function to have been called once.
  expect(handleClick).toHaveBeenCalledTimes(1);
});